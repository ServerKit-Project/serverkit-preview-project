import styled, { css } from "styled-components";
import type { ReactNode } from "react";

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
      ? `height: 100%; border-right: 1px solid ${props.theme.colors.border.default};`
      : `width: 100%; border-bottom: 1px solid ${props.theme.colors.border.default};`}

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

export const ResizableContainer = styled.div<{
  direction?: Direction;
  animate?: boolean;
}>`
  position: relative;
  display: flex;
  flex-direction: ${(props) =>
    props.direction === "vertical" ? "column" : "row"};
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;

  ${(props) =>
    props.animate &&
    css`
      transition: width 0.2s ease, height 0.2s ease;
    `}

  &[data-resizing="true"] {
    user-select: none;
    * {
      user-select: none;
    }
  }
`;

export const ResizablePanel = styled.div<{
  defaultSize?: number;
  minSize?: number;
  maxSize?: number;
  direction?: Direction;
  animate?: boolean;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  min-width: ${(props) => props.minSize || 0}px;
  min-height: ${(props) => props.minSize || 0}px;
  max-width: ${(props) => props.maxSize || "none"};
  max-height: ${(props) => props.maxSize || "none"};

  ${(props) =>
    props.defaultSize &&
    css`
      flex-basis: ${props.defaultSize}px;
    `}

  ${(props) =>
    props.animate &&
    css`
      transition: flex-basis 0.2s ease;
    `}

  &[data-resizing="true"] {
    transition: none;
  }
`;

const handleBaseStyles = css`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  touch-action: none;
  cursor: pointer;
  user-select: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  z-index: 10;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.hover.secondary};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.background.secondary};
  }
`;

export const VerticalHandle = styled.div<{ visible?: boolean }>`
  ${handleBaseStyles}
  width: 8px;
  height: 100%;
  top: 0;
  cursor: col-resize;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.2s, background-color 0.2s;

  &:hover {
    opacity: 1;
  }

  &::after {
    content: "";
    width: 2px;
    height: 24px;
    background-color: ${({ theme }) => theme.colors.border.default};
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: background-color 0.2s;
  }

  &:hover::after {
    background-color: ${({ theme }) => theme.colors.border.hover};
  }

  &:active::after {
    background-color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const HorizontalHandle = styled.div<{ visible?: boolean }>`
  ${handleBaseStyles}
  width: 100%;
  height: 8px;
  left: 0;
  cursor: row-resize;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.2s, background-color 0.2s;

  &:hover {
    opacity: 1;
  }

  &::after {
    content: "";
    width: 24px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.border.default};
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: background-color 0.2s;
  }

  &:hover::after {
    background-color: ${({ theme }) => theme.colors.border.hover};
  }

  &:active::after {
    background-color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const CornerHandle = styled.div<{ visible?: boolean }>`
  ${handleBaseStyles}
  width: 12px;
  height: 12px;
  cursor: nwse-resize;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.2s, background-color 0.2s;

  &:hover {
    opacity: 1;
  }

  &::after {
    content: "";
    width: 6px;
    height: 6px;
    background-color: ${({ theme }) => theme.colors.border.default};
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: background-color 0.2s;
  }

  &:hover::after {
    background-color: ${({ theme }) => theme.colors.border.hover};
  }

  &:active::after {
    background-color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const HandleWrapper = styled.div<{
  position: "left" | "right" | "top" | "bottom" | "corner";
}>`
  position: absolute;
  ${(props) => {
    switch (props.position) {
      case "left":
        return css`
          left: -4px;
          top: 0;
          bottom: 0;
        `;
      case "right":
        return css`
          right: -4px;
          top: 0;
          bottom: 0;
        `;
      case "top":
        return css`
          top: -4px;
          left: 0;
          right: 0;
        `;
      case "bottom":
        return css`
          bottom: -4px;
          left: 0;
          right: 0;
        `;
      case "corner":
        return css`
          right: -6px;
          bottom: -6px;
        `;
    }
  }}
`;

export interface ResizableProps {
  /** The content to be resized */
  children: ReactNode;
  /** The direction in which the element can be resized */
  direction?: Direction;
  /** The minimum width of the element (in pixels) */
  minWidth?: number;
  /** The maximum width of the element (in pixels) */
  maxWidth?: number;
  /** The minimum height of the element (in pixels) */
  minHeight?: number;
  /** The maximum height of the element (in pixels) */
  maxHeight?: number;
  /** The initial width of the element (in pixels) */
  defaultWidth?: number;
  /** The initial height of the element (in pixels) */
  defaultHeight?: number;
  /** Whether to preserve aspect ratio during resize */
  preserveAspectRatio?: boolean;
  /** Callback fired when resizing starts */
  onResizeStart?: () => void;
  /** Callback fired during resize */
  onResize?: (width: number, height: number) => void;
  /** Callback fired when resizing ends */
  onResizeEnd?: (width: number, height: number) => void;
  /** Where to place the resize handles */
  handleLocation?: HandleLocation;
  /** Custom class name */
  className?: string;
  /** Whether to show resize handles */
  showHandles?: boolean;
  /** Whether to animate size changes */
  animate?: boolean;
}

export interface ResizeHandleProps {
  /** The direction this handle resizes */
  direction: "left" | "right" | "top" | "bottom" | "corner";
  /** Whether the handle is visible */
  visible?: boolean;
  /** Custom class name */
  className?: string;
  /** Mouse down event handler */
  onMouseDown?: (e: React.MouseEvent) => void;
  /** Touch start event handler */
  onTouchStart?: (e: React.TouchEvent) => void;
}
export type Direction = "horizontal" | "vertical" | "both";
export type HandleLocation = "start" | "end" | "both";
