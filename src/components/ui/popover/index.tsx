import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { PopoverProps, PopoverTriggerProps, PopoverContentProps } from './types';
import { StyledPopoverContent, StyledPopoverArrow, StyledPopoverTrigger } from './styles';

interface PopoverContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLElement>;
}

const PopoverContext = createContext<PopoverContextType>({
  open: false,
  setOpen: () => {},
  triggerRef: { current: null },
});

export const Popover = ({ children, defaultOpen = false, open: controlledOpen, onOpenChange }: PopoverProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const triggerRef = useRef<HTMLElement>(null);
  
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;
  
  const setOpen = (value: boolean) => {
    if (!isControlled) {
      setUncontrolledOpen(value);
    }
    onOpenChange?.(value);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        open &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node) &&
        !event.defaultPrevented
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, setOpen]);

  return (
    <PopoverContext.Provider value={{ open, setOpen, triggerRef }}>
      {children}
    </PopoverContext.Provider>
  );
};

export const PopoverTrigger = ({ children, asChild }: PopoverTriggerProps) => {
  const { open, setOpen, triggerRef } = useContext(PopoverContext);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(!open);
  };

  if (asChild) {
    return React.cloneElement(children as React.ReactElement, {
      ref: triggerRef,
      onClick: handleClick,
      'aria-expanded': open,
      'aria-haspopup': true,
    });
  }

  return (
    <StyledPopoverTrigger
      ref={triggerRef as React.RefObject<HTMLButtonElement>}
      onClick={handleClick}
      aria-expanded={open}
      aria-haspopup={true}
    >
      {children}
    </StyledPopoverTrigger>
  );
};

const getOptimalPosition = (
  triggerRect: DOMRect,
  contentRect: DOMRect,
  preferredSide: PopoverContentProps['side'],
  collisionPadding: number = 8
) => {
  const viewport = {
    left: collisionPadding,
    top: collisionPadding,
    right: window.innerWidth - collisionPadding,
    bottom: window.innerHeight - collisionPadding,
  };

  const getPositionForSide = (side: NonNullable<PopoverContentProps['side']>) => {
    const positions = {
      top: {
        top: triggerRect.top - contentRect.height - 5,
        left: triggerRect.left + (triggerRect.width - contentRect.width) / 2,
        side: 'top' as const,
      },
      right: {
        top: triggerRect.top + (triggerRect.height - contentRect.height) / 2,
        left: triggerRect.right + 5,
        side: 'right' as const,
      },
      bottom: {
        top: triggerRect.bottom + 5,
        left: triggerRect.left + (triggerRect.width - contentRect.width) / 2,
        side: 'bottom' as const,
      },
      left: {
        top: triggerRect.top + (triggerRect.height - contentRect.height) / 2,
        left: triggerRect.left - contentRect.width - 5,
        side: 'left' as const,
      },
    };

    return positions[side];
  };

  const checkFits = (position: ReturnType<typeof getPositionForSide>) => {
    return (
      position.left >= viewport.left &&
      position.left + contentRect.width <= viewport.right &&
      position.top >= viewport.top &&
      position.top + contentRect.height <= viewport.bottom
    );
  };

  // Try preferred side first
  const preferred = getPositionForSide(preferredSide || 'bottom');
  if (checkFits(preferred)) {
    return preferred;
  }

  // Try opposite side
  const opposites = {
    top: 'bottom',
    bottom: 'top',
    left: 'right',
    right: 'left',
  } as const;

  const oppositeSide = opposites[preferredSide || 'bottom'];
  const oppositePosition = getPositionForSide(oppositeSide);
  if (checkFits(oppositePosition)) {
    return oppositePosition;
  }

  // Try remaining sides
  const allSides: NonNullable<PopoverContentProps['side']>[] = ['top', 'right', 'bottom', 'left'];
  for (const side of allSides) {
    if (side === preferredSide || side === oppositeSide) continue;
    const position = getPositionForSide(side);
    if (checkFits(position)) {
      return position;
    }
  }

  // If no perfect position found, adjust the preferred position to fit within viewport
  return {
    ...preferred,
    top: Math.max(viewport.top, Math.min(preferred.top, viewport.bottom - contentRect.height)),
    left: Math.max(viewport.left, Math.min(preferred.left, viewport.right - contentRect.width)),
  };
};

export const PopoverContent = ({
  children,
  align = 'center',
  side = 'bottom',
  sideOffset,
  alignOffset,
  hideArrow,
  className,
  avoidCollisions = true,
  collisionPadding = 8,
  sticky = 'partial',
  hideWhenDetached = false,
  portalContainer,
  animation,
}: PopoverContentProps) => {
  const { open, triggerRef } = useContext(PopoverContext);
  const contentRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0, side });

  useEffect(() => {
    if (!open || !contentRef.current || !triggerRef.current) return;

    const updatePosition = () => {
      const content = contentRef.current;
      const trigger = triggerRef.current;
      if (!content || !trigger) return;

      const triggerRect = trigger.getBoundingClientRect();
      const contentRect = content.getBoundingClientRect();

      if (avoidCollisions) {
        const optimalPosition = getOptimalPosition(triggerRect, contentRect, side, collisionPadding);
        setPosition(optimalPosition);
      } else {
        const offset = sideOffset || 5;
        let top = 0;
        let left = 0;

        switch (side) {
          case 'top':
            top = triggerRect.top - contentRect.height - offset;
            left = triggerRect.left + (triggerRect.width - contentRect.width) / 2;
            break;
          case 'right':
            top = triggerRect.top + (triggerRect.height - contentRect.height) / 2;
            left = triggerRect.right + offset;
            break;
          case 'left':
            top = triggerRect.top + (triggerRect.height - contentRect.height) / 2;
            left = triggerRect.left - contentRect.width - offset;
            break;
          default: // bottom
            top = triggerRect.bottom + offset;
            left = triggerRect.left + (triggerRect.width - contentRect.width) / 2;
        }

        // Apply alignment offset
        if (alignOffset) {
          if (align === 'start') {
            if (side === 'top' || side === 'bottom') {
              left = triggerRect.left + alignOffset;
            } else {
              top = triggerRect.top + alignOffset;
            }
          } else if (align === 'end') {
            if (side === 'top' || side === 'bottom') {
              left = triggerRect.right - contentRect.width - alignOffset;
            } else {
              top = triggerRect.bottom - contentRect.height - alignOffset;
            }
          }
        }

        setPosition({ top, left, side });
      }
    };

    updatePosition();

    if (sticky === 'always' || (sticky === 'partial' && position.side === side)) {
      window.addEventListener('resize', updatePosition);
      window.addEventListener('scroll', updatePosition, true);

      return () => {
        window.removeEventListener('resize', updatePosition);
        window.removeEventListener('scroll', updatePosition, true);
      };
    }
  }, [open, side, align, sideOffset, alignOffset, avoidCollisions, collisionPadding, sticky, position.side]);

  if (!open) return null;

  const content = (
    <StyledPopoverContent
      ref={contentRef}
      side={position.side}
      align={align}
      sideOffset={sideOffset}
      alignOffset={alignOffset}
      className={className}
      sticky={sticky}
      animation={animation}
      style={{
        position: 'fixed',
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
      data-state={open ? 'open' : 'closed'}
    >
      {children}
      {!hideArrow && <StyledPopoverArrow side={position.side} />}
    </StyledPopoverContent>
  );

  return portalContainer ? createPortal(content, portalContainer) : content;
}; 