import React from 'react';
import styled, { css } from 'styled-components';

export interface BadgeProps {
  /**
   * The content of the badge
   */
  children: React.ReactNode;

  /**
   * The variant of the badge
   * @default "default"
   */
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning';

  /**
   * Optional CSS class name
   */
  className?: string;
}

const variants = {
  default: css`
    background-color: #020817;
    color: #ffffff;
    border: 1px solid transparent;
  `,
  secondary: css`
    background-color: #f3f4f6;
    color: #1f2937;
    border: 1px solid transparent;
  `,
  destructive: css`
    background-color: #ef4444;
    color: #ffffff;
    border: 1px solid transparent;
  `,
  outline: css`
    background-color: transparent;
    color: #1f2937;
    border: 1px solid #e5e7eb;
  `,
  success: css`
    background-color: #22c55e;
    color: #ffffff;
    border: 1px solid transparent;
  `,
  warning: css`
    background-color: #f59e0b;
    color: #ffffff;
    border: 1px solid transparent;
  `,
};

const StyledBadge = styled.div<{ $variant: BadgeProps['variant'] }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  border-radius: 9999px;
  padding: 0.125rem 0.625rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.25;
  white-space: nowrap;
  transition: all 0.2s ease;
  user-select: none;

  ${props => variants[props.$variant || 'default']}

  &:hover {
    opacity: 0.9;
  }
`;

/**
 * Badge component for displaying short status descriptors
 * 
 * @example
 * ```tsx
 * <Badge>Default</Badge>
 * <Badge variant="secondary">Secondary</Badge>
 * <Badge variant="destructive">Destructive</Badge>
 * ```
 */
export const Badge = ({
  children,
  variant = 'default',
  className,
}: BadgeProps) => {
  return (
    <StyledBadge $variant={variant} className={className}>
      {children}
    </StyledBadge>
  );
}; 