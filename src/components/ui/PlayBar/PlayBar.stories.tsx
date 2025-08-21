import type { Meta, StoryObj } from "@storybook/react";
import { PlayBar } from ".";

const meta = {
  title: "Components/PlayBar",
  component: PlayBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["basic", "expanded"],
      description: "PlayBar의 표시 형태",
    },
    currentTime: {
      control: { type: "text" },
      description: "현재 재생 시간",
    },
    totalTime: {
      control: { type: "text" },
      description: "전체 재생 시간",
    },
    isPlaying: {
      control: { type: "boolean" },
      description: "재생 상태",
    },
    progress: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "재생 진행률 (%)",
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[800px] p-8 bg-[var(--scale-bg)]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PlayBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    variant: "basic",
    currentTime: "11:29",
    totalTime: "30:12",
    isPlaying: false,
    progress: 38.3,
  },
};

export const BasicPlaying: Story = {
  args: {
    variant: "basic",
    currentTime: "11:29",
    totalTime: "30:12",
    isPlaying: true,
    progress: 38.3,
  },
};

export const Expanded: Story = {
  args: {
    variant: "expanded",
    currentTime: "11:29",
    totalTime: "30:12",
    isPlaying: false,
    progress: 38.3,
  },
};

export const ExpandedPlaying: Story = {
  args: {
    variant: "expanded",
    currentTime: "11:29",
    totalTime: "30:12",
    isPlaying: true,
    progress: 38.3,
  },
};

export const StartOfTrack: Story = {
  args: {
    variant: "expanded",
    currentTime: "00:00",
    totalTime: "30:12",
    isPlaying: false,
    progress: 0,
  },
};

export const EndOfTrack: Story = {
  args: {
    variant: "expanded",
    currentTime: "30:12",
    totalTime: "30:12",
    isPlaying: false,
    progress: 100,
  },
};

export const Interactive: Story = {
  args: {
    variant: "expanded",
    currentTime: "11:29",
    totalTime: "30:12",
    isPlaying: false,
    progress: 38.3,
    onPlayPause: () => console.log("Play/Pause clicked"),
    onSkipBack: () => console.log("Skip back clicked"),
    onSkipForward: () => console.log("Skip forward clicked"),
    onShuffle: () => console.log("Shuffle clicked"),
    onRepeat: () => console.log("Repeat clicked"),
    onVolumeClick: () => console.log("Volume clicked"),
    onMinimize: () => console.log("Minimize clicked"),
    onMaximize: () => console.log("Maximize clicked"),
    onSpeedClick: () => console.log("Speed clicked"),
  },
};
