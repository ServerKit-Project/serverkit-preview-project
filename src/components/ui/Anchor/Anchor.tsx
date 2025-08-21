import React from "react";
import { cn } from "@/lib/utils";

interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "info";
  size?: "button1-regular" | "button1-semibold" | "button2-regular" | "button2-semibold";
  disabled?: boolean;
}

const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(
  (
    {
      className,
      variant = "primary",
      size = "button1-regular",
      disabled = false,
      href,
      onClick,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (disabled) {
        e.preventDefault();
        return;
      }
      onClick?.(e);
    };

    const textClass = `text-${size}`;

    const baseClasses = [
      "inline-flex items-center gap-2 whitespace-nowrap",
      "transition-all outline-none",
      "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "hover:underline hover:underline-offset-4",
    ];

    const disabledClasses = disabled
      ? "pointer-events-none cursor-not-allowed"
      : "cursor-pointer";

    const colorStyle = disabled
      ? { color: "var(--scale-disabled-text)" }
      : variant === "info"
        ? { color: "var(--info-deeper)" }
        : {};

    return (
      <a
        ref={ref}
        href={disabled ? undefined : href}
        className={cn(baseClasses, textClass, disabledClasses, className)}
        style={{ ...colorStyle, ...style }}
        onClick={handleClick}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }
);

Anchor.displayName = "Anchor";

export { Anchor, type AnchorProps };
