import React from "react";
import styled, { css } from "styled-components";

export interface ButtonProps {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  onClick?: () => void;
  isFullWidth?: boolean;
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
            background-color: ${theme.colors.background.secondary};
            border-color: ${theme.colors.primary};
            transform: translateY(-1px);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }
        `;
      case "danger":
        return css`
          background-color: ${theme.colors.danger};
          color: ${theme.colors.text.white};

          &:hover:not(:disabled) {
            background-color: ${theme.colors.danger};
            opacity: 0.9;
            box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
          }
        `;
      default:
        return css`
          background-color: ${theme.colors.primary};
          color: ${theme.colors.text.white};

          &:hover:not(:disabled) {
            background-color: ${theme.colors.primary};
            opacity: 0.9;
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
          }
        `;
    }
  }}

  ${({ isFullWidth }) =>
    isFullWidth &&
    css`
      width: 100%;
    `}

  &:disabled {
    opacity: ${({ disabled }) => (disabled ? "0.6" : "1")};
    cursor: not-allowed;
  }

  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.small};
  }
`;
