import { VariantProps } from "class-variance-authority";
import { playBarVariants } from "./PlayBar.variants";

export interface PlayBarProps extends VariantProps<typeof playBarVariants> {
  className?: string;
  currentTime?: string;
  totalTime?: string;
  isPlaying?: boolean;
  onPlayPause?: () => void;
  onSkipBack?: () => void;
  onSkipForward?: () => void;
  volume?: number;
  onVolumeChange?: (volume: number) => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  speed?: number;
  onSpeedChange?: (speed: number) => void;
  progress?: number;
  onProgressChange?: (progress: number) => void;
}

export interface VolumeProps {
  volume: number;
  onVolumeChange?: (volume: number) => void;
  isMuted: boolean;
  handleMuteToggle: () => void;
}

export interface PlayBarControlsProps {
  isPlaying?: boolean;
  onPlayPause?: () => void;
  onSkipBack?: () => void;
  onSkipForward?: () => void;
}

export interface PlayBarProgressProps {
  progress?: number;
  onProgressChange?: (progress: number) => void;
}

export const ICON_SIZE = {
  SM: 20,
  MD: 24,
  XS: 16,
} as const;

export const ANIMATION_DURATION_MS = 200;

export const PLAYBACK_SPEEDS = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 2] as const;

export type PlaybackSpeed = (typeof PLAYBACK_SPEEDS)[number];
