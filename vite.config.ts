import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import fs from "fs";
import { z } from "zod";
import { parse } from "@babel/parser";
import traverseMod from "@babel/traverse";
const traverse = (traverseMod as any).default;
import generateMod from "@babel/generator";
const generate = (generateMod as any).default;
import * as t from "@babel/types";

// (dev only) mappingId.json Schema 정의
const MimeComponentSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string()
});

const ComponentItemSchema: z.ZodType<any> = z.lazy(() => z.object({
  id: z.string(),
  component: z.string(),
  name: z.string(),
  children: z.array(ComponentItemSchema),
  mimeComponents: z.array(MimeComponentSchema).optional()
}));

const MappingIdSchema = z.record(z.string(), z.array(ComponentItemSchema));

// (dev only) 컴포넌트 매핑 자동 주입 플러그인
function componentMappingPlugin() {
  let mappingData: any = {};
  let componentMapping: Map<string, string> = new Map();
  let mimeComponentMapping: Map<string, any[]> = new Map();

  return {
    name: 'component-mapping-plugin',
    enforce: 'pre' as const, // React 플러그인보다 먼저 실행
    configResolved() {
      try {
        const mappingPath = path.resolve(process.cwd(), 'mappingId.json');

        // 파일 존재 여부 확인
        if (!fs.existsSync(mappingPath)) {
          console.warn('⚠️ mappingId.json file not found. Component mapping disabled.');
          return;
        }

        const mappingContent = fs.readFileSync(mappingPath, 'utf-8');
        const rawData = JSON.parse(mappingContent);

        // 스키마 검증
        const validationResult = MappingIdSchema.safeParse(rawData);

        if (!validationResult.success) {
          console.warn('⚠️ mappingId.json has invalid format. Component mapping disabled.');
          console.warn('Validation errors:', validationResult.error.errors);
          return;
        }

        mappingData = validationResult.data;

        // 컴포넌트 매핑 테이블 생성
        Object.keys(mappingData).forEach(rootKey => {
          const rootDataArray = mappingData[rootKey];
          
          // 배열의 첫 번째 요소가 실제 루트 데이터
          if (Array.isArray(rootDataArray) && rootDataArray.length > 0) {
            const rootData = rootDataArray[0];
            
            // Root 컴포넌트 자체 매핑 (Root_ef0cbdb6.tsx 같은 파일용)
            componentMapping.set(rootKey, rootData.id);

            function mapComponents(item: any) {
              if (item.name) {
                componentMapping.set(item.name, item.id);
                
                // mimeComponents 매핑 추가
                if (item.mimeComponents && Array.isArray(item.mimeComponents)) {
                  mimeComponentMapping.set(item.name, item.mimeComponents);
                }
              }
              if (item.children) {
                item.children.forEach(mapComponents);
              }
            }

            mapComponents(rootData);
          }
        });

        console.log('🔗 Component mapping loaded:', componentMapping);
        console.log('🎨 Mime component mapping loaded:', mimeComponentMapping);
      } catch (error) {
        console.warn('⚠️ Error loading mappingId.json:', error);
        console.warn('Component mapping disabled.');
      }
    },

    transform(code: string, id: string) {
      // 매핑 데이터가 없으면 처리하지 않음
      if (componentMapping.size === 0) return null;

      // .tsx 파일만 처리
      if (!id.endsWith('.tsx')) return null;

      // pages 폴더의 파일만 처리
      if (!id.includes('/pages/')) return null;

      console.log(`🔍 Processing file: ${id}`);

      // AST를 사용해서 모든 분석 수행
      let componentName: string | null = null;
      let styledComponentNames = new Set<string>();
      let styledComponentDefinitions = new Map<string, any>();
      
      try {
        const ast = parse(code, {
          sourceType: 'module',
          plugins: ['jsx', 'typescript']
        });

        // 한 번의 traverse로 모든 정보 수집
        traverse(ast, {
          VariableDeclarator(path: any) {
            if (path.node.init && 
                path.node.init.type === 'TaggedTemplateExpression' &&
                path.node.init.tag.type === 'CallExpression' &&
                path.node.init.tag.callee.type === 'Identifier' &&
                path.node.init.tag.callee.name === 'styled') {
              if (path.node.id.type === 'Identifier') {
                const styledComponentName = path.node.id.name;
                styledComponentNames.add(styledComponentName);
                styledComponentDefinitions.set(styledComponentName, path.node);
                console.log(`💅 Found styled-component: ${styledComponentName}`);
              }
            }
          }
        });

        // export default 함수 찾기
        traverse(ast, {
          ExportDefaultDeclaration(path: any) {
            if (path.node.declaration.type === 'FunctionDeclaration' && path.node.declaration.id) {
              componentName = path.node.declaration.id.name;
              console.log(`🔍 Found export default declaration: ${componentName}`);
            }
          }
        });
      } catch (error) {
        console.log(`❌ Error parsing AST: ${error}`);
        return null;
      }

      if (!componentName) {
        console.log(`❌ No export default function found in file: ${id}`);
        return null;
      }

      console.log(`📦 Found component: ${componentName}`);

      // componentMapping에서 해당 컴포넌트의 ID를 찾음
      const componentId = componentMapping.get(componentName);
      
      if (!componentId) {
        console.log(`❌ No mapping found for component: ${componentName}`);
        return null;
      }
      
      console.log(`🎯 Found ID: ${componentId} for component: ${componentName}`);

      // mimeComponents 매핑 가져오기
      const mimeComponents = mimeComponentMapping.get(componentName) || [];
      console.log(`🎨 Found mime components for ${componentName}:`, mimeComponents);

      // 변환된 코드 생성
      try {
        const newAst = parse(code, {
          sourceType: 'module',
          plugins: ['jsx', 'typescript']
        });

        // JSX 요소에 data-component-id와 data-component-name 추가
        traverse(newAst, {
          JSXElement(path: any) {
            const jsxElement = path.node;
            const elementName = jsxElement.openingElement.name;
            
            if (elementName.type === 'JSXIdentifier') {
              const tagName = elementName.name;
              
              // styled-component인지 확인
              if (styledComponentNames.has(tagName)) {
                // mimeComponents에서 해당 styled-component 찾기
                const mimeComponent = mimeComponents.find(mc => mc.name === tagName);
                
                if (mimeComponent) {
                  const existingProps = jsxElement.openingElement.attributes || [];
                  
                  // data-component-id 추가
                  const hasDataComponentId = existingProps.some((attr: any) => 
                    attr.type === 'JSXAttribute' && attr.name.name === 'data-component-id'
                  );
                  
                  if (!hasDataComponentId) {
                    jsxElement.openingElement.attributes.push(
                      t.jsxAttribute(
                        t.jsxIdentifier('data-component-id'),
                        t.stringLiteral(mimeComponent.id)
                      )
                    );
                    console.log(`🚀 Added data-component-id="${mimeComponent.id}" to ${tagName}`);
                  }
                  
                  // data-component-name 추가
                  const hasDataComponentName = existingProps.some((attr: any) => 
                    attr.type === 'JSXAttribute' && attr.name.name === 'data-component-name'
                  );
                  
                  if (!hasDataComponentName) {
                    jsxElement.openingElement.attributes.push(
                      t.jsxAttribute(
                        t.jsxIdentifier('data-component-name'),
                        t.stringLiteral(mimeComponent.name)
                      )
                    );
                    console.log(`🚀 Added data-component-name="${mimeComponent.name}" to ${tagName}`);
                  }
                }
              }
            }
          }
        });

        const result = generate(newAst, { retainLines: true });
        console.log(`✅ Added data-component-id and data-component-name to styled-components in ${componentName}`);
        return result.code;
      } catch (error) {
        console.log(`❌ Error generating code: ${error}`);
        return null;
      }
    }
  };
}

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      react(),
      // dev 모드에서만 componentMappingPlugin 추가
      ...(command === 'serve' ? [componentMappingPlugin()] : [])
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: [],
    },
  };
});