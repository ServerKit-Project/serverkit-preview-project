"use client";

import { IconX } from "@tabler/icons-react";
import { Toaster as Sonner, toast as sonnerToast } from "sonner";
import { cn } from "@/lib/utils";
import {
  getIconForVariant,
  type VariantType,
} from "@/components/ui/varianticons";

interface ToastOptions {
  variant?: VariantType;
  duration?: number;
  dismissible?: boolean;
}

function toast(message: string | React.ReactNode, options: ToastOptions = {}) {
  const { variant = "default", duration = 4000, dismissible = true } = options;

  const icon = getIconForVariant(variant);

  const toastId = sonnerToast.custom(
    (id) => (
      <div className={cn("toast-base", `toast-${variant}`)}>
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0">{icon}</div>
          <div className="flex-1 font-medium">{message}</div>
        </div>
        {dismissible && (
          <button
            onClick={() => sonnerToast.dismiss(id)}
            className="flex-shrink-0 p-1 rounded-md hover:bg-muted transition-colors opacity-50 hover:opacity-100"
            aria-label="닫기"
          >
            <IconX className="w-4 h-4" />
          </button>
        )}
      </div>
    ),
    {
      duration,
    }
  );

  return toastId;
}

toast.success = (
  message: string | React.ReactNode,
  options?: Omit<ToastOptions, "variant">
) => {
  return toast(message, { ...options, variant: "success" });
};

toast.error = (
  message: string | React.ReactNode,
  options?: Omit<ToastOptions, "variant">
) => {
  return toast(message, { ...options, variant: "error" });
};

toast.warning = (
  message: string | React.ReactNode,
  options?: Omit<ToastOptions, "variant">
) => {
  return toast(message, { ...options, variant: "warning" });
};

toast.info = (
  message: string | React.ReactNode,
  options?: Omit<ToastOptions, "variant">
) => {
  return toast(message, { ...options, variant: "info" });
};

const ToastProvider = (props: any) => {
  return (
    <Sonner
      {...props}
      visibleToasts={4}
      position="top-right"
      expand={false}
      richColors
      closeButton={false}
      toastOptions={{
        classNames: {
          toast: "group",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
    />
  );
};

export { ToastProvider, toast };
