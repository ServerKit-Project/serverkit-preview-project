import { cva } from "class-variance-authority";

export const anchorVariants = cva(
  [
    "inline-flex items-center gap-2 whitespace-nowrap",
    "transition-all outline-none cursor-pointer",
    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "hover:underline hover:underline-offset-4",
  ],
  {
    variants: {
      variant: {
        primary: "",
        info: "",
      },
      size: {
        "button1-regular": "text-button1-regular",
        "button1-semibold": "text-button1-semibold",
        "button2-regular": "text-button2-regular",
        "button2-semibold": "text-button2-semibold",
      },
      disabled: {
        true: "pointer-events-none cursor-not-allowed",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "button1-regular",
      disabled: false,
    },
  }
);