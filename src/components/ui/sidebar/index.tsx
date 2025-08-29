import * as React from "react";
import { IconChevronRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import {
  SidebarMenu as ShadcnSidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuAction,
  SidebarMenuSub as ShadcnSidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/base/sidebar";
import {
  SidebarMenuItemProps,
  SidebarMenuSubItemProps,
  SidebarMenuProps,
} from "./Sidebar.types";

export {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuAction,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/base/sidebar";

export function SidebarMenuSub({
  className,
  ...props
}: React.ComponentProps<typeof ShadcnSidebarMenuSub>) {
  return <ShadcnSidebarMenuSub className={cn("gap-2", className)} {...props} />;
}

export function SidebarMenu({ items, className }: SidebarMenuProps) {
  return (
    <ShadcnSidebarMenu className={className}>
      {items.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ShadcnSidebarMenu>
  );
}

function MenuItem({ item }: { item: SidebarMenuItemProps }) {
  const hasChildren = !!item.subItems?.length;
  const [open, setOpen] = React.useState<boolean>(!!item.defaultOpen);

  const Left =
    item.leftSlot ??
    (hasChildren ? (
      <IconChevronRight
        className={cn(
          "size-icon-lg transition-transform duration-200",
          open && "rotate-90"
        )}
      />
    ) : null);

  const Right = item.rightSlot ? (
    <SidebarMenuAction asChild>
      <button type="button">{item.rightSlot}</button>
    </SidebarMenuAction>
  ) : null;

  const renderMenuItemContent = () => {
    const content = (
      <div className="flex gap-2 text-body-regular">
        {Left}
        <span>{item.label}</span>
      </div>
    );

    return item.href ? (
      <a href={item.href}>{content}</a>
    ) : (
      <button type="button">{content}</button>
    );
  };

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        isActive={item.isActive}
        onClick={() => hasChildren && setOpen((prev) => !prev)}
      >
        {renderMenuItemContent()}
      </SidebarMenuButton>

      {Right}

      {hasChildren && open && (
        <SidebarMenuSub>
          {item.subItems!.map((sub) => (
            <MenuSubItem key={sub.id} item={sub} />
          ))}
        </SidebarMenuSub>
      )}
    </SidebarMenuItem>
  );
}

function MenuSubItem({
  item,
  className,
}: {
  item: SidebarMenuSubItemProps;
  className?: string;
}) {
  const renderSubItemContent = () => {
    const content = (
      <div className="flex items-center gap-2 text-body-regular">
        {item.leftSlot && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              item.onDragHandleClick?.(e);
            }}
          >
            {item.leftSlot}
          </button>
        )}
        <span>{item.label}</span>
      </div>
    );

    return item.href ? (
      <a href={item.href}>{content}</a>
    ) : (
      <button type="button">{content}</button>
    );
  };

  return (
    <SidebarMenuSubItem>
      <SidebarMenuSubButton
        asChild
        isActive={item.isActive}
        className={className}
      >
        {renderSubItemContent()}
      </SidebarMenuSubButton>
    </SidebarMenuSubItem>
  );
}
