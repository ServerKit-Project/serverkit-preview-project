# ServerKit IDE Preview Project

이 프로젝트는 ServerKit IDE에서 프리뷰 페이지를 표시하기 위한 기본 템플릿입니다.

## 기술 스택

- **프레임워크**: React 18 + TypeScript + Vite
- **스타일링**: Tailwind CSS v4
- **UI 컴포넌트**: shadcn/ui
- **테마**: CSS 변수 기반

## 주요 기능

- HMR (Hot Module Replacement) 지원
- TypeScript 타입 체킹
- ESLint 설정 (타입 체크 포함)
- 반응형 디자인

## 프로젝트 구조

```
preview-project/
├── src/
│   ├── components/     # 공통 컴포넌트
│   ├── App.tsx        # 메인 애플리케이션 컴포넌트
│   └── main.tsx       # 진입점
├── public/            # 정적 파일
├── index.html         # HTML 템플릿
└── package.json       # 프로젝트 의존성
```

## 개발 환경 설정

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

## ESLint 설정

프로젝트는 타입 체크를 포함한 ESLint 규칙을 사용합니다:

- TypeScript 타입 체크 규칙
- React 관련 린트 규칙
- 코드 스타일 규칙

## 브라우저 지원

- 모던 브라우저 (Chrome, Firefox, Safari, Edge)
- ES6+ 지원

## 라이선스

MIT License
