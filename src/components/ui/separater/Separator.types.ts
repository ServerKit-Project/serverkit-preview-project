import React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

export interface SeparatorProps
  extends React.ComponentProps<typeof SeparatorPrimitive.Root> {
  className?: string;
  orientation?: "horizontal" | "vertical";
}
