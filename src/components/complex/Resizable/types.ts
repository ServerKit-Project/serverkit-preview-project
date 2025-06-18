import { ReactNode } from 'react';

export type Direction = 'horizontal' | 'vertical' | 'both';
export type HandleLocation = 'start' | 'end' | 'both';

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
  direction: 'left' | 'right' | 'top' | 'bottom' | 'corner';
  /** Whether the handle is visible */
  visible?: boolean;
  /** Custom class name */
  className?: string;
  /** Mouse down event handler */
  onMouseDown?: (e: React.MouseEvent) => void;
  /** Touch start event handler */
  onTouchStart?: (e: React.TouchEvent) => void;
} 