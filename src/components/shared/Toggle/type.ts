import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";

export type ToggleType = "default" | "text" | "icon" | "button" | "star";

export type Common = Omit<
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
  "type"
> & { className?: string };

export type DefaultToggleProps = Common & {
  type: "default";
  size: "m" | "s";
};

export type TextToggleProps = Common & {
  type: "text";
  leftLabel: string;
  rightLabel: string;
};

export type IconToggleProps = Common & {
  type: "icon";
  size: "m" | "s";
  icon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export type ButtonToggleProps = Common & {
  type: "button";
  size: "m" | "s";
  outlined?: boolean;
  color: "default" | "disabled" | "active";
  buttonKind: "withText" | "noText";
  label?: string;
};

export type StarToggleProps = Common & {
  type: "star";
};

export type ToggleProps =
  | DefaultToggleProps
  | TextToggleProps
  | IconToggleProps
  | ButtonToggleProps
  | StarToggleProps;
