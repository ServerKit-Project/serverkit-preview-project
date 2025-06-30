import styled, { css } from "styled-components";

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
  font-family: ${({ theme }) => theme.fontFamily.sans};
`;

export const TabsList = styled.div<{ $variant?: string }>`
  display: flex;
  border-bottom: ${({ $variant, theme }) =>
    $variant === "card" ? "none" : `1px solid ${theme.colors.border.default}`};
  ${({ $variant, theme }) =>
    $variant === "card" &&
    css`
      background-color: ${theme.colors.background.secondary};
      padding: ${theme.spacing.small};
      border-radius: ${theme.borderRadius};
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
    if ($disabled) return theme.colors.text.secondary;
    if ($active) return theme.colors.primary;
    return theme.colors.text.primary;
  }};
  font-family: ${({ theme }) => theme.fontFamily.sans};

  ${({ $size, theme }) => {
    switch ($size) {
      case "small":
        return css`
          padding: ${theme.spacing.small};
          font-size: ${theme.fontSize.small};
        `;
      case "large":
        return css`
          padding: ${theme.spacing.large};
          font-size: ${theme.fontSize.large};
        `;
      default:
        return css`
          padding: ${theme.spacing.medium};
          font-size: ${theme.fontSize.medium};
        `;
    }
  }}

  ${({ $variant, $active, theme }) => {
    if ($variant === "card") {
      return css`
        border-radius: ${theme.borderRadius};
        background-color: ${$active ? theme.colors.pureWhite : "transparent"};
        box-shadow: ${$active ? theme.shadows.sm : "none"};
      `;
    } else {
      return css`
        border-bottom: 2px solid
          ${$active ? theme.colors.primary : "transparent"};
        margin-bottom: -1px;
      `;
    }
  }}

  &:hover:not(:disabled) {
    ${({ $variant, $active, theme }) => {
      if ($variant === "card" && !$active) {
        return `background-color: ${theme.colors.background.hover.secondary};`;
      } else if ($variant !== "card") {
        return `color: ${theme.colors.primary};`;
      }
      return "";
    }}
  }
`;

export const TabContent = styled.div`
  padding: ${({ theme }) => theme.spacing.medium} 0;
`;
