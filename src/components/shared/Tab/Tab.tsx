import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const triggerCva = cva(
  [
    "relative inline-flex h-5 items-center font[var--(--font-size-subbody)] whitespace-nowrap cursor-pointer",
  ],
  {
    variants: {
      variant: {
        primary: [
          "border-b-2 pb-1 border-[var(--scale-primary-text)] text-[var(--scale-primary-text)]",
        ],
        muted: [
          "border-b-2 pb-1 border-[var(--scale-disabled-text)] text-[var(--scale-disabled-text)]",
        ],
        plain: [],
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

type TriggerVariants = VariantProps<typeof triggerCva>;

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      className={cn("inline-flex h-9 gap-1 w-fit items-center", className)}
      {...props}
    />
  );
}

interface TabsTriggerProps
  extends Omit<
      React.ComponentProps<typeof TabsPrimitive.Trigger>,
      "children" | "value"
    >,
    TriggerVariants {
  children?: React.ReactNode;
  value?: string;
}

function TabsTrigger({
  variant,
  className,
  children,
  value,
  ...props
}: TabsTriggerProps) {
  const triggerValue =
    value ?? (typeof children === "string" ? children : String(children));

  return (
    <TabsPrimitive.Trigger
      value={triggerValue}
      className={cn(triggerCva({ variant }), className)}
      {...props}
    >
      {children}
    </TabsPrimitive.Trigger>
  );
}

export { Tabs, TabsList, TabsTrigger };
