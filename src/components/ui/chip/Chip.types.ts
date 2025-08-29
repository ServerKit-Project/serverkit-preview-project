import React from "react";
import type { VariantProps } from "class-variance-authority";
import type { chipVariants } from "./Chip.variants";

export const CHIP_TEXTS = {
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

export interface ChipProps
  extends Omit<React.ComponentProps<"span">, "children">,
    VariantProps<typeof chipVariants> {}
