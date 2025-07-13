import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  font-family: ${({ theme }) => theme.fontFamily.sans};
`;

export const Input = styled.input<{ hasError: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.medium};
  border: 1px solid
    ${(props) =>
      props.hasError
        ? props.theme.colors.danger
        : props.theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.pureWhite};
  font-family: ${({ theme }) => theme.fontFamily.sans};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: ${(props) =>
      props.hasError
        ? props.theme.colors.danger
        : props.theme.colors.border.hover};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.background.secondary};
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const ToggleButton = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 0.25rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const OptionsList = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 0.25rem;
  padding: ${({ theme }) => theme.spacing.small};
  background-color: ${({ theme }) => theme.colors.pureWhite};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  z-index: 10;
  max-height: 200px;
  overflow-y: auto;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

export const Option = styled.li<{ isSelected: boolean }>`
  padding: ${({ theme }) => theme.spacing.small};
  cursor: pointer;
  background-color: ${(props) =>
    props.isSelected ? props.theme.colors.background.secondary : "transparent"};
  color: ${(props) =>
    props.isSelected
      ? props.theme.colors.primary
      : props.theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fontFamily.sans};

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.hover.secondary};
  }
`;

export const ErrorText = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${({ theme }) => theme.fontSize.small};
  margin-top: 0.25rem;
  display: block;
  font-family: ${({ theme }) => theme.fontFamily.sans};
`;
