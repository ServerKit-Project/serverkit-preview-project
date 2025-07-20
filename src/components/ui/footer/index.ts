import styled from "styled-components";
import { NavLink } from "react-router-dom";

export interface FooterRootProps {
  variant?: "default" | "dark" | "light";
  size?: "compact" | "normal" | "expanded";
}

export const FooterRoot = styled.footer<FooterRootProps>`
  width: 100%;
  padding: ${({ theme, size = "normal" }) => {
    switch (size) {
      case "compact":
        return theme.spacing.medium;
      case "expanded":
        return theme.spacing.large;
      default:
        return theme.spacing.large;
    }
  }};
  background-color: ${({ theme, variant = "default" }) => {
    switch (variant) {
      case "light":
        return theme.colors.background.secondary;
      case "dark":
        return theme.colors.deepBlack;
      default:
        return theme.colors.background.primary;
    }
  }};
  color: ${({ theme, variant = "default" }) => {
    switch (variant) {
      case "dark":
        return theme.colors.text.white;
      case "light":
        return theme.colors.text.primary;
      default:
        return theme.colors.text.secondary;
    }
  }};
  border-top: ${({ theme, variant }) =>
    variant === "light" ? `1px solid ${theme.colors.border.default}` : "none"};
`;

export interface FooterContainerProps {
  layout?: "grid" | "columns" | "centered";
}

export const FooterContainer = styled.div<FooterContainerProps>`
  max-width: 1200px;
  margin: 0 auto;
  display: ${({ layout = "grid" }) => {
    switch (layout) {
      case "columns":
        return "flex";
      case "centered":
        return "flex";
      default:
        return "grid";
    }
  }};
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }

  ${({ layout }) => {
    if (layout === "columns") {
      return `
        justify-content: space-between;
        flex-wrap: wrap;
      `;
    }
    if (layout === "centered") {
      return `
        flex-direction: column;
        align-items: center;
        text-align: center;
      `;
    }
    return "";
  }}
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 200px;

  @media (max-width: 480px) {
    min-width: auto;
  }
`;

export interface FooterTitleProps {
  variant?: "default" | "dark" | "light";
}

export const FooterTitle = styled.h3<FooterTitleProps>`
  font-family: ${({ theme }) => theme.fontFamily.sans};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme, variant = "default" }) => {
    switch (variant) {
      case "dark":
        return theme.colors.text.white;
      case "light":
        return theme.colors.text.primary;
      default:
        return theme.colors.text.primary;
    }
  }};
  margin-bottom: 8px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export interface FooterLinkProps {
  variant?: "default" | "dark" | "light";
}

export const FooterLink = styled(NavLink)<FooterLinkProps>`
  font-family: ${({ theme }) => theme.fontFamily.sans};
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme, variant = "default" }) => {
    switch (variant) {
      case "dark":
        return theme.colors.text.secondary;
      case "light":
        return theme.colors.text.secondary;
      default:
        return theme.colors.text.secondary;
    }
  }};
  text-decoration: none;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 0;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateX(4px);
  }
`;

export const FooterBottom = styled.div`
  margin-top: 32px;
  padding-top: 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.border.default};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const FooterCopyright = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.sans};
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0;
`;

export const FooterSocialLinks = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const SocialLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.text.secondary};
  transition: all 0.2s ease;
  padding: 8px;
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.background.hover.secondary};
    transform: translateY(-2px);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const FooterNewsletter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 300px;
`;

export const NewsletterInput = styled.input`
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-family: ${({ theme }) => theme.fontFamily.sans};
  font-size: ${({ theme }) => theme.fontSize.small};
  background-color: ${({ theme }) => theme.colors.pureWhite};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const NewsletterButton = styled.button`
  padding: 12px 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-family: ${({ theme }) => theme.fontFamily.sans};
  font-size: ${({ theme }) => theme.fontSize.small};
  cursor: pointer;
  transition: background-color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary}dd;
  }
`;

export const FooterDescription = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.sans};
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.5;
  margin: 0;
`;

export const FooterContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

export const FooterLogoText = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.sans};
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
`;
