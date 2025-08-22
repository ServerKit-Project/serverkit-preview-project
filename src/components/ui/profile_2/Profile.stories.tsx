import type { Meta, StoryObj } from "@storybook/react";
import { Profile } from ".";
import {
  IconUser,
  IconSettings,
  IconLogout,
  IconHelp,
  IconBell,
} from "@tabler/icons-react";

const meta = {
  title: "components/Profile",
  component: Profile,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    avatarUrl: "https://github.com/shadcn.png",
    name: "홍길동",
    email: "hong@example.com",
  },
};

export const WithoutImage: Story = {
  args: {
    name: "홍길동",
    email: "hong@example.com",
  },
};

export const CustomMenuItems: Story = {
  args: {
    avatarUrl: "https://github.com/shadcn.png",
    name: "홍길동",
    email: "hong@example.com",
    menuItems: [
      {
        label: "프로필",
        icon: <IconUser className="size-4" />,
        onClick: () => console.log("프로필 클릭"),
      },
      {
        label: "알림 설정",
        icon: <IconBell className="size-4" />,
        onClick: () => console.log("알림 설정 클릭"),
      },
      {
        label: "설정",
        icon: <IconSettings className="size-4" />,
        onClick: () => console.log("설정 클릭"),
      },
      {
        label: "도움말",
        icon: <IconHelp className="size-4" />,
        onClick: () => console.log("도움말 클릭"),
      },
      {
        label: "로그아웃",
        icon: <IconLogout className="size-4" />,
        onClick: () => console.log("로그아웃 클릭"),
        variant: "destructive",
      },
    ],
  },
};

export const WithDisabledItems: Story = {
  args: {
    avatarUrl: "https://github.com/shadcn.png",
    name: "홍길동",
    email: "hong@example.com",
    menuItems: [
      {
        label: "프로필",
        icon: <IconUser className="size-4" />,
        onClick: () => console.log("프로필 클릭"),
      },
      {
        label: "설정 (비활성화)",
        icon: <IconSettings className="size-4" />,
        disabled: true,
      },
      {
        label: "로그아웃",
        icon: <IconLogout className="size-4" />,
        onClick: () => console.log("로그아웃 클릭"),
        variant: "destructive",
      },
    ],
  },
};
