import styled, { css } from "styled-components";
import { defaultTheme } from "@/theme";

export interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | "full" | string;
  padding?: "none" | "small" | "medium" | "large";
  margin?: "none" | "auto" | "small" | "medium" | "large";
  background?: string;
  rounded?: string | number;
  shadow?: "none" | "small" | "medium" | "large";
  direction?: "row" | "column";
  align?: "flex-start" | "center" | "flex-end" | "stretch";
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  gap?: "none" | "small" | "medium" | "large" | string;
}

export const Container = styled.div<ContainerProps>`
  ${({ maxWidth }) => {
    if (
      typeof maxWidth === "string" &&
      !["xs", "sm", "md", "lg", "xl", "full"].includes(maxWidth)
    ) {
      return `max-width: ${maxWidth};`;
    }
    switch (maxWidth) {
      case "xs":
        return "max-width: 480px;";
      case "sm":
        return "max-width: 640px;";
      case "md":
        return "max-width: 768px;";
      case "lg":
        return "max-width: 1024px;";
      case "xl":
        return "max-width: 1280px;";
      case "full":
        return "max-width: 100%;";
      default:
        return "max-width: 1200px;";
    }
  }}

  ${({ padding }) => {
    switch (padding) {
      case "none":
        return "padding: 0;";
      case "small":
        return "padding: 12px;";
      case "large":
        return "padding: 32px;";
      default:
        return "padding: 24px;";
    }
  }}

  ${({ margin }) => {
    switch (margin) {
      case "none":
        return "margin: 0;";
      case "auto":
        return "margin: 0 auto;";
      case "small":
        return "margin: 12px;";
      case "large":
        return "margin: 32px;";
      default:
        return "margin: 24px;";
    }
  }}

  ${({ background, theme }) =>
    css`
      background-color: ${background ||
      theme?.colors.background.secondary ||
      defaultTheme.colors.background.secondary};
    `}

  ${({ rounded, theme }) =>
    css`
      border-radius: ${rounded ||
      theme?.borderRadius ||
      defaultTheme.borderRadius};
    `}

  ${({ shadow, theme }) => {
    switch (shadow) {
      case "small":
        return `box-shadow: ${theme.shadows.sm};`;
      case "medium":
        return `box-shadow: ${theme.shadows.md};`;
      case "large":
        return `box-shadow: ${theme.shadows.lg};`;
      default:
        return "box-shadow: none;";
    }
  }}

  ${({ direction, align, justify, gap }) => {
    if (direction || align || justify || gap) {
      return css`
        display: flex;
        flex-direction: ${direction || "row"};
        align-items: ${align || "stretch"};
        justify-content: ${justify || "flex-start"};
        gap: ${(() => {
          if (
            typeof gap === "string" &&
            !["none", "small", "medium", "large"].includes(gap)
          ) {
            return gap;
          }
          switch (gap) {
            case "small":
              return "8px";
            case "medium":
              return "16px";
            case "large":
              return "24px";
            default:
              return "0";
          }
        })()};
      `;
    }
    return "";
  }}
`;

export const CONTAINER_GUIDE = `
# Container 컴포넌트 가이드

## 개요
레이아웃과 스타일링을 위한 범용 컨테이너 컴포넌트입니다.

## Props
- children: React.ReactNode - 컨테이너 내부 컨텐츠
- maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | "full" | string - 최대 너비 설정
- padding?: "none" | "small" | "medium" | "large" - 내부 여백
- margin?: "none" | "auto" | "small" | "medium" | "large" - 외부 여백
- background?: string - 배경색 (theme.colors.background.secondary 기본값)
- rounded?: string | number - 테두리 둥글기 (theme.borderRadius 기본값)
- shadow?: "none" | "small" | "medium" | "large" - 그림자 효과
- direction?: "row" | "column" - flex 방향
- align?: "flex-start" | "center" | "flex-end" | "stretch" - flex align-items
- justify?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly" - flex justify-content
- gap?: "none" | "small" | "medium" | "large" | string - flex gap

## 사용법
\`\`\`tsx
import { Container } from '@/components/primitive/Container';

// 기본 컨테이너
<Container maxWidth="lg" padding="large" margin="auto">
  <h1>컨텐츠</h1>
</Container>

// Flex 컨테이너
<Container 
  direction="row" 
  justify="space-between" 
  align="center"
  gap="medium"
>
  <div>좌측</div>
  <div>우측</div>
</Container>

// 스타일링이 적용된 컨테이너
<Container 
  background="#f5f5f5"
  rounded="8px"
  shadow="medium" 
  padding="large"
>
  <p>카드 형태의 컨테이너</p>
</Container>
\`\`\`

## 크기 상세
### 최대 너비 (maxWidth)
- xs: 480px
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- full: 100%
- 기본값: 1200px
- 커스텀: 직접 값 지정 가능 (예: "800px", "50%")

### 여백 크기
#### Padding/Margin
- none: 0
- small: 12px
- medium: 24px (기본값)
- large: 32px
- margin="auto": 수평 중앙 정렬

#### Gap
- none: 0
- small: 8px
- medium: 16px
- large: 24px
- 커스텀: 직접 값 지정 가능 (예: "20px", "2rem")

### 그림자 (theme.shadows)
- none: 없음
- small: sm
- medium: md
- large: lg

## 주의사항
1. flex 속성 사용
   - direction, align, justify, gap 중 하나라도 설정하면 자동으로 display: flex 적용
   - gap은 문자열로 커스텀 값 지정 가능

2. 테마 연동
   - background: theme.colors.background.secondary가 기본값
   - rounded: theme.borderRadius가 기본값
   - shadow: theme.shadows 값 사용

3. 반응형 고려사항
   - maxWidth로 컨테이너 크기 제어
   - 모바일 대응시 padding/margin 조정 필요
`;
