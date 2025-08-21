import React from "react";
import { IconLoader2 } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  size: "sm" | "lg";
}

export const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ className, size, ...props }, ref) => {
    const sizeClasses = {
      sm: "w-[var(--icon-size-sm)] h-[var(--icon-size-sm)]",
      lg: "w-[var(--icon-size-lg)] h-[var(--icon-size-lg)]",
    };

    return (
      <span ref={ref} className={cn("inline-flex", className)} {...props}>
        <IconLoader2 className={cn("animate-spin", sizeClasses[size])} />
      </span>
    );
  }
);

Spinner.displayName = "Spinner";
