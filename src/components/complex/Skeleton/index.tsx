import React from "react";
import styled, { keyframes } from "styled-components";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Optional CSS class name
   */
  className?: string;
}

const pulse = keyframes`
  50% {
    opacity: 0.5;
  }
`;

export const StyledSkeleton = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  width: 100%;
  height: 20px;
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  &[data-loading] {
    cursor: wait;
  }
`;

/**
 * A skeleton placeholder component used to indicate a loading state.
 *
 * @example
 * ```tsx
 * // Basic skeleton
 * <Skeleton />
 *
 * // Custom sized skeleton
 * <Skeleton style={{ width: '64px', height: '64px', borderRadius: '9999px' }} />
 *
 * // Multiple skeletons
 * <div>
 *   <Skeleton style={{ marginBottom: '0.5rem' }} />
 *   <Skeleton style={{ width: '60%' }} />
 * </div>
 * ```
 */
export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => {
    return (
      <StyledSkeleton ref={ref} className={className} data-loading {...props} />
    );
  }
);

Skeleton.displayName = "Skeleton";
