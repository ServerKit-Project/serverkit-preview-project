import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from ".";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"], // 기본 Docs 탭 지원
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const AllVariants = {
  render: () => (
    <div className="bg-white">
      <div className="flex flex-col w-[194px] gap-4 ">
        <Checkbox />
        <Checkbox defaultChecked />
        <Checkbox size="sm" />
        <Checkbox size="sm" defaultChecked />
        <Checkbox label="Checkbox with Text" />
        <Checkbox label="Checkbox with Text" defaultChecked />
        <Checkbox label="Checkbox with Text" size="sm" />
        <Checkbox label="Checkbox with Text" size="sm" defaultChecked />
      </div>
    </div>
  ),
};
