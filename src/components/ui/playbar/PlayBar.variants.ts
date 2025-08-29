import { cva } from "class-variance-authority";

export const playBarVariants = cva(
  [
    "relative bg-[var(--scale-white)] border border-[var(--scale-hover)]",
    "transition-all duration-200",
  ],
  {
    variants: {
      variant: {
        basic: "px-4 py-3 rounded-lg",
        expanded: "px-6 py-4 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "basic",
    },
  }
);