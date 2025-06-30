import React from "react";
import styled, { css } from "styled-components";

export interface ToggleGroupProps {
  /**
   * The type of toggle group. 'single' allows only one selection, 'multiple' allows multiple selections.
   */
  type: "single" | "multiple";

  /**
   * The controlled value(s) of the toggle group
   */
  value?: string | string[];

  /**
   * The default value(s) when uncontrolled
   */
  defaultValue?: string | string[];

  /**
   * Callback fired when the value changes
   */
  onValueChange?: (value: string | string[]) => void;

  /**
   * When true, disables the entire toggle group
   * @default false
   */
  disabled?: boolean;

  /**
   * Optional CSS class name
   */
  className?: string;

  /**
   * The toggle items
   */
  children: React.ReactNode;
}

export const ToggleGroupContainer = styled.div`
  display: inline-flex;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.small};
  gap: ${({ theme }) => theme.spacing.small};
`;

export const ToggleItemButton = styled.button<{
  $pressed?: boolean;
  $disabled?: boolean;
}>`
  all: unset;
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-family: ${({ theme }) => theme.fontFamily.sans};
  line-height: 1;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
  transition: all 0.2s;
  cursor: pointer;
  color: ${(props) =>
    props.$pressed
      ? props.theme.colors.text.white
      : props.theme.colors.text.secondary};
  background-color: ${(props) =>
    props.$pressed ? props.theme.colors.primary : "transparent"};

  &:hover {
    background-color: ${(props) =>
      props.$pressed
        ? props.theme.colors.background.hover.primary
        : props.theme.colors.background.hover.secondary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  ${(props) =>
    props.$disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
      &:hover {
        background-color: ${props.$pressed
          ? props.theme.colors.primary
          : "transparent"};
      }
    `}

  svg {
    width: 1rem;
    height: 1rem;
  }
`;
