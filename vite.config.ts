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

      // 파일명에서 컴포넌트 이름 추출
      const fileName = path.basename(id, '.tsx');
      const componentId = componentMapping.get(fileName);

      if (!componentId) {
        console.log(`🔍 No mapping found for: ${fileName}`);
        return null;
      }

      console.log(`🔧 Processing ${fileName} -> ${componentId}`);

      // 이미 data-component-name이 있는 경우 제거
      let transformedCode = code.replace(/\s*data-component-name="[^"]*"/g, '');

      // 기본 JSX 요소의 첫 번째 태그에 data-component-name 추가
      // return 문 다음의 첫 번째 JSX 요소를 찾아서 속성 추가
      const returnRegex = /return\s*\(\s*<([^>\s]+)([^>]*?)>/;
      const match = transformedCode.match(returnRegex);

      console.log(`🔍 Regex match for ${fileName}:`, match ? 'Found' : 'Not found');
      if (match) {
        console.log(`🔍 Match details:`, { tagName: match[1], props: match[2] });
      }

      if (match) {
        const tagName = match[1];
        const existingProps = match[2];

        // 속성이 이미 있는 경우와 없는 경우 구분
        const hasExistingProps = existingProps.trim().length > 0;
        const separator = hasExistingProps ? ' ' : ' ';

        const replacement = `return (
    <${tagName}${existingProps}${separator}data-component-name="${componentId}">`;

        transformedCode = transformedCode.replace(returnRegex, replacement);
        console.log(`✅ Transformed ${fileName}:`, replacement);
      } else {
        console.log(`❌ No regex match for ${fileName}. Code preview:`, transformedCode.substring(0, 400));
        console.log(`🔍 Full function code:`, transformedCode.substring(transformedCode.indexOf('export default'), transformedCode.indexOf('export default') + 500));
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
