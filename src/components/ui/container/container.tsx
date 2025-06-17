import React from "react";
import styled, { css } from "styled-components";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | "full" | string;
  padding?: "none" | "small" | "medium" | "large";
  margin?: "none" | "auto" | "small" | "medium" | "large";
  background?: boolean;
  rounded?: boolean;
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

const StyledContainer = styled.div<ContainerProps>`
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
        return "padding: 0.75rem;";
      case "large":
        return "padding: 2rem;";
      default:
        return "padding: 1.5rem;";
    }
  }}

  ${({ margin }) => {
    switch (margin) {
      case "none":
        return "margin: 0;";
      case "auto":
        return "margin: 0 auto;";
      case "small":
        return "margin: 0.75rem;";
      case "large":
        return "margin: 2rem;";
      default:
        return "margin: 1.5rem;";
    }
  }}

  ${({ background, theme }) =>
    background &&
    css`
      background-color: ${theme.colors.background};
    `}

  ${({ rounded, theme }) =>
    rounded &&
    css`
      border-radius: ${theme.borderRadius};
    `}

  ${({ shadow }) => {
    switch (shadow) {
      case "small":
        return css`
          box-shadow: ${({ theme }) => theme.shadows.sm};
        `;
      case "medium":
        return css`
          box-shadow: ${({ theme }) => theme.shadows.md};
        `;
      case "large":
        return css`
          box-shadow: ${({ theme }) => theme.shadows.lg};
        `;
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
              return "0.5rem";
            case "medium":
              return "1rem";
            case "large":
              return "1.5rem";
            default:
              return "0";
          }
        })()};
      `;
    }
    return "";
  }}
`;

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      children,
      maxWidth = "lg",
      padding = "medium",
      margin = "auto",
      background = false,
      rounded = false,
      shadow = "none",
      direction,
      align,
      justify,
      gap,
      ...props
    },
    ref
  ) => {
    return (
      <StyledContainer
        ref={ref}
        maxWidth={maxWidth}
        padding={padding}
        margin={margin}
        background={background}
        rounded={rounded}
        shadow={shadow}
        direction={direction}
        align={align}
        justify={justify}
        gap={gap}
        {...props}
      >
        {children}
      </StyledContainer>
    );
  }
);

Container.displayName = "Container";
