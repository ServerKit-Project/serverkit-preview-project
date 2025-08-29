export interface ProfileMenuItem {
  label: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  variant?: "default" | "destructive";
  disabled?: boolean;
}

export interface ProfileProps {
  avatarUrl?: string;
  name?: string;
  email?: string;
  menuItems?: ProfileMenuItem[];
  className?: string;
  onAvatarClick?: () => void;
}
