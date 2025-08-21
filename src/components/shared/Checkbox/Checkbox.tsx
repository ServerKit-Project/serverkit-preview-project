import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { IconCheck } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const CheckboxStyles = cva(
  [
    "border border-[var(--scale-actived-clicked)] data-[state=checked]:text-[var(--scale-actived-clicked)] cursor-pointer",
    "data-[state=checked]:bg-[var(--info-base)] data-[state=checked]:text-[var(--scale-white)]",
  ],
  {
    variants: {
      size: {
        lg: "h-7 w-7 rounded-[4px]",
        sm: "h-5 w-5 rounded-[4px]",
      },
    },
    defaultVariants: { size: "lg" },
  }
);

const textStyles = cva("flex-1", {
  variants: {
    size: {
      lg: "w-full h-9 text-body-regular p-1",
      sm: "w-full h-7 text-sm p-1",
    },
  },
  defaultVariants: { size: "lg" },
});

type Props = {
  variant?: "default" | "active";
  size?: "lg" | "sm";
  disabled?: boolean;
  className?: string;
  label?: string;
} & React.ComponentProps<typeof CheckboxPrimitive.Root>;

function Checkbox({
  variant = "default",
  size = "lg",
  disabled,
  className,
  label,
  ...props
}: Props) {
  return (
    <div
      className={cn(
        "flex items-center space-x-2 rounded-[8px] data-[state=checked]:bg-[var(--scale-hover)] w-full",
        label ? "group hover:bg-[var(--scale-hover)] p-1" : ""
      )}
    >
      <CheckboxPrimitive.Root // 실제 체크박스 역할을 하는 Radix UI의 Root.
        className={cn(
          "gap-2 aspect-square relative group shrink-0",
          CheckboxStyles({ size }),

          className
        )}
        disabled={disabled}
        {...props}
      >
        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <IconCheck className="text-[var(--scale-actived-clicked)] size-4" />
        </span>
        <CheckboxPrimitive.Indicator // 체크 상태일 때 안에 표시되는 부분.
          data-slot="checkbox-indicator"
          className="flex items-center justify-center text-current transition-none"
        >
          <IconCheck className="size-4" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {label && <label className={cn(textStyles({ size }))}>{label}</label>}
    </div>
  );
}

export { Checkbox };
