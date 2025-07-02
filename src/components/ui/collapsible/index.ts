import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  font-family: ${({ theme }) => theme.fontFamily.sans};
`;

export const Trigger = styled.button<{ disabled: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.medium};
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fontFamily.sans};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: all 0.2s ease-in-out;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.background.secondary};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
  }
`;

export const Icon = styled.span<{ isOpen: boolean }>`
  transform: rotate(${(props) => (props.isOpen ? "180deg" : "0deg")});
  transition: transform 0.2s ease-in-out;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const Content = styled.div<{ height: number }>`
  overflow: hidden;
  transition: height 0.3s ease-in-out;
  height: ${(props) => props.height}px;
`;

export const ContentInner = styled.div`
  padding: ${({ theme }) => theme.spacing.medium};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-top: none;
  border-radius: 0 0 ${({ theme }) => theme.borderRadius}
    ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.colors.pureWhite};
  color: ${({ theme }) => theme.colors.text.primary};
`;
