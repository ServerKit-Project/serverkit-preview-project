import React, { useCallback, useEffect, useRef, useState } from 'react';
import type { ResizableProps, ResizeHandleProps } from './types';
import {
  ResizableContainer,
  HandleWrapper,
  VerticalHandle,
  HorizontalHandle,
  CornerHandle,
} from './styles';

const ResizeHandle: React.FC<ResizeHandleProps> = ({
  direction,
  visible = true,
  className,
  onMouseDown,
  onTouchStart,
}) => {
  const Component = direction === 'top' || direction === 'bottom'
    ? HorizontalHandle
    : direction === 'corner'
    ? CornerHandle
    : VerticalHandle;

  return (
    <HandleWrapper position={direction} className={className}>
      <Component visible={visible} />
    </HandleWrapper>
  );
};

export const Resizable: React.FC<ResizableProps> = ({
  children,
  direction = 'both',
  minWidth = 100,
  maxWidth,
  minHeight = 100,
  maxHeight,
  defaultWidth,
  defaultHeight,
  preserveAspectRatio = false,
  onResizeStart,
  onResize,
  onResizeEnd,
  handleLocation = 'both',
  className,
  showHandles = true,
  animate = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [size, setSize] = useState({
    width: defaultWidth || 0,
    height: defaultHeight || 0,
  });
  const [aspectRatio, setAspectRatio] = useState(1);

  // Store resize state in refs to access in event listeners
  const resizeState = useRef({
    startX: 0,
    startY: 0,
    startWidth: 0,
    startHeight: 0,
    currentHandle: '' as 'left' | 'right' | 'top' | 'bottom' | 'corner' | '',
  });

  useEffect(() => {
    if (containerRef.current && !size.width && !size.height) {
      const rect = containerRef.current.getBoundingClientRect();
      setSize({
        width: defaultWidth || rect.width,
        height: defaultHeight || rect.height,
      });
      setAspectRatio(rect.width / rect.height);
    }
  }, [defaultWidth, defaultHeight, size]);

  const handleResizeStart = useCallback((
    e: React.MouseEvent | React.TouchEvent,
    handle: typeof resizeState.current.currentHandle
  ) => {
    e.preventDefault();
    const isTouch = 'touches' in e;
    const clientX = isTouch ? (e as React.TouchEvent).touches[0].clientX : (e as React.MouseEvent).clientX;
    const clientY = isTouch ? (e as React.TouchEvent).touches[0].clientY : (e as React.MouseEvent).clientY;

    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    resizeState.current = {
      startX: clientX,
      startY: clientY,
      startWidth: rect.width,
      startHeight: rect.height,
      currentHandle: handle,
    };

    setIsResizing(true);
    onResizeStart?.();

    document.addEventListener('mousemove', handleResize);
    document.addEventListener('mouseup', handleResizeEnd);
    document.addEventListener('touchmove', handleResize);
    document.addEventListener('touchend', handleResizeEnd);
  }, [onResizeStart]);

  const handleResize = useCallback((e: MouseEvent | TouchEvent) => {
    if (!isResizing) return;

    const isTouch = 'touches' in e;
    const clientX = isTouch ? e.touches[0].clientX : (e as MouseEvent).clientX;
    const clientY = isTouch ? e.touches[0].clientY : (e as MouseEvent).clientY;

    const deltaX = clientX - resizeState.current.startX;
    const deltaY = clientY - resizeState.current.startY;

    let newWidth = resizeState.current.startWidth;
    let newHeight = resizeState.current.startHeight;

    switch (resizeState.current.currentHandle) {
      case 'right':
        newWidth += deltaX;
        if (preserveAspectRatio) {
          newHeight = newWidth / aspectRatio;
        }
        break;
      case 'left':
        newWidth -= deltaX;
        if (preserveAspectRatio) {
          newHeight = newWidth / aspectRatio;
        }
        break;
      case 'bottom':
        newHeight += deltaY;
        if (preserveAspectRatio) {
          newWidth = newHeight * aspectRatio;
        }
        break;
      case 'top':
        newHeight -= deltaY;
        if (preserveAspectRatio) {
          newWidth = newHeight * aspectRatio;
        }
        break;
      case 'corner':
        newWidth += deltaX;
        newHeight += deltaY;
        if (preserveAspectRatio) {
          if (Math.abs(deltaX) > Math.abs(deltaY)) {
            newHeight = newWidth / aspectRatio;
          } else {
            newWidth = newHeight * aspectRatio;
          }
        }
        break;
    }

    // Apply constraints
    newWidth = Math.max(minWidth, Math.min(maxWidth || Infinity, newWidth));
    newHeight = Math.max(minHeight, Math.min(maxHeight || Infinity, newHeight));

    setSize({ width: newWidth, height: newHeight });
    onResize?.(newWidth, newHeight);
  }, [isResizing, minWidth, maxWidth, minHeight, maxHeight, preserveAspectRatio, aspectRatio, onResize]);

  const handleResizeEnd = useCallback(() => {
    setIsResizing(false);
    onResizeEnd?.(size.width, size.height);

    document.removeEventListener('mousemove', handleResize);
    document.removeEventListener('mouseup', handleResizeEnd);
    document.removeEventListener('touchmove', handleResize);
    document.removeEventListener('touchend', handleResizeEnd);
  }, [size, onResizeEnd, handleResize]);

  const showHandle = (handle: 'left' | 'right' | 'top' | 'bottom') => {
    if (!showHandles) return false;
    if (handleLocation === 'both') return true;
    if (handle === 'left' || handle === 'top') return handleLocation === 'start';
    return handleLocation === 'end';
  };

  return (
    <ResizableContainer
      ref={containerRef}
      className={className}
      style={{
        width: size.width || '100%',
        height: size.height || '100%',
      }}
      data-resizing={isResizing}
      animate={animate}
    >
      {children}

      {(direction === 'horizontal' || direction === 'both') && (
        <>
          {showHandle('left') && (
            <ResizeHandle
              direction="left"
              visible={showHandles}
              onMouseDown={(e: React.MouseEvent) => handleResizeStart(e, 'left')}
              onTouchStart={(e: React.TouchEvent) => handleResizeStart(e, 'left')}
            />
          )}
          {showHandle('right') && (
            <ResizeHandle
              direction="right"
              visible={showHandles}
              onMouseDown={(e: React.MouseEvent) => handleResizeStart(e, 'right')}
              onTouchStart={(e: React.TouchEvent) => handleResizeStart(e, 'right')}
            />
          )}
        </>
      )}

      {(direction === 'vertical' || direction === 'both') && (
        <>
          {showHandle('top') && (
            <ResizeHandle
              direction="top"
              visible={showHandles}
              onMouseDown={(e: React.MouseEvent) => handleResizeStart(e, 'top')}
              onTouchStart={(e: React.TouchEvent) => handleResizeStart(e, 'top')}
            />
          )}
          {showHandle('bottom') && (
            <ResizeHandle
              direction="bottom"
              visible={showHandles}
              onMouseDown={(e: React.MouseEvent) => handleResizeStart(e, 'bottom')}
              onTouchStart={(e: React.TouchEvent) => handleResizeStart(e, 'bottom')}
            />
          )}
        </>
      )}

      {direction === 'both' && handleLocation !== 'start' && (
        <ResizeHandle
          direction="corner"
          visible={showHandles}
          onMouseDown={(e: React.MouseEvent) => handleResizeStart(e, 'corner')}
          onTouchStart={(e: React.TouchEvent) => handleResizeStart(e, 'corner')}
        />
      )}
    </ResizableContainer>
  );
}; 