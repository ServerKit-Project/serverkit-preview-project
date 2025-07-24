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
          log("⚠️ mappingId.json has invalid format. Component mapping disabled.");
          log(`Validation errors: ${JSON.stringify(validationResult.error.errors)}`);
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
            log(`🔍 Found export default declaration type: ${path.node.declaration.type}`);

            if (
              path.node.declaration.type === "FunctionDeclaration" &&
              path.node.declaration.id
            ) {
              componentName = path.node.declaration.id.name;
              log(`🔍 Found export default function declaration: ${componentName}`);
            } else if (path.node.declaration.type === "Identifier") {
              componentName = path.node.declaration.name;
              log(`🔍 Found export default identifier: ${componentName}`);
            } else {
              log(`🔍 Unknown export default declaration type: ${path.node.declaration.type}`);
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
      log(`🎨 Found mime components for ${componentName}: ${JSON.stringify(mimeComponents)}`);
      log(`📊 Default mediaType for ${componentName}: ${defaultMediaType}`);

      // 변환된 코드 생성
      try {
        const newAst = parse(code, {
          sourceType: "module",
          plugins: ["jsx", "typescript"],
        });

        // export default 함수의 return JSX에 data-component-id와 data-component-name 추가 (루트 요소에만)
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
                    statement.argument
                  ) {
                    if (statement.argument.type === "JSXElement") {
                      const jsxElement = statement.argument;
                      const existingProps =
                        jsxElement.openingElement.attributes || [];

                      // subComponents에서 해당 컴포넌트 찾기
                      let subComponentInfo: any = null;
                      function findSubComponent(components: any[]): any {
                        for (const comp of components) {
                          if (comp.name === componentName) {
                            return comp;
                          }
                          if (
                            comp.subComponents &&
                            comp.subComponents.length > 0
                          ) {
                            const found = findSubComponent(comp.subComponents);
                            if (found) return found;
                          }
                        }
                        return null;
                      }

                      // mappingData에서 subComponent 정보 찾기
                      Object.keys(mappingData).forEach((rootKey) => {
                        if (
                          !subComponentInfo &&
                          mappingData[rootKey][0]?.subComponents
                        ) {
                          subComponentInfo = findSubComponent(
                            mappingData[rootKey][0].subComponents
                          );
                        }
                      });

                      const hasMimeComponents = mimeComponents.length > 0;
                      const hasSubComponents =
                        componentName && componentMapping.has(componentName);
                      const isSubComponentWithEmptyMimes =
                        subComponentInfo &&
                        subComponentInfo.mimeComponents &&
                        Array.isArray(subComponentInfo.mimeComponents) &&
                        subComponentInfo.mimeComponents.length === 0;

                      let idToUse = componentId;
                      let nameToUse = componentName || "";
                      let mediaTypeToUse = defaultMediaType;

                      // Case 1: mimeComponents가 있는 경우 (기존 로직)
                      if (
                        hasMimeComponents &&
                        hasSubComponents &&
                        componentName
                      ) {
                        const componentMimeComponent = mimeComponents.find(
                          (mc) => mc.name === componentName
                        );
                        if (componentMimeComponent) {
                          idToUse = componentMimeComponent.id;
                          nameToUse = componentMimeComponent.name;
                          mediaTypeToUse =
                            componentMimeComponent.mediaType ||
                            defaultMediaType;
                        }
                      }
                      // Case 2: subComponents에 있으면서 mimeComponents가 빈 배열인 경우 (새로운 케이스)
                      else if (isSubComponentWithEmptyMimes) {
                        idToUse = subComponentInfo.id;
                        nameToUse = subComponentInfo.name;
                        mediaTypeToUse =
                          subComponentInfo.mediaType || defaultMediaType;
                      }

                      // data-component-id 추가 (루트 요소에만)
                      const hasDataComponentId = existingProps.some(
                        (attr: any) =>
                          attr.type === "JSXAttribute" &&
                          attr.name.name === "data-component-id"
                      );

                      if (!hasDataComponentId) {
                        jsxElement.openingElement.attributes.push(
                          t.jsxAttribute(
                            t.jsxIdentifier("data-component-id"),
                            t.stringLiteral(idToUse)
                          )
                        );
                        log(`🚀 Added data-component-id="${idToUse}" to root element of ${componentName}`);
                      }

                      // data-component-name 추가
                      // Case 1: mimeComponents가 있고 subComponents도 있는 경우 (기존)
                      // Case 2: subComponents에 있으면서 mimeComponents가 빈 배열인 경우 (새로운 케이스)
                      if (
                        (hasMimeComponents && hasSubComponents) ||
                        isSubComponentWithEmptyMimes
                      ) {
                        const hasDataComponentName = existingProps.some(
                          (attr: any) =>
                            attr.type === "JSXAttribute" &&
                            attr.name.name === "data-component-name"
                        );

                        if (!hasDataComponentName) {
                          jsxElement.openingElement.attributes.push(
                            t.jsxAttribute(
                              t.jsxIdentifier("data-component-name"),
                              t.stringLiteral(nameToUse)
                            )
                          );
                          log(
                            `🚀 Added data-component-name="${nameToUse}" to root element of ${componentName} ${
                              isSubComponentWithEmptyMimes
                                ? "(empty mimeComponents case)"
                                : "(existing case)"
                            }`
                          );
                        }
                      }

                      // data-media-type 추가 (루트 요소에만)
                      const hasDataMediaType = existingProps.some(
                        (attr: any) =>
                          attr.type === "JSXAttribute" &&
                          attr.name.name === "data-media-type"
                      );
                      if (!hasDataMediaType) {
                        jsxElement.openingElement.attributes.push(
                          t.jsxAttribute(
                            t.jsxIdentifier("data-media-type"),
                            t.stringLiteral(mediaTypeToUse)
                          )
                        );
                        log(`🚀 Added data-media-type="${mediaTypeToUse}" to root element of ${componentName}`);
                        log(`  - Was default value: ${mediaTypeToUse === "none"}`);
                        log(`  - MediaType source: ${isAppFile ? "App.tsx default" : (mediaTypeToUse === defaultMediaType ? "from mapping" : "from mimeComponent")}`);
                      }
                      break;
                    }
                  }
                }
              }
            }
          },
        });

        // App.tsx의 경우 모든 JSX 요소에 랜덤 data-component-id 추가
        if (isAppFile) {
          log(`🎯 Processing App.tsx - adding data-component-id to all JSX elements`);
          traverse(newAst, {
            JSXElement(path: any) {
              const jsxElement = path.node;
              const elementName = jsxElement.openingElement.name;

              if (elementName.type === "JSXIdentifier") {
                const tagName = elementName.name;
                const existingProps =
                  jsxElement.openingElement.attributes || [];

                // 이미 data-component-id가 있는지 확인
                const hasDataComponentId = existingProps.some(
                  (attr: any) =>
                    attr.type === "JSXAttribute" &&
                    attr.name.name === "data-component-id"
                );

                if (!hasDataComponentId) {
                  const randomId = `app-root-container`;
                  jsxElement.openingElement.attributes.push(
                    t.jsxAttribute(
                      t.jsxIdentifier("data-component-id"),
                      t.stringLiteral(randomId)
                    )
                  );
                  log(`🚀 Added data-component-id="${randomId}" to ${tagName} in App.tsx`);
                } else {
                  log(`⏭️ Skipping ${tagName} - already has data-component-id`);
                }
              }
            },
          });
          log(`✅ Processed App Root Container JSX elements in App.tsx`);
        }

        // styled-component JSX 요소에 data-component-name과 data-component-id 추가 (App.tsx 제외)
        if (!isAppFile) {
          traverse(newAst, {
            JSXElement(path: any) {
              const jsxElement = path.node;
              const elementName = jsxElement.openingElement.name;

              if (elementName.type === "JSXIdentifier") {
                const tagName = elementName.name;

                // styled-component인지 확인
                if (styledComponentNames.has(tagName)) {
                  // mimeComponents에서 해당 styled-component 찾기
                  const mimeComponent = mimeComponents.find(
                    (mc) => mc.name === tagName
                  );

                  if (mimeComponent) {
                    const existingProps =
                      jsxElement.openingElement.attributes || [];

                    // data-component-name 추가
                    const hasDataComponentName = existingProps.some(
                      (attr: any) =>
                        attr.type === "JSXAttribute" &&
                        attr.name.name === "data-component-name"
                    );

                    if (!hasDataComponentName) {
                      jsxElement.openingElement.attributes.push(
                        t.jsxAttribute(
                          t.jsxIdentifier("data-component-name"),
                          t.stringLiteral(mimeComponent.name)
                        )
                      );
                      log(`🚀 Added data-component-name="${mimeComponent.name}" to ${tagName}`);
                    }

                    // data-component-id 추가
                    const hasDataComponentId = existingProps.some(
                      (attr: any) =>
                        attr.type === "JSXAttribute" &&
                        attr.name.name === "data-component-id"
                    );

                    if (!hasDataComponentId) {
                      jsxElement.openingElement.attributes.push(
                        t.jsxAttribute(
                          t.jsxIdentifier("data-component-id"),
                          t.stringLiteral(mimeComponent.id)
                        )
                      );
                      log(`🚀 Added data-component-id="${mimeComponent.id}" to ${tagName}`);
                    }
                  }
                }
              }
            },
          });
        }

        const result = generate(newAst, { retainLines: true });
        if (isAppFile) {
          log(`✅ Added data-component-id to root element in ${componentName}`);
        } else {
          log(`✅ Added data-component-id to root and data-component-name to styled-components in ${componentName}`);
        }
        log(`✅ Transform completed for ${id}`);
        return result.code;
      } catch (error) {
        log(`❌ Error generating code: ${error}`);
        return null;
      }
    },
    
    // 빌드 종료 시 로그 파일 저장
    buildEnd() {
      const logContent = logs.join('\n');
      const logPath = path.resolve(process.cwd(), 'vite-plugin-logs.txt');
      fs.writeFileSync(logPath, logContent, 'utf-8');
      console.log(`📝 Logs saved to: ${logPath}`);
      console.log(`📊 Total log entries: ${logs.length}`);
    }
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
