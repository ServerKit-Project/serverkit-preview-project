import React from "react";
import type { VariantProps } from "class-variance-authority";
import type { buttonVariants } from "./Button.variants";
import type { chipVariants } from "@/components/ui/chip";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "style">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  size: "sm" | "lg" | "huge";
  title?: string; // TODO: title, caption을 props로 받고 옵셔널 제거
  caption?: string; // TODO: title, caption을 props로 받고 옵셔널 제거
  chipVariant?: VariantProps<typeof chipVariants>["variant"];
}
