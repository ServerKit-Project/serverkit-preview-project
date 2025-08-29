import React from "react";
import { cn } from "@/lib/utils";
import { anchorVariants } from "./Anchor.variants";
import type { AnchorProps } from "./Anchor.types";

export const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(
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

    const colorStyle = disabled
      ? { color: "var(--scale-disabled-text)" }
      : variant === "info"
      ? { color: "var(--info-deeper)" }
      : {};

    return (
      <a
        ref={ref}
        href={disabled ? undefined : href}
        className={cn(anchorVariants({ variant, size, disabled }), className)}
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
