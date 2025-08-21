import type { Meta, StoryObj } from "@storybook/react";
import { Separator, SeparatorNoPadding } from "./Separator";

const meta = {
  title: "Components/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithPadding: Story = {
  name: "with padding",
  render: () => (
    <div className="p-8 space-y-8 w-100">
      <h3 className="text-lg font-semibold">Horizontal Separator</h3>
      <div>
        <p>아래는 가로 separator입니다.</p>
        <Separator orientation="horizontal" className="my-4" />
      </div>

      <h3 className="text-lg font-semibold">Vertical Separator </h3>
      <div className="flex h-5 items-center space-x-4">
        <span>왼쪽</span>
        <Separator orientation="vertical" />
        <span>오른쪽</span>
      </div>
    </div>
  ),
};

export const WithoutPadding: Story = {
  name: "without padding",
  render: () => (
    <div className="p-8 space-y-8 w-100">
      <h3 className="text-lg font-semibold">
        Horizontal Separator (No Padding)
      </h3>
      <div>
        <p>아래는 가로 separator입니다.</p>
        <SeparatorNoPadding orientation="horizontal" className="my-4" />
      </div>

      <h3 className="text-lg font-semibold">Vertical Separator (No Padding)</h3>
      <div className="flex h-5 items-center space-x-4">
        <span>왼쪽</span>
        <SeparatorNoPadding orientation="vertical" />
        <span className="pl-4">오른쪽</span>
      </div>
    </div>
  ),
};
