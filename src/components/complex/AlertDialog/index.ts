import styled from "styled-components";

export const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const DialogContainer = styled.div`
  background: ${({ theme }) => theme.colors.pureWhite};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.large};
  width: 100%;
  max-width: 400px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  font-family: ${({ theme }) => theme.fontFamily.sans};
`;

export const Title = styled.h2`
  margin: 0 0 0.5rem 0;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Description = styled.p`
  margin: 0 0 1.5rem 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

export const Button = styled.button<{ variant?: "danger" | "default" }>`
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-family: ${({ theme }) => theme.fontFamily.sans};
  background-color: ${(props) =>
    props.variant === "danger"
      ? props.theme.colors.danger
      : props.theme.colors.background.secondary};
  color: ${(props) =>
    props.variant === "danger"
      ? props.theme.colors.pureWhite
      : props.theme.colors.text.primary};

  &:hover {
    background-color: ${(props) =>
      props.variant === "danger"
        ? props.theme.colors.background.hover.danger
        : props.theme.colors.background.hover.secondary};
  }
`;
