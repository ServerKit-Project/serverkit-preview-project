import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsList, TabsTrigger } from ".";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Text-only Tabs. Active style is controlled by the `variant` on TabsTrigger: `primary`, `muted`, `plain`. The content area is intentionally unstyled.",
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Tabs>;

export const AllVariants: Story = {
  render: () => (
    <div className="p-8 space-y-8 w-[400px]">
      <h1 className="text-xl font-bold">Tabs - All Variants</h1>

      <Tabs defaultValue="General">
        <TabsList className="gap-4">
          <TabsTrigger variant="primary">General</TabsTrigger>
          <TabsTrigger variant="muted">General</TabsTrigger>
          <TabsTrigger variant="plain">General</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  ),
};
