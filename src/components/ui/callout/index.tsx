import { cn } from "@/lib/utils";
import { getIconForVariant } from "@/components/ui/varianticons";
import { forwardRef } from "react";
import { calloutVariants } from "./Callout.variants";
import { CalloutProps } from "./Callout.types";

const Callout = forwardRef<HTMLDivElement, CalloutProps>(
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

const CalloutTitle = forwardRef<
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
