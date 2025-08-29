import React from "react";
import { IconLoader2 } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { spinnerVariants } from "./Spinner.variants";
import type { SpinnerProps } from "./Spinner.types";

export const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <span ref={ref} className={cn("inline-flex", className)} {...props}>
        <IconLoader2 className={spinnerVariants({ size })} />
      </span>
    );
  }
);

Spinner.displayName = "Spinner";
