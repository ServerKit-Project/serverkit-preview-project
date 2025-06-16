import React, { createContext, useContext, useRef, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

interface CollapsibleContextValue {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  disabled?: boolean;
}

const CollapsibleContext = createContext<CollapsibleContextValue | undefined>(undefined);

export const useCollapsible = () => {
  const context = useContext(CollapsibleContext);
  if (!context) {
    throw new Error('useCollapsible must be used within a Collapsible component');
  }
  return context;
};

export interface CollapsibleProps {
  /**
   * Whether the collapsible is open
   * @default false
   */
  open?: boolean;

  /**
   * Callback fired when the open state changes
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * Whether the collapsible is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * The content of the collapsible
   */
  children: React.ReactNode;

  /**
   * Optional CSS class name
   */
  className?: string;
}

const CollapsibleRoot = styled.div`
  width: 100%;
`;

/**
 * Collapsible component for showing/hiding content
 * 
 * @example
 * ```tsx
 * const [open, setOpen] = React.useState(false);
 * 
 * <Collapsible open={open} onOpenChange={setOpen}>
 *   <CollapsibleTrigger>Click to expand</CollapsibleTrigger>
 *   <CollapsibleContent>
 *     This content can be shown or hidden.
 *   </CollapsibleContent>
 * </Collapsible>
 * ```
 */
export const Collapsible = ({
  open = false,
  onOpenChange,
  disabled = false,
  children,
  className,
}: CollapsibleProps) => {
  const handleOpenChange = (newOpen: boolean) => {
    if (!disabled) {
      onOpenChange?.(newOpen);
    }
  };

  return (
    <CollapsibleContext.Provider value={{ open, onOpenChange: handleOpenChange, disabled }}>
      <CollapsibleRoot className={className}>
        {children}
      </CollapsibleRoot>
    </CollapsibleContext.Provider>
  );
};

// CollapsibleTrigger Component
const TriggerButton = styled.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  cursor: pointer;
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
`;

export interface CollapsibleTriggerProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Whether to hide the default chevron icon
   * @default false
   */
  hideIcon?: boolean;
}

const ChevronIcon = styled.svg<{ $open: boolean }>`
  width: 1rem;
  height: 1rem;
  transition: transform 0.2s ease;
  transform: rotate(${props => props.$open ? '180deg' : '0deg'});
  flex-shrink: 0;
`;

export const CollapsibleTrigger = ({ children, className, hideIcon = false }: CollapsibleTriggerProps) => {
  const { open, onOpenChange, disabled } = useCollapsible();

  return (
    <TriggerButton
      type="button"
      onClick={() => onOpenChange(!open)}
      disabled={disabled}
      aria-expanded={open}
      className={className}
    >
      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        {children}
      </span>
      {!hideIcon && (
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
      )}
    </TriggerButton>
  );
};

// CollapsibleContent Component
const ContentWrapper = styled.div<{ $open: boolean; $animating: boolean }>`
  overflow: hidden;
  height: 0;
  opacity: 0;
  transition: height 0.2s ease-out, opacity 0.2s ease-out;

  ${props =>
    props.$open &&
    css`
      height: var(--radix-collapsible-content-height);
      opacity: 1;
    `}

  ${props =>
    props.$animating &&
    css`
      will-change: height, opacity;
    `}
`;

export interface CollapsibleContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CollapsibleContent = ({ children, className }: CollapsibleContentProps) => {
  const { open } = useCollapsible();
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const contentHeight = ref.current.scrollHeight;
      setHeight(contentHeight);
      setAnimating(true);
      
      const timer = setTimeout(() => {
        setAnimating(false);
      }, 200); // Match transition duration

      return () => clearTimeout(timer);
    }
  }, [children, open]);

  return (
    <ContentWrapper
      ref={ref}
      $open={open}
      $animating={animating}
      style={{ '--radix-collapsible-content-height': `${height}px` } as React.CSSProperties}
      className={className}
    >
      {children}
    </ContentWrapper>
  );
}; 