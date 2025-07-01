import styled, { css } from "styled-components";

type TextVariant =
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

type TextColor = "primary" | "secondary" | "danger" | "inherit";
type TextAlign = "left" | "center" | "right" | "justify";
type TextWeight = "normal" | "medium" | "semibold" | "bold";

export const Text = styled.span<{
  $variant?: TextVariant;
  $color?: TextColor;
  $align?: TextAlign;
  $weight?: TextWeight;
}>`
  margin: 0;
  color: ${({ $color, theme }) => {
    switch ($color) {
      case "primary":
        return theme.colors.primary;
      case "secondary":
        return theme.colors.text.secondary;
      case "danger":
        return theme.colors.danger;
      case "inherit":
        return "inherit";
      default:
        return theme.colors.text.primary;
    }
  }};

  text-align: ${({ $align }) => $align || "left"};

  font-weight: ${({ $weight }) => {
    switch ($weight) {
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

  ${({ $variant, theme }) => {
    switch ($variant) {
      case "h1":
        return css`
          font-size: 2.5rem;
          font-weight: ${theme.fontWeights.bold};
          line-height: 1.2;
          margin-bottom: 1rem;
        `;
      case "h2":
        return css`
          font-size: 2rem;
          font-weight: ${theme.fontWeights.bold};
          line-height: 1.3;
          margin-bottom: 0.875rem;
        `;
      case "h3":
        return css`
          font-size: 1.75rem;
          font-weight: ${theme.fontWeights.bold};
          line-height: 1.3;
          margin-bottom: 0.75rem;
        `;
      case "h4":
        return css`
          font-size: 1.5rem;
          font-weight: ${theme.fontWeights.bold};
          line-height: 1.4;
          margin-bottom: 0.75rem;
        `;
      case "h5":
        return css`
          font-size: 1.25rem;
          font-weight: ${theme.fontWeights.bold};
          line-height: 1.4;
          margin-bottom: 0.625rem;
        `;
      case "h6":
        return css`
          font-size: 1rem;
          font-weight: ${theme.fontWeights.bold};
          line-height: 1.4;
          margin-bottom: 0.5rem;
        `;
      case "subtitle":
        return css`
          font-size: 1.125rem;
          font-weight: ${theme.fontWeights.medium};
          line-height: 1.5;
          margin-bottom: 0.5rem;
        `;
      case "body2":
        return css`
          font-size: ${theme.fontSize.small};
          font-weight: ${theme.fontWeights.normal};
          line-height: 1.5;
        `;
      case "caption":
        return css`
          font-size: ${theme.fontSize.small};
          font-weight: ${theme.fontWeights.normal};
          line-height: 1.4;
          color: ${theme.colors.text.secondary};
        `;
      default: // body1
        return css`
          font-size: ${theme.fontSize.medium};
          font-weight: ${theme.fontWeights.normal};
          line-height: 1.5;
        `;
    }
  }}
`;
