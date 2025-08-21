import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from "./RadioGroup";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {},
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const AllVariants: Story = {
  render: () => (
    <div className="bg-white">
      <section className="mb-6">
        <h3 className="mb-2 font-semibold">Sizes Only</h3>
        <RadioGroup defaultValue="lg1" className="space-y-2">
          <div className="flex gap-2">
            <RadioGroupItem value="lg1" size="lg" checked />
            <RadioGroupItem value="lg2" size="lg" />
          </div>
          <div className="flex mt-3 gap-2">
            <RadioGroupItem value="sm1" size="sm" checked />
            <RadioGroupItem value="sm1" size="sm" />
          </div>
        </RadioGroup>
      </section>

      <section>
        <h3 className="mb-2 font-semibold">Radio with Text</h3>
        <RadioGroup defaultValue="lg1" className="space-y-2 mb-4">
          <div className="flex items-center space-x-2 ">
            <RadioGroupItem value="lg1" id="lg1" size="lg" />
            <label htmlFor="lg1">Radio with Text</label>
            <RadioGroupItem value="lg2" id="lg2" size="lg" />
            <label htmlFor="lg2">Radio with Text</label>
            <RadioGroupItem value="lg3" id="lg3" size="lg" />
            <label htmlFor="lg3">Radio with Text</label>
          </div>
        </RadioGroup>
        <RadioGroup defaultValue="sm1" className="space-y-2">
          <div className="flex items-center space-x-2 mt-3">
            <RadioGroupItem value="sm1" id="sm1" size="sm" />
            <label htmlFor="sm1">Radio with Text</label>
            <RadioGroupItem value="sm2" id="sm2" size="sm" />
            <label htmlFor="sm2">Radio with Text</label>
            <RadioGroupItem value="sm3" id="sm3" size="sm" />
            <label htmlFor="sm3">Radio with Text</label>
          </div>
        </RadioGroup>
      </section>
    </div>
  ),
};
