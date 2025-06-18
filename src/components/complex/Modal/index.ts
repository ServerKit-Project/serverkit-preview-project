import React from "react";
import styled, { css } from "styled-components";
import {
  CardRoot,
  CardHeaderRoot,
  CardContentRoot,
} from "@/components/primitive/Card/Card";
import { Text } from "@/components/primitive/Text/Text";
import { Button } from "@/components/primitive/Button/Button";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: "small" | "medium" | "large" | "fullscreen";
  closeOnBackdropClick?: boolean;
  showCloseButton?: boolean;
}

export const ModalBackdrop = styled.div<{ $isOpen: boolean }>`
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

export const ModalContainer = styled(CardRoot)<{
  $size?: string;
  $isOpen: boolean;
}>`
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

export const ModalHeader = styled(CardHeaderRoot)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ModalTitle = styled(Text)`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
`;

export const CloseButton = styled(Button)`
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

export const ModalBody = styled(CardContentRoot)``;
