import { ReactNode } from 'react';

/**
 * Props for the root Popover component
 */
export interface PopoverProps {
  /** The content of the popover (PopoverTrigger and PopoverContent) */
  children: ReactNode;
  /** Whether the popover should be open by default */
  defaultOpen?: boolean;
  /** Controlled open state */
  open?: boolean;
  /** Callback fired when open state changes */
  onOpenChange?: (open: boolean) => void;
}

/**
 * Props for the PopoverTrigger component
 */
export interface PopoverTriggerProps {
  /** The trigger element */
  children: ReactNode;
  /** Whether to merge props instead of wrapping the child in a button */
  asChild?: boolean;
}

/**
 * Props for the PopoverContent component
 */
export interface PopoverContentProps {
  /** The content to display in the popover */
  children: ReactNode;
  
  /** Alignment relative to the trigger
   * @default "center"
   */
  align?: 'start' | 'center' | 'end';
  
  /** The preferred side to place the popover
   * @default "bottom"
   */
  side?: 'top' | 'right' | 'bottom' | 'left';
  
  /** Distance in pixels from the trigger
   * @default 5
   */
  sideOffset?: number;
  
  /** Offset in pixels from the alignment edge
   * @default 0
   */
  alignOffset?: number;
  
  /** Padding between arrow and edges
   * @default 0
   */
  arrowPadding?: number;
  
  /** Whether to hide the arrow indicator
   * @default false
   */
  hideArrow?: boolean;
  
  /** Optional CSS class name */
  className?: string;
  
  /** Whether to automatically adjust position to avoid viewport edges
   * @default true
   */
  avoidCollisions?: boolean;
  
  /** Minimum padding from viewport edges when avoiding collisions
   * @default 8
   */
  collisionPadding?: number;
  
  /** How the popover maintains position during scroll
   * - 'partial': Only when preferred side is used
   * - 'always': Always maintains position
   * @default "partial"
   */
  sticky?: 'partial' | 'always';
  
  /** Whether to hide when the trigger is not visible
   * @default false
   */
  hideWhenDetached?: boolean;
  
  /** Optional container for rendering in a portal */
  portalContainer?: HTMLElement;
  
  /** Animation configuration
   * @default { duration: 200, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' }
   */
  animation?: {
    /** Animation duration in milliseconds */
    duration?: number;
    /** CSS easing function */
    easing?: string;
  };
} 