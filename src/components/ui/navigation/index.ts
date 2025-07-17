import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.nav<{
  variant?: string;
  background?: boolean;
}>`
  display: flex;
  ${({ variant }) =>
    variant === "vertical" ? "flex-direction: column;" : "flex-direction: row;"}

  ${({ background, theme }) =>
    background &&
    css`
      background-color: ${theme.colors.background.secondary};
      padding: ${theme.spacing.medium};
      border-radius: ${theme.borderRadius};
    `}
  font-family: ${({ theme }) => theme.fontFamily.sans};
`;

export const NavItem = styled(NavLink)<{
  variant?: string;
  size?: string;
  disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  text-decoration: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s ease;
  border-radius: ${({ theme }) => theme.borderRadius};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};

  color: ${({ disabled, theme }) => {
    if (disabled) return theme.colors.text.secondary;
    return theme.colors.text.primary;
  }};

  background-color: transparent;

  &.active {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => `${theme.colors.primary}10`};
  }

  ${({ size, theme }) => {
    switch (size) {
      case "small":
        return css`
          padding: ${theme.spacing.small};
          font-size: ${theme.fontSize.small};
        `;
      case "large":
        return css`
          padding: ${theme.spacing.large};
          font-size: ${theme.fontSize.large};
        `;
      default:
        return css`
          padding: ${theme.spacing.medium};
          font-size: ${theme.fontSize.medium};
        `;
    }
  }}

  ${({ variant, theme }) =>
    variant === "horizontal" &&
    css`
      &:not(:last-child) {
        margin-right: ${theme.spacing.small};
      }
    `}

  ${({ variant, theme }) =>
    variant === "vertical" &&
    css`
      &:not(:last-child) {
        margin-bottom: ${theme.spacing.small};
      }
    `}

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.background.hover.secondary};
  }

  &.active:hover {
    background-color: ${({ theme }) => `${theme.colors.primary}20`};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}40;
  }
`;

export const NavIcon = styled.span`
  display: flex;
  align-items: center;
  font-size: 1em;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const NavLabel = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: inherit;
`;
