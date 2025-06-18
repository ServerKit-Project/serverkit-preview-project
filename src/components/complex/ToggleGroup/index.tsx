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

interface ToggleItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The value of the toggle item
   */
  value: string;

  /**
   * When true, disables this specific toggle item
   * @default false
   */
  disabled?: boolean;

  /**
   * Optional CSS class name
   */
  className?: string;

  /**
   * The content of the toggle item
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

export const ToggleGroupContext = React.createContext<{
  type: "single" | "multiple";
  value: string | string[];
  disabled?: boolean;
  onChange: (itemValue: string) => void;
}>({
  type: "single",
  value: "",
  onChange: () => {},
});

/**
 * A set of two-state buttons that can be toggled on/off.
 *
 * @example
 * ```tsx
 * // Single selection
 * <ToggleGroup type="single" defaultValue="center">
 *   <ToggleGroupItem value="left">Left</ToggleGroupItem>
 *   <ToggleGroupItem value="center">Center</ToggleGroupItem>
 *   <ToggleGroupItem value="right">Right</ToggleGroupItem>
 * </ToggleGroup>
 *
 * // Multiple selection
 * <ToggleGroup type="multiple" defaultValue={['bold']}>
 *   <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
 *   <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
 *   <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
 * </ToggleGroup>
 *
 * // Controlled
 * const [value, setValue] = React.useState('center');
 * <ToggleGroup
 *   type="single"
 *   value={value}
 *   onValueChange={(val) => setValue(val as string)}
 * >
 *   <ToggleGroupItem value="left">Left</ToggleGroupItem>
 *   <ToggleGroupItem value="center">Center</ToggleGroupItem>
 *   <ToggleGroupItem value="right">Right</ToggleGroupItem>
 * </ToggleGroup>
 * ```
 */
export const ToggleGroup: React.FC<ToggleGroupProps> = ({
  type = "single",
  value,
  defaultValue,
  onValueChange,
  disabled,
  className,
  children,
}) => {
  const [internalValue, setInternalValue] = React.useState<string | string[]>(
    value || defaultValue || (type === "single" ? "" : [])
  );

  const currentValue = value !== undefined ? value : internalValue;

  const handleChange = React.useCallback(
    (itemValue: string) => {
      let newValue: string | string[];

      if (type === "single") {
        newValue = currentValue === itemValue ? "" : itemValue;
      } else {
        const currentArray = Array.isArray(currentValue) ? currentValue : [];
        newValue = currentArray.includes(itemValue)
          ? currentArray.filter((v) => v !== itemValue)
          : [...currentArray, itemValue];
      }

      if (value === undefined) {
        setInternalValue(newValue);
      }
      onValueChange?.(newValue);
    },
    [type, currentValue, value, onValueChange]
  );

  return (
    <ToggleGroupContext.Provider
      value={{
        type,
        value: currentValue,
        disabled,
        onChange: handleChange,
      }}
    >
      <ToggleGroupContainer className={className}>
        {children}
      </ToggleGroupContainer>
    </ToggleGroupContext.Provider>
  );
};

/**
 * An item within a ToggleGroup.
 * Must be used within a ToggleGroup component.
 *
 * @example
 * ```tsx
 * <ToggleGroupItem value="option">Option</ToggleGroupItem>
 *
 * // With icon
 * <ToggleGroupItem value="list">
 *   <ListIcon />
 *   List View
 * </ToggleGroupItem>
 *
 * // Disabled item
 * <ToggleGroupItem value="disabled" disabled>
 *   Disabled Option
 * </ToggleGroupItem>
 * ```
 */
export const ToggleGroupItem: React.FC<ToggleItemProps> = ({
  value,
  disabled,
  className,
  children,
  ...props
}) => {
  const {
    type,
    value: groupValue,
    disabled: groupDisabled,
    onChange,
  } = React.useContext(ToggleGroupContext);

  const isPressed =
    type === "single"
      ? groupValue === value
      : Array.isArray(groupValue) && groupValue.includes(value);

  const isDisabled = disabled || groupDisabled;

  return (
    <ToggleItemButton
      type="button"
      role="button"
      aria-pressed={isPressed}
      $pressed={isPressed}
      $disabled={isDisabled}
      disabled={isDisabled}
      onClick={() => !isDisabled && onChange(value)}
      className={className}
      {...props}
    >
      {children}
    </ToggleItemButton>
  );
};
