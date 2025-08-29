import { cva } from "class-variance-authority";

export const stepperVariants = cva(
  "flex h-11 w-[31px] items-center justify-center rounded-lg border text-title-semibold",
  {
    variants: {
      status: {
        default: "ring-1 ring-[var(--scale-actived-clicked)]",
        error: "ring-1 ring-[var(--error-deep)]",
        focus: "ring-1 ring-[var(--info-base)]",
      },
    },
    defaultVariants: {
      status: "default",
    },
  }
);
