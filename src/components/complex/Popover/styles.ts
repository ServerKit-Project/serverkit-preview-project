import styled, { css, keyframes } from 'styled-components';
import type { PopoverContentProps } from './types';

const slideUpAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideRightAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(-8px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideDownAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideLeftAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(8px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

type Side = NonNullable<PopoverContentProps['side']>;
type Align = NonNullable<PopoverContentProps['align']>;

const getTransformOrigin = (side?: Side, align?: Align) => {
  const sides: Record<Side, string> = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
  };

  const alignments: Record<Align, string> = {
    start: '0%',
    center: '50%',
    end: '100%',
  };

  const sideOrigin = sides[side || 'bottom'];
  const alignOrigin = alignments[align || 'center'];

  if (side === 'top' || side === 'bottom') {
    return `${alignOrigin} ${sideOrigin}`;
  }
  return `${sideOrigin} ${alignOrigin}`;
};

export const StyledPopoverContent = styled.div<
  Pick<PopoverContentProps, 'side' | 'align' | 'sideOffset' | 'alignOffset' | 'animation' | 'sticky'>
>`
  position: fixed;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 0.5rem;
  padding: 1rem;
  min-width: 200px;
  max-width: 300px;
  background-color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(0, 0, 0, 0.1);
  outline: none;
  transform-origin: ${props => getTransformOrigin(props.side, props.align)};
  animation-duration: ${props => props.animation?.duration || 200}ms;
  animation-timing-function: ${props => props.animation?.easing || 'cubic-bezier(0.16, 1, 0.3, 1)'};
  will-change: transform, opacity;

  &[data-state="open"] {
    opacity: 1;
    transform: none;
  }

  &[data-state="closed"] {
    opacity: 0;
    pointer-events: none;
  }

  ${props => {
    const offset = props.sideOffset || 5;
    const alignOffset = props.alignOffset || 0;
    
    const getBaseStyles = (side: Side) => {
      switch (side) {
        case 'top':
          return css`
            animation-name: ${slideUpAndFade};
            ${getAlignment(props.align, alignOffset)}
          `;
        case 'right':
          return css`
            animation-name: ${slideRightAndFade};
            ${getVerticalAlignment(props.align, alignOffset)}
          `;
        case 'left':
          return css`
            animation-name: ${slideLeftAndFade};
            ${getVerticalAlignment(props.align, alignOffset)}
          `;
        default: // bottom
          return css`
            animation-name: ${slideDownAndFade};
            ${getAlignment(props.align, alignOffset)}
          `;
      }
    };

    switch (props.side) {
      case 'top':
        return css`
          ${getBaseStyles('top')}
          ${props.sticky && getStickyStyles('vertical')}
        `;
      case 'right':
        return css`
          ${getBaseStyles('right')}
          ${props.sticky && getStickyStyles('horizontal')}
        `;
      case 'left':
        return css`
          ${getBaseStyles('left')}
          ${props.sticky && getStickyStyles('horizontal')}
        `;
      default: // bottom
        return css`
          ${getBaseStyles('bottom')}
          ${props.sticky && getStickyStyles('vertical')}
        `;
    }
  }}
`;

const getStickyStyles = (direction: 'horizontal' | 'vertical') => css`
  position: fixed;
  ${direction === 'vertical' ? 'width: 100%;' : 'height: 100%;'}
`;

const getAlignment = (align?: string, offset = 0) => {
  switch (align) {
    case 'start':
      return css`
        left: ${offset}px;
      `;
    case 'end':
      return css`
        right: ${offset}px;
      `;
    default: // center
      return css`
        left: 50%;
        transform: translateX(-50%);
        ${offset && `margin-left: ${offset}px;`}
      `;
  }
};

const getVerticalAlignment = (align?: string, offset = 0) => {
  switch (align) {
    case 'start':
      return css`
        top: ${offset}px;
      `;
    case 'end':
      return css`
        bottom: ${offset}px;
      `;
    default: // center
      return css`
        top: 50%;
        transform: translateY(-50%);
        ${offset && `margin-top: ${offset}px;`}
      `;
  }
};

export const StyledPopoverArrow = styled.div<{ side?: string }>`
  position: absolute;
  width: 8px;
  height: 8px;
  transform: rotate(45deg);
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  z-index: -1;

  ${props => {
    switch (props.side) {
      case 'top':
        return css`
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          border-top: none;
          border-left: none;
        `;
      case 'right':
        return css`
          left: -5px;
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
          border-right: none;
          border-bottom: none;
        `;
      case 'left':
        return css`
          right: -5px;
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
          border-left: none;
          border-top: none;
        `;
      default: // bottom
        return css`
          top: -5px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          border-bottom: none;
          border-right: none;
        `;
    }
  }}
`;

export const StyledPopoverTrigger = styled.button`
  all: unset;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:focus-visible {
    outline: 2px solid #000;
    outline-offset: 2px;
  }
`; 