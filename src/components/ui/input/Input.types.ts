import React from "react";
import type { VariantProps } from "class-variance-authority";
import type { inputVariants } from "./Input.variants";

export interface InputProps
  extends Omit<React.ComponentProps<"input">, "size">,
    VariantProps<typeof inputVariants> {
  hasClearButton?: boolean;
  label?: string;
  message?: string;
}
