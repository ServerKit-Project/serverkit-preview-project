import { cva } from "class-variance-authority";

export const separatorVariants = cva(
  "bg-[var(--scale-actived-clicked)] shrink-0",
  {
    variants: {
      orientation: {
        horizontal: "data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full",
        vertical: "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
      },
      noPadding: {
        true: "p-0 m-0",
        false: "",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
      noPadding: false,
    },
  }
);