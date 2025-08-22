"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { formatRelativeDate } from "@/lib/time";
import { Avatar, AvatarImage, AvatarFallback } from "../avatar";

const notificationVariants = cva(
  "flex items-start gap-3 p-4 bg-white rounded-lg border border-[var(--scale-actived-clicked)] max-w-md hover:border-[var(--scale-secondary-text)] transition-colors",
  {
    variants: {
      variant: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

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

export const Notification = ({
  className,
  variant,
  username,
  date,
  projectName,
  message,
  avatarSrc,
  avatarFallback,
  onClick,
  ...props
}: NotificationProps) => {
  return (
    <div
      className={cn(
        notificationVariants({ variant }),
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
      aria-label={onClick ? `${username}님의 알림: ${message}` : undefined}
      {...props}
    >
      <Avatar size="md" showMentionIcon>
        {avatarSrc && <AvatarImage src={avatarSrc} />}
        <AvatarFallback />
      </Avatar>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[var(--scale-primary-text)] font-normal text-base line-clamp-1">
            {username}
          </span>
          <span className="text-[var(--scale-tertiary-text)] font-normal text-sm whitespace-nowrap">
            {typeof date === "string" ? date : formatRelativeDate(date)}
          </span>
        </div>

        <div className="mt-1">
          <span className="text-[var(--scale-primary-text)] font-normal text-sm line-clamp-1">
            당신을 언급했습니다. · {projectName}
          </span>
        </div>

        <div className="mt-2">
          <p className="text-[var(--scale-secondary-text)] font-normal text-sm line-clamp-2">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

Notification.displayName = "Notification";
