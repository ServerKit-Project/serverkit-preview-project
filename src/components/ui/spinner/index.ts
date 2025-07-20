import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export interface SpinnerSize {
  small: string;
  medium: string;
  large: string;
}

export const sizes: SpinnerSize = {
  small: "1rem",
  medium: "2rem",
  large: "3rem",
};

export const StyledSpinner = styled.div<{ size: keyof SpinnerSize }>`
  width: ${({ size }) => sizes[size]};
  height: ${({ size }) => sizes[size]};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-top-color: ${({ theme }) => `${theme.colors.primary}40`};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

export interface SpinnerProps {
  size?: keyof SpinnerSize;
  className?: string;
}
