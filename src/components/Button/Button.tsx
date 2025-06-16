import React from "react";
import styled, { css } from "styled-components";
import { Theme, defaultTheme } from "../../theme";

export interface ButtonProps {
  /** 버튼 텍스트 */
  children: React.ReactNode;
  /** 버튼 크기 */
  size?: "small" | "medium" | "large";
  /** 버튼 색상 */
  variant?: "primary" | "secondary" | "danger";
  /** 버튼 비활성화 여부 */
  disabled?: boolean;
  /** 클릭 이벤트 */
  onClick?: () => void;
  /** 버튼 전체 너비 */
  fullWidth?: boolean;
}

const ButtonContainer = styled.button<ButtonProps>`
  border: none;
  border-radius: ${({ theme }) =>
    theme?.borderRadius || defaultTheme.borderRadius};
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;

  ${({ size, theme }) => {
    const currentTheme = theme || defaultTheme;
    switch (size) {
      case "small":
        return css`
          padding: ${currentTheme.spacing.small};
          font-size: ${currentTheme.fontSize.small};
          height: 32px;
        `;
      case "large":
        return css`
          padding: ${currentTheme.spacing.large};
          font-size: ${currentTheme.fontSize.large};
          height: 48px;
        `;
      default:
        return css`
          padding: ${currentTheme.spacing.medium};
          font-size: ${currentTheme.fontSize.medium};
          height: 40px;
        `;
    }
  }}

  ${({ variant, theme }) => {
    const currentTheme = theme || defaultTheme;
    switch (variant) {
      case "secondary":
        return css`
          background-color: ${currentTheme.colors.background.secondary};
          color: ${currentTheme.colors.text.primary};
          border: 1px solid ${currentTheme.colors.border.default};

          &:hover:not(:disabled) {
            background-color: ${currentTheme.colors.background.hover.secondary};
            border-color: ${currentTheme.colors.border.hover};
          }
        `;
      case "danger":
        return css`
          background-color: ${currentTheme.colors.danger};
          color: ${currentTheme.colors.text.white};

          &:hover:not(:disabled) {
            background-color: ${currentTheme.colors.background.hover.danger};
          }
        `;
      default:
        return css`
          background-color: ${currentTheme.colors.primary};
          color: ${currentTheme.colors.text.white};

          &:hover:not(:disabled) {
            background-color: ${currentTheme.colors.background.hover.primary};
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
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus {
    box-shadow: 0 0 0 3px
      ${({ theme }) =>
        theme?.colors.primary
          ? `${theme.colors.primary}40`
          : `${defaultTheme.colors.primary}40`};
  }
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  size = "medium",
  variant = "primary",
  disabled = false,
  onClick,
  fullWidth = false,
  ...props
}) => {
  return (
    <ButtonContainer
      size={size}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      fullWidth={fullWidth}
      {...props}
    >
      {children}
    </ButtonContainer>
  );
};
