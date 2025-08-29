export type SidebarMenuItemProps = {
  id: string;
  label: string;
  href?: string;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
  defaultOpen?: boolean;
  isActive?: boolean;
  subItems?: SidebarMenuSubItemProps[];
};

export type SidebarMenuSubItemProps = {
  id: string;
  label: string;
  href?: string;
  leftSlot?: React.ReactNode;
  isActive?: boolean;
  onDragHandleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export type SidebarMenuProps = {
  items: SidebarMenuItemProps[];
  className?: string;
};
