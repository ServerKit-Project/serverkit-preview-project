import { cva } from "class-variance-authority";

export const notificationVariants = cva(
  "flex items-start gap-3 p-4 bg-white rounded-lg border border-[var(--scale-actived-clicked)] max-w-md hover:border-[var(--scale-secondary-text)] transition-colors",
  {
    variants: {
      variant: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
