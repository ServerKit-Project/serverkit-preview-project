# Vite Config 문서

## 개요

이 문서는 `vite.config.ts` 파일의 동작 방식을 설명합니다. 이 설정 파일은 Vite 빌드 도구를 구성하며, 특히 React 컴포넌트에 자동으로 데이터 속성을 추가하는 커스텀 플러그인을 포함하고 있습니다.

## 주요 구성 요소

### 1. 기본 설정 구조

```typescript
export default defineConfig(({ command }) => {
  return {
    plugins: [...],      // 플러그인 목록
    resolve: {...},      // 경로 해석 설정
    test: {...}         // 테스트 환경 설정
  };
});
```

### 2. 컴포넌트 매핑 플러그인

#### 플러그인의 목적
개발 모드에서만 작동하는 이 플러그인은 React 컴포넌트의 JSX 요소에 자동으로 데이터 속성을 추가합니다:
- `data-component-id`: 컴포넌트 식별자
- `data-component-name`: 컴포넌트 이름
- `data-media-type`: 미디어 타입 정보

#### mappingId.json 스키마

플러그인은 `mappingId.json` 파일에서 컴포넌트 매핑 정보를 읽습니다:

```typescript
{
  "RootKey": [{
    id: "root-id",
    component: "RootComponent",
    name: "Root",
    subComponents: [
      {
        id: "sub-id",
        component: "SubComponent",
        name: "Sub",
        subComponents: [],
        mimeComponents: [
          {
            id: "mime-id",
            name: "MimeComponent",
            type: "mime-type"
          }
        ],
        mediaType: "image" // optional, 기본값: "none"
      }
    ]
  }]
}
```

### 3. 플러그인 동작 흐름

#### 3.1 초기화 단계 (configResolved)
1. `mappingId.json` 파일 로드
2. Zod 스키마로 데이터 검증
3. 세 가지 맵 생성:
   - `componentMapping`: 컴포넌트 이름 → ID
   - `mimeComponentMapping`: 컴포넌트 이름 → mimeComponents 배열
   - `mediaTypeMapping`: 컴포넌트 이름 → mediaType

#### 3.2 변환 단계 (transform)

**파일 필터링:**
- `.tsx` 파일만 처리
- 다음 파일들만 변환:
  - `App.tsx` (pages 폴더 제외)
  - `pages` 폴더의 파일들
  - `main.tsx`

**변환 과정:**

1. **AST 파싱**: Babel을 사용하여 코드를 추상 구문 트리로 변환
2. **컴포넌트 정보 수집**:
   - `export default` 함수/식별자 찾기
   - styled-components 찾기
3. **속성 추가**:
   - 루트 JSX 요소에 데이터 속성 추가
   - styled-components에도 속성 추가

### 4. 특별 처리 케이스

#### App.tsx 처리
- 고정 ID 사용: `"app-root-container"`
- 모든 JSX 요소에 `data-component-id` 추가
- `data-component-name`과 `data-media-type`는 추가하지 않음

#### Pages 폴더 파일 처리
- `mappingId.json`에서 컴포넌트 매핑 정보 검색
- 매핑이 없으면 처리 건너뛰기

#### Styled Components 처리
- mimeComponents 배열에서 styled-component 정보 찾기
- 해당하는 경우 `data-component-name`과 `data-component-id` 추가

### 5. 로깅 시스템

플러그인은 상세한 로그를 수집합니다:
- 모든 로그는 타임스탬프와 함께 저장
- 빌드 종료 시 `vite-plugin-logs.txt` 파일로 저장
- 이모지를 사용한 시각적 로그 구분:
  - 🔍 탐색/검색
  - ✅ 성공
  - ❌ 오류
  - 🚀 속성 추가
  - 💅 styled-component 발견

### 6. Vite 기본 설정

#### 플러그인 설정
```typescript
plugins: [
  react(),
  // 개발 모드에서만 componentMappingPlugin 추가
  ...(command === "serve" ? [componentMappingPlugin()] : []),
]
```

#### 경로 별칭
```typescript
resolve: {
  alias: {
    "@": path.resolve(__dirname, "./src"),
  },
}
```
`@` 심볼을 `src` 폴더로 매핑하여 임포트 경로를 간소화

#### 테스트 환경
```typescript
test: {
  globals: true,
  environment: "jsdom",
  setupFiles: [],
}
```
Vitest를 위한 설정으로 브라우저 환경 시뮬레이션

## 사용 예시

### 변환 전 코드
```tsx
// pages/Dashboard.tsx
export default function Dashboard() {
  return <div>Dashboard Content</div>;
}
```

### 변환 후 코드
```tsx
// pages/Dashboard.tsx
export default function Dashboard() {
  return <div data-component-id="dashboard-123" data-component-name="Dashboard" data-media-type="none">Dashboard Content</div>;
}
```

## 주의사항

1. 이 플러그인은 **개발 모드에서만** 작동합니다 (`npm run dev`)
2. `mappingId.json` 파일이 없으면 플러그인은 비활성화됩니다
3. 프로덕션 빌드에서는 데이터 속성이 추가되지 않습니다
4. 로그 파일은 프로젝트 루트에 생성되며 디버깅에 유용합니다

## 디버깅 팁

문제가 발생하면:
1. `vite-plugin-logs.txt` 파일 확인
2. `mappingId.json` 파일의 형식이 올바른지 검증
3. 콘솔에서 실시간 로그 메시지 확인
4. AST 파싱 오류가 있는지 로그에서 확인