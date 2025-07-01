import styled from "styled-components";

type FormSpacing = "small" | "medium" | "large";

export const FormRoot = styled.form<{ $spacing?: FormSpacing }>`
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

export const FormItemRoot = styled.div<{ $fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  ${({ $fullWidth }) => $fullWidth && "width: 100%;"}
`;

export const FormLabelRoot = styled.label<{ $required?: boolean }>`
  display: block;
  margin-bottom: 6px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.text.primary};

  ${({ $required, theme }) =>
    $required &&
    `
    &::after {
      content: ' *';
      color: ${theme.colors.danger};
      opacity: ${$required ? 1 : 0};
    }
  `}
`;

export const FormErrorRoot = styled.div`
  margin-top: 4px;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.danger};
`;

export const FormActionsRoot = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
  justify-content: flex-end;
`;
