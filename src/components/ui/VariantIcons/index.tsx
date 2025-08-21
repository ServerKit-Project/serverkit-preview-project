import React from "react";

export type VariantType = "default" | "success" | "warning" | "info" | "error";

export const getIconForVariant = (variant: VariantType) => {
  const icons = {
    default: <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />,
    success: (
      <svg
        className="w-5 h-5 text-success-base"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
    warning: (
      <svg
        className="w-5 h-5 text-warning-base"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),
    info: (
      <svg
        className="w-5 h-5 text-info-base"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    error: (
      <svg
        className="w-5 h-5 text-error-base"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  };
  return icons[variant];
};

export const getVariantClassNames = (variant: VariantType) => {
  const classNames = {
    default: {
      background: "bg-white dark:bg-gray-900",
      border: "border-2 border-border hover:border-accent",
      text: "text-foreground",
    },
    success: {
      background: "bg-success-light dark:bg-success-deeper/10",
      border: "border-2 border-success-deep",
      text: "text-success-deep dark:text-success-base",
    },
    warning: {
      background: "bg-warning-light dark:bg-warning-deeper/10",
      border: "border-2 border-warning-deep",
      text: "text-warning-deep dark:text-warning-base",
    },
    info: {
      background: "bg-info-light dark:bg-info-deeper/10",
      border: "border-2 border-info-deep",
      text: "text-info-deep dark:text-info-base",
    },
    error: {
      background: "bg-error-light dark:bg-error-deeper/10",
      border: "border-2 border-error-deep",
      text: "text-error-deep dark:text-error-base",
    },
  };
  return classNames[variant];
};
