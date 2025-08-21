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
      // default, icon에서만 사용
      size: { m: null, s: null },
      // button 전용
      buttonKind: { withText: null, noText: null },
      btnSize: { m: null, s: null },
      btnOutline: { on: null, off: null },
      btnColor: { default: null, disabled: null, active: null },
    },
    compoundVariants: [
      // default (m/s)
      {
        type: "default",
        size: "m",
        class:
          "h-7 w-12 px-1 bg-[var(--scale-disabled-text)] data-[state=on]:bg-[var(--info-base)]",
      },
      {
        type: "default",
        size: "s",
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
        size: "m",
        class: "h-10 w-[72px] bg-[var(--scale-hover)] rounded-lg p-1",
      },
      {
        type: "icon",
        size: "s",
        class: "h-7 w-[52px] bg-[var(--scale-hover)] rounded p-0.5",
      },

      // button 크기 (noText / withText , m/s)
      {
        type: "button",
        buttonKind: "noText",
        btnSize: "m",
        class: "h-11 w-11 rounded-[8px]",
      },
      {
        type: "button",
        buttonKind: "withText",
        btnSize: "m",
        class: "h-11 w-[95px] px-4 text-m rounded-[8px]",
      },
      {
        type: "button",
        buttonKind: "noText",
        btnSize: "s",
        class: "h-7 w-7 rounded-[4px]",
      },
      {
        type: "button",
        buttonKind: "withText",
        btnSize: "s",
        class: "h-7 w-[63px] px-2 text-s rounded-[4px]",
      },

      // button 색상 (default/disabled/active)
      {
        type: "button",
        btnColor: "default",
        class: "bg-[var(--scale-white)] text-[var(--scale-disabled-text)]",
      },
      {
        type: "button",
        btnColor: "disabled",
        class: "bg-[var(--scale-hover)] text-[var(--scale-disabled-text)]",
      },
      {
        type: "button",
        btnColor: "active",
        class: "bg-[var(--scale-primary-text)] text-[var(--scale-white)]",
      },

      // button 아웃라인 (on/off)
      {
        type: "button",
        btnOutline: "on",
        class: "border border-[var(--scale-actived-clicked)]",
      },
      { type: "button", btnOutline: "off", class: "" },

      {
        type: "star",
        class:
          "size-7 rounded bg-[var(--scale-white)] border border-[var(--scale-actived-clicked)]",
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
            "absolute left-1 rounded-full bg-[var(--scale-bg)] transition-transform duration-200",
            size === "m"
              ? "h-5 w-5 translate-x-0 group-data-[state=on]:translate-x-5"
              : "h-4 w-4 translate-x-0 group-data-[state=on]:translate-x-3"
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
            "flex justify-center items-center pointer-events-none absolute h-[32px] w-[78px] inset-y-1 left-1 rounded-full bg-[var(--scale-white)] transition-transform duration-200 group-data-[state=on]:translate-x-[78px]"
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
            "pointer-events-none absolute flex justify-center items-center top-1/2 -translate-y-1/2 left-1 rounded-[4px] bg-[var(--scale-white)] transition-transform duration-200",
            size === "m"
              ? "size-8 group-data-[state=on]:translate-x-8"
              : "size-6 group-data-[state=on]:translate-x-5"
          )}
        />

        <div className="relative z-10 flex w-full items-center pt-0.5 justify-between">
          <span
            className={cn(
              "flex w-1/2 items-center justify-center",
              "text-[var(--scale-primary-text)] group-data-[state=on]:text-[var(--scale-tertiary-text)]"
            )}
          >
            <span className="size-5 [&>*]:w-full [&>*]:h-full">
              {leftIcon ?? icon}
            </span>
          </span>
          <span
            className={cn(
              "flex w-1/2 items-center justify-center",
              "text-[var(--scale-tertiary-text)] group-data-[state=on]:text-[var(--scale-primary-text)]"
            )}
          >
            <span className=" size-5 [&>*]:w-full [&>*]:h-full">
              {leftIcon ?? icon}
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
    buttonKind,
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
          buttonKind,
          btnSize: size,
          btnOutline: outlined ? "on" : "off",
          btnColor: color,
        }),
        className
      )}
      {...rootProps}
    >
      {buttonKind === "withText" ? (
        <span className="relative z-10 inline-flex items-center gap-2">
          {slotChildren ? (
            <span
              className={cn(
                "shrink-0 [&>*]:w-full [&>*]:h-full",
                size === "m" ? "w-6 h-6" : "w-4 h-4"
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
                size === "m" ? "w-6 h-6" : "w-4 h-4"
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
