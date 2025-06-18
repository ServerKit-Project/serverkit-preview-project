import styled from "styled-components";
import React, { useEffect } from "react";
import {
  CardRoot,
  CardHeaderRoot,
  CardContentRoot,
} from "../../primitive/Card/Card";
import { Text } from "../../primitive/Text/Text";
import { Button } from "../../primitive/Button/Button";

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

const DialogContainer = styled(CardRoot)`
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

const Header = styled(CardHeaderRoot)`
  position: relative;
`;

const Title = styled(Text)`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
`;

const Description = styled(Text)`
  margin: 0.5rem 0 0;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem;
  background: none;
  border: none;
  min-width: auto;
  min-height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.hover.secondary};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.border.default};
  }
`;

const Content = styled(CardContentRoot)``;

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
