import styled from "styled-components";

type AlertVariant = "info" | "success" | "warning" | "error";

export const getAlertColor = (variant: AlertVariant, theme: any) => {
  switch (variant) {
    case "success":
      return {
        bg: theme.colors.background.secondary,
        border: theme.colors.primary,
        text: theme.colors.darkGreen,
      };
    case "warning":
      return {
        bg: theme.colors.background.secondary,
        border: theme.colors.warning,
        text: theme.colors.warning,
      };
    case "error":
      return {
        bg: theme.colors.background.secondary,
        border: theme.colors.danger,
        text: theme.colors.danger,
      };
    default:
      return {
        bg: theme.colors.background.secondary,
        border: theme.colors.primary,
        text: theme.colors.text.primary,
      };
  }
};

export const AlertContainer = styled.div<{ variant: AlertVariant }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius};
  border-left: 4px solid
    ${(props) => getAlertColor(props.variant, props.theme).border};
  background-color: ${(props) => getAlertColor(props.variant, props.theme).bg};
  color: ${(props) => getAlertColor(props.variant, props.theme).text};
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${({ theme }) => theme.fontFamily.sans};
  box-shadow: ${({ theme }) => theme.shadows.small};
`;
