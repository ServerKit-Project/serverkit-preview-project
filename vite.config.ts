import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import fs from "fs";
import { z } from "zod";

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

      // 이미 data-component-name이 있는 경우 제거
      let transformedCode = code.replace(/\s*data-component-name="[^"]*"/g, '');

      // styled-components 찾기
      const styledComponentRegex = /const\s+(\w+)\s*=\s*styled(?:\.\w+|\([^)]+\))(?:<[^>]*>)?`[^`]*`/g;
      const returnRegex = /return\s*\(\s*<([^>\s]+)([^>]*?)>/;
      
      // styled-components 이름 수집
      const styledComponents = new Set<string>();
      let match;
      while ((match = styledComponentRegex.exec(transformedCode)) !== null) {
        console.log(`💅 Found styled-component: ${match[1]}`);
        styledComponents.add(match[1]);
      }
      
      // return 문에서 최상위 컴포넌트 찾기
      const returnMatch = transformedCode.match(returnRegex);

      if (!returnMatch) {
        console.log(`❌ No return statement found in component: ${componentName}`);
        return null;
      }

      const tagName = returnMatch[1];
      console.log(`🔍 Found return tag: ${tagName}`);

      const existingProps = returnMatch[2];

      // 최상위 컴포넌트가 styled-component인 경우에만 처리
      if (styledComponents.has(tagName)) {
        const hasExistingProps = existingProps.trim().length > 0;
        const separator = hasExistingProps ? ' ' : ' ';

        const replacement = `return (
    <${tagName}${existingProps}${separator}data-component-name="${componentId}">`;

        transformedCode = transformedCode.replace(returnRegex, replacement);
        console.log(`✅ Added data-component-name to ${componentName} (${tagName})`);
      } else {
        console.log(`⚠️ Tag ${tagName} is not a styled-component`);
      }

      return transformedCode;
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
