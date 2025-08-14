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
  type: z.string(),
});

const ComponentItemSchema: z.ZodType<any> = z.lazy(() =>
  z.object({
    id: z.string(),
    component: z.string(),
    name: z.string(),
    subComponents: z.array(ComponentItemSchema),
    mimeComponents: z.array(MimeComponentSchema).optional(),
    mediaType: z.string().optional(),
  })
);

const MappingIdSchema = z.record(z.string(), z.array(ComponentItemSchema));

// (dev only) 컴포넌트 매핑 자동 주입 플러그인
function componentMappingPlugin() {
  let mappingData: any = {};
  let componentMapping: Map<string, string> = new Map();
  let mimeComponentMapping: Map<string, any[]> = new Map();
  let mediaTypeMapping: Map<string, string> = new Map();

  // 로그 수집을 위한 배열
  const logs: string[] = [];

  // 로그 함수
  const log = (message: string) => {
    console.log(message);
    logs.push(`[${new Date().toISOString()}] ${message}`);
  };

  return {
    name: "component-mapping-plugin",
    enforce: "pre" as const, // React 플러그인보다 먼저 실행
    configResolved() {
      try {
        const mappingPath = path.resolve(process.cwd(), "mappingId.json");

        // 파일 존재 여부 확인
        if (!fs.existsSync(mappingPath)) {
          log("⚠️ mappingId.json file not found. Component mapping disabled.");
          return;
        }

        const mappingContent = fs.readFileSync(mappingPath, "utf-8");
        const rawData = JSON.parse(mappingContent);

        // 스키마 검증
        const validationResult = MappingIdSchema.safeParse(rawData);

        if (!validationResult.success) {
          log(
            "⚠️ mappingId.json has invalid format. Component mapping disabled."
          );
          log(
            `Validation errors: ${JSON.stringify(
              validationResult.error.errors
            )}`
          );
          return;
        }

        mappingData = validationResult.data;

        // 컴포넌트 매핑 테이블 생성
        Object.keys(mappingData).forEach((rootKey) => {
          const rootDataArray = mappingData[rootKey];

          // 배열의 첫 번째 요소가 실제 루트 데이터
          if (Array.isArray(rootDataArray) && rootDataArray.length > 0) {
            const rootData = rootDataArray[0];

            // Root 컴포넌트 자체 매핑 (Root_ef0cbdb6.tsx 같은 파일용)
            componentMapping.set(rootKey, rootData.id);

            function mapComponents(item: any) {
              if (item.name) {
                componentMapping.set(item.name, item.id);
                // mediaType 매핑 추가 (기본값은 'none')
                mediaTypeMapping.set(item.name, item.mediaType || "none");
                // mimeComponents 매핑 추가
                if (item.mimeComponents && Array.isArray(item.mimeComponents)) {
                  mimeComponentMapping.set(item.name, item.mimeComponents);
                }
              }
              if (item.subComponents) {
                item.subComponents.forEach(mapComponents);
              }
            }

            mapComponents(rootData);
          }
        });

        log("🔗 Component mapping loaded:");
        componentMapping.forEach((value, key) => {
          log(`  - ${key}: ${value}`);
        });
        log("🎨 Mime component mapping loaded:");
        mimeComponentMapping.forEach((value, key) => {
          log(`  - ${key}: ${JSON.stringify(value)}`);
        });
        log("📊 MediaType mapping loaded:");
        mediaTypeMapping.forEach((value, key) => {
          log(`  - ${key}: ${value}`);
        });
      } catch (error) {
        log(`⚠️ Error loading mappingId.json: ${error}`);
        log("Component mapping disabled.");
      }
    },

    transform(code: string, id: string) {
      // 매핑 데이터가 없으면 처리하지 않음
      if (componentMapping.size === 0) return null;

      // .tsx 파일만 처리
      if (!id.endsWith(".tsx")) return null;

      // App.tsx 파일인지 확인 (pages 폴더에 있는 App.tsx는 제외)
      const isAppFile = id.includes("App.tsx") && !id.includes("pages");
      // pages 폴더의 파일인지 확인
      const isPagesFile = id.includes("pages");
      // main.tsx 파일인지 확인
      const isMainFile = id.includes("main.tsx");

      // 디버깅을 위해 App.tsx 관련 모든 파일 로그
      if (id.includes("App")) {
        log(`🔍 App-related file detected: ${id}`);
        log(`🔍 isAppFile: ${isAppFile}, isPagesFile: ${isPagesFile}`);
      }

      log(`🔍 Checking file: ${id}`);
      log(`📁 isAppFile: ${isAppFile}, isPagesFile: ${isPagesFile}`);
      log(`🔍 id.includes('App.tsx'): ${id.includes("App.tsx")}`);
      log(`🔍 id.includes('/pages/'): ${id.includes("/pages/")}`);

      // 모든 .tsx 파일 처리 (디버깅용)
      log(`🔍 Processing all .tsx files for debugging`);

      // App.tsx, main.tsx 또는 pages 폴더의 파일만 처리
      if (!isAppFile && !isPagesFile && !isMainFile) {
        log(`❌ Skipping file: ${id} - not App.tsx, main.tsx or pages file`);
        return null;
      }

      log(`✅ Processing file: ${id}`);

      // mimeComponent 확인을 위한 헬퍼 함수
      const isMimeComponent = (componentName: string): boolean => {
        for (const [_key, mimeComponents] of mimeComponentMapping.entries()) {
          if (mimeComponents.some((mc: any) => mc.name === componentName)) {
            return true;
          }
        }
        return false;
      };

      // AST를 사용해서 모든 분석 수행
      let componentName: string | null = null;
      let styledComponentNames = new Set<string>();
      let styledComponentDefinitions = new Map<string, any>();

      try {
        const ast = parse(code, {
          sourceType: "module",
          plugins: ["jsx", "typescript"],
        });

        // 한 번의 traverse로 모든 정보 수집
        traverse(ast, {
          VariableDeclarator(path: any) {
            if (
              path.node.init &&
              path.node.init.type === "TaggedTemplateExpression" &&
              path.node.init.tag.type === "CallExpression" &&
              path.node.init.tag.callee.type === "Identifier" &&
              path.node.init.tag.callee.name === "styled"
            ) {
              if (path.node.id.type === "Identifier") {
                const styledComponentName = path.node.id.name;
                styledComponentNames.add(styledComponentName);
                styledComponentDefinitions.set(styledComponentName, path.node);
                log(`💅 Found styled-component: ${styledComponentName}`);
              }
            }
          },
        });

        // export default 함수 찾기
        traverse(ast, {
          ExportDefaultDeclaration(path: any) {
            log(
              `🔍 Found export default declaration type: ${path.node.declaration.type}`
            );

            if (
              path.node.declaration.type === "FunctionDeclaration" &&
              path.node.declaration.id
            ) {
              componentName = path.node.declaration.id.name;
              log(
                `🔍 Found export default function declaration: ${componentName}`
              );
            } else if (path.node.declaration.type === "Identifier") {
              componentName = path.node.declaration.name;
              log(`🔍 Found export default identifier: ${componentName}`);
            } else {
              log(
                `🔍 Unknown export default declaration type: ${path.node.declaration.type}`
              );
            }
          },
        });
      } catch (error) {
        log(`❌ Error parsing AST: ${error}`);
        return null;
      }

      if (!componentName) {
        log(`❌ No export default function found in file: ${id}`);
        return null;
      }

      log(`📦 Found component: ${componentName}`);

      let componentId: string | undefined;

      // App.tsx는 특별 처리
      if (isAppFile) {
        log(`🎯 Processing App.tsx specially`);
        componentId = "app-root-container"; // App.tsx용 기본 ID
      } else {
        // pages 폴더 파일들은 componentMapping에서 ID 찾기
        componentId = componentMapping.get(componentName);

        if (!componentId) {
          log(`❌ No mapping found for component: ${componentName}`);
          return null;
        }
      }

      log(`🎯 Found ID: ${componentId} for component: ${componentName}`);

      // mimeComponents 매핑 가져오기 (App.tsx는 빈 배열)
      const mimeComponents = isAppFile
        ? []
        : mimeComponentMapping.get(componentName) || [];
      // mediaType 매핑 가져오기 (App.tsx는 'none')
      const defaultMediaType = isAppFile
        ? "none"
        : mediaTypeMapping.get(componentName) || "none";
      log(
        `🎨 Found mime components for ${componentName}: ${JSON.stringify(
          mimeComponents
        )}`
      );
      log(`📊 Default mediaType for ${componentName}: ${defaultMediaType}`);

      // 변환된 코드 생성
      try {
        const newAst = parse(code, {
          sourceType: "module",
          plugins: ["jsx", "typescript"],
        });

        // 1. 먼저 export default 컴포넌트의 루트 요소 처리 (기존 로직 유지)
        if (componentName && componentMapping.has(componentName)) {
          traverse(newAst, {
            ExportDefaultDeclaration(path: any) {
              if (
                path.node.declaration.type === "FunctionDeclaration" &&
                path.node.declaration.id?.name === componentName
              ) {
                const functionBody = path.node.declaration.body;
                if (functionBody.type === "BlockStatement") {
                  for (const statement of functionBody.body) {
                    if (
                      statement.type === "ReturnStatement" &&
                      statement.argument &&
                      statement.argument.type === "JSXElement"
                    ) {
                      const jsxElement = statement.argument;
                      const existingProps =
                        jsxElement.openingElement.attributes || [];

                      // data-component-id가 없으면 추가
                      if (
                        !existingProps.some(
                          (attr: any) =>
                            attr.type === "JSXAttribute" &&
                            attr.name.name === "data-component-id"
                        )
                      ) {
                        const id = componentMapping.get(componentName || "");
                        if (!id) {
                          log(`⚠️ No component ID found for ${componentName}`);
                          return;
                        }
                        const mediaType = isMimeComponent(componentName || "")
                          ? "none"
                          : mediaTypeMapping.get(componentName || "") || "none";

                        jsxElement.openingElement.attributes.push(
                          t.jsxAttribute(
                            t.jsxIdentifier("data-component-id"),
                            t.stringLiteral(id)
                          )
                        );
                        log(
                          `🚀 Added data-component-id="${id}" to root element of ${componentName}`
                        );

                        // data-component-name 추가
                        jsxElement.openingElement.attributes.push(
                          t.jsxAttribute(
                            t.jsxIdentifier("data-component-name"),
                            t.stringLiteral(componentName || "")
                          )
                        );
                        log(
                          `🚀 Added data-component-name="${componentName}" to root element`
                        );

                        // data-media-type 추가
                        jsxElement.openingElement.attributes.push(
                          t.jsxAttribute(
                            t.jsxIdentifier("data-media-type"),
                            t.stringLiteral(mediaType)
                          )
                        );
                        log(
                          `🚀 Added data-media-type="${mediaType}" to root element of ${componentName}`
                        );
                      }
                      break;
                    }
                  }
                }
              }
            },
          });
        }

        // 2. 모든 JSX 요소를 순회하며 componentMapping에 있는 컴포넌트 처리
        traverse(newAst, {
          JSXElement(path: any) {
            const jsxElement = path.node;
            const elementName = jsxElement.openingElement.name;

            if (elementName.type === "JSXIdentifier") {
              const tagName = elementName.name;
              const existingProps = jsxElement.openingElement.attributes || [];

              // 이미 data-component-id가 있으면 건너뛰기
              const hasDataComponentId = existingProps.some(
                (attr: any) =>
                  attr.type === "JSXAttribute" &&
                  attr.name.name === "data-component-id"
              );

              if (hasDataComponentId) {
                return;
              }

              // componentMapping에 있는지 확인 (subComponents 포함)
              if (componentMapping.has(tagName)) {
                const componentId = componentMapping.get(tagName);
                if (!componentId) {
                  log(`⚠️ No component ID found for ${tagName}`);
                  return;
                }
                // const isStyled = styledComponentNames.has(tagName);
                const isMime = isMimeComponent(tagName);

                // mediaType 결정: mimeComponent는 무조건 "none"
                const mediaType = isMime
                  ? "none"
                  : mediaTypeMapping.get(tagName) || "none";

                // data-component-id 추가
                jsxElement.openingElement.attributes.push(
                  t.jsxAttribute(
                    t.jsxIdentifier("data-component-id"),
                    t.stringLiteral(componentId)
                  )
                );
                log(
                  `🚀 Added data-component-id="${componentId}" to <${tagName}>`
                );

                // data-component-name 추가
                jsxElement.openingElement.attributes.push(
                  t.jsxAttribute(
                    t.jsxIdentifier("data-component-name"),
                    t.stringLiteral(tagName)
                  )
                );
                log(
                  `🚀 Added data-component-name="${tagName}" to <${tagName}>`
                );

                // data-media-type 추가
                jsxElement.openingElement.attributes.push(
                  t.jsxAttribute(
                    t.jsxIdentifier("data-media-type"),
                    t.stringLiteral(mediaType)
                  )
                );
                log(
                  `🚀 Added data-media-type="${mediaType}" to <${tagName}> (${
                    isMime ? "mimeComponent" : "regular component"
                  })`
                );
              }
              // App.tsx의 일반 요소들 처리
              else if (isAppFile && !hasDataComponentId) {
                jsxElement.openingElement.attributes.push(
                  t.jsxAttribute(
                    t.jsxIdentifier("data-component-id"),
                    t.stringLiteral("app-root-container")
                  )
                );
                log(
                  `🚀 Added data-component-id="app-root-container" to <${tagName}> in App.tsx`
                );
              }
            }
          },
        });

        const result = generate(newAst, { retainLines: true });
        log(`✅ Transform completed for ${id}`);
        return result.code;
      } catch (error) {
        log(`❌ Error generating code: ${error}`);
        return null;
      }
    },

    // 빌드 종료 시 로그 파일 저장
    buildEnd() {
      const logContent = logs.join("\n");
      const logPath = path.resolve(process.cwd(), "vite-plugin-logs.txt");
      fs.writeFileSync(logPath, logContent, "utf-8");
      console.log(`📝 Logs saved to: ${logPath}`);
      console.log(`📊 Total log entries: ${logs.length}`);
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      react(),
      // dev 모드에서만 componentMappingPlugin 추가
      ...(command === "serve" ? [componentMappingPlugin()] : []),
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
