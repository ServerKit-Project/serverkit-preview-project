import { cva } from "class-variance-authority";

export const tabTriggerVariants = cva(
  [
    "relative inline-flex h-5 items-center font[var--(--font-size-subbody)] whitespace-nowrap cursor-pointer",
  ],
  {
    variants: {
      variant: {
        primary: [
          "border-b-2 pb-1 border-[var(--scale-primary-text)] text-[var(--scale-primary-text)]",
        ],
        muted: [
          "border-b-2 pb-1 border-[var(--scale-disabled-text)] text-[var(--scale-disabled-text)]",
        ],
        plain: [],
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);