import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "@/lib/utils";

interface SeparatorProps
  extends React.ComponentProps<typeof SeparatorPrimitive.Root> {
  className?: string;
  orientation?: "horizontal" | "vertical";
}

function Separator({
  className,
  orientation = "horizontal",
  ...props
}: SeparatorProps) {
  return (
    <SeparatorPrimitive.Root
      decorative={true}
      orientation={orientation}
      className={cn(
        "bg-[var(--scale-actived-clicked)] shrink-0",
        "data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full",
        "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  );
}

function SeparatorNoPadding({
  className,
  orientation = "horizontal",
  ...props
}: SeparatorProps) {
  return (
    <SeparatorPrimitive.Root
      decorative={true}
      orientation={orientation}
      className={cn(
        "bg-[var(--scale-actived-clicked)] shrink-0",
        "data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full",
        "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px p-0 m-0",
        className
      )}
      {...props}
    />
  );
}

export { Separator, SeparatorNoPadding };
