import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { X } from 'lucide-react';

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOutRight = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOutLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const slideInTop = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideOutTop = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

const slideInBottom = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideOutBottom = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;

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

const DrawerPortal = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
`;

const DrawerOverlay = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 50;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  animation: ${props => props.$open ? css`${fadeIn} 200ms cubic-bezier(0.4, 0, 0.2, 1) forwards` : css`${fadeOut} 200ms cubic-bezier(0.4, 0, 0.2, 1) forwards`};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;

const DrawerContainer = styled.div<{ $open: boolean; $side?: 'left' | 'right' | 'top' | 'bottom' }>`
  position: fixed;
  z-index: 51;
  background: white;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  
  ${props => {
    switch (props.$side) {
      case 'left':
        return css`
          left: 0;
          top: 0;
          bottom: 0;
          width: 24rem;
          transform: translateX(-100%);
          animation: ${props.$open ? css`${slideInLeft} 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards` : css`${slideOutLeft} 200ms cubic-bezier(0.16, 1, 0.3, 1) forwards`};
        `;
      case 'right':
        return css`
          right: 0;
          top: 0;
          bottom: 0;
          width: 24rem;
          transform: translateX(100%);
          animation: ${props.$open ? css`${slideInRight} 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards` : css`${slideOutRight} 200ms cubic-bezier(0.16, 1, 0.3, 1) forwards`};
        `;
      case 'top':
        return css`
          top: 0;
          left: 0;
          right: 0;
          height: 24rem;
          transform: translateY(-100%);
          animation: ${props.$open ? css`${slideInTop} 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards` : css`${slideOutTop} 200ms cubic-bezier(0.16, 1, 0.3, 1) forwards`};
        `;
      case 'bottom':
        return css`
          bottom: 0;
          left: 0;
          right: 0;
          height: 24rem;
          transform: translateY(100%);
          animation: ${props.$open ? css`${slideInBottom} 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards` : css`${slideOutBottom} 200ms cubic-bezier(0.16, 1, 0.3, 1) forwards`};
        `;
      default:
        return css`
          right: 0;
          top: 0;
          bottom: 0;
          width: 24rem;
          transform: translateX(100%);
          animation: ${props.$open ? css`${slideInRight} 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards` : css`${slideOutRight} 200ms cubic-bezier(0.16, 1, 0.3, 1) forwards`};
        `;
    }
  }}
`;

const DrawerContent = styled.div`
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  &:after {
    content: '';
    display: block;
    height: 3rem; /* Space for footer */
  }
`;

const DrawerHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1.5rem 1.5rem 0;
  border-bottom: 1px solid #E5E7EB;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, #E5E7EB 20%, #E5E7EB 80%, transparent);
  }
`;

const DrawerTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
  line-height: 1.5;
`;

const DrawerDescription = styled.p`
  font-size: 0.875rem;
  color: #6B7280;
  margin: 0;
  padding-bottom: 1.25rem;
  line-height: 1.5;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 1.25rem;
  width: 2rem;
  height: 2rem;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  color: #6B7280;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    background: #F3F4F6;
    color: #111827;
  }
  
  &:focus-visible {
    outline: 2px solid #3B82F6;
    outline-offset: 2px;
  }
`;

const DrawerFooter = styled.div`
  padding: 1.25rem 1.5rem;
  background: white;
  border-top: 1px solid #E5E7EB;
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: -1px;
    height: 1px;
    background: linear-gradient(to right, transparent, #E5E7EB 20%, #E5E7EB 80%, transparent);
  }
`;

export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  side?: 'left' | 'right' | 'top' | 'bottom';
}

export interface DrawerContentProps {
  children?: React.ReactNode;
}

export interface DrawerHeaderProps {
  children?: React.ReactNode;
}

export interface DrawerFooterProps {
  children?: React.ReactNode;
}

export interface DrawerTitleProps {
  children?: React.ReactNode;
}

export interface DrawerDescriptionProps {
  children?: React.ReactNode;
}

export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  ({ children, open, onClose, title, description, side = 'right' }, ref) => {
    React.useEffect(() => {
      if (open) {
        document.body.style.overflow = 'hidden';
      }
      return () => {
        document.body.style.overflow = '';
      };
    }, [open]);

    React.useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && open) {
          onClose();
        }
      };

      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }, [open, onClose]);

    if (!open) return null;

    return (
      <DrawerPortal>
        <DrawerOverlay $open={open} onClick={onClose} />
        <DrawerContainer ref={ref} $open={open} $side={side} role="dialog" aria-modal="true">
          {(title || description) && (
            <DrawerHeader>
              {title && <DrawerTitle>{title}</DrawerTitle>}
              {description && <DrawerDescription>{description}</DrawerDescription>}
              <CloseButton onClick={onClose} aria-label="Close">
                <X size={20} />
              </CloseButton>
            </DrawerHeader>
          )}
          <DrawerContent>{children}</DrawerContent>
        </DrawerContainer>
      </DrawerPortal>
    );
  }
);

export const DrawerTrigger = styled.button`
  /* Add your button styles here */
`;

Drawer.displayName = 'Drawer'; 