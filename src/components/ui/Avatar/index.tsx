import {
  Avatar as ShadcnAvatar,
  AvatarFallback as ShadcnAvatarFallback,
  AvatarImage,
} from "@/components/base/avatar";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { IconAt } from "@tabler/icons-react";
import React from "react";

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      size: {
        sm: "size-avatar-sm",
        md: "size-avatar-md",
        lg: "size-avatar-lg",
        xl: "size-avatar-xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof ShadcnAvatar>,
    VariantProps<typeof avatarVariants> {
  showMentionIcon?: boolean;
}

export const Avatar = React.forwardRef<
  React.ComponentRef<typeof ShadcnAvatar>,
  AvatarProps
>(({ className, size, showMentionIcon = false, ...props }, ref) => {
  return (
    <div className="relative inline-block">
      <ShadcnAvatar
        ref={ref}
        className={cn(avatarVariants({ size }), className)}
        {...props}
      />
      {showMentionIcon && (
        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center border border-[var(--scale-actived-clicked)]">
          <IconAt className="w-3 h-3 text-[var(--scale-secondary-text)]" />
        </div>
      )}
    </div>
  );
});

Avatar.displayName = "Avatar";

export const AvatarFallback = React.forwardRef<
  React.ComponentRef<typeof ShadcnAvatarFallback>,
  React.ComponentPropsWithoutRef<typeof ShadcnAvatarFallback>
>(({ className, children, ...props }, ref) => {
  return (
    <ShadcnAvatarFallback
      ref={ref}
      className={cn("bg-[var(--warning-deep)]", className)}
      {...props}
    ></ShadcnAvatarFallback>
  );
});

AvatarFallback.displayName = "AvatarFallback";

export { AvatarImage };
