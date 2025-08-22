import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import {
  getIconForVariant,
  type VariantType,
} from "@/components/ui/varianticons";

const calloutVariants = cva(
  ["box-border flex items-center border", "[&>svg]:flex-shrink-0"],
  {
    variants: {
      variant: {
        warning:
          "bg-[var(--warning-light)] border-[var(--warning-deep)] text-gray-800",
        error:
          "bg-[var(--error-light)] border-[var(--error-deep)] text-gray-800",
        success:
          "bg-[var(--success-light)] border-[var(--success-deep)] text-gray-800",
        info: "bg-[var(--info-light)] border-[var(--info-deep)] text-gray-800",
        default: "bg-white border-gray-300 text-gray-800",
      },
      size: {
        sm: "h-8 px-2 gap-2 rounded text-sm [&>svg:first-child]:hidden",
        lg: "h-12 px-3 pr-4 gap-2 rounded-lg text-base [&>svg:first-child]:size-4",
      },
    },
    defaultVariants: {
      variant: "info",
      size: "lg",
    },
  }
);

interface CalloutProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "className">,
    VariantProps<typeof calloutVariants> {
  className?: string;
  variant?: VariantType;
}

const Callout = React.forwardRef<HTMLDivElement, CalloutProps>(
  ({ className, variant = "info", size, children, ...props }, ref) => {
    const icon = getIconForVariant(variant);

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(calloutVariants({ variant, size }), className)}
        {...props}
      >
        {icon}
        <div className="flex-1">{children}</div>
      </div>
    );
  }
);

Callout.displayName = "Callout";

const CalloutTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
CalloutTitle.displayName = "CalloutTitle";

export { Callout, CalloutTitle, calloutVariants, type CalloutProps };
