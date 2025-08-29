import { cva } from "class-variance-authority";

export const toggleVariants = cva(
  [
    "group relative inline-flex items-center justify-center rounded-full cursor-pointer transition-all duration-200",
    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  ],
  {
    variants: {
      type: { default: "", text: "", icon: "", button: "", star: "" },
      size: { md: null, sm: null },

      buttonSize: { md: null, sm: null },
      withText: { true: null, false: null },
      outline: { true: null, false: null },
      state: { default: null, disabled: null, active: null },
    },
    compoundVariants: [
      // default
      {
        type: "default",
        size: "md",
        class:
          "h-7 w-12 px-1 bg-[var(--scale-disabled-text)] data-[state=on]:bg-[var(--info-base)]",
      },
      {
        type: "default",
        size: "sm",
        class:
          "h-5 w-9 bg-[var(--scale-disabled-text)] data-[state=on]:bg-[var(--info-base)]",
      },

      // text
      {
        type: "text",
        class: "h-10 w-[166px] bg-[var(--scale-hover)] text-subbody-semibold",
      },

      // icon
      {
        type: "icon",
        size: "md",
        class: "h-10 w-18 bg-[var(--scale-hover)] rounded-lg p-1",
      },
      {
        type: "icon",
        size: "sm",
        class: "h-7 w-[52px] bg-[var(--scale-hover)] rounded p-0.5",
      },

      // button withText
      {
        type: "button",
        withText: false,
        buttonSize: "md",
        class: "size-11 aspect-square rounded-lg",
      },
      {
        type: "button",
        withText: true,
        buttonSize: "md",
        class: "h-11 w-[95px] px-4 text-button1-regular rounded-lg",
      },
      {
        type: "button",
        withText: false,
        buttonSize: "sm",
        class: "size-7 aspect-square rounded",
      },
      {
        type: "button",
        withText: true,
        buttonSize: "sm",
        class: "h-7 w-[63px] px-2 text-sm  rounded",
      },

      // button state
      {
        type: "button",
        state: "default",
        class: "bg-[var(--scale-white)] text-[var(--scale-disabled-text)]",
      },
      {
        type: "button",
        state: "disabled",
        class: "bg-[var(--scale-hover)] text-[var(--scale-disabled-text)]",
      },
      {
        type: "button",
        state: "active",
        class: "bg-[var(--scale-primary-text)] text-[var(--scale-white)]",
      },

      // button outline
      {
        type: "button",
        outline: true,
        class: "border border-[var(--scale-actived-clicked)]",
      },
      { type: "button", outline: false, class: "" },

      {
        type: "star",
        class:
          "size-7 aspect-square rounded bg-[var(--scale-white)] border border-[var(--scale-actived-clicked)]",
      },
    ],
  }
);