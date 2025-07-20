import styled, { keyframes } from "styled-components";

export interface MenuItem {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  danger?: boolean;
  items?: MenuItem[];
}

export interface Position {
  x: number;
  y: number;
}

const slideUpAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(4px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const MenuContainer = styled.div<{ position: Position }>`
  position: fixed;
  left: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
  min-width: 220px;
  background: white;
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 4px 8px -2px rgba(0, 0, 0, 0.1),
    0 10px 20px -5px rgba(0, 0, 0, 0.08);
  padding: 0.375rem;
  z-index: 50;
  animation: ${slideUpAndFade} 0.15s cubic-bezier(0.16, 1, 0.3, 1);
  transform-origin: var(--radix-context-menu-content-transform-origin);
  will-change: transform, opacity;
`;

export const MenuItem = styled.div<{
  disabled?: boolean;
  danger?: boolean;
  hasSubmenu?: boolean;
}>`
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25;
  color: ${(props) =>
    props.danger ? "#dc2626" : props.disabled ? "#6b7280" : "#1f2937"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border-radius: 0.375rem;
  position: relative;
  transition: all 0.15s ease;
  user-select: none;

  &:hover {
    background-color: ${(props) =>
      !props.disabled &&
      (props.danger ? "rgba(220, 38, 38, 0.04)" : "rgba(0, 0, 0, 0.04)")};
  }

  &:active {
    background-color: ${(props) =>
      !props.disabled &&
      (props.danger ? "rgba(220, 38, 38, 0.08)" : "rgba(0, 0, 0, 0.08)")};
  }

  opacity: ${(props) => (props.disabled ? "0.4" : "1")};
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.75rem;
  flex-shrink: 0;
  color: #6b7280;
`;

export const Label = styled.span`
  flex: 1;
`;

export const Submenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  left: calc(100% + 4px);
  top: -0.375rem;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  min-width: 220px;
  background: white;
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 4px 8px -2px rgba(0, 0, 0, 0.1),
    0 10px 20px -5px rgba(0, 0, 0, 0.08);
  padding: 0.375rem;
  animation: ${slideUpAndFade} 0.15s cubic-bezier(0.16, 1, 0.3, 1);
  transform-origin: var(--radix-context-menu-content-transform-origin);
  will-change: transform, opacity;
`;

export const Divider = styled.div`
  height: 1px;
  margin: 0.375rem -0.375rem;
  background-color: rgba(0, 0, 0, 0.06);
`;

export const SubMenuIcon = styled.span`
  margin-left: 0.75rem;
  color: #6b7280;
  font-size: 0.75rem;
  line-height: 1;
  flex-shrink: 0;
`;
