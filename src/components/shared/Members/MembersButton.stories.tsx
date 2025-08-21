import type { Meta, StoryObj } from "@storybook/react";
import { MembersButton } from "./MembersButton";
import { mockMembers } from "./members.mock";

const meta: Meta<typeof MembersButton> = {
  title: "Components/MembersButton",
  component: MembersButton,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    members: {
      control: { type: "object" },
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof MembersButton>;

export const Default: Story = {
  args: {
    size: "sm",
    members: mockMembers.slice(0, 2),
  },
};

export const SmallSize: Story = {
  args: {
    size: "sm",
    members: mockMembers.slice(0, 2),
  },
};

export const SmallSizeWithOverflow: Story = {
  args: {
    size: "sm",
    members: mockMembers,
  },
};

export const MediumSize: Story = {
  args: {
    size: "md",
    members: mockMembers.slice(0, 4),
  },
};

export const MediumSizeWithOverflow: Story = {
  args: {
    size: "md",
    members: mockMembers,
  },
};

export const LargeSize: Story = {
  args: {
    size: "lg",
    members: mockMembers.slice(0, 4),
  },
};

export const LargeSizeWithOverflow: Story = {
  args: {
    size: "lg",
    members: mockMembers,
  },
};

export const SingleMember: Story = {
  args: {
    size: "sm",
    members: mockMembers.slice(0, 1),
  },
};

export const NoMembers: Story = {
  args: {
    size: "sm",
    members: [],
  },
};

export const Playground: Story = {
  args: {
    size: "md",
    members: mockMembers,
  },
};