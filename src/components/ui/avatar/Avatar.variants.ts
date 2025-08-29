import { cva } from "class-variance-authority";

export const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      size: {
        sm: "size-avatar-sm",
        md: "size-avatar-md",
        lg: "size-avatar-lg",
        xl: "size-avatar-xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);