import React, { createContext, useContext, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

interface SelectContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  value: string;
  setValue: (value: string) => void;
  disabled?: boolean;
}

const SelectContext = createContext<SelectContextValue | undefined>(undefined);

export const useSelect = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error('useSelect must be used within a Select component');
  }
  return context;
};

// Root Select Component
export interface SelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

const SelectRoot = styled.div`
  position: relative;
  width: fit-content;
`;

export const Select = ({
  value: controlledValue,
  onValueChange,
  disabled = false,
  children,
  className,
}: SelectProps) => {
  const [uncontrolledValue, setUncontrolledValue] = useState('');
  const [open, setOpen] = useState(false);

  const value = controlledValue ?? uncontrolledValue;
  const setValue = (newValue: string) => {
    if (controlledValue === undefined) {
      setUncontrolledValue(newValue);
    }
    onValueChange?.(newValue);
    setOpen(false);
  };

  return (
    <SelectContext.Provider value={{ open, setOpen, value, setValue, disabled }}>
      <SelectRoot className={className}>
        {children}
      </SelectRoot>
    </SelectContext.Provider>
  );
};

// Select Trigger Component
const StyledTrigger = styled.button<{ $open: boolean }>`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-width: 140px;
  padding: 0.375rem 0.625rem;
  font-size: 0.875rem;
  line-height: 1;
  height: 1rem;
  gap: 0.375rem;
  background-color: white;
  color: #374151;
  border: 1px solid #E5E7EB;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: #F9FAFB;
    border-color: #D1D5DB;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background-color: #F3F4F6;
  }

  &:focus-visible {
    outline: 2px solid #E5E7EB;
    outline-offset: 2px;
    border-color: #D1D5DB;
    background-color: #F9FAFB;
  }

  ${props => props.$open && css`
    border-color: #D1D5DB;
    background-color: #F9FAFB;
    box-shadow: 0 0 0 1px #D1D5DB, 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  `}
`;

const ChevronIcon = styled.svg<{ $open: boolean }>`
  width: 0.75rem;
  height: 0.75rem;
  transition: transform 0.2s ease;
  transform: rotate(${props => props.$open ? '180deg' : '0deg'});
  color: #6B7280;
  margin-right: -0.125rem;
`;

export interface SelectTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export const SelectTrigger = ({ children, className }: SelectTriggerProps) => {
  const { open, setOpen, disabled } = useSelect();

  return (
    <StyledTrigger
      type="button"
      onClick={() => setOpen(!open)}
      disabled={disabled}
      $open={open}
      className={className}
    >
      {children}
      <ChevronIcon
        $open={open}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 9 6 6 6-6"/>
      </ChevronIcon>
    </StyledTrigger>
  );
};

// Select Value Component
const StyledValue = styled.span`
  color: #374151;
  font-weight: 400;

  &[data-placeholder] {
    color: #9CA3AF;
  }
`;

export interface SelectValueProps {
  placeholder?: string;
  className?: string;
}

export const SelectValue = ({ placeholder, className }: SelectValueProps) => {
  const { value } = useSelect();
  return (
    <StyledValue
      data-placeholder={!value}
      className={className}
    >
      {value || placeholder}
    </StyledValue>
  );
};

// Select Content Component
const contentAnimation = {
  in: keyframes`
    from {
      opacity: 0;
      transform: translateY(-4px) scale(0.98);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  `,
  out: keyframes`
    from {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    to {
      opacity: 0;
      transform: translateY(-4px) scale(0.98);
    }
  `,
};

const StyledContent = styled.div<{ $open: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 180px;
  width: 100%;
  margin-top: 0.25rem;
  max-height: var(--radix-select-content-available-height, 250px);
  overflow-y: auto;
  background-color: white;
  border: 1px solid #E5E7EB;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 50;
  animation: ${props => props.$open ? contentAnimation.in : contentAnimation.out} 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  transform-origin: top;
  display: ${props => props.$open ? 'block' : 'none'};

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #F3F4F6;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #D1D5DB;
    border-radius: 3px;
    
    &:hover {
      background: #9CA3AF;
    }
  }
`;

export interface SelectContentProps {
  children: React.ReactNode;
  className?: string;
}

export const SelectContent = ({ children, className }: SelectContentProps) => {
  const { open } = useSelect();

  return (
    <StyledContent $open={open} className={className}>
      {children}
    </StyledContent>
  );
};

// Select Group Component
const StyledGroup = styled.div`
  padding: 0.25rem;
  min-width: 140px;
  & + & {
    border-top: 1px solid #F3F4F6;
  }
`;

export interface SelectGroupProps {
  children: React.ReactNode;
  className?: string;
}

export const SelectGroup = ({ children, className }: SelectGroupProps) => {
  return <StyledGroup className={className}>{children}</StyledGroup>;
};

// Select Label Component
const StyledLabel = styled.div`
  padding: 0.375rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #6B7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export interface SelectLabelProps {
  children: React.ReactNode;
  className?: string;
}

export const SelectLabel = ({ children, className }: SelectLabelProps) => {
  return <StyledLabel className={className}>{children}</StyledLabel>;
};

// Select Item Component
const StyledItem = styled.div<{ $selected: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.375rem 0.5rem;
  padding-left: 1.375rem;
  font-size: 0.875rem;
  color: #374151;
  cursor: pointer;
  user-select: none;
  outline: none;
  transition: all 0.15s ease;
  border-radius: 0.25rem;
  margin: 0.125rem;

  &:hover {
    background-color: #F3F4F6;
  }

  &:focus-visible {
    background-color: #F3F4F6;
    outline: 2px solid #E5E7EB;
    outline-offset: -2px;
  }

  ${props => props.$selected && css`
    background-color: #F3F4F6;
    color: #1F2937;
    font-weight: 500;

    &::before {
      content: "✓";
      position: absolute;
      left: 0.375rem;
      color: #6B7280;
      font-weight: bold;
    }

    &:hover {
      background-color: #E5E7EB;
    }
  `}
`;

export interface SelectItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export const SelectItem = ({ value, children, className }: SelectItemProps) => {
  const { value: selectedValue, setValue } = useSelect();
  const selected = value === selectedValue;

  return (
    <StyledItem
      onClick={() => setValue(value)}
      $selected={selected}
      className={className}
      role="option"
      aria-selected={selected}
    >
      {children}
    </StyledItem>
  );
}; 