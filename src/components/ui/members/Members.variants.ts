import { cva } from "class-variance-authority";

export const membersVariants = cva("flex items-center gap-1", {
  variants: {
    size: {
      sm: "",
      md: "",
      lg: "",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});
