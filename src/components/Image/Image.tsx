import React, { useState } from "react";
import styled, { css } from "styled-components";
import { defaultTheme } from "../../theme";

export interface ImageProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  fit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  rounded?: boolean | "circle";
  loading?: "lazy" | "eager";
  fallback?: React.ReactNode;
  placeholder?: React.ReactNode;
}

const ImageContainer = styled.div<{
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

const StyledImage = styled.img<{
  $fit?: string;
  $rounded?: boolean | string;
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
        theme?.borderRadius || defaultTheme.borderRadius
      };`;
    }
    return "";
  }}
`;

const PlaceholderContainer = styled.div<{
  $width?: string | number;
  $height?: string | number;
  $rounded?: boolean | string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) =>
    theme?.colors.background.secondary ||
    defaultTheme.colors.background.secondary};
  color: ${({ theme }) =>
    theme?.colors.text.secondary || defaultTheme.colors.text.secondary};
  width: 100%;
  height: 100%;

  ${({ $rounded, theme }) => {
    if ($rounded === "circle") {
      return "border-radius: 50%;";
    }
    if ($rounded) {
      return `border-radius: ${
        theme?.borderRadius || defaultTheme.borderRadius
      };`;
    }
    return "";
  }}
`;

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  fit = "cover",
  rounded = false,
  loading = "lazy",
  fallback,
  placeholder,
  ...props
}) => {
  const [imageState, setImageState] = useState<"loading" | "loaded" | "error">(
    "loading"
  );

  const handleLoad = () => {
    setImageState("loaded");
  };

  const handleError = () => {
    setImageState("error");
  };

  const renderContent = () => {
    if (imageState === "loading" && placeholder) {
      return (
        <PlaceholderContainer
          $width={width}
          $height={height}
          $rounded={rounded}
        >
          {placeholder}
        </PlaceholderContainer>
      );
    }

    if (imageState === "error" && fallback) {
      return (
        <PlaceholderContainer
          $width={width}
          $height={height}
          $rounded={rounded}
        >
          {fallback}
        </PlaceholderContainer>
      );
    }

    return (
      <StyledImage
        src={src}
        alt={alt}
        $fit={fit}
        $rounded={rounded}
        $width={width}
        $height={height}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    );
  };

  return (
    <ImageContainer $width={width} $height={height}>
      {renderContent()}
    </ImageContainer>
  );
};
