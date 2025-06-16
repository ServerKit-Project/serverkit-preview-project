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
