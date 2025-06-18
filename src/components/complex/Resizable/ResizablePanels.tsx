import React, { useState } from "react";
import styled from "styled-components";
import { Resizable } from "./index";

interface ResizablePanelsProps {
  children: React.ReactNode[];
  direction?: "horizontal" | "vertical";
  defaultSizes?: number[];
  minSizes?: number[];
  className?: string;
}

export const Container = styled.div<{ direction: "horizontal" | "vertical" }>`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === "horizontal" ? "row" : "column"};
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Panel = styled.div<{
  size: number;
  direction: "horizontal" | "vertical";
}>`
  flex: ${(props) => props.size} 0 0;
  overflow: hidden;
  position: relative;
  ${(props) =>
    props.direction === "horizontal"
      ? "height: 100%; border-right: 1px solid rgba(0, 0, 0, 0.1);"
      : "width: 100%; border-bottom: 1px solid rgba(0, 0, 0, 0.1);"}

  &:last-child {
    border: none;
  }
`;

export const ResizeHandle = styled.div<{
  direction: "horizontal" | "vertical";
}>`
  position: absolute;
  ${(props) =>
    props.direction === "horizontal"
      ? `
    right: -3px;
    width: 6px;
    height: 100%;
    cursor: col-resize;
  `
      : `
    bottom: -3px;
    height: 6px;
    width: 100%;
    cursor: row-resize;
  `}
  background-color: transparent;
  transition: background-color 0.2s;
  z-index: 10;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const ResizablePanels: React.FC<ResizablePanelsProps> = ({
  children,
  direction = "horizontal",
  defaultSizes,
  minSizes,
  className,
}) => {
  const panelCount = React.Children.count(children);
  const initialSizes = defaultSizes || Array(panelCount).fill(1 / panelCount);
  const [sizes, setSizes] = useState(initialSizes);
  const [isResizing, setIsResizing] = useState(false);

  const handleMouseDown = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);

    const startPos = direction === "horizontal" ? e.clientX : e.clientY;
    const startSizes = [...sizes];

    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;

      const currentPos = direction === "horizontal" ? e.clientX : e.clientY;
      const delta = currentPos - startPos;

      const containerRect = (
        e.currentTarget as HTMLElement
      )?.parentElement?.getBoundingClientRect();
      if (!containerRect) return;

      const containerSize =
        direction === "horizontal" ? containerRect.width : containerRect.height;
      const deltaPct = delta / containerSize;

      const newSizes = [...startSizes];
      newSizes[index] = startSizes[index] - deltaPct;
      newSizes[index + 1] = startSizes[index + 1] + deltaPct;

      // Apply minimum size constraints
      if (minSizes) {
        const minPct = minSizes.map((size) => size / containerSize);
        if (
          newSizes[index] < minPct[index] ||
          newSizes[index + 1] < minPct[index + 1]
        ) {
          return;
        }
      }

      setSizes(newSizes);
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <Container direction={direction} className={className}>
      {React.Children.map(children, (child, i) => (
        <Panel key={i} size={sizes[i]} direction={direction}>
          {child}
          {i < panelCount - 1 && (
            <ResizeHandle
              direction={direction}
              onMouseDown={(e) => handleMouseDown(i, e)}
            />
          )}
        </Panel>
      ))}
    </Container>
  );
};
