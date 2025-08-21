import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LanguageSelect } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof Select>;

export const BasicSelect: Story = {
  name: "Basic Select",
  render: () => {
    const [value, setValue] = React.useState<string>("created-date");

    return (
      <div className="w-[200px]">
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="created-date">Created Date</SelectItem>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="last-updated">Last Updated</SelectItem>
            <SelectItem value="due-date">Due Date</SelectItem>
          </SelectContent>
        </Select>
      </div>
    );
  },
};

export const LanguageSelectStory: Story = {
  name: "Language Select",
  render: () => {
    const [value, setValue] = React.useState<string>("ko");

    return (
      <LanguageSelect 
        value={value} 
        onValueChange={setValue}
        className="w-[280px]"
      />
    );
  },
};
