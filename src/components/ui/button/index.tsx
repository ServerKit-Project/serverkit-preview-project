import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { Spinner } from "@/components/ui/spinner";
import { Chip } from "@/components/ui/chip";
import { buttonVariants } from "./Button.variants";
import type { ButtonProps } from "./Button.types";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      style,
      asChild = false,
      loading,
      disabled,
      children,
      title,
      caption,
      chipVariant,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const isDisabled = disabled || loading;

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, style }), className)}
        disabled={isDisabled}
        data-loading={loading}
        {...props}
      >
        {loading && <Spinner size={size === "huge" ? "lg" : size} />}
        {style === "caption" && title ? (
          <>
            {children}
            <span
              className={cn(
                "text-body-semibold",
                variant === "dark" && "text-[var(--scale-white)]"
              )}
            >
              {title}
            </span>
            {caption && (
              <span
                className={cn(
                  "text-subbody-regular",
                  variant === "dark" && "text-[var(--scale-white)]"
                )}
              >
                {caption}
              </span>
            )}
          </>
        ) : style === "icon-text-chip" && chipVariant ? (
          <>
            {children}
            <Chip variant={chipVariant} size="s" className="ml-2" />
          </>
        ) : (
          children
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { buttonVariants } from "./Button.variants";
