import * as React from "react";
import { cn } from "@/lib/utils";

export type SidebarMenuSubItemData = {
  id: string;
  label: string;
  href?: string;
  leftSlot?: React.ReactNode;
};

const iconCls = "size-5 shrink-0 group-hover:text-[var(--scale-primary-text)] ";

type Props = { item: SidebarMenuSubItemData; className?: string };

export default function SidebarMenuSubItem({ item, className }: Props) {
  const Comp = item.href ? "a" : ("button" as const);

  return (
    <li>
      <Comp
        {...(item.href ? { href: item.href } : { type: "button" })}
        className={cn(
          "group flex h-8 w-[192px] items-center gap-2 rounded px-1 text-body-regular",
          "text-[var(--scale-primary-text)]/80 hover:text-[var(--scale-primary-text)]",
          className
        )}
      >
        {item.leftSlot && <span className={iconCls}>{item.leftSlot}</span>}
        <span className="truncate ">{item.label}</span>
      </Comp>
    </li>
  );
}
