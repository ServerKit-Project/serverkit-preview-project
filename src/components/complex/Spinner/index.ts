import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

interface SpinnerSize {
  sm: string;
  md: string;
  lg: string;
}

const sizes: SpinnerSize = {
  sm: "1rem",
  md: "2rem",
  lg: "3rem",
};

export const StyledSpinner = styled.div<{ $size: keyof SpinnerSize }>`
  width: ${({ $size }) => sizes[$size]};
  height: ${({ $size }) => sizes[$size]};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-top-color: ${({ theme }) => `${theme.colors.primary}40`};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export interface SpinnerProps {
  size?: keyof SpinnerSize;
  className?: string;
}
