import { useState, useId } from "react";
import { Button } from "@/components/base/button";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

type StepperProps = {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  status?: "default" | "error" | "focus";
  onChange?: (v: number) => void;
  className?: string;
};

const stepperVariants = cva(
  "flex h-11 w-[31px] items-center justify-center rounded-lg border text-title-semibold",
  {
    variants: {
      status: {
        default: "ring-1 ring-[var(--scale-actived-clicked)]",
        error: "ring-1 ring-[var(--error-deep)]",
        focus: "ring-1 ring-[var(--info-base)]",
      },
    },
    defaultVariants: {
      status: "default",
    },
  }
);

export function Stepper({
  value: valueProp,
  min = 0,
  max = 99,
  step = 1,
  status = "default",
  onChange,
  className,
}: StepperProps) {
  const [value, setValue] = useState(valueProp ?? 5);
  const id = useId();

  const set = (n: number) => {
    const next = Math.min(max, Math.max(min, n));
    setValue(next);
    onChange?.(next);
  };

  const dec = () => set(value - step);
  const inc = () => set(value + step);

  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 rounded-2xl bg-[var(--scale-white)] p-4 shadow-sm",
        className
      )}
    >
      <Button
        type="button"
        variant="outline"
        className="bg-[--scale-white] rounded size-7 aspect-square"
        size="icon"
        onClick={dec}
        disabled={value <= min}
        aria-controls={id}
        aria-label="Decrease"
      >
        <img alt="minus" src="/minusIcon.svg" width={16} />
      </Button>

      <div
        id={id}
        role="spinbutton"
        tabIndex={0}
        aria-label="Sheet count"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-invalid={status === "error" ? true : undefined}
        onKeyDown={(e) => {
          if (e.key === "ArrowUp") inc();
          if (e.key === "ArrowDown") dec();
        }}
        className={cn(
          stepperVariants({ status }),
          "focus-visible:outline-none"
        )}
      >
        {value}
      </div>

      <Button
        type="button"
        variant="outline"
        className="bg-[--scale-white] rounded size-7 aspect-square"
        size="icon"
        onClick={inc}
        disabled={value >= max}
        aria-controls={id}
        aria-label="Increase"
      >
        <img alt="plus" src="/plusIcon.svg" width={16} />
      </Button>
    </div>
  );
}
