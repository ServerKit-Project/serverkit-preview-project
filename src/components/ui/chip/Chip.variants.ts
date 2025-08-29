import { cva } from "class-variance-authority";

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

export const chipVariants = cva(
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
        s: "h-[21px] px-[6px] py-0.5 text-xs",
      },
    },
    defaultVariants: {
      variant: "planFree",
      size: "default",
    },
  }
);