import React from "react";
import { cn } from "@/lib/utils";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shared/Avatar/Avatar";
import { cva, type VariantProps } from "class-variance-authority";

const membersVariants = cva("flex items-center gap-1", {
  variants: {
    size: {
      sm: "",
      md: "",
      lg: "",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

export interface MembersProps extends VariantProps<typeof membersVariants> {
  members: Array<{
    id: string;
    name: string;
    avatar?: string;
  }>;
  totalCount?: number;
  className?: string;
}

const getMaxVisible = (size: MembersProps["size"]) => {
  switch (size) {
    case "sm":
      return 2;
    case "md":
    case "lg":
      return 4;
    default:
      return 2;
  }
};

export const Members = React.forwardRef<HTMLDivElement, MembersProps>(
  ({ members, totalCount, size = "sm", className }, ref) => {
    const maxVisible = getMaxVisible(size);
    const visibleMembers = members.slice(0, maxVisible);
    const remainingCount = totalCount ? totalCount - maxVisible : members.length - maxVisible;

    return (
      <div ref={ref} className={cn(membersVariants({ size }), className)}>
        <div className="flex -space-x-2">
          {visibleMembers.map((member) => (
            <Avatar
              key={member.id}
              size={size}
              className="border-1 border-scale-active-clicked"
            >
              <AvatarImage src={member.avatar} alt={member.name} />
              <AvatarFallback className="text-xs bg-orange-400 text-white" />
            </Avatar>
          ))}
        </div>
        {remainingCount > 0 && (
          <span className="text-caption-regular">+{remainingCount}</span>
        )}
      </div>
    );
  }
);

Members.displayName = "Members";
