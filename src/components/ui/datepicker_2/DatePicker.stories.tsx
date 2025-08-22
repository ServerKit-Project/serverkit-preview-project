import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from ".";

const meta = {
  title: "components/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "date",
      description: "Selected date value",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text when no date is selected",
    },
    disabled: {
      control: "boolean",
      description: "Whether the date picker is disabled",
    },
    dateFormat: {
      control: "text",
      description: "Date format string for display (using date-fns format)",
    },
    inputFormat: {
      control: "text",
      description:
        "Date format string for input parsing (using date-fns format)",
    },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "YYYY-MM-DD",
  },
};

export const WithValue: Story = {
  args: {
    value: new Date("2025-08-14"),
    placeholder: "Pick a date",
  },
};

export const Disabled: Story = {
  args: {
    value: new Date("2025-08-14"),
    disabled: true,
    placeholder: "Pick a date",
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: "Select your birthday",
  },
};

export const CustomDateFormat: Story = {
  args: {
    value: new Date("2025-08-14"),
    dateFormat: "MM/dd/yyyy",
    placeholder: "MM/DD/YYYY",
  },
};

export const ShortDateFormat: Story = {
  args: {
    value: new Date("2025-08-14"),
    dateFormat: "MMM d, yyyy",
    placeholder: "Select date",
  },
};

export const LongDateFormat: Story = {
  args: {
    value: new Date("2025-08-14"),
    dateFormat: "EEEE, MMMM do, yyyy",
    placeholder: "Select date",
  },
};

export const ManualInput: Story = {
  args: {
    placeholder: "Type date: YYYY-MM-DD",
    inputFormat: "yyyy-MM-dd",
  },
};

export const DifferentInputFormat: Story = {
  args: {
    placeholder: "Type date: MM/DD/YYYY",
    dateFormat: "PPP",
    inputFormat: "MM/dd/yyyy",
  },
};
