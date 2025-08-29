import { cva } from "class-variance-authority";

export const inputVariants = cva(
  [
    "flex w-full min-w-0 border text-base outline-none",
    "disabled:pointer-events-none disabled:cursor-not-allowed",
    "placeholder:text-[var(--scale-disabled-text)]",
  ],
  {
    variants: {
      variant: {
        inputfield: "",
        searchbar: "w-[374px] h-11 pl-3 pr-2 gap-[6px] rounded-lg",
      },
      size: {
        md: "w-[374px] h-11 gap-2 rounded-lg py-2 pl-4 pr-[10px]",
        sm: "w-[374px] h-7 gap-2 rounded text-sm py-1 pl-2 pr-0.5",
      },
      status: {
        default:
          "border-[var(--scale-actived-clicked)] bg-[var(--scale-white)]",
        focus: "border-[var(--info-base)] bg-[var(--scale-white)]",
        error: "border-[var(--error-deep)] bg-[var(--scale-white)]",
        disabled:
          "border-[var(--scale-actived-clicked)] bg-[var(--scale-actived-clicked)]",
      },
    },
    defaultVariants: {
      status: "default",
      variant: "inputfield",
      size: "md",
    },
  }
);

export const messageVariants = cva("text-xs mt-1", {
  variants: {
    status: {
      default: "text-[var(--scale-tertiary-text)]",
      error: "text-[var(--error-deeper)]",
    },
  },
  defaultVariants: {
    status: "default",
  },
});