import styled from "styled-components";

export const StyledContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 0.25rem;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 14rem;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
  z-index: 50;
`;

export const StyledItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  cursor: pointer;
  &:hover {
    background-color: #f3f4f6;
  }
  &[data-disabled="true"] {
    opacity: 0.5;
    pointer-events: none;
  }
`;

export const StyledSubContent = styled(StyledContent)`
  position: absolute;
  left: calc(100% - 0.5rem);
  top: -0.5rem;
  margin-left: 0;
  min-width: 12rem;
`;
export interface DropdownMenuProps {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  modal?: boolean;
  dir?: "ltr" | "rtl";
  children: React.ReactNode;
  /**
   * Optional CSS class name
   */
  className?: string;
}

export interface DropdownMenuTriggerProps {
  asChild?: boolean;
  children: React.ReactNode;
}

export interface DropdownMenuContentProps {
  asChild?: boolean;
  loop?: boolean;
  forceMount?: boolean;
  side?: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
  align?: "start" | "center" | "end";
  alignOffset?: number;
  avoidCollisions?: boolean;
  children: React.ReactNode;
}

export interface DropdownMenuItemProps {
  asChild?: boolean;
  disabled?: boolean;
  onSelect?: () => void;
  textValue?: string;
  children: React.ReactNode;
}

export interface DropdownMenuLabelProps {
  asChild?: boolean;
  children: React.ReactNode;
}

export interface DropdownMenuSeparatorProps {
  asChild?: boolean;
}

export interface DropdownMenuGroupProps {
  asChild?: boolean;
  children: React.ReactNode;
}

export interface DropdownMenuShortcutProps {
  children: React.ReactNode;
}

export interface DropdownMenuSubProps {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

export interface DropdownMenuSubTriggerProps {
  asChild?: boolean;
  disabled?: boolean;
  textValue?: string;
  children: React.ReactNode;
}

export interface DropdownMenuSubContentProps {
  asChild?: boolean;
  sideOffset?: number;
  alignOffset?: number;
  forceMount?: boolean;
  children: React.ReactNode;
}

export const DropdownMenuSeparator = styled.div`
  height: 1px;
  background-color: #e5e7eb;
  margin: 0.5rem 0;
`;

export const DropdownMenuShortcut = styled.span`
  margin-left: auto;
  font-size: 0.75rem;
  color: #9ca3af;
`;

export const SubWrapper = styled.div`
  position: relative;
`;
