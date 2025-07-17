import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface HeaderRootProps {
  variant?: "default" | "transparent" | "dark";
  border?: boolean;
  sticky?: boolean;
}

export const HeaderRoot = styled.header<HeaderRootProps>`
  width: 100%;
  background-color: ${({ theme, variant = "default" }) => {
    switch (variant) {
      case "transparent":
        return "transparent";
      case "dark":
        return theme.colors.deepBlack;
      default:
        return theme.colors.pureWhite;
    }
  }};
  border-bottom: ${({ theme, border = true }) =>
    border ? `1px solid ${theme.colors.border.default}` : "none"};
  position: ${({ sticky = false }) => (sticky ? "sticky" : "relative")};
  top: ${({ sticky = false }) => (sticky ? "0" : "auto")};
  z-index: ${({ sticky = false }) => (sticky ? "40" : "auto")};
  transition: all 0.3s ease;
  backdrop-filter: ${({ variant }) =>
    variant === "transparent" ? "blur(10px)" : "none"};
`;

export const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
`;

export const HeaderLogo = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    height: 32px;
    width: auto;
  }
`;

interface HeaderLogoTextProps {
  variant?: "default" | "transparent" | "dark";
}

export const HeaderLogoText = styled.span<HeaderLogoTextProps>`
  font-family: ${({ theme }) => theme.fontFamily.sans};
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme, variant = "default" }) => {
    switch (variant) {
      case "dark":
        return theme.colors.text.white;
      case "transparent":
        return theme.colors.text.primary;
      default:
        return theme.colors.text.primary;
    }
  }};
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 768px) {
    display: none;
  }
`;

interface HeaderLinkProps {
  variant?: "default" | "transparent" | "dark";
  active?: boolean;
}

export const HeaderLink = styled(NavLink)<HeaderLinkProps>`
  font-family: ${({ theme }) => theme.fontFamily.sans};
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme, variant = "default" }) => {
    switch (variant) {
      case "dark":
        return theme.colors.text.white;
      case "transparent":
        return theme.colors.text.primary;
      default:
        return theme.colors.text.secondary;
    }
  }};
  text-decoration: none;
  position: relative;
  padding: 8px 0;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width 0.2s ease;
  }

  &.active::after {
    width: 100%;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

interface MobileMenuButtonProps {
  variant?: "default" | "transparent" | "dark";
}

export const MobileMenuButton = styled.button<MobileMenuButtonProps>`
  display: none;
  padding: 8px;
  background: none;
  border: none;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme, variant = "default" }) => {
    switch (variant) {
      case "dark":
        return theme.colors.text.white;
      default:
        return theme.colors.text.primary;
    }
  }};

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.background.secondary};
  }
`;

export const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.pureWhite};
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.default};
  transform: translateY(${(props) => (props.isOpen ? "0" : "-100%")});
  transition: transform 0.3s ease;
  box-shadow: ${({ theme }) => theme.shadows.large};

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const MobileLink = styled(HeaderLink)`
  font-size: ${({ theme }) => theme.fontSize.medium};
  padding: 12px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.default};

  &:last-child {
    border-bottom: none;
  }
`;

export const NotificationBadge = styled.span`
  position: absolute;
  top: -4px;
  right: -4px;
  background-color: ${({ theme }) => theme.colors.danger};
  color: white;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: bold;
`;

export const ActionButton = styled.button<{ variant?: "icon" | "text" }>`
  background: none;
  padding: ${({ variant = "icon" }) =>
    variant === "icon" ? "8px" : "8px 16px"};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fontFamily.sans};
  font-size: ${({ theme }) => theme.fontSize.small};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.hover.secondary};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}40;
  }
`;
