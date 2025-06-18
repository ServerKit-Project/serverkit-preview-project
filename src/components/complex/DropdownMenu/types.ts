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
