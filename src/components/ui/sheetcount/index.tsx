import { useState, useId } from "react";
import { Button } from "@/components/base/button";
import { cn } from "@/lib/utils";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { StepperProps } from "./SheetCount.types";
import { stepperVariants } from "./SheetCount.variants";

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
        <IconMinus className="size-4" aria-hidden="true" />
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
        <IconPlus className="size-4" aria-hidden="true" />
      </Button>
    </div>
  );
}
