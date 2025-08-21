import type { Meta, StoryObj } from "@storybook/react";

import { Chip } from ".";

const meta: Meta<typeof Chip> = {
  title: "Components/Chip",
  component: Chip,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "planFree",
        "planPro",
        "planBiz",
        "planEnt",
        "statusInProgress",
        "statusNeedsReview",
        "statusNeedsUpdate",
        "statusApproved",
        "statusOnHold",
        "statusRejected",
        "statusClosed",
        "active",
        "inactive",
      ],
    },
    size: {
      control: "select",
      options: ["default", "m", "s"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    variant: "planFree",
  },
};

export const Plans: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Chip variant="planFree" />
      <Chip variant="planPro" />
      <Chip variant="planBiz" />
      <Chip variant="planEnt" />
    </div>
  ),
};

export const Statuses: Story = {
  render: () => (
    <div className="flex flex-row gap-2">
      <div className="flex flex-col gap-2">
        <Chip variant="statusInProgress" size="m" />
        <Chip variant="statusNeedsReview" size="m" />
        <Chip variant="statusNeedsUpdate" size="m" />
        <Chip variant="statusApproved" size="m" />
        <Chip variant="statusOnHold" size="m" />
        <Chip variant="statusRejected" size="m" />
        <Chip variant="statusClosed" size="m" />
      </div>
      <div className="flex flex-col gap-2">
        <Chip variant="statusInProgress" size="s" />
        <Chip variant="statusNeedsReview" size="s" />
        <Chip variant="statusNeedsUpdate" size="s" />
        <Chip variant="statusApproved" size="s" />
        <Chip variant="statusOnHold" size="s" />
        <Chip variant="statusRejected" size="s" />
        <Chip variant="statusClosed" size="s" />
      </div>
    </div>
  ),
};

export const ActiveStates: Story = {
  render: () => (
    <div className="flex flex-row gap-2">
      <div className="flex flex-col gap-2">
        <Chip variant="active" size="m" />
        <Chip variant="inactive" size="m" />
      </div>
      <div className="flex flex-col gap-2">
        <Chip variant="active" size="s" />
        <Chip variant="inactive" size="s" />
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold ">Plan Chip</h3>
        <div className="flex flex-row gap-2">
          <Chip variant="planFree" />
          <Chip variant="planPro" />
          <Chip variant="planBiz" />
          <Chip variant="planEnt" />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold">State Chip</h3>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2">
            <Chip variant="statusInProgress" size="m" />
            <Chip variant="statusNeedsReview" size="m" />
            <Chip variant="statusNeedsUpdate" size="m" />
            <Chip variant="statusApproved" size="m" />
            <Chip variant="statusOnHold" size="m" />
            <Chip variant="statusRejected" size="m" />
            <Chip variant="statusClosed" size="m" />
          </div>
          <div className="flex flex-row gap-2">
            <Chip variant="statusInProgress" size="s" />
            <Chip variant="statusNeedsReview" size="s" />
            <Chip variant="statusNeedsUpdate" size="s" />
            <Chip variant="statusApproved" size="s" />
            <Chip variant="statusOnHold" size="s" />
            <Chip variant="statusRejected" size="s" />
            <Chip variant="statusClosed" size="s" />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Status Chip</h3>
        <div className="flex flex-row gap-2">
          <div className="flex flex-row gap-2">
            <Chip variant="active" size="m" />
            <Chip variant="inactive" size="m" />
          </div>
          <div className="flex flex-row gap-2">
            <Chip variant="active" size="s" />
            <Chip variant="inactive" size="s" />
          </div>
        </div>
      </div>
    </div>
  ),
};
