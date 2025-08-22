import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from ".";

const meta = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "lg"],
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const AllSizes: Story = {
  args: {
    size: "lg",
  },
  render: () => (
    <div className="flex items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <Spinner size="sm" />
        <span className="text-sm text-gray-500">Small (16px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" />
        <span className="text-sm text-gray-500">Large (24px)</span>
      </div>
    </div>
  ),
};

export const WithColors: Story = {
  args: {
    size: "lg",
  },
  render: () => (
    <div className="flex items-center gap-8">
      <Spinner size="lg" className="text-blue-500" />
      <Spinner size="lg" className="text-green-500" />
      <Spinner size="lg" className="text-red-500" />
      <Spinner size="lg" className="text-purple-500" />
      <Spinner size="lg" className="text-gray-500" />
    </div>
  ),
};

export const InlineWithText: Story = {
  args: {
    size: "sm",
  },
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Spinner size="sm" />
        <span>Loading...</span>
      </div>
      <div className="flex items-center gap-2">
        <span>Please wait</span>
        <Spinner size="sm" />
      </div>
    </div>
  ),
};
