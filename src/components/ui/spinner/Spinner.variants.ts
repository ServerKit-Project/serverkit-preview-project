import { cva } from "class-variance-authority";

export const spinnerVariants = cva("animate-spin", {
  variants: {
    size: {
      sm: "w-[var(--icon-size-sm)] h-[var(--icon-size-sm)]",
      lg: "w-[var(--icon-size-lg)] h-[var(--icon-size-lg)]",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});