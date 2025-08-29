import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const triggerCva = cva(
  [
    "relative inline-flex h-5 items-center text-[var(--font-size-subbody)] whitespace-nowrap cursor-pointer",
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
type TabsTriggerProps = React.ComponentProps<typeof TabsPrimitive.Trigger> &
  TriggerVariants;

export function Tabs({
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

export function TabsList({
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

export const TabsTrigger = ({
  variant,
  className,
  children,
  value,
  ...props
}: TabsTriggerProps) => {
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
};

export function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return <TabsPrimitive.Content className={cn("mt-2", className)} {...props} />;
}
