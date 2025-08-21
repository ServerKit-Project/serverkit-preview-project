import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  ProjectTile,
  DetailedProjectTile,
  SimpleProjectTile,
  ListProjectTile,
  ListSimpleProjectTile,
  ListSearchProjectTile,
  ListTrashProjectTile,
  ListModalProjectTile,
} from "./ProjectTile";

const meta = {
  title: "components/ProjectTile",
  component: ProjectTile,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["dashboard", "home", "list", "list_simple", "list_search", "list_trash", "list_modal"],
      description: "The visual style variant of the project tile",
    },
    title: {
      control: "text",
      description: "The title of the project",
    },
    description: {
      control: "text",
      description: "The description of the project (dashboard variant only)",
    },
    date: {
      control: "text",
      description: "The date to display (dashboard variant only)",
    },
    editedTime: {
      control: "text",
      description: "The edited time to display (home variant only)",
    },
    isStarred: {
      control: "boolean",
      description: "Whether the project is starred",
    },
    memberCount: {
      control: "number",
      description: "Total number of members",
    },
  },
} satisfies Meta<typeof ProjectTile>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockMembers = [
  { id: "1", name: "John Doe", avatar: undefined },
  { id: "2", name: "Jane Smith", avatar: undefined },
  { id: "3", name: "Bob Johnson", avatar: undefined },
];

export const DashboardVariant: Story = {
  args: {
    variant: "dashboard",
    title: "Title",
    description: "Description",
    date: "2025.05.30",
    members: mockMembers.slice(0, 2),
    memberCount: 3,
    isStarred: false,
  },
};

export const DashboardStarred: Story = {
  args: {
    variant: "dashboard",
    title: "Starred Project",
    description: "This is a starred project with multiple members",
    date: "2025.05.30",
    members: mockMembers,
    memberCount: 5,
    isStarred: true,
  },
};

export const HomeVariant: Story = {
  args: {
    variant: "home",
    title: "Title",
    editedTime: "Edited 3 minutes ago",
  },
};

export const DashboardGrid: Story = {
  args: {
    variant: "dashboard",
    title: "Title",
    description: "Description",
    date: "2025.05.30",
    members: mockMembers.slice(0, 2),
    memberCount: 3,
    isStarred: false,
  },
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-4xl">
      <ProjectTile
        variant="dashboard"
        title="Project Alpha"
        description="Main dashboard redesign project"
        date="2025.05.30"
        members={mockMembers.slice(0, 2)}
        memberCount={3}
        isStarred={true}
      />
      <ProjectTile
        variant="dashboard"
        title="Project Beta"
        description="Mobile app development"
        date="2025.05.30"
        members={mockMembers.slice(1, 3)}
        memberCount={3}
        isStarred={false}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Example of multiple dashboard tiles in a grid layout",
      },
    },
  },
};

export const HomeGrid: Story = {
  args: {
    variant: "home",
    title: "Home Project",
    editedTime: "Edited 3 minutes ago",
  },
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-4xl">
      <ProjectTile
        variant="home"
        title="Design System"
        editedTime="Edited 3 minutes ago"
      />
      <ProjectTile
        variant="home"
        title="Component Library"
        editedTime="Edited 3 minutes ago"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Example of multiple home tiles in a grid layout",
      },
    },
  },
};

export const WithImage: Story = {
  args: {
    variant: "dashboard",
    title: "Project with Image",
    description: "This project has a custom image",
    date: "2025.05.30",
    imageUrl: "/img/thumbnail_fallback.png",
    members: mockMembers.slice(0, 2),
    memberCount: 3,
    isStarred: false,
  },
};

export const WithFallback: Story = {
  args: {
    variant: "dashboard",
    title: "Fallback Image",
    description: "This project uses the fallback image",
    date: "2025.05.30",
    members: mockMembers.slice(0, 2),
    memberCount: 3,
    isStarred: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Example using the fallback image when no imageUrl is provided",
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    variant: "dashboard",
    title: "Interactive Project",
    description: "Click the star or menu buttons",
    date: "2025.05.30",
    members: mockMembers,
    memberCount: 5,
    isStarred: false,
    onStarClick: () => alert("Star clicked!"),
    onMenuClick: () => alert("Menu clicked!"),
    onTileClick: () => alert("Tile clicked!"),
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive example with click handlers",
      },
    },
  },
};

export const DirectComponentUsage: Story = {
  args: {
    title: "Direct Components",
  },
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-semibold mb-2">DetailedProjectTile (Direct Usage)</h3>
        <DetailedProjectTile
          title="Design System Project"
          description="Building comprehensive design system components"
          date="2025.05.30"
          imageUrl="/img/thumbnail_fallback.png"
          members={mockMembers}
          memberCount={5}
          isStarred={true}
          onStarClick={() => alert("Star clicked!")}
          onMenuClick={() => alert("Menu clicked!")}
          onTileClick={() => alert("Tile clicked!")}
        />
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-2">SimpleProjectTile (Direct Usage)</h3>
        <SimpleProjectTile
          title="Quick Prototype"
          editedTime="Edited 5 minutes ago"
          imageUrl="/img/thumbnail_fallback.png"
          onMenuClick={() => alert("Menu clicked!")}
          onTileClick={() => alert("Tile clicked!")}
        />
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-2">List Components (Direct Usage)</h3>
        <div className="border rounded-lg overflow-hidden max-w-2xl">
          <ListProjectTile
            title="Team Collaboration Tool"
            description="Real-time collaboration features"
            date="2025.05.29"
            imageUrl="/img/thumbnail_fallback.png"
            members={mockMembers.slice(0, 2)}
            memberCount={8}
            isStarred={false}
            onStarClick={() => alert("Star toggled!")}
            onTileClick={() => alert("List tile clicked!")}
          />
          <ListSimpleProjectTile
            title="Simple List Item"
            date="2025.05.28"
            imageUrl="/img/thumbnail_fallback.png"
            onTileClick={() => alert("Simple tile clicked!")}
          />
          <ListSearchProjectTile
            title="Search Result Project"
            description="Project found in search results"
            imageUrl="/img/thumbnail_fallback.png"
            isPrivate={true}
            isJoined={false}
            memberInfo={{ members: 12, guests: 3 }}
            onJoin={() => alert("Joined project!")}
            onLeave={() => alert("Left project!")}
            onTileClick={() => alert("Search tile clicked!")}
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Examples of using each ProjectTile component directly instead of through the main ProjectTile wrapper",
      },
    },
  },
};


export const TextOverflow: Story = {
  args: {
    variant: "dashboard",
    title: "Text Overflow Example",
  },
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-semibold mb-2">Short Text</h3>
        <ProjectTile
          variant="dashboard"
          title="Short Title"
          description="Short description"
          date="2025.05.30"
          members={mockMembers.slice(0, 2)}
          memberCount={3}
        />
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-2">
          Long Title (with ellipsis)
        </h3>
        <ProjectTile
          variant="dashboard"
          title="Very long project title that should be truncated with ellipsis when it exceeds one line. This text goes beyond the container width."
          description="Description text"
          date="2025.05.30"
          members={mockMembers.slice(0, 2)}
          memberCount={3}
        />
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-2">
          Long Description (with ellipsis)
        </h3>
        <ProjectTile
          variant="dashboard"
          title="Project Title"
          description="Very long description text that should be truncated with ellipsis. This description exceeds one line and should show ellipsis. Additional text here."
          date="2025.05.30"
          members={mockMembers.slice(0, 2)}
          memberCount={3}
        />
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-2">
          Both Title and Description Long
        </h3>
        <ProjectTile
          variant="dashboard"
          title="Very long project title that should be truncated with ellipsis when it exceeds one line. This text goes beyond the container width."
          description="Very long description text that should be truncated with ellipsis. This description exceeds one line and should show ellipsis. Additional text here."
          date="2025.05.30"
          members={mockMembers.slice(0, 2)}
          memberCount={3}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Shows various text overflow scenarios. Titles and descriptions are truncated with ellipsis (...) when they exceed one line.",
      },
    },
  },
};

export const HomeTextOverflow: Story = {
  args: {
    variant: "home",
    title: "Text Overflow Example",
  },
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-semibold mb-2">Short Title</h3>
        <ProjectTile
          variant="home"
          title="Short Title"
          editedTime="Edited 3 minutes ago"
        />
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-2">
          Long Title (with ellipsis)
        </h3>
        <ProjectTile
          variant="home"
          title="Very long project title that should be truncated with ellipsis when it exceeds one line. This text goes beyond the container width."
          editedTime="Edited 3 minutes ago"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Shows title overflow scenarios in Home variant.",
      },
    },
  },
};

export const ListVariant: Story = {
  args: {
    variant: "list",
    title: "Project Title",
    description: "Project description that can be truncated in one line",
    date: "2025.05.30",
    members: mockMembers.slice(0, 2),
    memberCount: 3,
    isStarred: false,
    onStarClick: () => alert("Star toggled!"),
  },
};

export const ListSimpleVariant: Story = {
  args: {
    variant: "list_simple",
    title: "Simple List Item",
    date: "2025.05.30",
  },
};

export const ListSearchVariant: Story = {
  args: {
    variant: "list_search",
    title: "Private Project",
    description: "This is a private project with members",
    isPrivate: true,
    isJoined: true,
    memberInfo: { members: 5, guests: 2 },
    onJoin: () => alert("Joined project!"),
    onLeave: () => alert("Left project!"),
  },
};

export const ListExamples: Story = {
  args: {
    variant: "list",
    title: "List Example",
    description: "This is a list example with multiple items",
    date: "2025.05.30",
    members: mockMembers.slice(0, 2),
    memberCount: 3,
    isStarred: false,
    onStarClick: () => alert("Star toggled!"),
  },
  render: () => (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h3 className="text-sm font-semibold mb-2">List Variant</h3>
        <div className="border rounded-lg overflow-hidden">
          <ProjectTile
            variant="list"
            title="Design System Components"
            description="Building reusable UI components for the entire application"
            date="2025.05.30"
            members={mockMembers.slice(0, 2)}
            memberCount={3}
            isStarred={true}
            onStarClick={() => alert("Star toggled!")}
            onMenuClick={() => alert("Menu clicked!")}
            onTileClick={() => alert("Tile clicked!")}
          />
          <ProjectTile
            variant="list"
            title="Mobile App Development"
            description="React Native application for iOS and Android platforms"
            date="2025.05.29"
            members={mockMembers.slice(1, 3)}
            memberCount={5}
            imageUrl="/img/thumbnail_fallback.png"
            isStarred={false}
            onStarClick={() => alert("Star toggled!")}
          />
          <ProjectTile
            variant="list"
            title="API Integration"
            description="RESTful API integration with third-party services"
            date="2025.05.28"
            members={mockMembers}
            memberCount={7}
            isStarred={false}
            onStarClick={() => alert("Star toggled!")}
          />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-2">List Simple Variant</h3>
        <div className="border rounded-lg overflow-hidden">
          <ProjectTile
            variant="list_simple"
            title="Quick Task 1"
            date="2025.05.30"
          />
          <ProjectTile
            variant="list_simple"
            title="Quick Task 2"
            date="2025.05.29"
            imageUrl="/img/thumbnail_fallback.png"
          />
          <ProjectTile
            variant="list_simple"
            title="Quick Task 3"
            date="2025.05.28"
          />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-2">List Search Variant</h3>
        <div className="border rounded-lg overflow-hidden">
          <ProjectTile
            variant="list_search"
            title="Private Project 1"
            description="This is a private project - hover to see Leave button"
            isPrivate={true}
            isJoined={true}
            memberInfo={{ members: 3, guests: 1 }}
            onLeave={() => alert("Left project!")}
          />
          <ProjectTile
            variant="list_search"
            title="Public Project"
            description="This is a public project - hover to see Join button"
            isPrivate={false}
            isJoined={false}
            imageUrl="/img/thumbnail_fallback.png"
            memberInfo={{ members: 8, guests: 0 }}
            onJoin={() => alert("Joined project!")}
          />
          <ProjectTile
            variant="list_search"
            title="Team Project"
            description="Private team collaboration space - hover to see Leave button"
            isPrivate={true}
            isJoined={true}
            memberInfo={{ members: 12, guests: 5 }}
            onLeave={() => alert("Left project!")}
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Examples of all list variants in typical usage scenarios",
      },
    },
  },
};

export const ListWithLongText: Story = {
  args:{
    variant: "list",
    title: "List with Long Titles and Descriptions",
    description: "This is a list example with long titles and descriptions",
    date: "2025.05.30",
    members: mockMembers.slice(0, 2),
    memberCount: 3,
    isStarred: false,
    onStarClick: () => alert("Star toggled!"),
  },
  render: () => (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h3 className="text-sm font-semibold mb-2">List with Long Titles and Descriptions</h3>
        <div className="border rounded-lg overflow-hidden">
          <ProjectTile
            variant="list"
            title="Very long project title that should be truncated with ellipsis when it exceeds the available space in the list layout"
            description="Very long description text that should also be truncated with ellipsis when it exceeds one line in the list layout. This ensures consistent visual appearance."
            date="2025.05.30"
            members={mockMembers}
            memberCount={10}
          />
          <ProjectTile
            variant="list_simple"
            title="Another extremely long project title that will be truncated to maintain clean list appearance"
            date="2025.05.29"
          />
          <ProjectTile
            variant="list_search"
            title="Long private project title that needs truncation"
            description="Long description for a private project item that will be truncated"
            isPrivate={true}
            isJoined={false}
            memberInfo={{ members: 15, guests: 3 }}
            onJoin={() => alert("Joined project!")}
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Demonstrates text truncation in list layouts",
      },
    },
  },
};

export const InteractiveStarToggle: Story = {
  args: {
    variant: "list",
    title: "Interactive Project 1",
    description: "Click the star to toggle - currently unstarred",
    date: "2025.05.30",
    members: mockMembers.slice(0, 2),
    memberCount: 3,
    isStarred: false,
    onStarClick: () => alert("Star toggled!"),
  },
  render: () => {
    const [starred1, setStarred1] = useState(false);
    const [starred2, setStarred2] = useState(true);
    const [starred3, setStarred3] = useState(false);

    return (
      <div className="space-y-4 max-w-4xl">
        <h3 className="text-sm font-semibold mb-2">Interactive Star Toggle</h3>
        <div className="border rounded-lg overflow-hidden">
          <ProjectTile
            variant="list"
            title="Interactive Project 1"
            description="Click the star to toggle - currently unstarred"
            date="2025.05.30"
            members={mockMembers.slice(0, 2)}
            memberCount={3}
            isStarred={starred1}
            onStarClick={() => setStarred1(!starred1)}
          />
          <ProjectTile
            variant="list"
            title="Interactive Project 2"
            description="This one starts starred - click to unstar"
            date="2025.05.29"
            members={mockMembers.slice(1, 3)}
            memberCount={5}
            imageUrl="/img/thumbnail_fallback.png"
            isStarred={starred2}
            onStarClick={() => setStarred2(!starred2)}
          />
          <ProjectTile
            variant="list"
            title="Interactive Project 3"
            description="Another interactive star toggle example"
            date="2025.05.28"
            members={mockMembers}
            memberCount={7}
            isStarred={starred3}
            onStarClick={() => setStarred3(!starred3)}
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive example with working star toggles using React state",
      },
    },
  },
};

export const ListTrashVariant: Story = {
  args: {
    variant: "list_trash",
    title: "Deleted Project",
    description: "This project is in the trash",
    isJoined: true,
    memberInfo: { members: 5, guests: 2 },
    onRestore: () => alert("Project restored!"),
    onDelete: () => alert("Project permanently deleted!"),
  },
};

export const ListModalVariant: Story = {
  args: {
    variant: "list_modal",
    title: "Project in Modal",
    description: "Project with access control",
    canAccess: true,
    onAccessToggle: (checked) => alert(`Access toggled: ${checked}`),
    onKick: () => alert("User kicked!"),
  },
};

export const TrashAndModalExamples: Story = {
  args: {
    variant: "list_trash",
    title: "Trash Example",
  },
  render: () => {
    const [canAccess1, setCanAccess1] = useState(true);
    const [canAccess2, setCanAccess2] = useState(false);
    const [canAccess3, setCanAccess3] = useState(true);

    return (
      <div className="space-y-6 max-w-4xl">
        <div>
          <h3 className="text-sm font-semibold mb-2">List Trash Variant (Direct Component Usage)</h3>
          <div className="border rounded-lg overflow-hidden">
            <ListTrashProjectTile
              title="Deleted Project 1"
              description="This project was deleted yesterday"
              isJoined={true}
              memberInfo={{ members: 3, guests: 1 }}
              onRestore={() => alert("Project 1 restored!")}
              onDelete={() => alert("Project 1 permanently deleted!")}
            />
            <ListTrashProjectTile
              title="Deleted Project 2"
              description="This project was deleted last week"
              imageUrl="/img/thumbnail_fallback.png"
              isJoined={false}
              memberInfo={{ members: 8, guests: 0 }}
              onRestore={() => alert("Project 2 restored!")}
              onDelete={() => alert("Project 2 permanently deleted!")}
            />
            <ListTrashProjectTile
              title="Deleted Project 3"
              description="Old project in trash"
              isJoined={true}
              memberInfo={{ members: 12, guests: 5 }}
              onRestore={() => alert("Project 3 restored!")}
              onDelete={() => alert("Project 3 permanently deleted!")}
            />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-2">List Modal Variant (Direct Component Usage)</h3>
          <div className="border rounded-lg overflow-hidden">
            <ListModalProjectTile
              title="Team Project 1"
              description="Project with access control"
              canAccess={canAccess1}
              onAccessToggle={(checked) => setCanAccess1(checked)}
              onKick={() => alert("User kicked from Project 1!")}
            />
            <ListModalProjectTile
              title="Team Project 2"
              description="Another project with toggle"
              imageUrl="/img/thumbnail_fallback.png"
              canAccess={canAccess2}
              onAccessToggle={(checked) => setCanAccess2(checked)}
              onKick={() => alert("User kicked from Project 2!")}
            />
            <ListModalProjectTile
              title="Team Project 3"
              description="Third project with access management"
              canAccess={canAccess3}
              onAccessToggle={(checked) => setCanAccess3(checked)}
              onKick={() => alert("User kicked from Project 3!")}
            />
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Examples of trash and modal variants using direct component imports with interactive controls",
      },
    },
  },
};

export const InteractiveJoinLeave: Story = {
  args: {
    variant: "list",
    title: "Interactive Project 1",
    description: "Click the star to toggle - currently unstarred",
    date: "2025.05.30",
    members: mockMembers.slice(0, 2),
    memberCount: 3,
    isStarred: false,
    onStarClick: () => alert("Star toggled!"),
  },
  render: () => {
    const [joined1, setJoined1] = useState(true);
    const [joined2, setJoined2] = useState(false);
    const [joined3, setJoined3] = useState(true);

    return (
      <div className="space-y-4 max-w-4xl">
        <h3 className="text-sm font-semibold mb-2">Interactive Join/Leave Buttons</h3>
        <div className="border rounded-lg overflow-hidden">
          <ProjectTile
            variant="list_search"
            title="Project Alpha"
            description="Hover to see Leave button - currently joined"
            isPrivate={true}
            isJoined={joined1}
            memberInfo={{ members: 5, guests: 2 }}
            onJoin={() => setJoined1(true)}
            onLeave={() => setJoined1(false)}
          />
          <ProjectTile
            variant="list_search"
            title="Project Beta"
            description="Hover to see Join button - currently not joined"
            isPrivate={false}
            isJoined={joined2}
            memberInfo={{ members: 8, guests: 0 }}
            imageUrl="/img/thumbnail_fallback.png"
            onJoin={() => setJoined2(true)}
            onLeave={() => setJoined2(false)}
          />
          <ProjectTile
            variant="list_search"
            title="Project Gamma"
            description="Private project with interactive join/leave"
            isPrivate={true}
            isJoined={joined3}
            memberInfo={{ members: 12, guests: 3 }}
            onJoin={() => setJoined3(true)}
            onLeave={() => setJoined3(false)}
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive example with working Join/Leave buttons using React state",
      },
    },
  },
};
