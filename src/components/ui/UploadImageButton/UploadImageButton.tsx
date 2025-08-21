import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { IconPlus, IconPencil } from "@tabler/icons-react";

interface UploadImageButtonProps {
  variant: "workspace" | "avatar";
  state?: "empty" | "filled" | "edit";
  imageUrl?: string;
  onUpload?: (file: File) => void;
  className?: string;
  disabled?: boolean;
  acceptedFormats?: string;
}

const UploadImageButton = React.forwardRef<
  HTMLButtonElement,
  UploadImageButtonProps
>(
  (
    {
      variant,
      state = "empty",
      imageUrl,
      onUpload,
      className,
      disabled = false,
      acceptedFormats = "image/png,image/jpeg,image/jpg,image/webp",
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [previewUrl, setPreviewUrl] = useState(imageUrl);

    useEffect(() => {
      setPreviewUrl(imageUrl);
    }, [imageUrl]);

    const handleClick = () => {
      if (!disabled) {
        inputRef.current?.click();
      }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        handleFile(file);
      }
    };

    const handleFile = (file: File) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
        onUpload?.(file);
      }
    };

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
      if (!disabled) {
        setIsDragging(true);
      }
    };

    const handleDragLeave = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      if (!disabled) {
        const file = e.dataTransfer.files[0];
        if (file) {
          handleFile(file);
        }
      }
    };

    const baseClasses = cn(
      "relative overflow-hidden transition-all cursor-pointer",
      "flex flex-col items-center justify-center gap-1",
      "w-30 h-30",
      "hover:bg-[var(--scale-hover)]",
      "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      {
        "bg-[var(--info-light)]": isDragging,
        "opacity-50 cursor-not-allowed": disabled,
      }
    );

    const variantClasses = {
      workspace: cn("rounded-lg"),
      avatar: cn("rounded-full"),
    };

    const dashedBorderStyle =
      !previewUrl || state === "empty"
        ? {
            backgroundImage: isDragging
              ? variant === "avatar"
                ? `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='50%25' cy='50%25' r='49%25' fill='none' stroke='%236B7AF5' stroke-width='2' stroke-dasharray='12%2c 12' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e")`
                : `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%236B7AF5' stroke-width='2' stroke-dasharray='12%2c 12' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`
              : variant === "avatar"
                ? `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='50%25' cy='50%25' r='49%25' fill='none' stroke='%23999999' stroke-width='2' stroke-dasharray='12%2c 12' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e")`
                : `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23999999' stroke-width='2' stroke-dasharray='12%2c 12' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
          }
        : {};

    return (
      <>
        <button
          ref={ref}
          type="button"
          className={cn(baseClasses, variantClasses[variant], className)}
          style={dashedBorderStyle}
          onClick={handleClick}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          disabled={disabled}
        >
          {previewUrl ? (
            <>
              <img
                src={previewUrl}
                alt="Uploaded"
                className={cn(
                  "absolute inset-0 w-full h-full",
                  variant === "workspace"
                    ? "object-contain p-4"
                    : "object-cover"
                )}
              />
              {state === "edit" && (
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-2 opacity-0 hover:opacity-100 transition-opacity">
                  <IconPencil className="w-6 h-6 text-white" />
                  <span className="text-caption-regular !text-white">
                    Edit image
                  </span>
                </div>
              )}
            </>
          ) : (
            <>
              <IconPlus className="w-6 h-6 text-[var(--scale-secondary-text)]" />
              <span className="text-sm text-[var(--scale-secondary-text)]">
                Add image
              </span>
            </>
          )}
        </button>
        <input
          ref={inputRef}
          type="file"
          accept={acceptedFormats}
          onChange={handleFileChange}
          className="hidden"
        />
      </>
    );
  }
);

UploadImageButton.displayName = "UploadImageButton";

export { UploadImageButton, type UploadImageButtonProps };
