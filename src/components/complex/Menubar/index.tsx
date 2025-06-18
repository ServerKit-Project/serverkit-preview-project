import styled, { css } from "styled-components";

export const StyledMenubar = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  gap: 0.5rem;
  padding: 0 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  background-color: white;
`;

export const StyledMenubarMenu = styled.div`
  position: relative;
`;

export const StyledMenubarTrigger = styled.button`
  padding: 0.5rem 0.75rem;
  outline: none;
  border: none;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #374151;
  background: transparent;
  cursor: pointer;

  &:hover {
    background-color: #f3f4f6;
  }

  &:focus-visible {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }

  &[data-state="open"] {
    background-color: #f3f4f6;
  }
`;

export const StyledMenubarContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 0.5rem;
  min-width: 12rem;
  padding: 0.5rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
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
    props.$inset ? "0.5rem 0.75rem 0.5rem 2rem" : "0.5rem 0.75rem"};
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.25rem;
  cursor: pointer;
  user-select: none;
  outline: none;
  border: none;
  background: transparent;
  color: #374151;
  text-align: left;

  &:hover {
    background-color: #f3f4f6;
  }

  &[data-disabled] {
    color: #9ca3af;
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
    left: 0.5rem;
  }
`;

export const StyledMenubarRadioItem = styled(StyledMenubarItem)`
  &[data-checked="true"]::before {
    content: "●";
    position: absolute;
    left: 0.5rem;
  }
`;

export const StyledMenubarSeparator = styled.div`
  height: 1px;
  margin: 0.5rem -0.5rem;
  background-color: #e5e7eb;
`;

export const StyledMenubarShortcut = styled.span`
  margin-left: auto;
  font-size: 0.75rem;
  color: #6b7280;
`;

export const StyledSubMenuWrapper = styled.div`
  position: relative;
  padding-right: 1rem;
`;

export const StyledMenubarSubTrigger = styled(StyledMenubarItem)`
  position: relative;
  padding-right: 1.5rem;

  &::after {
    content: "▶";
    position: absolute;
    right: 0.5rem;
    font-size: 0.75rem;
  }
`;

export const StyledMenubarSubContent = styled(StyledMenubarContent)`
  position: absolute;
  left: calc(100% - 0.75rem);
  top: -0.5rem;
  margin-left: 0;
  padding: 0.5rem;

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
