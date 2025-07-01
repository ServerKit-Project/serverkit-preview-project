import styled, { keyframes } from "styled-components";

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
