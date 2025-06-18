import React from "react";
import styled, { css } from "styled-components";

export interface InputProps {
  type?: "text" | "number" | "email" | "password" | "tel" | "url";
  value?: string | number;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  id?: string;
}

export const Input = styled.input<InputProps>`
  border: 1px solid
    ${({ theme, error }) =>
      error ? theme.colors.danger : theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: none;
  transition: all 0.2s ease;
  font-family: ${({ theme }) => theme.fontFamily.sans};
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ disabled, theme }) =>
    disabled
      ? `${theme.colors.background.secondary}80`
      : theme.colors.pureWhite};

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

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  &:focus {
    border-color: ${({ theme, error }) =>
      error ? theme.colors.danger : theme.colors.primary};
    box-shadow: 0 0 0 3px
      ${({ theme, error }) =>
        error ? `${theme.colors.danger}20` : `${theme.colors.primary}20`};
  }

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.border.hover};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;
