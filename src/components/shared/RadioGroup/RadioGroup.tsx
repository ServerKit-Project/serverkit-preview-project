import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

// @TODO: hover 시 radio, 텍스트에 bg효과 추가하기
function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return <RadioGroupPrimitive.Root {...props} />;
}

const radioItem = cva(
  "group border-2 border-input shrink-0 rounded-full transition-colors outline-none hover:cursor-pointer flex items-center justify-center ",
  {
    variants: {
      size: {
        lg: "size-7 ",
        sm: "size-5 ",
      },
    },
    defaultVariants: { size: "lg" },
  }
);

function RadioGroupItem({
  className,
  size = "lg",
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item> &
  VariantProps<typeof radioItem>) {
  return (
    <RadioGroupPrimitive.Item
      className={cn(
        radioItem({ size }),
        "hover:border-[var(--scale-actived-clicked)] ",
        "data-[state=checked]:border-[var(--info-base)] focus-visible:border-[var(--info-base)]",
        className
      )}
      {...props}
    >
      {/* 안쪽 원 컨테이너 */}
      <span className="relative flex items-center justify-center w-full h-full">
        {/* hover 상태용 회색 원 */}
        <span
          className={cn(
            "absolute rounded-full bg-[var(--scale-actived-clicked)] opacity-0 group-hover:opacity-100 transition-opacity",
            size === "lg" ? "w-4 h-4" : "w-3 h-3"
          )}
        />
        <RadioGroupPrimitive.Indicator>
          <span
            className={cn(
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--info-base)]",
              size === "lg" ? "w-4 h-4" : "w-3 h-3"
            )}
          />
        </RadioGroupPrimitive.Indicator>
      </span>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
