import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { IconStar } from "@tabler/icons-react";
import type {
  DefaultToggleProps,
  TextToggleProps,
  IconToggleProps,
  ButtonToggleProps,
  ToggleProps,
  StarToggleProps,
} from "./type";

const toggleVariants = cva(
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

export const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  ToggleProps
>(function Toggle(componentProps, ref) {
  const { className, pressed, onPressedChange, ...rest } =
    componentProps as ToggleProps & { className?: string };

  if (rest.type === "default") {
    const { type, size, ...rootProps } = rest as DefaultToggleProps & {
      type: "default";
    };

    return (
      <TogglePrimitive.Root
        ref={ref}
        pressed={pressed}
        onPressedChange={onPressedChange}
        className={cn(toggleVariants({ type, size }), className)}
        {...rootProps}
      >
        <span
          aria-hidden
          className={cn(
            "absolute left-1 top-1/2 -translate-y-1/2 rounded-full bg-[var(--scale-bg)] transition-transform duration-200",
            size === "md"
              ? "size-5 translate-x-0 group-data-[state=on]:translate-x-5"
              : "size-4 -translate-x-0.5 group-data-[state=on]:translate-x-3.5"
          )}
        />
      </TogglePrimitive.Root>
    );
  }

  if (rest.type === "text") {
    const { type, leftLabel, rightLabel, ...rootProps } =
      rest as TextToggleProps & {
        type: "text";
      };

    return (
      <TogglePrimitive.Root
        ref={ref}
        pressed={pressed}
        onPressedChange={onPressedChange}
        className={cn(toggleVariants({ type }), className)}
        {...rootProps}
      >
        <span
          aria-hidden
          className={cn(
            "flex justify-center items-center pointer-events-none absolute h-8 w-[78px] inset-y-1 left-1 rounded-full bg-[var(--scale-white)] transition-transform duration-200 group-data-[state=on]:translate-x-[78px]"
          )}
        />

        <div className="relative z-10 flex w-full items-center justify-between px-4 text-s font-medium">
          <span
            className={cn(
              "select-none text-subbody-semibold",
              "text-[var(--scale-primary-text)] group-data-[state=on]:text-[var(--scale-tertiary-text)]"
            )}
          >
            {leftLabel}
          </span>
          <span
            className={cn(
              "select-none text-subbody-semibold",
              "text-[var(--scale-tertiary-text)] group-data-[state=on]:text-[var(--scale-primary-text)]"
            )}
          >
            {rightLabel}
          </span>
        </div>
      </TogglePrimitive.Root>
    );
  }

  if (rest.type === "icon") {
    const { type, size, icon, leftIcon, rightIcon, ...rootProps } =
      rest as IconToggleProps & {
        type: "icon";
      };

    return (
      <TogglePrimitive.Root
        ref={ref}
        pressed={pressed}
        onPressedChange={onPressedChange}
        className={cn(toggleVariants({ type, size }), className)}
        {...rootProps}
      >
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute flex justify-center items-center top-1/2 -translate-y-1/2 left-1 rounded bg-[var(--scale-white)] transition-transform duration-200",
            size === "md"
              ? "size-8 group-data-[state=on]:translate-x-8"
              : "size-6 -translate-x-0.5 group-data-[state=on]:translate-x-5.5"
          )}
        />

        <div className="relative z-10 grid w-full grid-cols-2 place-items-center">
          <span
            className={cn(
              "flex items-center justify-center",
              "text-[var(--scale-primary-text)] group-data-[state=on]:text-[var(--scale-tertiary-text)]"
            )}
          >
            <span
              className={cn(
                "[&>*]:w-full [&>*]:h-full",
                size === "md" ? "size-5" : "size-4"
              )}
              aria-hidden
            >
              {leftIcon ?? icon}
            </span>
          </span>
          <span
            className={cn(
              "flex items-center justify-center",
              "text-[var(--scale-tertiary-text)] group-data-[state=on]:text-[var(--scale-primary-text)]"
            )}
          >
            <span
              className={cn(
                "[&>*]:w-full [&>*]:h-full",
                size === "md" ? "size-5" : "size-4"
              )}
              aria-hidden
            >
              {rightIcon ?? icon}
            </span>
          </span>
        </div>
      </TogglePrimitive.Root>
    );
  }

  if (rest.type === "star") {
    const { type, ...rootProps } = rest as StarToggleProps & { type: "star" };

    return (
      <TogglePrimitive.Root
        ref={ref}
        pressed={pressed}
        onPressedChange={onPressedChange}
        className={cn(toggleVariants({ type }), className)}
        {...rootProps}
      >
        <IconStar
          size={16}
          stroke={2}
          className={cn(
            "fill-transparent stroke-[var(--scale-tertiary-text)]",
            "group-data-[state=on]:fill-[var(--warning-base)] group-data-[state=on]:stroke-[var(--warning-base)]"
          )}
        />
      </TogglePrimitive.Root>
    );
  }

  const {
    type,
    withText,
    size,
    outlined = false,
    color,
    label,
    ...rootProps
  } = rest as ButtonToggleProps & { type: "button" };

  const isDisabledColor = color === "disabled";
  const slotChildren = (componentProps as any).children;

  return (
    <TogglePrimitive.Root
      ref={ref}
      pressed={pressed}
      onPressedChange={onPressedChange}
      disabled={isDisabledColor || (rootProps as any).disabled}
      className={cn(
        toggleVariants({
          type,
          withText,
          buttonSize: size,
          outline: outlined ? true : false,
          state: color,
        }),
        className
      )}
      {...rootProps}
    >
      {withText === true ? (
        <span
          className={cn(
            "relative z-10 inline-flex items-center",
            size === "md" ? "gap-2" : "gap-1"
          )}
        >
          {slotChildren ? (
            <span
              className={cn(
                "shrink-0 [&>*]:w-full [&>*]:h-full",
                size === "md" ? "size-6" : "size-4"
              )}
              aria-hidden
            >
              {slotChildren}
            </span>
          ) : null}
          <span>{label}</span>
        </span>
      ) : (
        <>
          {slotChildren ? (
            <span
              className={cn(
                "relative z-10 flex items-center justify-center [&>*]:w-full [&>*]:h-full",
                size === "md" ? "size-6" : "size-4"
              )}
            >
              {slotChildren}
            </span>
          ) : (
            <span className="sr-only">Toggle</span>
          )}
        </>
      )}
    </TogglePrimitive.Root>
  );
});

Toggle.displayName = TogglePrimitive.Root.displayName;

export { toggleVariants };
