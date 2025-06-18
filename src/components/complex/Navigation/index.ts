import styled, { css } from "styled-components";
import { defaultTheme } from "@/theme";

export interface NavItem {
  key: string;
  label: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface NavigationProps {
  items: NavItem[];
  activeKey?: string;
  variant?: "horizontal" | "vertical";
  size?: "small" | "medium" | "large";
  background?: boolean;
}

export const NavContainer = styled.nav<{
  $variant?: string;
  $background?: boolean;
}>`
  display: flex;
  ${({ $variant }) =>
    $variant === "vertical"
      ? "flex-direction: column;"
      : "flex-direction: row;"}

  ${({ $background, theme }) =>
    $background &&
    css`
      background-color: ${theme?.colors.background.secondary ||
      defaultTheme.colors.background.secondary};
      padding: 8px;
      border-radius: ${theme.borderRadius || defaultTheme.borderRadius};
    `}
`;

export const NavItem = styled.a<{
  $active?: boolean;
  $variant?: string;
  $size?: string;
  $disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s ease;
  border-radius: ${({ theme }) =>
    theme?.borderRadius || defaultTheme.borderRadius};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};

  color: ${({ $active, $disabled, theme }) => {
    if ($disabled)
      return theme?.colors.text.secondary || defaultTheme.colors.text.secondary;
    if ($active) return theme?.colors.primary || defaultTheme.colors.primary;
    return theme?.colors.text.primary || defaultTheme.colors.text.primary;
  }};

  background-color: ${({ $active, theme }) =>
    $active
      ? `${theme?.colors.primary || defaultTheme.colors.primary}10`
      : "transparent"};

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

  ${({ $variant }) =>
    $variant === "horizontal" &&
    css`
      &:not(:last-child) {
        margin-right: 4px;
      }
    `}

  ${({ $variant }) =>
    $variant === "vertical" &&
    css`
      &:not(:last-child) {
        margin-bottom: 2px;
      }
    `}

  &:hover:not(:disabled) {
    background-color: ${({ $active, theme }) =>
      $active
        ? `${theme?.colors.primary || defaultTheme.colors.primary}20`
        : `${
            theme?.colors.background.hover.secondary ||
            defaultTheme.colors.background.hover.secondary
          }`};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px
      ${({ theme }) => theme?.colors.primary || defaultTheme.colors.primary}40;
  }
`;

export const NavIcon = styled.span`
  display: flex;
  align-items: center;
  font-size: 1em;
`;

export const NavLabel = styled.span`
  font-weight: 500;
`;
