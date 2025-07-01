import React from "react";
import styled, { keyframes, css } from "styled-components";

const indeterminateAnim = keyframes`
  from {
    transform: translateX(-100%) scaleX(0.5);
  }
  to {
    transform: translateX(100%) scaleX(0.5);
  }
`;

export const ProgressRoot = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
  background-color: ${({ theme }) => `${theme.colors.background.secondary}40`};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

export const ProgressIndicator = styled.div<{
  $value: number;
  $max: number;
  $indeterminate: boolean;
}>`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);

  ${(props) =>
    !props.$indeterminate &&
    css`
      transform: translateX(-${100 - (props.$value / props.$max) * 100}%);
    `}

  ${(props) =>
    props.$indeterminate &&
    css`
      position: absolute;
      left: 0;
      right: 0;
      transform-origin: left;
      animation: ${indeterminateAnim} 1s infinite linear;
      background-color: ${({ theme }) => theme.colors.primary};
    `}
`;

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The value of the progress indicator.
   * If null, the progress bar will be indeterminate
   */
  value?: number | null;
  /**
   * The maximum value
   */
  max?: number;
  /**
   * Whether the progress is indeterminate
   */
  indeterminate?: boolean;
}
