import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../theme";

export interface FormProps {
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  spacing?: "small" | "medium" | "large";
}

export interface FormItemProps {
  children: React.ReactNode;
  label?: string;
  error?: string;
  required?: boolean;
  fullWidth?: boolean;
}

const StyledForm = styled.form<{ $spacing?: string }>`
  display: flex;
  flex-direction: column;
  gap: ${({ $spacing }) => {
    switch ($spacing) {
      case "small":
        return "12px";
      case "large":
        return "24px";
      default:
        return "16px";
    }
  }};
`;

const FormItemContainer = styled.div<{ $fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  ${({ $fullWidth }) => $fullWidth && "width: 100%;"}
`;

const FormLabel = styled.label<{ $required?: boolean }>`
  display: block;
  margin-bottom: 6px;
  font-weight: 500;
  font-size: ${({ theme }) =>
    theme?.fontSize.medium || defaultTheme.fontSize.medium};
  color: ${({ theme }) =>
    theme?.colors.text.primary || defaultTheme.colors.text.primary};

  ${({ $required, theme }) =>
    $required &&
    `
    &::after {
      content: ' *';
      color: ${theme?.colors.danger || defaultTheme.colors.danger};
    }
  `}
`;

const FormError = styled.div`
  margin-top: 4px;
  font-size: 0.875rem;
  color: ${({ theme }) => theme?.colors.danger || defaultTheme.colors.danger};
`;

const FormActionsContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
  justify-content: flex-end;
`;

export const Form: React.FC<FormProps> = ({
  children,
  onSubmit,
  spacing = "medium",
}) => {
  return (
    <StyledForm onSubmit={onSubmit} $spacing={spacing}>
      {children}
    </StyledForm>
  );
};

export const FormItem: React.FC<FormItemProps> = ({
  children,
  label,
  error,
  required = false,
  fullWidth = false,
}) => {
  return (
    <FormItemContainer $fullWidth={fullWidth}>
      {label && <FormLabel $required={required}>{label}</FormLabel>}
      {children}
      {error && <FormError>{error}</FormError>}
    </FormItemContainer>
  );
};

export const FormActions: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <FormActionsContainer>{children}</FormActionsContainer>;
