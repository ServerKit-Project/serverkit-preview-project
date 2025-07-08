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
const ComponentItemSchema: z.ZodType<any> = z.lazy(() => z.object({
  id: z.string(),
  component: z.string(),
  name: z.string(),
  children: z.array(ComponentItemSchema)
}));

const MappingIdSchema = z.record(z.string(), ComponentItemSchema);

// (dev only) 컴포넌트 매핑 자동 주입 플러그인
function componentMappingPlugin() {
  let mappingData: any = {};
  let componentMapping: Map<string, string> = new Map();

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
          const rootData = mappingData[rootKey];

          // Root 컴포넌트 자체 매핑 (Root_c9566184.tsx 같은 파일용)
          componentMapping.set(rootKey, rootData.id);

          function mapComponents(item: any) {
            if (item.name) {
              componentMapping.set(item.name, item.id);
            }
            if (item.children) {
              item.children.forEach(mapComponents);
            }
          }

          mapComponents(rootData);
        });

        console.log('🔗 Component mapping loaded:', componentMapping);
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

      // export default function 이름 찾기
      const exportDefaultRegex = /export\s+default\s+function\s+(\w+)/;
      const exportMatch = code.match(exportDefaultRegex);
      const componentName = exportMatch ? exportMatch[1] : null;

      if (!componentName) {
        console.log(`❌ No export default function found in file: ${id}`);
        return null;
      }

      console.log(`📦 Found component: ${componentName}`);

      // mappingId.json에서 해당 컴포넌트의 ID를 찾음
      let componentId = '';
      
      // 전체 매핑 데이터를 순회하며 컴포넌트 이름과 일치하는 항목 찾기
      const findComponentId = (data: any): string => {
        // 현재 노드의 이름이 일치하는지 확인
        if (data.name === componentName) {
          console.log(`✨ Found matching name: ${data.name} = ${componentName}`);
          return data.id;
        }
        // children이 있는 경우 재귀적으로 검색
        if (data.children && Array.isArray(data.children)) {
          for (const child of data.children) {
            const found = findComponentId(child);
            if (found) return found;
          }
        }
        return '';
      };

      // 모든 루트 데이터에서 검색
      for (const rootData of Object.values(mappingData)) {
        componentId = findComponentId(rootData);
        if (componentId) {
          console.log(`🎯 Found ID: ${componentId} for component: ${componentName}`);
          break;
        }
      }

      if (!componentId) {
        console.log(`❌ No mapping found for component: ${componentName}`);
        return null;
      }

            // AST를 사용해서 JSX 구조를 정확히 분석
      try {
        const ast = parse(code, {
          sourceType: 'module',
          plugins: ['jsx', 'typescript']
        });

        let styledComponentNames = new Set<string>();
        let mainReturnJSX: any = null;

        // styled-components 찾기
        traverse(ast, {
          VariableDeclarator(path: any) {
            if (path.node.init && 
                path.node.init.type === 'TaggedTemplateExpression' &&
                path.node.init.tag.type === 'CallExpression' &&
                path.node.init.tag.callee.type === 'Identifier' &&
                path.node.init.tag.callee.name === 'styled') {
              if (path.node.id.type === 'Identifier') {
                styledComponentNames.add(path.node.id.name);
                console.log(`💅 Found styled-component: ${path.node.id.name}`);
              }
            }
          }
        });

        // export default function의 첫 번째 return 문 찾기
        traverse(ast, {
          ExportDefaultDeclaration(path: any) {
            console.log(`🔍 Found export default declaration:`, path.node.declaration.type);
            if (path.node.declaration.type === 'FunctionDeclaration') {
              const functionBody = path.node.declaration.body;
              if (functionBody.type === 'BlockStatement') {
                console.log(`🔍 Function body has ${functionBody.body.length} statements`);
                for (const statement of functionBody.body) {
                  console.log(`🔍 Statement type:`, statement.type);
                  if (statement.type === 'ReturnStatement' && statement.argument) {
                    console.log(`🔍 Return statement argument type:`, statement.argument.type);
                    if (statement.argument.type === 'JSXElement') {
                      mainReturnJSX = statement.argument;
                      console.log(`✅ Found main return JSX`);
                      break;
                    }
                  }
                }
              }
            }
          }
        });

        if (!mainReturnJSX) {
          console.log(`❌ No main return JSX found in component: ${componentName}`);
          return null;
        }

        const tagName = mainReturnJSX.openingElement.name.type === 'JSXIdentifier' 
          ? mainReturnJSX.openingElement.name.name 
          : null;
        
        if (!tagName) {
          console.log(`❌ Could not get tag name from JSX element`);
          return null;
        }
        console.log(`🔍 Found main return tag: ${tagName}`);

        if (!styledComponentNames.has(tagName)) {
          console.log(`⚠️ Tag ${tagName} is not a styled-component`);
          return null;
        }

        // 이미 data-component-name이 있는지 확인
        const existingProps = mainReturnJSX.openingElement.attributes || [];
        const hasDataComponentName = existingProps.some((attr: any) => 
          attr.type === 'JSXAttribute' && attr.name.name === 'data-component-name'
        );

        if (!hasDataComponentName) {
          // data-component-name 속성 추가
          mainReturnJSX.openingElement.attributes.push(
            t.jsxAttribute(
              t.jsxIdentifier('data-component-name'),
              t.stringLiteral(componentId)
            )
          );
        }

        // 변환된 코드 생성
        const result = generate(ast, { retainLines: true });
        console.log(`✅ Added data-component-name to ${componentName} (${tagName})`);
        return result.code;
      } catch (error) {
        console.log(`❌ Error parsing component: ${componentName}`, error);
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