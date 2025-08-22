import type { Meta, StoryObj } from "@storybook/react";
import { UploadImageButton } from ".";
import { mockMembers } from "@/components/ui/members/members.mock";

const meta = {
  title: "Components/UploadImageButton",
  component: UploadImageButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["workspace", "avatar"],
    },
    state: {
      control: { type: "select" },
      options: ["empty", "filled", "edit"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    imageUrl: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof UploadImageButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WorkspaceEmpty: Story = {
  args: {
    variant: "workspace",
    state: "empty",
  },
};

export const WorkspaceFilled: Story = {
  args: {
    variant: "workspace",
    state: "filled",
    imageUrl: "/img/logo_youvico.svg",
  },
};

export const WorkspaceEdit: Story = {
  args: {
    variant: "workspace",
    state: "edit",
    imageUrl: "/img/logo_youvico.svg",
  },
};

export const AvatarEmpty: Story = {
  args: {
    variant: "avatar",
    state: "empty",
  },
};

export const AvatarFilled: Story = {
  args: {
    variant: "avatar",
    state: "filled",
    imageUrl: mockMembers[0].avatar, // John Smith
  },
};

export const AvatarEdit: Story = {
  args: {
    variant: "avatar",
    state: "edit",
    imageUrl: mockMembers[1].avatar, // Michael Davis
  },
};

export const WorkspaceDisabled: Story = {
  args: {
    variant: "workspace",
    state: "empty",
    disabled: true,
  },
};

export const AvatarDisabled: Story = {
  args: {
    variant: "avatar",
    state: "empty",
    disabled: true,
  },
};

export const Interactive: Story = {
  args: {
    variant: "workspace",
    state: "empty",
  },
  render: (args) => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Upload Functionality</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Click or drag and drop to upload an image
        </p>
        <UploadImageButton
          {...args}
          onUpload={(file) => {
            console.log("File uploaded:", file.name);
            alert(`Uploaded: ${file.name}`);
          }}
        />
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  args: {
    variant: "workspace",
    state: "empty",
  },
  render: () => (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Workspace Image Upload</h3>
        <div className="flex flex-wrap gap-4">
          <div className="text-center">
            <UploadImageButton variant="workspace" state="empty" />
            <p className="text-sm text-muted-foreground mt-2">Empty</p>
          </div>
          <div className="text-center">
            <UploadImageButton
              variant="workspace"
              state="filled"
              imageUrl="/img/logo_youvico.svg"
            />
            <p className="text-sm text-muted-foreground mt-2">Filled</p>
          </div>
          <div className="text-center">
            <UploadImageButton
              variant="workspace"
              state="edit"
              imageUrl="/img/logo_youvico.svg"
            />
            <p className="text-sm text-muted-foreground mt-2">Edit Mode</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Avatar Image Upload</h3>
        <div className="flex flex-wrap gap-4">
          <div className="text-center">
            <UploadImageButton variant="avatar" state="empty" />
            <p className="text-sm text-muted-foreground mt-2">Empty</p>
          </div>
          <div className="text-center">
            <UploadImageButton
              variant="avatar"
              state="filled"
              imageUrl={mockMembers[0].avatar}
            />
            <p className="text-sm text-muted-foreground mt-2">Filled</p>
          </div>
          <div className="text-center">
            <UploadImageButton
              variant="avatar"
              state="edit"
              imageUrl={mockMembers[1].avatar}
            />
            <p className="text-sm text-muted-foreground mt-2">Edit Mode</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Disabled States</h3>
        <div className="flex flex-wrap gap-4">
          <div className="text-center">
            <UploadImageButton variant="workspace" state="empty" disabled />
            <p className="text-sm text-muted-foreground mt-2">
              Workspace Disabled
            </p>
          </div>
          <div className="text-center">
            <UploadImageButton variant="avatar" state="empty" disabled />
            <p className="text-sm text-muted-foreground mt-2">
              Avatar Disabled
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
};
