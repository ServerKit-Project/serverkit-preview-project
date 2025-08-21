import React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "../Avatar/Avatar";

export interface AvatarBadgeProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  src?: string;
  alt?: string;
  fallback?: string;
  isSelected?: boolean;
}

export const AvatarBadge = React.forwardRef<
  HTMLButtonElement,
  AvatarBadgeProps
>(({ className, src, alt, fallback, isSelected = false, ...props }, ref) => {
  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        "group relative inline-flex items-center justify-center",
        "w-7 h-7 p-0 border-0 bg-transparent",
        "rounded-full transition-all duration-200",
        "hover:ring-5 hover:ring-[var(--scale-hover)] hover:ring-offset-1",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",
        isSelected &&
          "ring-5 ring-[var(--scale-actived-clicked)] ring-offset-1",
        className
      )}
      {...props}
    >
      <Avatar className="w-7 h-7">
        {src && <AvatarImage src={src} alt={alt} />}
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
    </button>
  );
});

AvatarBadge.displayName = "AvatarBadge";
