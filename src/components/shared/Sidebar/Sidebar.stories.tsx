import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import {
  IconChevronDown,
  IconDots,
  IconGripVertical,
} from "@tabler/icons-react";
import SidebarMenu, { type SidebarMenuItemData } from "./SidebarMenu";

const meta = {
  title: "Components/SidebarMenu",
  component: SidebarMenu,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof SidebarMenu>;
export default meta;

type Story = StoryObj<typeof SidebarMenu>;

const items: SidebarMenuItemData[] = [
  {
    id: "sec-1",
    label: "Section Tile",
    leftSlot: <IconChevronDown size={16} />,
    defaultOpen: true,
    subItems: [
      {
        id: "p-1",
        label: "Section Project",

        leftSlot: <IconGripVertical size={16} />,
      },
      { id: "p-2", label: "Section Project" },
    ],
  },
  {
    id: "sec-2",
    label: "Section Tile",
    leftSlot: <IconChevronDown size={16} />,
    rightSlot: <IconDots size={16} />,
    defaultOpen: false,
    subItems: [
      { id: "p-3", label: "Section Project" },
      { id: "p-4", label: "Section Project" },
    ],
  },
  {
    id: "sec-1",
    label: "Section Tile",
    leftSlot: <IconChevronDown size={16} />,
    defaultOpen: false,
    isActive: true,
    subItems: [
      {
        id: "p-1",
        label: "Section Project",

        leftSlot: <IconGripVertical size={16} />,
      },
      { id: "p-2", label: "Section Project" },
    ],
  },
  {
    id: "sec-2",
    label: "Section Tile",
    leftSlot: <IconChevronDown size={16} />,
    rightSlot: <IconDots size={16} />,
    defaultOpen: false,
    isActive: true,

    subItems: [
      { id: "p-3", label: "Section Project" },
      { id: "p-4", label: "Section Project" },
    ],
  },
];

export const Playground: Story = {
  name: "All Variants",
  render: () => (
    <div className="w-48">
      <SidebarMenu items={items} />
    </div>
  ),
};
