import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import {
  CardRoot,
  CardHeaderRoot,
  CardContentRoot,
} from "../../primitive/Card/Card";
import { Text } from "../../primitive/Text/Text";
import { Button } from "../../primitive/Button/Button";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: "small" | "medium" | "large" | "fullscreen";
  closeOnBackdropClick?: boolean;
  showCloseButton?: boolean;
}

const ModalBackdrop = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transition: all 0.3s ease;
`;

const ModalContainer = styled(CardRoot)<{ $size?: string; $isOpen: boolean }>`
  transform: ${({ $isOpen }) => ($isOpen ? "scale(1)" : "scale(0.95)")};
  transition: transform 0.3s ease;
  max-height: 90vh;
  overflow-y: auto;

  ${({ $size }) => {
    switch ($size) {
      case "small":
        return css`
          width: 90%;
          max-width: 400px;
        `;
      case "large":
        return css`
          width: 90%;
          max-width: 800px;
        `;
      case "fullscreen":
        return css`
          width: 95vw;
          height: 95vh;
          max-width: none;
          max-height: none;
        `;
      default:
        return css`
          width: 90%;
          max-width: 500px;
        `;
    }
  }}
`;

const ModalHeader = styled(CardHeaderRoot)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ModalTitle = styled(Text)`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
`;

const CloseButton = styled(Button)`
  background: none;
  border: none;
  font-size: 1.5rem;
  padding: 4px;
  min-width: auto;
  min-height: auto;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.hover.secondary};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

const ModalBody = styled(CardContentRoot)``;

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = "medium",
  closeOnBackdropClick = true,
  showCloseButton = true,
}) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && closeOnBackdropClick) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <ModalBackdrop $isOpen={isOpen} onClick={handleBackdropClick}>
      <ModalContainer $size={size} $isOpen={isOpen}>
        {(title || showCloseButton) && (
          <ModalHeader>
            {title && <ModalTitle>{title}</ModalTitle>}
            {showCloseButton && <CloseButton onClick={onClose}>×</CloseButton>}
          </ModalHeader>
        )}
        <ModalBody>{children}</ModalBody>
      </ModalContainer>
    </ModalBackdrop>
  );
};
