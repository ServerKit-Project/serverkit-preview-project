import styled, { css } from "styled-components";

export const StyledMenubar = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  padding: 0 ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  background-color: ${({ theme }) => theme.colors.pureWhite};
`;

export const StyledMenubarMenu = styled.div`
  position: relative;
`;

export const StyledMenubarTrigger = styled.button`
  padding: ${({ theme }) => theme.spacing.small};
  outline: none;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-family: ${({ theme }) => theme.fontFamily.sans};
  line-height: 1.25rem;
  color: ${({ theme }) => theme.colors.text.primary};
  background: transparent;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.hover.secondary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  &[data-state="open"] {
    background-color: ${({ theme }) => theme.colors.background.secondary};
  }
`;

export const StyledMenubarContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: ${({ theme }) => theme.spacing.small};
  min-width: 12rem;
  padding: ${({ theme }) => theme.spacing.small};
  background-color: ${({ theme }) => theme.colors.pureWhite};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.large};
  z-index: 50;
  animation: slideDown 0.1s ease-out;

  &::before {
    content: "";
    position: absolute;
    top: -0.75rem;
    left: 0;
    width: 100%;
    height: 0.75rem;
    background: transparent;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const baseItemStyles = css<{ $inset?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${(props) =>
    props.$inset
      ? `${props.theme.spacing.small} ${props.theme.spacing.medium}`
      : props.theme.spacing.small};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-family: ${({ theme }) => theme.fontFamily.sans};
  line-height: 1.25rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  user-select: none;
  outline: none;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: left;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.hover.secondary};
  }

  &[data-disabled] {
    color: ${({ theme }) => theme.colors.text.secondary};
    pointer-events: none;
  }
`;

export const StyledMenubarItem = styled.button<{ $inset?: boolean }>`
  ${baseItemStyles}
`;

export const StyledMenubarCheckboxItem = styled(StyledMenubarItem)`
  &[data-checked="true"]::before {
    content: "✓";
    position: absolute;
    left: ${({ theme }) => theme.spacing.small};
  }
`;

export const StyledMenubarRadioItem = styled(StyledMenubarItem)`
  &[data-checked="true"]::before {
    content: "●";
    position: absolute;
    left: ${({ theme }) => theme.spacing.small};
  }
`;

export const StyledMenubarSeparator = styled.div`
  height: 1px;
  margin: ${({ theme }) => theme.spacing.small} -${({ theme }) => theme.spacing.small};
  background-color: ${({ theme }) => theme.colors.border.default};
`;

export const StyledMenubarShortcut = styled.span`
  margin-left: auto;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const StyledSubMenuWrapper = styled.div`
  position: relative;
  padding-right: ${({ theme }) => theme.spacing.medium};
`;

export const StyledMenubarSubTrigger = styled(StyledMenubarItem)`
  position: relative;
  padding-right: ${({ theme }) => theme.spacing.large};

  &::after {
    content: "▶";
    position: absolute;
    right: ${({ theme }) => theme.spacing.small};
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

export const StyledMenubarSubContent = styled(StyledMenubarContent)`
  position: absolute;
  left: calc(100% - 0.75rem);
  top: -${({ theme }) => theme.spacing.small};
  margin-left: 0;
  padding: ${({ theme }) => theme.spacing.small};

  &::before {
    content: "";
    position: absolute;
    left: -1rem;
    top: 0;
    width: 1rem;
    height: 100%;
    background: transparent;
  }

  &::after {
    content: "";
    position: absolute;
    right: -1rem;
    top: 0;
    width: 1rem;
    height: 100%;
    background: transparent;
  }
`;

import type { ReactNode } from "react";

export interface MenubarProps {
  children: ReactNode;
  className?: string;
}

export interface MenubarMenuProps {
  children: ReactNode;
  className?: string;
}

export interface MenubarTriggerProps {
  children: ReactNode;
  className?: string;
}

export interface MenubarContentProps {
  children: ReactNode;
  className?: string;
}

export interface MenubarItemProps {
  children: ReactNode;
  disabled?: boolean;
  inset?: boolean;
  onSelect?: () => void;
  className?: string;
}

export interface MenubarSubProps {
  children: ReactNode;
  className?: string;
}

export interface MenubarSubTriggerProps {
  children: ReactNode;
  className?: string;
}

export interface MenubarSubContentProps {
  children: ReactNode;
  className?: string;
}

export interface MenubarShortcutProps {
  children: ReactNode;
  className?: string;
}

export interface MenubarCheckboxItemProps extends MenubarItemProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export interface MenubarRadioGroupProps {
  value?: string;
  onValueChange?: (value: string) => void;
  children: ReactNode;
  className?: string;
}

export interface MenubarRadioItemProps extends MenubarItemProps {
  value: string;
}
