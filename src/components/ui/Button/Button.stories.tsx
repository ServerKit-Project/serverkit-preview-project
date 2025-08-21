import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/Button";
import {
  IconHeart,
  IconDownload,
  IconPlus,
  IconTrash,
} from "@tabler/icons-react";
import { CHIP_TEXTS } from "@/components/ui/Chip";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "clear",
        "filled",
        "dark",
        "success",
        "error",
        "info",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "lg", "huge"],
    },
    style: {
      control: { type: "select" },
      options: ["icon", "text", "icon-text", "icon-text-chip", "caption"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
    },
    asChild: {
      control: { type: "boolean" },
    },
    title: {
      control: { type: "text" },
    },
    caption: {
      control: { type: "text" },
    },
    chipVariant: {
      control: { type: "select" },
      options: Object.keys(CHIP_TEXTS),
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "Default",
    size: "lg",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Success",
    size: "lg",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    children: "Error",
    size: "lg",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    children: "Info",
    size: "lg",
  },
};

export const Clear: Story = {
  args: {
    variant: "clear",
    children: "Clear",
    size: "lg",
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
    children: "Filled",
    size: "lg",
  },
};

export const Dark: Story = {
  args: {
    variant: "dark",
    children: "Dark",
    size: "lg",
  },
};

export const Small: Story = {
  args: {
    variant: "default",
    children: "Small",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    variant: "default",
    children: "Large",
    size: "lg",
  },
};

export const IconOnly: Story = {
  args: {
    variant: "default",
    style: "icon",
    size: "lg",
  },
  render: (args) => (
    <Button {...args}>
      <IconHeart className="w-4 h-4" />
    </Button>
  ),
};

export const WithIcon: Story = {
  args: {
    variant: "default",
    style: "icon-text",
    size: "lg",
  },
  render: (args) => (
    <Button {...args}>
      <IconDownload className="w-4 h-4" />
      Download
    </Button>
  ),
};

export const Disabled: Story = {
  args: {
    variant: "default",
    disabled: true,
    children: "Disabled",
    size: "lg",
  },
};

export const Loading: Story = {
  args: {
    variant: "default",
    loading: true,
    children: "Loading",
    size: "lg",
  },
};

export const LargeWithIconError: Story = {
  args: {
    variant: "error",
    size: "lg",
    style: "icon-text",
  },
  render: (args) => (
    <Button {...args}>
      <IconTrash className="w-5 h-5" />
      Delete Forever
    </Button>
  ),
};

export const HugeWithCaption: Story = {
  args: {
    variant: "dark",
    size: "huge",
    style: "caption",
    title: "Huge Button",
    caption: "Caption",
  },
  render: (args) => (
    <div className="flex flex-col items-center gap-4">
      <Button {...args}>
        <IconPlus className="w-8 h-8" />
      </Button>
    </div>
  ),
};

export const IconTextChip: Story = {
  args: {
    variant: "default",
    size: "lg",
    style: "icon-text-chip",
    chipVariant: "statusInProgress",
  },
  render: (args) => (
    <Button {...args}>
      <IconPlus className="w-4 h-4" />
      Version Name
    </Button>
  ),
};

export const AllVariants: Story = {
  args: {
    variant: "default",
    size: "lg",
    style: "icon-text",
  },
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Color Variants - Large</h3>
        <div className="flex flex-wrap gap-2">
          <Button variant="default" size="lg">
            Default
          </Button>
          <Button variant="success" size="lg">
            Success
          </Button>
          <Button variant="error" size="lg">
            Error
          </Button>
          <Button variant="info" size="lg">
            Info
          </Button>
          <Button variant="clear" size="lg">
            Clear
          </Button>
          <Button variant="dark" size="lg">
            Dark
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Color Variants - Small</h3>
        <div className="flex flex-wrap gap-2">
          <Button variant="default" size="sm">
            Default
          </Button>
          <Button variant="success" size="sm">
            Success
          </Button>
          <Button variant="error" size="sm">
            Error
          </Button>
          <Button variant="info" size="sm">
            Info
          </Button>
          <Button variant="clear" size="sm">
            Clear
          </Button>
          <Button variant="dark" size="sm">
            Dark
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Icon Buttons</h3>
        <div className="flex flex-wrap gap-2">
          <Button variant="default" style="icon" size="lg">
            <IconHeart className="w-5 h-5" />
          </Button>
          <Button variant="success" style="icon" size="lg">
            <IconPlus className="w-5 h-5" />
          </Button>
          <Button variant="error" style="icon" size="lg">
            <IconTrash className="w-5 h-5" />
          </Button>
          <Button variant="default" style="icon" size="sm">
            <IconHeart className="w-4 h-4" />
          </Button>
          <Button variant="success" style="icon" size="sm">
            <IconPlus className="w-4 h-4" />
          </Button>
          <Button variant="error" style="icon" size="sm">
            <IconTrash className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Huge Caption Button</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="default"
            size="huge"
            style="caption"
            title="Huge Button"
            caption="Caption"
          >
            <IconPlus className="w-8 h-8" />
          </Button>
          <Button
            variant="dark"
            size="huge"
            style="caption"
            title="Huge Button"
            caption="Caption"
          >
            <IconPlus className="w-8 h-8" />
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Icon Text Chip Style</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="default"
            size="lg"
            style="icon-text-chip"
            chipVariant="statusApproved"
          >
            <IconPlus className="w-4 h-4" />
            Version
          </Button>
          <Button
            variant="info"
            size="lg"
            style="icon-text-chip"
            chipVariant="statusInProgress"
          >
            <IconPlus className="w-4 h-4" />
            Task
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">States</h3>
        <div className="flex flex-wrap gap-2">
          <Button variant="default" size="lg">
            Normal
          </Button>
          <Button variant="default" size="lg" disabled>
            Disabled
          </Button>
          <Button variant="default" size="lg" loading>
            Loading
          </Button>
          <Button variant="success" size="lg" disabled>
            Success Disabled
          </Button>
          <Button variant="error" size="lg" loading>
            Error Loading
          </Button>
        </div>
      </div>
    </div>
  ),
};
