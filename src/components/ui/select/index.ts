import styled, { css } from "styled-components";

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string | number;
  defaultValue?: string | number;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  onChange?: (value: string | number) => void;
}

export const SelectContainer = styled.div<{ fullWidth?: boolean }>`
  position: relative;
  display: inline-block;
  ${({ fullWidth }) => fullWidth && "width: 100%;"}
  font-family: ${({ theme }) => theme.fontFamily.sans};
`;

export const SelectButton = styled.button<{
  error?: boolean;
  size?: string;
  fullWidth?: boolean;
  disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid
    ${({ theme, error }) =>
      error ? theme.colors.danger : theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ disabled, theme }) =>
    disabled
      ? `${theme.colors.background.secondary}80`
      : theme.colors.pureWhite};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  outline: none;
  transition: all 0.2s ease;
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: left;
  font-family: ${({ theme }) => theme.fontFamily.sans};

  ${({ fullWidth }) => fullWidth && "width: 100%;"}

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
`;

export const SelectIcon = styled.span<{ isOpen?: boolean }>`
  margin-left: ${({ theme }) => theme.spacing.small};
  transition: transform 0.2s ease;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  color: ${({ theme }) => theme.colors.text.secondary};

  &::after {
    content: "▼";
    font-size: 0.75em;
    color: inherit;
  }
`;

export const SelectDropdown = styled.div<{
  isOpen?: boolean;
  fullWidth?: boolean;
}>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.pureWhite};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  margin-top: ${({ theme }) => theme.spacing.small};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-10px)"};
  transition: all 0.2s ease;
  max-height: 200px;
  overflow-y: auto;
`;

export const SelectOption = styled.div<{
  disabled?: boolean;
  selected?: boolean;
}>`
  padding: ${({ theme }) => theme.spacing.medium};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  color: ${({ disabled, theme }) =>
    disabled ? theme.colors.text.secondary : theme.colors.text.primary};
  background-color: ${({ selected, theme }) =>
    selected ? `${theme.colors.primary}10` : "transparent"};
  font-family: ${({ theme }) => theme.fontFamily.sans};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.background.hover.secondary};
  }

  &:first-child {
    border-radius: ${({ theme }) => theme.borderRadius}
      ${({ theme }) => theme.borderRadius} 0 0;
  }

  &:last-child {
    border-radius: 0 0 ${({ theme }) => theme.borderRadius};
  }
`;

export const PlaceholderText = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-family: ${({ theme }) => theme.fontFamily.sans};
`;
