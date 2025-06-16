import React from "react";
import styled, { css } from "styled-components";
import { defaultTheme } from "../../theme";

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
}

const StyledInput = styled.input<InputProps>`
  border: 1px solid
    ${({ theme, error }) =>
      error
        ? theme?.colors.danger || defaultTheme.colors.danger
        : theme?.colors.border.default || defaultTheme.colors.border.default};
  border-radius: ${({ theme }) =>
    theme?.borderRadius || defaultTheme.borderRadius};
  outline: none;
  transition: all 0.2s ease;
  font-family: inherit;
  color: ${({ theme }) =>
    theme?.colors.text.primary || defaultTheme.colors.text.primary};
  background-color: ${({ disabled, theme }) =>
    disabled
      ? `${
          theme?.colors.background.secondary ||
          defaultTheme.colors.background.secondary
        }80`
      : "#ffffff"};

  ${({ size, theme }) => {
    switch (size) {
      case "small":
        return css`
          padding: 6px 12px;
          font-size: ${theme?.fontSize.small || defaultTheme.fontSize.small};
          height: 32px;
        `;
      case "large":
        return css`
          padding: 12px 16px;
          font-size: ${theme?.fontSize.large || defaultTheme.fontSize.large};
          height: 48px;
        `;
      default:
        return css`
          padding: 8px 12px;
          font-size: ${theme?.fontSize.medium || defaultTheme.fontSize.medium};
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
      error
        ? theme?.colors.danger || defaultTheme.colors.danger
        : theme?.colors.primary || defaultTheme.colors.primary};
    box-shadow: 0 0 0 3px
      ${({ theme, error }) =>
        error
          ? `${theme?.colors.danger || defaultTheme.colors.danger}20`
          : `${theme?.colors.primary || defaultTheme.colors.primary}20`};
  }

  &:hover:not(:disabled) {
    border-color: ${({ theme }) =>
      theme?.colors.border.hover || defaultTheme.colors.border.hover};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &::placeholder {
    color: ${({ theme }) =>
      theme?.colors.text.secondary || defaultTheme.colors.text.secondary};
  }
`;

export const Input: React.FC<InputProps> = ({
  type = "text",
  size = "medium",
  fullWidth = false,
  error = false,
  disabled = false,
  ...props
}) => {
  return (
    <StyledInput
      type={type}
      size={size}
      fullWidth={fullWidth}
      error={error}
      disabled={disabled}
      {...props}
    />
  );
};

// TextInput과 NumberInput을 별도 컴포넌트로 export
export const TextInput: React.FC<Omit<InputProps, "type">> = (props) => (
  <Input type="text" {...props} />
);

export const NumberInput: React.FC<Omit<InputProps, "type">> = (props) => (
  <Input type="number" {...props} />
);
