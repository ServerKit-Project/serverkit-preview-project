import React from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shared/Avatar/Avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface ProfileMenuItem {
  label: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  variant?: "default" | "destructive";
  disabled?: boolean;
}

export interface ProfileProps {
  avatarUrl?: string;
  name?: string;
  email?: string;
  menuItems?: ProfileMenuItem[];
  className?: string;
  onAvatarClick?: () => void;
}

export const Profile = React.forwardRef<HTMLDivElement, ProfileProps>(
  ({ avatarUrl, name, email, menuItems = [], className, onAvatarClick, ...props }, ref) => {
    const defaultMenuItems: ProfileMenuItem[] = [
      { label: "프로필", onClick: () => {} },
      { label: "설정", onClick: () => {} },
      { label: "로그아웃", onClick: () => {}, variant: "destructive" },
    ];

    const items = menuItems.length > 0 ? menuItems : defaultMenuItems;

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            ref={ref}
            className={cn(
              "flex items-center gap-2 rounded-lg px-2 py-1 outline-none",
              "hover:bg-[var(--scale-hover)] transition-colors",
              "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              className
            )}
            onClick={onAvatarClick}
          >
            <Avatar size="md">
              <AvatarImage src={avatarUrl} alt={name || "Profile"} />
              <AvatarFallback>{name?.charAt(0)?.toUpperCase() || "U"}</AvatarFallback>
            </Avatar>
            {name && (
              <span className="text-sm font-medium text-[var(--scale-primary-text)]">
                {name}
              </span>
            )}
            <IconChevronDown className="size-4 text-[var(--scale-secondary-text)]" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          {(name || email) && (
            <>
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  {name && <p className="text-sm font-medium leading-none">{name}</p>}
                  {email && <p className="text-xs leading-none text-muted-foreground">{email}</p>}
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
            </>
          )}
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && items[index - 1].variant !== item.variant && <DropdownMenuSeparator />}
              <DropdownMenuItem
                onClick={item.onClick}
                disabled={item.disabled}
                variant={item.variant}
                className={cn(
                  item.variant === "destructive" && "text-[var(--error-base)] focus:text-[var(--error-base)]"
                )}
              >
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.label}
              </DropdownMenuItem>
            </React.Fragment>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
);

Profile.displayName = "Profile";