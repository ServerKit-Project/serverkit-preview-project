import styled from "styled-components";
import {
  CardRoot,
  CardHeaderRoot,
  CardContentRoot,
} from "@/components/primitive/Card/Card";
import { Text } from "@/components/primitive/Text/Text";
import { Button } from "@/components/primitive/Button/Button";

export const Overlay = styled.div<{ $isOpen: boolean }>`
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

export const DialogContainer = styled(CardRoot)`
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

export const Header = styled(CardHeaderRoot)`
  position: relative;
`;

export const Title = styled(Text)`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
`;

export const Description = styled(Text)`
  margin: 0.5rem 0 0;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const CloseButton = styled(Button)`
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

export const Content = styled(CardContentRoot)``;
