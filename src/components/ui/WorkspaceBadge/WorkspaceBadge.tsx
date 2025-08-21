import { cva, type VariantProps } from "class-variance-authority";

const workspaceBadgeVariants = cva(
  "bg-purple-base rounded-sm transition-opacity flex items-center justify-center",
  {
    variants: {
      size: {
        sm: "size-avatar-sm",
        md: "size-avatar-md",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface WorkspaceBadgeProps
  extends VariantProps<typeof workspaceBadgeVariants> {
  onClick?: () => void;
  children?: React.ReactNode;
}

export function WorkspaceBadge({ size, onClick, children }: WorkspaceBadgeProps) {
  return (
    <div className={workspaceBadgeVariants({ size })} onClick={onClick}>
      {children}
    </div>
  );
}
