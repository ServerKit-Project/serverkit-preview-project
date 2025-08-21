import React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const thumbnailVariants = cva(
  "relative overflow-hidden flex-shrink-0",
  {
    variants: {
      size: {
        sm: "w-24 h-[54px]",
        lg: "w-28 h-[63px]",
        xl: "w-64 h-36",
      },
      variant: {
        default: "rounded-lg border border-gray-200",
        card: "rounded-sm border-1 border-scale-active-clicked",
      },
    },
    defaultVariants: {
      size: "sm",
      variant: "default",
    },
  }
);

export interface ThumbnailProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof thumbnailVariants> {
  imageUrl?: string;
  alt?: string;
  fallbackSrc?: string;
  children?: React.ReactNode;
}

const Thumbnail = React.forwardRef<HTMLDivElement, ThumbnailProps>(
  (
    {
      className,
      size,
      variant,
      imageUrl,
      alt = "Thumbnail",
      fallbackSrc = "/img/thumbnail_fallback.png",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(thumbnailVariants({ size, variant }), className)}
        {...props}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={alt}
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={fallbackSrc}
            alt={alt}
            className="w-full h-full object-cover"
          />
        )}
        {children && (
          <div className="absolute w-full top-2 flex justify-between px-2">
            {children}
          </div>
        )}
      </div>
    );
  }
);

Thumbnail.displayName = "Thumbnail";

export { Thumbnail, thumbnailVariants };