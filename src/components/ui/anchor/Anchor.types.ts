import React from "react";
import type { VariantProps } from "class-variance-authority";
import type { anchorVariants } from "./Anchor.variants";

export interface AnchorProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "size">,
    VariantProps<typeof anchorVariants> {
  disabled?: boolean;
}
