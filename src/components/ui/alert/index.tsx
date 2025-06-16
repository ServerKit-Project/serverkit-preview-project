import React from 'react';
import styled, { css } from 'styled-components';

export interface AlertProps {
  /**
   * The variant of the alert
   * @default "info"
   */
  variant?: 'info' | 'warning' | 'error' | 'success';

  /**
   * The title of the alert
   */
  title?: string;

  /**
   * Optional CSS class name
   */
  className?: string;

  /**
   * The content of the alert
   */
  children: React.ReactNode;
}

const variants = {
  info: {
    bg: '#f3f4f6',
    border: '#d1d5db',
    icon: '#6b7280',
    title: '#111827',
  },
  warning: {
    bg: '#fef3c7',
    border: '#fcd34d',
    icon: '#d97706',
    title: '#92400e',
  },
  error: {
    bg: '#fee2e2',
    border: '#fca5a5',
    icon: '#dc2626',
    title: '#b91c1c',
  },
  success: {
    bg: '#dcfce7',
    border: '#86efac',
    icon: '#16a34a',
    title: '#15803d',
  },
};

const AlertContainer = styled.div<{ $variant: keyof typeof variants }>`
  position: relative;
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid;
  display: flex;
  gap: 0.75rem;

  ${props => css`
    background-color: ${variants[props.$variant].bg};
    border-color: ${variants[props.$variant].border};
  `}
`;

const IconWrapper = styled.div<{ $variant: keyof typeof variants }>`
  flex-shrink: 0;
  color: ${props => variants[props.$variant].icon};
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Title = styled.h5<{ $variant: keyof typeof variants }>`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: ${props => variants[props.$variant].title};
`;

const Description = styled.div`
  font-size: 0.875rem;
  color: #4b5563;
`;

const getIcon = (variant: keyof typeof variants) => {
  switch (variant) {
    case 'info':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
      );
    case 'warning':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
      );
    case 'error':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>
      );
    case 'success':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
  }
};

/**
 * Alert component for displaying important messages to users
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Alert>
 *   This is an informational alert.
 * </Alert>
 * 
 * // With title and variant
 * <Alert
 *   variant="warning"
 *   title="Warning"
 * >
 *   Your trial period is ending soon.
 * </Alert>
 * 
 * // Success message
 * <Alert
 *   variant="success"
 *   title="Success"
 * >
 *   Your changes have been saved.
 * </Alert>
 * ```
 */
export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  className,
  children,
}) => {
  return (
    <AlertContainer $variant={variant} className={className}>
      <IconWrapper $variant={variant}>
        {getIcon(variant)}
      </IconWrapper>
      <Content>
        {title && <Title $variant={variant}>{title}</Title>}
        <Description>{children}</Description>
      </Content>
    </AlertContainer>
  );
}; 