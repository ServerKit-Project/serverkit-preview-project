import type { Meta, StoryObj } from "@storybook/react";
import { Thumbnail } from ".";
import { Button } from "@/components/ui/button";
import { IconStar, IconDots } from "@tabler/icons-react";

const meta = {
  title: "components/Thumbnail",
  component: Thumbnail,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "lg", "xl"],
      description: "Size of the thumbnail",
    },
    variant: {
      control: "select",
      options: ["default", "card"],
      description: "Visual style variant of the thumbnail",
    },
    imageUrl: {
      control: "text",
      description: "URL of the image to display",
    },
    alt: {
      control: "text",
      description: "Alt text for the image",
    },
    fallbackSrc: {
      control: "text",
      description: "Fallback image source when imageUrl is not provided",
    },
  },
} satisfies Meta<typeof Thumbnail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "sm",
    variant: "default",
    alt: "Project thumbnail",
  },
};

export const WithImage: Story = {
  args: {
    size: "sm",
    variant: "default",
    imageUrl: "/img/thumbnail_fallback.png",
    alt: "Project thumbnail",
  },
};

export const AllSizes: Story = {
  args: {
    variant: "default",
    imageUrl: "/img/thumbnail_fallback.png",
    alt: "Size comparison",
  },
  render: (args) => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-semibold mb-2">Small (sm) - 96x54px</h3>
        <Thumbnail {...args} size="sm" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Large (lg) - 112x63px</h3>
        <Thumbnail {...args} size="lg" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">
          Extra Large (xl) - 256x144px
        </h3>
        <Thumbnail {...args} size="xl" />
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  args: {
    size: "xl",
    alt: "Variant comparison",
  },
  render: (args) => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-semibold mb-2">Default Variant</h3>
        <Thumbnail
          {...args}
          variant="default"
          imageUrl="/img/thumbnail_fallback.png"
        />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Card Variant</h3>
        <Thumbnail
          {...args}
          variant="card"
          imageUrl="/img/thumbnail_fallback.png"
        />
      </div>
    </div>
  ),
};

export const WithChildren: Story = {
  args: {
    size: "xl",
    variant: "card",
    imageUrl: "/img/thumbnail_fallback.png",
    alt: "Project with actions",
  },
  render: (args) => (
    <Thumbnail {...args}>
      <Button
        size="sm"
        variant="filled"
        style="icon"
        className="bg-white/90 backdrop-blur-sm hover:bg-white"
      >
        <IconStar size={16} />
      </Button>
      <Button
        size="sm"
        variant="filled"
        style="icon"
        className="bg-white/90 backdrop-blur-sm hover:bg-white"
      >
        <IconDots size={16} />
      </Button>
    </Thumbnail>
  ),
  parameters: {
    docs: {
      description: {
        story: "Thumbnail with overlay buttons (used in card variants)",
      },
    },
  },
};

export const FallbackImage: Story = {
  args: {
    size: "lg",
    variant: "default",
    alt: "Fallback thumbnail",
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the fallback image when no imageUrl is provided",
      },
    },
  },
};

export const Grid: Story = {
  args: {
    variant: "default",
    alt: "Grid thumbnail",
  },
  render: (args) => (
    <div className="grid grid-cols-4 gap-4">
      <Thumbnail {...args} size="sm" imageUrl="/img/thumbnail_fallback.png" />
      <Thumbnail {...args} size="sm" imageUrl="/img/thumbnail_fallback.png" />
      <Thumbnail {...args} size="sm" imageUrl="/img/thumbnail_fallback.png" />
      <Thumbnail {...args} size="sm" />
      <Thumbnail {...args} size="lg" imageUrl="/img/thumbnail_fallback.png" />
      <Thumbnail {...args} size="lg" imageUrl="/img/thumbnail_fallback.png" />
      <Thumbnail {...args} size="lg" />
      <Thumbnail {...args} size="lg" imageUrl="/img/thumbnail_fallback.png" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Multiple thumbnails in a grid layout",
      },
    },
  },
};

export const CustomFallback: Story = {
  args: {
    size: "xl",
    variant: "card",
    alt: "Custom fallback",
    fallbackSrc: "https://via.placeholder.com/256x144?text=No+Image",
  },
  parameters: {
    docs: {
      description: {
        story: "Using a custom fallback image",
      },
    },
  },
};

export const ProjectTileUsage: Story = {
  args: {
    alt: "Project thumbnail",
  },
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold mb-2">
          Dashboard/Home Tiles (xl + card)
        </h3>
        <div className="flex gap-4">
          <div className="space-y-2">
            <Thumbnail
              size="xl"
              variant="card"
              imageUrl="https://picsum.photos/seed/picsum/256/144"
              alt="Dashboard project"
            >
              <Button
                size="sm"
                variant="filled"
                style="icon"
                className="bg-white/90 backdrop-blur-sm hover:bg-white"
              >
                <IconStar size={16} />
              </Button>
              <Button
                size="sm"
                variant="filled"
                style="icon"
                className="bg-white/90 backdrop-blur-sm hover:bg-white"
              >
                <IconDots size={16} />
              </Button>
            </Thumbnail>
            <div className="text-sm">Dashboard Tile</div>
          </div>
          <div className="space-y-2">
            <Thumbnail size="xl" variant="card" alt="Home project" />
            <div className="text-sm">Home Tile (fallback)</div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-2">
          List Tiles (sm/lg + default)
        </h3>
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-2 border rounded">
            <Thumbnail
              size="sm"
              variant="default"
              imageUrl="/img/thumbnail_fallback.png"
              alt="List item"
            />
            <div>List item with small thumbnail</div>
          </div>
          <div className="flex items-center gap-3 p-2 border rounded">
            <Thumbnail
              size="lg"
              variant="default"
              imageUrl="/img/thumbnail_fallback.png"
              alt="Search result"
            />
            <div>Search result with large thumbnail</div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Examples showing how Thumbnail is used in ProjectTile components",
      },
    },
  },
};
