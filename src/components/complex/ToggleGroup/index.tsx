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
  background-color: #f3f4f6;
  border-radius: 0.375rem;
  padding: 0.25rem;
  gap: 0.25rem;
`;

export const ToggleItemButton = styled.button<{
  $pressed?: boolean;
  $disabled?: boolean;
}>`
  all: unset;
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  line-height: 1;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
  transition: all 0.2s;
  cursor: pointer;
  color: ${(props) => (props.$pressed ? "white" : "#4b5563")};
  background-color: ${(props) => (props.$pressed ? "#3b82f6" : "transparent")};

  &:hover {
    background-color: ${(props) => (props.$pressed ? "#2563eb" : "#e5e7eb")};
  }

  &:focus-visible {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }

  ${(props) =>
    props.$disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
      &:hover {
        background-color: ${props.$pressed ? "#3b82f6" : "transparent"};
      }
    `}

  svg {
    width: 1rem;
    height: 1rem;
  }
`;
