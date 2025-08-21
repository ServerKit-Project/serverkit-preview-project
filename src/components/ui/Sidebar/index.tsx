import * as React from "react";
import { IconChevronRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const itemVariants = cva(
  "group flex h-8 w-[192px] items-center gap-2 rounded px-1 text-sm " +
    "text-[var(--scale-primary-text)]/80 hover:text-[var(--scale-primary-text)] " +
    "transition-all cursor-pointer text-body-regular",
  {
    variants: {
      active: {
        true: "bg-[var(--scale-actived-clicked)]",
      },
    },
  }
);

export type SidebarMenuItemData = {
  id: string;
  label: string;
  href?: string;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
  defaultOpen?: boolean;
  isActive?: boolean;
  subItems?: SidebarMenuSubItemData[];
};

export type SidebarMenuSubItemData = {
  id: string;
  label: string;
  href?: string;
  leftSlot?: React.ReactNode;
  isActive?: boolean;
  onDragHandleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  // 왼쪽 아이콘 클릭 핸들러입니다.
  // 현재는 dnd 용도인 것 같아서 이렇게 네이밍했는데 혹시 아니라면 네이밍은 수정하도록 하겠습니다.
  // @Todo: 용도 확인 후 핸들러 네이밍 수정(필요 시)
};

type SidebarMenuProps = {
  items: SidebarMenuItemData[];
  className?: string;
};

const iconCls =
  "size-5 shrink-0 text-[var(--scale-tertiary-text)] group-hover:text-[var(--scale-primary-text)]";

export default function SidebarMenu({ items, className }: SidebarMenuProps) {
  return (
    <ul className={cn("w-full flex flex-col gap-1", className)}>
      {items.map((item) => (
        <SidebarMenuItemRow key={item.id} item={item} />
      ))}
    </ul>
  );
}

function SidebarMenuItemRow({ item }: { item: SidebarMenuItemData }) {
  const hasChildren = !!item.subItems?.length;
  const [open, setOpen] = React.useState<boolean>(!!item.defaultOpen);

  const Left =
    item.leftSlot ??
    (hasChildren ? <IconChevronRight className="size-5" /> : null);

  const Right = item.rightSlot ? (
    <button
      type="button"
      className={cn(
        iconCls,
        "cursor-pointer hover:text-[var(--scale-primary-text)]"
      )}
    >
      {item.rightSlot}
    </button>
  ) : null;

  const ButtonInner = (
    <>
      <span
        className={cn(
          iconCls,
          "w-5 h-5 flex items-center justify-center transition-transform duration-200",
          open ? "" : "-rotate-90"
        )}
      >
        {Left}
      </span>
      <span className="truncate">{item.label}</span>
    </>
  );

  return (
    <li>
      {hasChildren ? (
        <div
          className={cn(
            "flex items-center",
            itemVariants({ active: item.isActive })
          )}
        >
          <button
            type="button"
            className={itemVariants({ active: item.isActive })}
            onClick={() => setOpen((p) => !p)}
            aria-expanded={open}
          >
            {ButtonInner}
          </button>
          {Right && <span className="ml-auto">{Right}</span>}
        </div>
      ) : item.href ? (
        <a href={item.href} className={itemVariants({ active: item.isActive })}>
          {ButtonInner}
        </a>
      ) : (
        <button
          type="button"
          className={itemVariants({ active: item.isActive })}
        >
          {ButtonInner}
        </button>
      )}

      {open && (
        <ul className="pl-4 py-0.5 flex flex-col gap-1">
          {item.subItems!.map((sub) => (
            <SidebarMenuSubItem key={sub.id} item={sub} />
          ))}
        </ul>
      )}
    </li>
  );
}

export function SidebarMenuSubItem({ item }: { item: SidebarMenuSubItemData }) {
  const Comp = item.href ? "a" : ("button" as const);

  return (
    <li className="relative">
      <div
        className={cn(
          "group flex h-8 w-[192px] items-center gap-2 rounded px-1 text-sm",
          "text-[var(--scale-primary-text)]/80 hover:text-[var(--scale-primary-text)]"
        )}
      >
        <div className="w-5 h-5 flex items-center justify-center">
          {item.leftSlot && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                item.onDragHandleClick?.(e);
              }}
              className={cn(
                "w-5 h-5 flex items-center justify-center",
                iconCls,
                "cursor-pointer text-[var(--scale-tertiary-text)]"
              )}
            >
              {item.leftSlot}
            </button>
          )}
        </div>
        <Comp
          {...(item.href ? { href: item.href } : { type: "button" })}
          className={cn("flex-1 truncate text-left cursor-pointer")}
          data-active={item.isActive}
        >
          <span className="truncate text-body-regular">{item.label}</span>
        </Comp>
      </div>
    </li>
  );
}
