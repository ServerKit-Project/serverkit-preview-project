import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { Stepper } from ".";

const meta = {
  title: "Components/SheetCount",
  component: Stepper,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Shadcn Button(icon) + custom spinbutton 조합으로 만든 수량 스테퍼입니다. ArrowUp/Down 키로 값 변경 가능.",
      },
    },
  },
  argTypes: {
    value: { control: { type: "number" } },
    min: { control: { type: "number" } },
    max: { control: { type: "number" } },
    step: { control: { type: "number" } },
    status: {
      control: { type: "inline-radio" },
      options: ["default", "error", "focus"],
    },
  },
  args: {
    value: 5,
    min: 0,
    max: 99,
    step: 1,
    status: "default",
  },
} satisfies Meta<typeof Stepper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: (args) => (
    <div className="flex gap-8 p-6 bg-[var(--scale-hover)] rounded-2xl">
      <Stepper {...args} />
      <Stepper {...args} status="error" />
      <Stepper {...args} status="focus" />
    </div>
  ),
};
