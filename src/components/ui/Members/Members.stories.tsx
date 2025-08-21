import type { Meta, StoryObj } from "@storybook/react";
import { Members } from ".";
import { mockMembers } from "./members.mock";

const meta: Meta<typeof Members> = {
  title: "Components/Members",
  component: Members,
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
  },
};

export default meta;
type Story = StoryObj<typeof Members>;

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
