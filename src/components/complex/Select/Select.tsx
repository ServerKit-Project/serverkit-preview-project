import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import { defaultTheme } from "../../theme";

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

export const SelectContainer = styled.div<{ $fullWidth?: boolean }>`
  position: relative;
  display: inline-block;
  ${({ $fullWidth }) => $fullWidth && "width: 100%;"}
`;

export const SelectButton = styled.button<{
  $error?: boolean;
  $size?: string;
  $fullWidth?: boolean;
  $disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid
    ${({ theme, $error }) =>
      $error
        ? theme?.colors.danger || defaultTheme.colors.danger
        : theme?.colors.border.default || defaultTheme.colors.border.default};
  border-radius: ${({ theme }) =>
    theme?.borderRadius || defaultTheme.borderRadius};
  background-color: ${({ $disabled, theme }) =>
    $disabled
      ? `${
          theme?.colors.background.secondary ||
          defaultTheme.colors.background.secondary
        }80`
      : "#ffffff"};
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  outline: none;
  transition: all 0.2s ease;
  color: ${({ theme }) =>
    theme?.colors.text.primary || defaultTheme.colors.text.primary};
  text-align: left;
  font-family: inherit;

  ${({ $fullWidth }) => $fullWidth && "width: 100%;"}

  ${({ $size, theme }) => {
    switch ($size) {
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

  &:focus {
    border-color: ${({ theme, $error }) =>
      $error
        ? theme?.colors.danger || defaultTheme.colors.danger
        : theme?.colors.primary || defaultTheme.colors.primary};
    box-shadow: 0 0 0 3px
      ${({ theme, $error }) =>
        $error
          ? `${theme?.colors.danger || defaultTheme.colors.danger}20`
          : `${theme?.colors.primary || defaultTheme.colors.primary}20`};
  }

  &:hover:not(:disabled) {
    border-color: ${({ theme }) =>
      theme?.colors.border.hover || defaultTheme.colors.border.hover};
  }
`;

export const SelectIcon = styled.span<{ $isOpen?: boolean }>`
  margin-left: 8px;
  transition: transform 0.2s ease;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};

  &::after {
    content: "▼";
    font-size: 0.75em;
    color: inherit;
  }
`;

export const SelectDropdown = styled.div<{
  $isOpen?: boolean;
  $fullWidth?: boolean;
}>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #ffffff;
  border: 1px solid
    ${({ theme }) =>
      theme?.colors.border.default || defaultTheme.colors.border.default};
  border-radius: ${({ theme }) =>
    theme?.borderRadius || defaultTheme.borderRadius};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 4px;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateY(0)" : "translateY(-10px)"};
  transition: all 0.2s ease;
  max-height: 200px;
  overflow-y: auto;
`;

export const SelectOption = styled.div<{
  $disabled?: boolean;
  $selected?: boolean;
}>`
  padding: 8px 12px;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  color: ${({ $disabled, theme }) =>
    $disabled
      ? theme?.colors.text.secondary || defaultTheme.colors.text.secondary
      : theme?.colors.text.primary || defaultTheme.colors.text.primary};
  background-color: ${({ $selected, theme }) =>
    $selected
      ? `${theme?.colors.primary || defaultTheme.colors.primary}10`
      : "transparent"};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) =>
      theme?.colors.background.hover.secondary ||
      defaultTheme.colors.background.hover.secondary};
  }

  &:first-child {
    border-radius: ${({ theme }) =>
        theme?.borderRadius || defaultTheme.borderRadius}
      ${({ theme }) => theme?.borderRadius || defaultTheme.borderRadius} 0 0;
  }

  &:last-child {
    border-radius: 0 0
      ${({ theme }) => theme?.borderRadius || defaultTheme.borderRadius}
      ${({ theme }) => theme?.borderRadius || defaultTheme.borderRadius};
  }
`;

export const PlaceholderText = styled.span`
  color: ${({ theme }) =>
    theme?.colors.text.secondary || defaultTheme.colors.text.secondary};
`;

export const Select: React.FC<SelectProps> = ({
  options,
  value: controlledValue,
  defaultValue,
  placeholder = "Select an option",
  disabled = false,
  error = false,
  size = "medium",
  fullWidth = false,
  onChange,
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const value = controlledValue ?? internalValue;
  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleOptionClick = (
    optionValue: string | number,
    optionDisabled?: boolean
  ) => {
    if (optionDisabled) return;

    if (controlledValue === undefined) {
      setInternalValue(optionValue);
    }

    onChange?.(optionValue);
    setIsOpen(false);
  };

  return (
    <SelectContainer ref={selectRef} $fullWidth={fullWidth}>
      <SelectButton
        $error={error}
        $size={size}
        $fullWidth={fullWidth}
        $disabled={disabled}
        onClick={handleToggle}
        disabled={disabled}
      >
        {selectedOption ? (
          selectedOption.label
        ) : (
          <PlaceholderText>{placeholder}</PlaceholderText>
        )}
        <SelectIcon $isOpen={isOpen} />
      </SelectButton>

      <SelectDropdown $isOpen={isOpen} $fullWidth={fullWidth}>
        {options.map((option) => (
          <SelectOption
            key={option.value}
            $disabled={option.disabled}
            $selected={option.value === value}
            onClick={() => handleOptionClick(option.value, option.disabled)}
          >
            {option.label}
          </SelectOption>
        ))}
      </SelectDropdown>
    </SelectContainer>
  );
};
