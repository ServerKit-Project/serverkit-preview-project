import React from "react";
import type { VariantProps } from "class-variance-authority";
import type { spinnerVariants } from "./Spinner.variants";

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof spinnerVariants> {
  size: "sm" | "lg";
}
