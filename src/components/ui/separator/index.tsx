import React from 'react';
import styled from 'styled-components';

interface SeparatorProps {
  /**
   * The orientation of the separator.
   * @default "horizontal"
   */
  orientation?: 'horizontal' | 'vertical';
  
  /**
   * When true, indicates that the separator is purely decorative and does not have any semantic meaning.
   * @default true
   */
  decorative?: boolean;
  
  /**
   * Optional CSS class name
   */
  className?: string;
  
  /**
   * Optional inline styles
   */
  style?: React.CSSProperties;
}

const StyledSeparator = styled.div<{ $orientation?: 'horizontal' | 'vertical' }>`
  border-radius: 9999px;
  flex-shrink: 0;
  background-color: rgba(0, 0, 0, 0.1);

  ${props => props.$orientation === 'vertical' ? `
    height: 100%;
    width: 1px;
    margin: 0 1rem;
  ` : `
    width: 100%;
    height: 1px;
    margin: 1rem 0;
  `}
`;

/**
 * A visual divider with support for horizontal and vertical orientations.
 * 
 * @example
 * ```tsx
 * // Horizontal separator
 * <Separator />
 * 
 * // Vertical separator
 * <Separator orientation="vertical" />
 * 
 * // Custom styled separator
 * <Separator style={{ backgroundColor: '#3b82f6', height: '2px' }} />
 * ```
 */
export const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ orientation = 'horizontal', decorative = true, className, style, ...props }, ref) => {
    return (
      <StyledSeparator
        ref={ref}
        className={className}
        style={style}
        $orientation={orientation}
        role={decorative ? 'none' : 'separator'}
        aria-orientation={orientation}
        {...props}
      />
    );
  }
);

Separator.displayName = 'Separator';