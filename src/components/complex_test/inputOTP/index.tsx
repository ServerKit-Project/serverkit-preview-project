import styled from "styled-components";

export const InputOTPRoot = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
  align-items: center;
`;

export const InputOTPGroupRoot = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.small};
  align-items: center;
`;

export const InputOTPSlotRoot = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
`;

export const InputOTPSlotInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-family: ${({ theme }) => theme.fontFamily.sans};
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text.primary};
  transition: all 150ms;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.border.hover};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.border.hover};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &[data-complete="true"] {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary};
  }

  &[data-error="true"] {
    border-color: ${({ theme }) => theme.colors.danger};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.danger};
  }
`;

export const InputOTPSeparatorRoot = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.small};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.large};
  font-family: ${({ theme }) => theme.fontFamily.sans};
`;
