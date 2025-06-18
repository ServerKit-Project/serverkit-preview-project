import styled, { css } from "styled-components";
import { defaultTheme } from "@/theme";

export interface TabItem {
  key: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  defaultActiveKey?: string;
  activeKey?: string;
  onChange?: (key: string) => void;
  variant?: "line" | "card";
  size?: "small" | "medium" | "large";
}

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TabsList = styled.div<{ $variant?: string }>`
  display: flex;
  border-bottom: ${({ $variant, theme }) =>
    $variant === "card"
      ? "none"
      : `1px solid ${
          theme?.colors.border.default || defaultTheme.colors.border.default
        }`};
  ${({ $variant, theme }) =>
    $variant === "card" &&
    css`
      background-color: ${theme?.colors.background.secondary ||
      defaultTheme.colors.background.secondary};
      padding: 4px;
      border-radius: ${theme?.borderRadius || defaultTheme.borderRadius};
      gap: 2px;
    `}
`;

export const TabButton = styled.button<{
  $active?: boolean;
  $variant?: string;
  $size?: string;
  $disabled?: boolean;
}>`
  background: none;
  border: none;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  outline: none;
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  transition: all 0.2s ease;
  color: ${({ $active, $disabled, theme }) => {
    if ($disabled)
      return theme?.colors.text.secondary || defaultTheme.colors.text.secondary;
    if ($active) return theme?.colors.primary || defaultTheme.colors.primary;
    return theme?.colors.text.primary || defaultTheme.colors.text.primary;
  }};

  ${({ $size, theme }) => {
    switch ($size) {
      case "small":
        return css`
          padding: 6px 12px;
          font-size: ${theme?.fontSize.small || defaultTheme.fontSize.small};
        `;
      case "large":
        return css`
          padding: 12px 20px;
          font-size: ${theme?.fontSize.large || defaultTheme.fontSize.large};
        `;
      default:
        return css`
          padding: 8px 16px;
          font-size: ${theme?.fontSize.medium || defaultTheme.fontSize.medium};
        `;
    }
  }}

  ${({ $variant, $active, theme }) => {
    if ($variant === "card") {
      return css`
        border-radius: ${theme?.borderRadius || defaultTheme.borderRadius};
        background-color: ${$active ? "#ffffff" : "transparent"};
        box-shadow: ${$active ? "0 1px 3px rgba(0, 0, 0, 0.1)" : "none"};
      `;
    } else {
      return css`
        border-bottom: 2px solid
          ${$active
            ? theme?.colors.primary || defaultTheme.colors.primary
            : "transparent"};
        margin-bottom: -1px;
      `;
    }
  }}

  &:hover:not(:disabled) {
    ${({ $variant, $active, theme }) => {
      if ($variant === "card" && !$active) {
        return `background-color: ${
          theme?.colors.background.hover.secondary ||
          defaultTheme.colors.background.hover.secondary
        };`;
      } else if ($variant !== "card") {
        return `color: ${
          theme?.colors.primary || defaultTheme.colors.primary
        };`;
      }
      return "";
    }}
  }
`;

export const TabContent = styled.div`
  padding: 16px 0;
`;
