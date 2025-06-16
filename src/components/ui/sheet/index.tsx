import React from 'react';
import styled, { css, keyframes } from 'styled-components';

type SheetPosition = 'top' | 'right' | 'bottom' | 'left';

const slideIn = {
  top: keyframes`
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  `,
  right: keyframes`
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  `,
  bottom: keyframes`
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  `,
  left: keyframes`
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  `,
};

const slideOut = {
  top: keyframes`
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-100%);
    }
  `,
  right: keyframes`
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  `,
  bottom: keyframes`
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(100%);
    }
  `,
  left: keyframes`
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  `,
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const SheetOverlay = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 50;
  display: ${props => props.$open ? 'block' : 'none'};
  animation: ${props => props.$open ? fadeIn : fadeOut} 0.2s ease-in-out;
`;

const SheetContent = styled.div<{ $open: boolean; $position: SheetPosition }>`
  position: fixed;
  background-color: white;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  z-index: 51;
  display: ${props => props.$open ? 'flex' : 'none'};
  flex-direction: column;
  animation: ${props => props.$open ? slideIn[props.$position] : slideOut[props.$position]} 0.3s ease-in-out;

  ${props => {
    switch (props.$position) {
      case 'top':
        return css`
          top: 0;
          left: 0;
          right: 0;
          max-height: 96vh;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
        `;
      case 'right':
        return css`
          top: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          max-width: 400px;
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
        `;
      case 'bottom':
        return css`
          bottom: 0;
          left: 0;
          right: 0;
          max-height: 96vh;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        `;
      case 'left':
        return css`
          top: 0;
          left: 0;
          bottom: 0;
          width: 100%;
          max-width: 400px;
          border-top-right-radius: 8px;
          border-bottom-right-radius: 8px;
        `;
    }
  }}
`;

const SheetHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid hsl(240 6% 90%);
`;

const SheetTitle = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: hsl(240 6% 10%);
`;

const SheetDescription = styled.p`
  margin: 8px 0 0 0;
  font-size: 14px;
  color: hsl(240 4% 46%);
`;

const SheetCloseButton = styled.button`
  all: unset;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  color: hsl(240 4% 46%);
  transition: background-color 0.2s;

  &:hover {
    background-color: hsl(240 5% 96%);
  }

  &:focus-visible {
    outline: 2px solid hsl(240 5% 96%);
    outline-offset: -2px;
  }
`;

const SheetBody = styled.div`
  flex: 1;
  padding: 24px;
  overflow-y: auto;
`;

const SheetFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 16px 24px;
  border-top: 1px solid hsl(240 6% 90%);
`;

interface SheetProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  position?: SheetPosition;
}

export const Sheet = React.forwardRef<HTMLDivElement, SheetProps>(
  ({ open, onClose, title, description, children, footer, position = 'right', ...props }, ref) => {
    React.useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && open) {
          onClose();
        }
      };

      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }, [open, onClose]);

    return (
      <>
        <SheetOverlay $open={open} onClick={onClose} />
        <SheetContent ref={ref} $open={open} $position={position} {...props}>
          <SheetHeader>
            <div>
              {title && <SheetTitle>{title}</SheetTitle>}
              {description && <SheetDescription>{description}</SheetDescription>}
            </div>
            <SheetCloseButton onClick={onClose} aria-label="Close">
              ✕
            </SheetCloseButton>
          </SheetHeader>
          <SheetBody>{children}</SheetBody>
          {footer && <SheetFooter>{footer}</SheetFooter>}
        </SheetContent>
      </>
    );
  }
);

Sheet.displayName = 'Sheet'; 