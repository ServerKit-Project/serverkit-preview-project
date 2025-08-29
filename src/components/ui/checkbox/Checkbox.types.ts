import React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

export type CheckboxProps = {
  variant?: "default" | "active";
  size?: "lg" | "sm";
  disabled?: boolean;
  className?: string;
  label?: string;
} & React.ComponentProps<typeof CheckboxPrimitive.Root>;