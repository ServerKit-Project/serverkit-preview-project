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
  background-color: ${({ theme }) =>
    `${theme.colors.deepBlack}66`}; // 40% opacity
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
  background: ${({ theme }) => theme.colors.pureWhite};
  box-shadow: ${({ theme }) => theme.shadows.lg};

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
  padding: ${({ theme }) => theme.spacing.medium};
`;

export const Title = styled(Text)`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fontFamily.sans};
`;

export const Description = styled(Text)`
  margin: 0.5rem 0 0;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-family: ${({ theme }) => theme.fontFamily.sans};
`;

export const CloseButton = styled(Button)`
  position: absolute;
  top: ${({ theme }) => theme.spacing.medium};
  right: ${({ theme }) => theme.spacing.medium};
  padding: ${({ theme }) => theme.spacing.small};
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

export const Content = styled(CardContentRoot)`
  padding: ${({ theme }) => theme.spacing.medium};
`;
