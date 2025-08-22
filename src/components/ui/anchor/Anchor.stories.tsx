import type { Meta, StoryObj } from "@storybook/react";
import { Anchor } from ".";

const meta = {
  title: "Components/Anchor",
  component: Anchor,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "info"],
      description: "링크의 스타일 변형",
    },
    size: {
      control: "select",
      options: [
        "button1-regular",
        "button1-semibold",
        "button2-regular",
        "button2-semibold",
      ],
      description: "텍스트 크기와 굵기 조합",
    },
    disabled: {
      control: "boolean",
      description: "링크 비활성화 상태",
    },
    href: {
      control: "text",
      description: "링크 URL",
    },
  },
} satisfies Meta<typeof Anchor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "A 버튼",
    href: "#",
    variant: "primary",
    size: "button1-regular",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Button1 (16px)</h2>

        <div className="space-y-2">
          <h3 className="font-semibold text-sm text-gray-500">Regular</h3>
          <div className="flex gap-4">
            <Anchor href="#" variant="primary" size="button1-regular">
              A 버튼 (Primary)
            </Anchor>
            <Anchor href="#" variant="info" size="button1-regular">
              A 버튼 (Info)
            </Anchor>
            <Anchor href="#" variant="primary" size="button1-regular" disabled>
              A 버튼 (Disabled)
            </Anchor>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-sm text-gray-500">Semibold</h3>
          <div className="flex gap-4">
            <Anchor href="#" variant="primary" size="button1-semibold">
              A 버튼 (Primary)
            </Anchor>
            <Anchor href="#" variant="info" size="button1-semibold">
              A 버튼 (Info)
            </Anchor>
            <Anchor href="#" variant="primary" size="button1-semibold" disabled>
              A 버튼 (Disabled)
            </Anchor>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Button2 (14px)</h2>

        <div className="space-y-2">
          <h3 className="font-semibold text-sm text-gray-500">Regular</h3>
          <div className="flex gap-4">
            <Anchor href="#" variant="primary" size="button2-regular">
              A 버튼 (Primary)
            </Anchor>
            <Anchor href="#" variant="info" size="button2-regular">
              A 버튼 (Info)
            </Anchor>
            <Anchor href="#" variant="primary" size="button2-regular" disabled>
              A 버튼 (Disabled)
            </Anchor>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-sm text-gray-500">Semibold</h3>
          <div className="flex gap-4">
            <Anchor href="#" variant="primary" size="button2-semibold">
              A 버튼 (Primary)
            </Anchor>
            <Anchor href="#" variant="info" size="button2-semibold">
              A 버튼 (Info)
            </Anchor>
            <Anchor href="#" variant="primary" size="button2-semibold" disabled>
              A 버튼 (Disabled)
            </Anchor>
          </div>
        </div>
      </div>
    </div>
  ),
};
