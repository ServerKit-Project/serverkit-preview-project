import React from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  /** 버튼 텍스트 */
  children: React.ReactNode;
  /** 버튼 크기 */
  size?: "small" | "medium" | "large";
  /** 버튼 색상 */
  variant?: "primary" | "secondary" | "danger";
  /** 버튼 비활성화 값 */
  disabled?: string;
  /** 클릭 이벤트 */
  onClick?: () => void;
  /** 버튼 전체 너비 여부 */
  fullWidth?: boolean;
}

export const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fontFamily.sans};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;

  ${({ size, theme }) => {
    switch (size) {
      case "small":
        return css`
          padding: ${theme.spacing.small};
          font-size: ${theme.fontSize.small};
          height: 32px;
        `;
      case "large":
        return css`
          padding: ${theme.spacing.large};
          font-size: ${theme.fontSize.large};
          height: 48px;
        `;
      default:
        return css`
          padding: ${theme.spacing.medium};
          font-size: ${theme.fontSize.medium};
          height: 40px;
        `;
    }
  }}

  ${({ variant, theme }) => {
    switch (variant) {
      case "secondary":
        return css`
          background-color: ${theme.colors.background.secondary};
          color: ${theme.colors.text.primary};
          border: 1px solid ${theme.colors.border.default};

          &:hover:not(:disabled) {
            background-color: ${theme.colors.background.hover.secondary};
            border-color: ${theme.colors.border.hover};
          }
        `;
      case "danger":
        return css`
          background-color: ${theme.colors.danger};
          color: ${theme.colors.text.white};

          &:hover:not(:disabled) {
            background-color: ${theme.colors.background.hover.danger};
          }
        `;
      default:
        return css`
          background-color: ${theme.colors.primary};
          color: ${theme.colors.text.white};

          &:hover:not(:disabled) {
            background-color: ${theme.colors.background.hover.primary};
          }
        `;
    }
  }}

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  &:disabled {
    opacity: ${({ disabled }) => disabled || "0.6"};
    cursor: not-allowed;
  }

  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }
`;
