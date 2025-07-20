import styled, { css } from "styled-components";

export interface SidebarProps {
  width?: string;
  collapsed?: boolean;
  position?: "left" | "right";
}

export interface SidebarItemProps {
  active?: boolean;
  disabled?: boolean;
}

export const SidebarContainer = styled.div<SidebarProps>`
  position: fixed;
  top: 0;
  ${({ position }) => (position === "right" ? "right: 0" : "left: 0")};
  height: 100vh;
  width: ${({ width, collapsed }) => (collapsed ? "60px" : width || "250px")};
  background: ${({ theme }) => theme.colors.background.secondary};
  border-right: ${({ position, theme }) =>
    position === "left" ? `1px solid ${theme.colors.border.default}` : "none"};
  border-left: ${({ position, theme }) =>
    position === "right" ? `1px solid ${theme.colors.border.default}` : "none"};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: width 0.3s ease;
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  overflow: hidden;
`;

export const SidebarHeader = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.default};
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 60px;
`;

export const SidebarTitle = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.h4};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SidebarToggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.background.hover.secondary};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const SidebarContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing.medium} 0;
`;

export const SidebarSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

export const SidebarSectionTitle = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing.small} 0;
  padding: 0 ${({ theme }) => theme.spacing.large};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SidebarItem = styled.div<SidebarItemProps>`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.medium}
    ${({ theme }) => theme.spacing.large};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s ease;
  position: relative;
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};

  ${({ active, theme }) =>
    active &&
    css`
      background: ${theme.colors.primary};
      color: ${theme.colors.text.white};

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 3px;
        background: ${theme.colors.primary};
      }
    `}

  &:hover:not([disabled]) {
    background: ${({ active, theme }) =>
      active
        ? theme.colors.background.hover.primary
        : theme.colors.background.hover.secondary};
  }
`;

export const SidebarItemIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-right: ${({ theme }) => theme.spacing.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const SidebarItemText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SidebarFooter = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
  border-top: 1px solid ${({ theme }) => theme.colors.border.default};
  margin-top: auto;
`;

export const SidebarDivider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.border.default};
  margin: ${({ theme }) => theme.spacing.medium} 0;
`;

export const SidebarBadge = styled.span`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.white};
  font-size: ${({ theme }) => theme.fontSize.caption};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding: 2px 6px;
  border-radius: 10px;
  margin-left: auto;
  min-width: 20px;
  text-align: center;
`;

export const SidebarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: ${({ theme }) => theme.zIndex.dropdown - 1};
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;

  &.visible {
    opacity: 1;
    visibility: visible;
  }
`;
