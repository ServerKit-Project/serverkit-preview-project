import styled from "styled-components";
import React, { useEffect } from "react";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  showCloseButton?: boolean;
}

const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 50;
`;

const DialogContainer = styled.div`
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  width: 100%;
  max-width: 28rem;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: dialogEnter 0.3s ease-out;

  @keyframes dialogEnter {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const Header = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
  position: relative;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
`;

const Description = styled.p`
  margin: 0.5rem 0 0;
  font-size: 0.875rem;
  color: #718096;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem;
  background: none;
  border: none;
  color: #a0aec0;
  cursor: pointer;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    color: #4a5568;
    background-color: #f7fafc;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #e2e8f0;
  }
`;

const Content = styled.div`
  padding: 1.5rem;
`;

export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  showCloseButton = true,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay $isOpen={isOpen} onClick={handleOverlayClick}>
      <DialogContainer>
        {(title || description) && (
          <Header>
            {title && <Title>{title}</Title>}
            {description && <Description>{description}</Description>}
            {showCloseButton && (
              <CloseButton onClick={onClose} aria-label="Close dialog">
                ✕
              </CloseButton>
            )}
          </Header>
        )}
        <Content>{children}</Content>
      </DialogContainer>
    </Overlay>
  );
};
