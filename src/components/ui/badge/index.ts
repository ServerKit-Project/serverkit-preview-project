import styled from "styled-components";

type BadgeVariant =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

const getVariantStyles = (variant: BadgeVariant = "default", theme: any) => {
  switch (variant) {
    case "primary":
      return {
        bg: theme.colors.primary,
        text: theme.colors.text.white,
        border: theme.colors.primary,
      };
    case "secondary":
      return {
        bg: theme.colors.secondary,
        text: theme.colors.text.white,
        border: theme.colors.secondary,
      };
    case "success":
      return {
        bg: theme.colors.darkGreen,
        text: theme.colors.text.white,
        border: theme.colors.darkGreen,
      };
    case "warning":
      return {
        bg: theme.colors.warning,
        text: theme.colors.text.white,
        border: theme.colors.warning,
      };
    case "danger":
      return {
        bg: theme.colors.danger,
        text: theme.colors.text.white,
        border: theme.colors.danger,
      };
    default:
      return {
        bg: theme.colors.background.secondary,
        text: theme.colors.text.secondary,
        border: theme.colors.border.default,
      };
  }
};

export const Badge = styled.span<{ variant?: BadgeVariant }>`
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 1.25;
  background-color: ${({ theme, variant }) =>
    getVariantStyles(variant, theme).bg};
  color: ${({ theme, variant }) => getVariantStyles(variant, theme).text};
  border: 1px solid
    ${({ theme, variant }) => getVariantStyles(variant, theme).border};
  white-space: nowrap;
`;
