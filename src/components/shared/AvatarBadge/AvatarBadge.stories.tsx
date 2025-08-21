import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { AvatarBadge } from "./AvatarBadge";

const meta = {
  title: "components/AvatarBadge",
  component: AvatarBadge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onClick: {
      action: "clicked",
    },
  },
} satisfies Meta<typeof AvatarBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://github.com/shadcn.png",
    alt: "@shadcn",
    fallback: "CN",
  },
};

export const Interactive: Story = {
  render: () => {
    const [isSelected, setIsSelected] = useState(false);
    return (
      <AvatarBadge
        fallback="CN"
        isSelected={isSelected}
        onClick={() => setIsSelected(!isSelected)}
      />
    );
  },
};
