import React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import type { VariantProps } from "class-variance-authority";
import type { radioItemVariants } from "./RadioGroup.variants";

export type RadioGroupProps = React.ComponentProps<
  typeof RadioGroupPrimitive.Root
>;

export type RadioGroupItemProps = React.ComponentProps<
  typeof RadioGroupPrimitive.Item
> &
  VariantProps<typeof radioItemVariants>;
