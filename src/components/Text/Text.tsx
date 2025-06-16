import React from "react";
import styled, { css } from "styled-components";
import { defaultTheme } from "../../theme";

export interface TextProps {
  children: React.ReactNode;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body1"
    | "body2"
    | "caption"
    | "subtitle";
  color?: "primary" | "secondary" | "danger" | "inherit";
  align?: "left" | "center" | "right" | "justify";
  weight?: "normal" | "medium" | "semibold" | "bold";
  as?: keyof JSX.IntrinsicElements;
}

const StyledText = styled.span<TextProps>`
  margin: 0;
  color: ${({ color, theme }) => {
    switch (color) {
      case "primary":
        return theme?.colors.primary || defaultTheme.colors.primary;
      case "secondary":
        return (
          theme?.colors.text.secondary || defaultTheme.colors.text.secondary
        );
      case "danger":
        return theme?.colors.danger || defaultTheme.colors.danger;
      case "inherit":
        return "inherit";
      default:
        return theme?.colors.text.primary || defaultTheme.colors.text.primary;
    }
  }};

  text-align: ${({ align }) => align || "left"};

  font-weight: ${({ weight }) => {
    switch (weight) {
      case "medium":
        return 500;
      case "semibold":
        return 600;
      case "bold":
        return 700;
      default:
        return 400;
    }
  }};

  ${({ variant, theme }) => {
    switch (variant) {
      case "h1":
        return css`
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1rem;
        `;
      case "h2":
        return css`
          font-size: 2rem;
          font-weight: 600;
          line-height: 1.3;
          margin-bottom: 0.875rem;
        `;
      case "h3":
        return css`
          font-size: 1.75rem;
          font-weight: 600;
          line-height: 1.3;
          margin-bottom: 0.75rem;
        `;
      case "h4":
        return css`
          font-size: 1.5rem;
          font-weight: 600;
          line-height: 1.4;
          margin-bottom: 0.75rem;
        `;
      case "h5":
        return css`
          font-size: 1.25rem;
          font-weight: 600;
          line-height: 1.4;
          margin-bottom: 0.625rem;
        `;
      case "h6":
        return css`
          font-size: 1rem;
          font-weight: 600;
          line-height: 1.4;
          margin-bottom: 0.5rem;
        `;
      case "subtitle":
        return css`
          font-size: 1.125rem;
          font-weight: 500;
          line-height: 1.5;
          margin-bottom: 0.5rem;
        `;
      case "body2":
        return css`
          font-size: 0.875rem;
          font-weight: 400;
          line-height: 1.5;
        `;
      case "caption":
        return css`
          font-size: 0.75rem;
          font-weight: 400;
          line-height: 1.4;
          color: ${theme?.colors.text.secondary ||
          defaultTheme.colors.text.secondary};
        `;
      default: // body1
        return css`
          font-size: ${theme?.fontSize.medium || defaultTheme.fontSize.medium};
          font-weight: 400;
          line-height: 1.5;
        `;
    }
  }}
`;

export const Text: React.FC<TextProps> = ({
  children,
  variant = "body1",
  color,
  align = "left",
  weight = "normal",
  as,
  ...props
}) => {
  // variant에 따라 기본 HTML 태그 결정
  const getDefaultElement = () => {
    if (as) return as;
    if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(variant))
      return variant as keyof JSX.IntrinsicElements;
    return "span";
  };

  return (
    <StyledText
      as={getDefaultElement()}
      variant={variant}
      color={color}
      align={align}
      weight={weight}
      {...props}
    >
      {children}
    </StyledText>
  );
};
