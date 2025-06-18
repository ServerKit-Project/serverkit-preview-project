import * as React from "react";
import styled from "styled-components";

export const StyledScrollArea = styled.div<{ className?: string }>`
  position: relative;
  overflow: auto;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: white;
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: hsl(240 5.9% 90%);
    border-radius: 8px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: hsl(240 5.9% 80%);
  }
`;

export interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
