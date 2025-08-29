import {
  Avatar as ShadcnAvatar,
  AvatarFallback as ShadcnAvatarFallback,
  AvatarImage,
} from "@/components/base/avatar";
import { cn } from "@/lib/utils";
import { IconAt, IconUser } from "@tabler/icons-react";
import React from "react";
import { avatarVariants } from "./Avatar.variants";
import type { AvatarProps, AvatarFallbackProps } from "./Avatar.types";

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
  AvatarFallbackProps
>(({ className, children, size = "md", ...props }, ref) => {
  const iconSizeClass =
    size === "sm" || size === "md" ? "size-icon-sm" : "size-icon-lg";

  return (
    <ShadcnAvatarFallback
      ref={ref}
      className={cn(
        "bg-[var(--scale-actived-clicked)] flex items-center justify-center",
        className
      )}
      {...props}
    >
      <IconUser
        className={cn(iconSizeClass, "text-[var(--scale-secondary-text)]")}
      />
    </ShadcnAvatarFallback>
  );
});

AvatarFallback.displayName = "AvatarFallback";

export { AvatarImage };
