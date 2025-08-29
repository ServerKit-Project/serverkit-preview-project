import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "font-medium transition-all outline-none",
    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:flex-shrink-0",
  ],
  {
    variants: {
      variant: {
        default: [
          "border border-[var(--scale-actived-clicked)] text-[var(--scale-primary-text)]",
          "hover:bg-[var(--scale-hover)]",
          "active:bg-[var(--scale-actived-clicked)]",
        ],
        clear: [
          "text-[var(--scale-primary-text)]",
          "hover:bg-[var(--scale-hover)]",
          "active:bg-[var(--scale-actived-clicked)]",
        ],
        filled: [
          "bg-[var(--scale-white)] border border-[var(--scale-actived-clicked)] text-[var(--scale-primary-text)]",
          "hover:bg-[var(--scale-hover)]",
          "active:bg-[var(--scale-actived-clicked)]",
        ],
        dark: [
          "bg-[var(--dark-bg)] border border-[var(--scale-actived-clicked)] text-[var(--scale-white)]",
          "hover:bg-[var(--dark-hover)]",
          "active:bg-[var(--dark-actived-clicked)]",
        ],
        success: [
          "border border-[var(--success-base)] text-[var(--success-deeper)]",
          "hover:bg-[var(--success-light)] hover:border-[var(--success-base)]",
          "active:bg-[var(--success-base)] active:text-[var(--scale-white)]",
        ],
        error: [
          "border border-[var(--error-base)] text-[var(--error-deeper)]",
          "hover:bg-[var(--error-light)] hover:border-[var(--error-base)]",
          "active:bg-[var(--error-base)] active:text-[var(--scale-white)]",
        ],
        info: [
          "border border-[var(--info-base)] text-[var(--info-deeper)]",
          "hover:bg-[var(--info-light)] hover:border-[var(--info-base)]",
          "active:bg-[var(--info-base)] active:text-[var(--scale-white)]",
        ],
      },
      size: {
        sm: "h-7 text-sm",
        lg: "h-11 text-base",
        huge: "",
      },
      style: {
        icon: "aspect-square p-0",
        text: "px-4",
        "icon-text": "px-4",
        "icon-text-chip": "px-4",
        caption: "flex-col gap-1 !items-start",
      },
    },
    compoundVariants: [
      {
        size: "sm",
        style: "icon",
        class: "w-7 min-w-7 rounded",
      },
      {
        size: "sm",
        style: "text",
        class: "px-2 rounded",
      },
      {
        size: "sm",
        style: "icon-text",
        class: "px-2 rounded",
      },
      {
        size: "sm",
        style: "icon-text-chip",
        class: "px-2 rounded",
      },
      {
        size: "lg",
        style: "icon",
        class: "w-11 min-w-11 rounded-lg",
      },
      {
        size: "lg",
        style: "text",
        class: "px-4 rounded-lg",
      },
      {
        size: "lg",
        style: "icon-text",
        class: "px-4 rounded-lg",
      },
      {
        size: "lg",
        style: "icon-text-chip",
        class: "px-4 rounded-lg",
      },
      {
        size: "huge",
        style: "caption",
        class: "p-6 rounded-xl gap-1",
      },
      {
        class: [
          "disabled:bg-[var(--scale-hover)] disabled:border-[var(--scale-actived-clicked)]",
          "disabled:text-[var(--scale-disabled-text)] disabled:hover:bg-[var(--scale-hover)]",
        ],
      },
    ],
    defaultVariants: {
      variant: "default",
      style: "text",
    },
  }
);