import React from "react";
import { cn } from "@/lib/utils";
import { Members, type MembersProps } from ".";
import { IconChevronDown } from "@tabler/icons-react";
import { Button } from "../Button";

export interface MembersButtonProps extends MembersProps {
  onClick?: () => void;
}

export const MembersButton = React.forwardRef<
  HTMLButtonElement,
  MembersButtonProps
>(({ onClick, className, ...membersProps }, ref) => {
  return (
    <Button
      size="lg"
      variant="clear"
      ref={ref}
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 rounded-md p-1 hover:bg-scale-hover transition-colors",
        className
      )}
    >
      <Members {...membersProps} />
      <IconChevronDown className="w-5 h-5 text-scale-tertiary-text" />
    </Button>
  );
});

MembersButton.displayName = "MembersButton";
