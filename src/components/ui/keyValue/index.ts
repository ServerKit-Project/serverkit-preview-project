import React from "react";
import styled, { css } from "styled-components";
import { defaultTheme } from "@/theme";

export interface KeyValueItem {
  key: string;
  value: React.ReactNode;
  copyable?: boolean;
}

export interface KeyValueProps {
  items: KeyValueItem[];
  layout?: "horizontal" | "vertical";
  size?: "small" | "medium" | "large";
  bordered?: boolean;
  striped?: boolean;
}

export const KeyValueContainer = styled.div<{ $bordered?: boolean }>`
  ${({ $bordered, theme }) =>
    $bordered &&
    css`
      border: 1px solid
        ${theme?.colors.border.default || defaultTheme.colors.border.default};
      border-radius: ${theme?.borderRadius || defaultTheme.borderRadius};
      overflow: hidden;
    `}
`;

export const KeyValueItem = styled.div<{
  $layout?: string;
  $size?: string;
  $striped?: boolean;
  $index?: number;
  $bordered?: boolean;
}>`
  display: flex;
  ${({ $layout }) =>
    $layout === "vertical" ? "flex-direction: column;" : "flex-direction: row;"}

  ${({ $striped, $index, theme }) =>
    $striped && $index && $index % 2 === 0
      ? `background-color: ${
          theme?.colors.background.secondary ||
          defaultTheme.colors.background.secondary
        }30;`
      : ""}

  ${({ $bordered, theme }) =>
    $bordered &&
    css`
      &:not(:last-child) {
        border-bottom: 1px solid
          ${theme?.colors.border.default || defaultTheme.colors.border.default};
      }
    `}

  ${({ $size }) => {
    switch ($size) {
      case "small":
        return "padding: 8px 12px;";
      case "large":
        return "padding: 16px 20px;";
      default:
        return "padding: 12px 16px;";
    }
  }}
`;

export const KeyLabel = styled.div<{ $layout?: string; $size?: string }>`
  font-weight: 500;
  color: ${({ theme }) =>
    theme?.colors.text.primary || defaultTheme.colors.text.primary};

  ${({ $layout, $size, theme }) => {
    if ($layout === "vertical") {
      return css`
        margin-bottom: 4px;
        font-size: ${$size === "small"
          ? "0.875rem"
          : theme?.fontSize.medium || defaultTheme.fontSize.medium};
      `;
    } else {
      return css`
        min-width: 120px;
        margin-right: 16px;
        font-size: ${$size === "small"
          ? "0.875rem"
          : theme?.fontSize.medium || defaultTheme.fontSize.medium};
      `;
    }
  }}
`;

export const ValueContent = styled.div<{ $layout?: string; $size?: string }>`
  color: ${({ theme }) =>
    theme?.colors.text.primary || defaultTheme.colors.text.primary};
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  word-break: break-word;

  ${({ $size, theme }) => {
    switch ($size) {
      case "small":
        return `font-size: 0.875rem;`;
      case "large":
        return `font-size: ${
          theme?.fontSize.large || defaultTheme.fontSize.large
        };`;
      default:
        return `font-size: ${
          theme?.fontSize.medium || defaultTheme.fontSize.medium
        };`;
    }
  }}
`;

export const CopyButton = styled.button`
  background: none;
  border: 1px solid
    ${({ theme }) =>
      theme?.colors.border.default || defaultTheme.colors.border.default};
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  font-size: 0.75rem;
  color: ${({ theme }) =>
    theme?.colors.text.secondary || defaultTheme.colors.text.secondary};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) =>
      theme?.colors.background.hover.secondary ||
      defaultTheme.colors.background.hover.secondary};
    color: ${({ theme }) =>
      theme?.colors.text.primary || defaultTheme.colors.text.primary};
  }
`;
