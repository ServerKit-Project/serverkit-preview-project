import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const COLOR_THEMES = {
  gray: "border-[var(--gray-base)] bg-[var(--gray-light)] text-[var(--scale-secondary-text)]",
  purple:
    "border-[var(--purple-base)] bg-[var(--purple-light)] text-[var(--purple-deeper)]",
  orange:
    "border-[var(--orange-base)] bg-[var(--orange-light)] text-[var(--orange-deeper)]",
  info: "border-[var(--info-base)] bg-[var(--info-light)] text-[var(--info-deeper)]",
  success:
    "border-[var(--success-base)] bg-[var(--success-light)] text-[var(--success-deeper)]",
  warning:
    "border-[var(--warning-base)] bg-[var(--warning-light)] text-[var(--warning-deeper)]",
  error:
    "border-[var(--error-base)] bg-[var(--error-light)] text-[var(--error-deeper)]",
};

const CHIP_TEXTS = {
  planFree: "Free",
  planPro: "Pro",
  planBiz: "Biz.",
  planEnt: "Ent.",
  statusInProgress: "In progress",
  statusNeedsReview: "Needs review",
  statusNeedsUpdate: "Needs update",
  statusApproved: "Approved",
  statusOnHold: "On hold",
  statusRejected: "Rejected",
  statusClosed: "Closed",
  active: "Active",
  inactive: "Inactive",
} as const;

const chipVariants = cva(
  [
    "inline-flex items-center justify-center rounded border ",
    "w-fit whitespace-nowrap shrink-0 overflow-hidden",
  ],
  {
    variants: {
      variant: {
        planFree: COLOR_THEMES.gray,
        planPro: COLOR_THEMES.info,
        planBiz: COLOR_THEMES.purple,
        planEnt: COLOR_THEMES.orange,
        statusInProgress: COLOR_THEMES.purple,
        statusNeedsReview: COLOR_THEMES.orange,
        statusNeedsUpdate: COLOR_THEMES.info,
        statusApproved: COLOR_THEMES.success,
        statusOnHold: COLOR_THEMES.warning,
        statusRejected: COLOR_THEMES.error,
        statusClosed: COLOR_THEMES.gray,
        active: COLOR_THEMES.success,
        inactive: COLOR_THEMES.gray,
      },
      size: {
        default: "h-6 px-2 py-0.5 text-xs",
        m: "h-7 px-2 py-1 text-sm",
        s: "h-[21px] px-1 py-0.5 text-xs",
      },
    },
    defaultVariants: {
      variant: "planFree",
      size: "default",
    },
  }
);

interface ChipProps
  extends Omit<React.ComponentProps<"span">, "children">,
    VariantProps<typeof chipVariants> {}

function Chip({ className, variant, size, ...props }: ChipProps) {
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
}

export { Chip, chipVariants, CHIP_TEXTS };
