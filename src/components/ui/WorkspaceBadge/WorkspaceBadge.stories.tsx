import type { Meta, StoryObj } from "@storybook/react";
import { WorkspaceBadge } from ".";

const meta = {
  title: "components/WorkspaceBadge",
  component: WorkspaceBadge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md"],
      description: "Badge size variant",
    },
  },
} satisfies Meta<typeof WorkspaceBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <WorkspaceBadge size="sm" />
      <WorkspaceBadge size="md" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All available badge sizes: sm (20px), md (32px)",
      },
    },
  },
};
