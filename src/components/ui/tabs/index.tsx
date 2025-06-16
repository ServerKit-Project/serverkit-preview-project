import React, { createContext, useContext, useState } from 'react';
import styled, { css } from 'styled-components';

interface TabsContextValue {
  value: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

const TabsContext = createContext<TabsContextValue | undefined>(undefined);

export const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('useTabs must be used within a Tabs component');
  }
  return context;
};

// Root Tabs Component
export interface TabsProps {
  /**
   * The value of the currently selected tab
   */
  value?: string;

  /**
   * The default value of the tabs
   */
  defaultValue: string;

  /**
   * Callback fired when the value changes
   */
  onValueChange?: (value: string) => void;

  /**
   * The content of the tabs
   */
  children: React.ReactNode;

  /**
   * Optional CSS class name
   */
  className?: string;
}

const TabsRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Tabs = ({
  value: controlledValue,
  defaultValue,
  onValueChange,
  children,
  className,
}: TabsProps) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const value = controlledValue ?? uncontrolledValue;

  const handleValueChange = (newValue: string) => {
    if (controlledValue === undefined) {
      setUncontrolledValue(newValue);
    }
    onValueChange?.(newValue);
  };

  return (
    <TabsContext.Provider value={{ value, defaultValue, onValueChange: handleValueChange }}>
      <TabsRoot className={className}>
        {children}
      </TabsRoot>
    </TabsContext.Provider>
  );
};

// TabsList Component
const StyledList = styled.div`
  display: inline-flex;
  padding: 0.25rem;
  background-color: #F3F4F6;
  border-radius: 0.75rem;
  gap: 0.25rem;
  width: fit-content;
`;

export interface TabsListProps {
  children: React.ReactNode;
  className?: string;
}

export const TabsList = ({ children, className }: TabsListProps) => {
  return <StyledList className={className}>{children}</StyledList>;
};

// TabsTrigger Component
const StyledTrigger = styled.button<{ $selected: boolean }>`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.875rem;
  font-size: 0.875rem;
  line-height: 1.25;
  font-weight: 500;
  color: #6B7280;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.15s ease;
  user-select: none;
  white-space: nowrap;
  position: relative;

  &:hover {
    color: #111827;
  }

  &:focus-visible {
    outline: 2px solid #E5E7EB;
    outline-offset: 2px;
  }

  ${props => props.$selected && css`
    background-color: white;
    color: #111827;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export interface TabsTriggerProps {
  /**
   * The value of this tab
   */
  value: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export const TabsTrigger = ({ value, children, className, disabled }: TabsTriggerProps) => {
  const { value: selectedValue, onValueChange } = useTabs();
  const isSelected = value === selectedValue;

  return (
    <StyledTrigger
      type="button"
      role="tab"
      aria-selected={isSelected}
      disabled={disabled}
      $selected={isSelected}
      onClick={() => onValueChange?.(value)}
      className={className}
    >
      {children}
    </StyledTrigger>
  );
};

// TabsContent Component
const StyledContent = styled.div<{ $selected: boolean }>`
  margin-top: 0.75rem;
  color: #374151;
  font-size: 0.875rem;
  line-height: 1.5;
  display: ${props => props.$selected ? 'block' : 'none'};

  &:focus-visible {
    outline: 2px solid #E5E7EB;
    outline-offset: 2px;
  }
`;

export interface TabsContentProps {
  /**
   * The value of this tab panel
   */
  value: string;
  children: React.ReactNode;
  className?: string;
}

export const TabsContent = ({ value, children, className }: TabsContentProps) => {
  const { value: selectedValue } = useTabs();
  const isSelected = value === selectedValue;

  return (
    <StyledContent
      role="tabpanel"
      tabIndex={0}
      $selected={isSelected}
      className={className}
    >
      {children}
    </StyledContent>
  );
}; 