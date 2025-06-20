import styled from "styled-components";

export interface ImageProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  fit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  rounded?: string | number | "circle";
  loading?: "lazy" | "eager";
  fallback?: React.ReactNode;
  placeholder?: React.ReactNode;
}

export const ImageContainer = styled.div<{
  $width?: string | number;
  $height?: string | number;
}>`
  display: inline-block;
  overflow: hidden;
  ${({ $width }) =>
    $width &&
    (typeof $width === "number" ? `width: ${$width}px;` : `width: ${$width};`)}
  ${({ $height }) =>
    $height &&
    (typeof $height === "number"
      ? `height: ${$height}px;`
      : `height: ${$height};`)}
`;

export const StyledImage = styled.img<{
  $fit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  $rounded?: string | number | "circle";
  $width?: string | number;
  $height?: string | number;
}>`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: ${({ $fit }) => $fit || "cover"};

  ${({ $rounded, theme }) => {
    if ($rounded === "circle") {
      return "border-radius: 50%;";
    }
    if ($rounded) {
      return `border-radius: ${
        typeof $rounded === "number" ? `${$rounded}px` : $rounded
      };`;
    }
    return "";
  }}
`;

export const ImagePlaceholder = styled.div<{
  $width?: string | number;
  $height?: string | number;
  $rounded?: string | number | "circle";
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  color: ${({ theme }) => theme.colors.text.secondary};
  width: 100%;
  height: 100%;

  ${({ $rounded, theme }) => {
    if ($rounded === "circle") {
      return "border-radius: 50%;";
    }
    if ($rounded) {
      return `border-radius: ${
        typeof $rounded === "number" ? `${$rounded}px` : $rounded
      };`;
    }
    return "";
  }}
`;

export const IMAGE_GUIDE: string = `
# Image Component Guide

## 개요
이미지 표시와 관련된 컴포넌트들입니다.

## 구성 요소
- ImageContainer: 이미지 컨테이너
- StyledImage: 스타일이 적용된 이미지
- ImagePlaceholder: 플레이스홀더

## Props (ImageProps)
- src: string - 이미지 URL
- alt: string - 대체 텍스트
- width?: string | number - 이미지 너비
- height?: string | number - 이미지 높이
- fit?: "cover" | "contain" | "fill" | "none" | "scale-down" - 이미지 맞춤 방식
- rounded?: string | number | "circle" - 테두리 둥글기
- loading?: "lazy" | "eager" - 로딩 방식
- fallback?: React.ReactNode - 로드 실패시 표시할 내용
- placeholder?: React.ReactNode - 로딩중 표시할 내용

## 사용법
\`\`\`tsx
import { ImageContainer, StyledImage, ImagePlaceholder } from '@/components/primitive/Image';

// 기본 이미지
<ImageContainer $width={300} $height={200}>
  <StyledImage 
    src="image.jpg" 
    alt="설명" 
    $fit="cover"
    $rounded="8px"
  />
</ImageContainer>

// 원형 이미지
<ImageContainer $width="100px" $height="100px">
  <StyledImage 
    src="profile.jpg" 
    alt="프로필" 
    $rounded="circle"
  />
</ImageContainer>

// 플레이스홀더와 함께 사용
<ImageContainer $width="200px" $height="200px">
  <StyledImage 
    src="large-image.jpg" 
    alt="큰 이미지"
    loading="lazy"
  />
  <ImagePlaceholder>
    로딩중...
  </ImagePlaceholder>
</ImageContainer>
\`\`\`

## object-fit 옵션
- cover: 비율 유지하며 컨테이너 채움 (기본값)
- contain: 비율 유지하며 컨테이너에 맞춤
- fill: 비율 무시하고 컨테이너 채움
- none: 원본 크기 유지
- scale-down: none과 contain 중 작은 것

## 둥근 모서리
- number: px 단위 (예: 8)
- string: CSS 단위 (예: "0.5rem")
- "circle": 완전한 원형 (50%)

## 주의사항
- 컨테이너의 크기는 $width, $height prop으로 제어
- StyledImage는 항상 100% 크기로 컨테이너를 채움
- 큰 이미지는 loading="lazy" 사용 권장
- alt 텍스트는 접근성을 위해 반드시 제공
- ImagePlaceholder는 테마의 배경색과 텍스트 색상 사용
`;
