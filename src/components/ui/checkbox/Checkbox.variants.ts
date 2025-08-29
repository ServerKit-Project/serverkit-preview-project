import { cva } from "class-variance-authority";

export const checkboxStyles = cva(
  [
    "border border-[var(--scale-actived-clicked)] data-[state=checked]:text-[var(--scale-actived-clicked)] cursor-pointer",
    "data-[state=checked]:bg-[var(--info-base)] data-[state=checked]:text-[var(--scale-white)]",
  ],
  {
    variants: {
      size: {
        lg: "size-7 rounded",
        sm: "size-5 rounded",
      },
    },
    defaultVariants: { size: "lg" },
  }
);

export const textStyles = cva("flex-1", {
  variants: {
    size: {
      lg: "w-full h-9 text-body-regular p-1",
      sm: "w-full h-7 text-sm p-1",
    },
  },
  defaultVariants: { size: "lg" },
});