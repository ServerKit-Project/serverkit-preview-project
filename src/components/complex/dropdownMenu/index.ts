import styled from "styled-components";

export const StyledContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: ${({ theme }) => theme.spacing.small};
  background: ${({ theme }) => theme.colors.pureWhite};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.small};
  width: 14rem;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  z-index: 50;
  font-family: ${({ theme }) => theme.fontFamily.sans};
`;

export const StyledItem = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.small};
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.secondary};
  }

  &[data-disabled="true"] {
    opacity: 0.5;
    pointer-events: none;
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const StyledSubContent = styled(StyledContent)`
  position: absolute;
  left: calc(100% - ${({ theme }) => theme.spacing.small});
  top: -${({ theme }) => theme.spacing.small};
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
  background-color: ${({ theme }) => theme.colors.border.default};
  margin: ${({ theme }) => theme.spacing.small} 0;
`;

export const DropdownMenuShortcut = styled.span`
  margin-left: auto;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-family: ${({ theme }) => theme.fontFamily.sans};
`;

export const SubWrapper = styled.div`
  position: relative;
`;
