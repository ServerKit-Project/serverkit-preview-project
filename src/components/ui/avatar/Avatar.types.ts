import type { VariantProps } from "class-variance-authority";
import type { avatarVariants } from "./Avatar.variants";
import type {
  Avatar as ShadcnAvatar,
  AvatarFallback as ShadcnAvatarFallback,
} from "@/components/base/avatar";
import React from "react";

export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof ShadcnAvatar>,
    VariantProps<typeof avatarVariants> {
  showMentionIcon?: boolean;
}

export interface AvatarFallbackProps
  extends React.ComponentPropsWithoutRef<typeof ShadcnAvatarFallback> {
  size?: "sm" | "md" | "lg" | "xl";
}
