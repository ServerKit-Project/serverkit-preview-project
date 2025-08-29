export interface AvatarBadgeProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  src?: string;
  alt?: string;
  fallback?: string;
  isSelected?: boolean;
}
