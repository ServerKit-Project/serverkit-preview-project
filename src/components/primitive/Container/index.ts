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
      background-color: ${background || theme?.colors.background.secondary || defaultTheme.colors.background.secondary};
    `}

  ${({ rounded, theme }) =>
    css`
      border-radius: ${rounded || theme?.borderRadius || defaultTheme.borderRadius};
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
