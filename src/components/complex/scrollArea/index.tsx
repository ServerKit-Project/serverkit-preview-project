import styled from "styled-components";

export const StyledScrollArea = styled.div<{ className?: string }>`
  position: relative;
  overflow: auto;
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.colors.pureWhite};
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.lightGray};
    border-radius: ${({ theme }) => theme.borderRadius};
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.mediumGray};
  }
`;
