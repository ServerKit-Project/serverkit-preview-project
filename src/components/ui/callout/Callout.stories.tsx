import type { Meta, StoryObj } from "@storybook/react";
import { Callout, CalloutTitle } from ".";

const meta = {
  title: "Components/Callout",
  component: Callout,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["warning", "error", "success", "info", "default"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "lg"],
    },
  },
} satisfies Meta<typeof Callout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Warning: Story = {
  args: {
    variant: "warning",
  },
  render: (args) => (
    <Callout {...args}>
      <CalloutTitle>Warning</CalloutTitle>
    </Callout>
  ),
};

export const Error: Story = {
  args: {
    variant: "error",
  },
  render: (args) => (
    <Callout {...args}>
      <CalloutTitle>Error</CalloutTitle>
    </Callout>
  ),
};

export const Success: Story = {
  args: {
    variant: "success",
  },
  render: (args) => (
    <Callout {...args}>
      <CalloutTitle>Success</CalloutTitle>
    </Callout>
  ),
};

export const Info: Story = {
  args: {
    variant: "info",
  },
  render: (args) => (
    <Callout {...args}>
      <CalloutTitle>Information</CalloutTitle>
    </Callout>
  ),
};

export const Default: Story = {
  args: {
    variant: "default",
  },
  render: (args) => (
    <Callout {...args}>
      <CalloutTitle>Default</CalloutTitle>
    </Callout>
  ),
};

export const Small: Story = {
  args: {
    variant: "warning",
    size: "sm",
  },
  render: (args) => (
    <Callout {...args}>
      <CalloutTitle>Small Warning</CalloutTitle>
    </Callout>
  ),
};

export const Large: Story = {
  args: {
    variant: "success",
    size: "lg",
  },
  render: (args) => (
    <Callout {...args}>
      <CalloutTitle>Large Success</CalloutTitle>
    </Callout>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 max-w-2xl">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Large Callouts</h3>
        <div className="space-y-3">
          <Callout variant="warning" size="lg">
            <CalloutTitle>Please write callout contents</CalloutTitle>
          </Callout>

          <Callout variant="error" size="lg">
            <CalloutTitle>Please write callout contents</CalloutTitle>
          </Callout>

          <Callout variant="success" size="lg">
            <CalloutTitle>Please write callout contents</CalloutTitle>
          </Callout>

          <Callout variant="info" size="lg">
            <CalloutTitle>Please write callout contents</CalloutTitle>
          </Callout>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Small Callouts</h3>
        <div className="space-y-2">
          <Callout variant="warning" size="sm">
            <CalloutTitle>Please write callout contents</CalloutTitle>
          </Callout>

          <Callout variant="error" size="sm">
            <CalloutTitle>Please write callout contents</CalloutTitle>
          </Callout>

          <Callout variant="success" size="sm">
            <CalloutTitle>Please write callout contents</CalloutTitle>
          </Callout>

          <Callout variant="info" size="sm">
            <CalloutTitle>Please write callout contents</CalloutTitle>
          </Callout>
        </div>
      </div>
    </div>
  ),
};
