import styled, { css } from 'styled-components';
import type { Direction, HandleLocation } from './types';

export const ResizableContainer = styled.div<{
  direction?: Direction;
  animate?: boolean;
}>`
  position: relative;
  display: flex;
  flex-direction: ${props => props.direction === 'vertical' ? 'column' : 'row'};
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;

  ${props => props.animate && css`
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
  min-width: ${props => props.minSize || 0}px;
  min-height: ${props => props.minSize || 0}px;
  max-width: ${props => props.maxSize || 'none'};
  max-height: ${props => props.maxSize || 'none'};

  ${props => props.defaultSize && css`
    flex-basis: ${props.defaultSize}px;
  `}

  ${props => props.animate && css`
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
  border-radius: 4px;
  z-index: 10;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const VerticalHandle = styled.div<{ visible?: boolean }>`
  ${handleBaseStyles}
  width: 8px;
  height: 100%;
  top: 0;
  cursor: col-resize;
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 0.2s, background-color 0.2s;

  &:hover {
    opacity: 1;
  }

  &::after {
    content: '';
    width: 2px;
    height: 24px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    transition: background-color 0.2s;
  }

  &:hover::after {
    background-color: rgba(0, 0, 0, 0.4);
  }

  &:active::after {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const HorizontalHandle = styled.div<{ visible?: boolean }>`
  ${handleBaseStyles}
  width: 100%;
  height: 8px;
  left: 0;
  cursor: row-resize;
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 0.2s, background-color 0.2s;

  &:hover {
    opacity: 1;
  }

  &::after {
    content: '';
    width: 24px;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    transition: background-color 0.2s;
  }

  &:hover::after {
    background-color: rgba(0, 0, 0, 0.4);
  }

  &:active::after {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const CornerHandle = styled.div<{ visible?: boolean }>`
  ${handleBaseStyles}
  width: 12px;
  height: 12px;
  cursor: nwse-resize;
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 0.2s, background-color 0.2s;

  &:hover {
    opacity: 1;
  }

  &::after {
    content: '';
    width: 6px;
    height: 6px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    transition: background-color 0.2s;
  }

  &:hover::after {
    background-color: rgba(0, 0, 0, 0.4);
  }

  &:active::after {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const HandleWrapper = styled.div<{
  position: 'left' | 'right' | 'top' | 'bottom' | 'corner';
}>`
  position: absolute;
  ${props => {
    switch (props.position) {
      case 'left':
        return css`
          left: -4px;
          top: 0;
          bottom: 0;
        `;
      case 'right':
        return css`
          right: -4px;
          top: 0;
          bottom: 0;
        `;
      case 'top':
        return css`
          top: -4px;
          left: 0;
          right: 0;
        `;
      case 'bottom':
        return css`
          bottom: -4px;
          left: 0;
          right: 0;
        `;
      case 'corner':
        return css`
          right: -6px;
          bottom: -6px;
        `;
    }
  }}
`; 