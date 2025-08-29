import React from "react";
import { cn } from "@/lib/utils";
import { chipVariants } from "./Chip.variants";
import { CHIP_TEXTS, type ChipProps } from "./Chip.types";

export const Chip = ({ className, variant, size, ...props }: ChipProps) => {
  const text =
    variant && variant in CHIP_TEXTS
      ? CHIP_TEXTS[variant as keyof typeof CHIP_TEXTS]
      : "";

  return (
    <span
      data-slot="chip"
      className={cn(chipVariants({ variant, size }), className)}
      {...props}
    >
      {text}
    </span>
  );
};

export { chipVariants } from "./Chip.variants";
export { CHIP_TEXTS } from "./Chip.types";
