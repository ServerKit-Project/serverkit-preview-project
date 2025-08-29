import React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import type { VariantProps } from "class-variance-authority";
import type { tabTriggerVariants } from "./Tab.variants";

export type TabsProps = React.ComponentProps<typeof TabsPrimitive.Root>;
export type TabsListProps = React.ComponentProps<typeof TabsPrimitive.List>;
export type TabsTriggerProps = React.ComponentProps<
  typeof TabsPrimitive.Trigger
> &
  VariantProps<typeof tabTriggerVariants>;
export type TabsContentProps = React.ComponentProps<
  typeof TabsPrimitive.Content
>;
