import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    placeholder: "내용을 입력하세요",
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Searchbar: Story = {
  render: () => (
    <div className="w-[374px] flex flex-col gap-4">
      {["default", "focus", "error", "disabled"].map((status) => (
        <Input
          key={status}
          purpose="searchbar"
          status={status as "default" | "focus" | "error" | "disabled"}
          placeholder="내용을 작성해주세요"
          hasClearButton
          disabled={status === "disabled"}
        />
      ))}
    </div>
  ),
};

export const InputField: Story = {
  render: () => (
    <div className="flex flex-row gap-8">
      {["m", "s"].map((vSize) => (
        <div key={vSize} className="flex flex-col gap-4">
          {["default", "focus", "error", "disabled"].map((status) => (
            <Input
              key={status}
              purpose="inputfield"
              vSize={vSize as "m" | "s"}
              label="레이블"
              message="메시지"
              placeholder="내용을 작성해주세요"
              status={status as "default" | "focus" | "error" | "disabled"}
              disabled={status === "disabled"}
              className="w-[374px]"
            />
          ))}
        </div>
      ))}
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-12">
      <div className="w-[374px] flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Searchbar</h1>
        <Input
          purpose="searchbar"
          placeholder="내용을 작성해주세요"
          status="default"
          hasClearButton
        />
        <Input
          purpose="searchbar"
          placeholder="내용을 작성해주세요"
          status="focus"
          hasClearButton
        />
        <Input
          purpose="searchbar"
          placeholder="내용을 작성해주세요"
          status="error"
          hasClearButton
        />
        <Input
          purpose="searchbar"
          placeholder="내용을 작성해주세요"
          hasClearButton
          status="disabled"
          disabled
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Inputfield</h1>
        <div className="flex gap-4">
          <div>
            <h2 className="text-xl font-medium">M size</h2>
            <div className="flex flex-col gap-2 w-[374px]">
              <Input
                purpose="inputfield"
                vSize="m"
                placeholder="내용을 작성해주세요"
                label="레이블"
                message="메시지"
              />
              <Input
                purpose="inputfield"
                vSize="m"
                placeholder="내용을 작성해주세요"
                label="레이블"
                message="메시지"
                status="focus"
              />
              <Input
                purpose="inputfield"
                vSize="m"
                placeholder="내용을 작성해주세요"
                label="레이블"
                message="메시지"
                status="error"
              />
              <Input
                purpose="inputfield"
                vSize="m"
                placeholder="내용을 작성해주세요"
                label="레이블"
                message="메시지"
                status="disabled"
              />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-medium">S size</h2>
            <div className="flex flex-col gap-2 w-[374px]">
              <Input
                purpose="inputfield"
                vSize="s"
                placeholder="내용을 작성해주세요"
                label="레이블"
                message="메시지"
              />
              <Input
                purpose="inputfield"
                vSize="s"
                placeholder="내용을 작성해주세요"
                label="레이블"
                message="메시지"
                status="focus"
              />
              <Input
                purpose="inputfield"
                vSize="s"
                placeholder="내용을 작성해주세요"
                label="레이블"
                message="메시지"
                status="error"
              />
              <Input
                purpose="inputfield"
                vSize="s"
                placeholder="내용을 작성해주세요"
                label="레이블"
                message="메시지"
                status="disabled"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
