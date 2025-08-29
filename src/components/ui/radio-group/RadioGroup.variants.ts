import { cva } from "class-variance-authority";

export const radioItemVariants = cva(
  "group border-2 border-input shrink-0 rounded-full transition-colors outline-none hover:cursor-pointer flex items-center justify-center",
  {
    variants: {
      size: {
        lg: "size-7",
        sm: "size-5",
      },
    },
    defaultVariants: { size: "lg" },
  }
);