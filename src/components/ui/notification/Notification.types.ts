import { notificationVariants } from "./Notification.variants";
import { type VariantProps } from "class-variance-authority";

export interface NotificationProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof notificationVariants> {
  username: string;
  date: Date | string;
  projectName: string;
  message: string;
  avatarSrc?: string;
  avatarFallback?: string;
  onClick?: () => void;
}
