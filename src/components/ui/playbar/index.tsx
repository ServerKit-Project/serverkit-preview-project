import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  IconPlayerPause,
  IconPlayerPlayFilled,
  IconRewindBackward10,
  IconRewindForward10,
  IconArrowsMaximize,
} from "@tabler/icons-react";
import { Slider } from "@/components/base/slider";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/base/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/base/select";

import { useVolume } from "@/hooks/useVolume";
import { getVolumeIcon } from "@/lib/volume";
import { playBarVariants } from "./PlayBar.variants";
import type {
  PlayBarProps,
  VolumeProps,
  PlayBarControlsProps,
  PlayBarProgressProps,
} from "./PlayBar.types";
import { ICON_SIZE, PLAYBACK_SPEEDS } from "./PlayBar.types";
import { getTimeDisplayWidth } from "@/lib/time";

const PlayBarProgress = ({
  progress = 0,
  onProgressChange,
}: PlayBarProgressProps) => {
  const handleSliderChange = (value: number[]) => {
    const newProgress = value[0];
    if (newProgress !== undefined && onProgressChange) {
      onProgressChange(newProgress);
    }
  };

  return (
    <div className="absolute top-0 left-0 right-0 h-2">
      <Slider
        value={[progress]}
        onValueChange={handleSliderChange}
        max={100}
        min={0}
        step={0.1}
        className="w-full [&_[data-slot=slider-track]]:h-2 [&_[data-slot=slider-track]]:bg-[var(--color-scale-disabled-text)] [&_[data-slot=slider-range]]:h-2 [&_[data-slot=slider-range]]:bg-[var(--color-scale-secondary-text)] [&_[data-slot=slider-thumb]]:h-0 [&_[data-slot=slider-thumb]]:w-0 [&_[data-slot=slider-thumb]]:border-0 [&_[data-slot=slider-thumb]]:shadow-none [&_[data-slot=slider-thumb]]:opacity-0 hover:[&_[data-slot=slider-thumb]]:opacity-100 hover:[&_[data-slot=slider-thumb]]:h-3 hover:[&_[data-slot=slider-thumb]]:w-3"
      />
    </div>
  );
};

const PlayBarControls = ({
  isPlaying = false,
  onPlayPause,
  onSkipBack,
  onSkipForward,
}: PlayBarControlsProps) => (
  <div className="flex items-center gap-2">
    <Button
      size="sm"
      variant="clear"
      style="icon"
      onClick={onSkipBack}
      aria-label="Previous track"
    >
      <IconRewindBackward10 size={ICON_SIZE.SM} />
    </Button>

    <Button
      size="lg"
      variant="clear"
      style="icon"
      onClick={onPlayPause}
      aria-label={isPlaying ? "Pause" : "Play"}
    >
      {isPlaying ? (
        <IconPlayerPause size={ICON_SIZE.MD} />
      ) : (
        <IconPlayerPlayFilled size={ICON_SIZE.MD} />
      )}
    </Button>

    <Button
      size="sm"
      variant="clear"
      style="icon"
      onClick={onSkipForward}
      aria-label="Next track"
    >
      <IconRewindForward10 size={ICON_SIZE.SM} />
    </Button>
  </div>
);

const Volume = ({
  volume,
  onVolumeChange,
  isMuted,
  handleMuteToggle,
}: VolumeProps) => {
  const VolumeIcon = getVolumeIcon(volume, isMuted);
  const handleSliderChange = (value: number[]) => {
    const newVolume = value[0];
    if (newVolume !== undefined && onVolumeChange) {
      onVolumeChange(newVolume);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="sm" variant="clear" style="icon">
          <VolumeIcon size={ICON_SIZE.SM} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-3" side="right">
        <div className="flex items-center gap-3">
          <Button size="sm" variant="clear" onClick={handleMuteToggle}>
            <VolumeIcon size={ICON_SIZE.SM} />
          </Button>
          <Slider
            value={[volume || 0]}
            onValueChange={handleSliderChange}
            defaultValue={[volume || 50]}
            max={100}
            min={0}
            step={1}
          />
          <span className="text-sm text-center">{volume}%</span>
        </div>
      </PopoverContent>
    </Popover>
  );
};

const BasicPlayBar = React.forwardRef<
  HTMLDivElement,
  Omit<PlayBarProps, "variant">
>(function BasicPlayBar(
  {
    className,
    currentTime = "00:00",
    totalTime = "00:00",
    isPlaying,
    onPlayPause,
    onSkipBack,
    onSkipForward,
    volume = 50,
    onVolumeChange,
    progress,
    onProgressChange,
    ...props
  },
  ref
) {
  const { isMuted, handleMuteToggle } = useVolume({
    initialVolume: volume,
    onVolumeChange,
  });

  const timeWidth = getTimeDisplayWidth(totalTime);

  return (
    <div
      ref={ref}
      className={cn(playBarVariants({ variant: "basic" }), className)}
      {...props}
    >
      <PlayBarProgress
        progress={progress}
        onProgressChange={onProgressChange}
      />

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span
            className={`text-body-regular !text-[var(--scale-secondary-text)] whitespace-nowrap ${timeWidth}`}
          >
            {currentTime}
          </span>
          <Volume
            volume={volume}
            onVolumeChange={onVolumeChange}
            isMuted={isMuted}
            handleMuteToggle={handleMuteToggle}
          />
        </div>

        <PlayBarControls
          isPlaying={isPlaying}
          onPlayPause={onPlayPause}
          onSkipBack={onSkipBack}
          onSkipForward={onSkipForward}
        />

        <div className="flex items-center">
          <span
            className={`text-body-regular !text-[var(--scale-secondary-text)] whitespace-nowrap ${timeWidth}`}
          >
            {totalTime}
          </span>
        </div>
      </div>
    </div>
  );
});

const ExpandedPlayBar = React.forwardRef<
  HTMLDivElement,
  Omit<PlayBarProps, "variant">
>(function ExpandedPlayBar(
  {
    className,
    currentTime = "00:00",
    totalTime = "00:00",
    isPlaying,
    onPlayPause,
    onSkipBack,
    onSkipForward,
    volume = 50,
    onVolumeChange,
    onMaximize,
    speed = 1,
    onSpeedChange,
    progress,
    onProgressChange,
    ...props
  },
  ref
) {
  const { isMuted, handleMuteToggle } = useVolume({
    initialVolume: volume,
    onVolumeChange,
  });

  return (
    <div
      ref={ref}
      className={cn(playBarVariants({ variant: "expanded" }), className)}
      {...props}
    >
      <PlayBarProgress
        progress={progress}
        onProgressChange={onProgressChange}
      />

      <div className="flex items-center justify-between gap-4 mt-2">
        <div className="flex gap-4 items-center">
          <PlayBarControls
            isPlaying={isPlaying}
            onPlayPause={onPlayPause}
            onSkipBack={onSkipBack}
            onSkipForward={onSkipForward}
          />
          <Volume
            volume={volume}
            onVolumeChange={onVolumeChange}
            isMuted={isMuted}
            handleMuteToggle={handleMuteToggle}
          />
        </div>

        <div className="text-sm text-[var(--scale-secondary-text)] whitespace-nowrap">
          <span className="text-subtitle-regular">{currentTime}</span>
          <span> / </span>
          <span className="text-subtitle-regular !text-[var(--scale-tertiary-text)]">
            {totalTime}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Select
            value={speed.toString()}
            onValueChange={(value) => onSpeedChange?.(parseFloat(value))}
          >
            <SelectTrigger
              size="sm"
              className="w-20 text-body-regular justify-center border-0 shadow-none bg-transparent px-2 hover:bg-[var(--scale-hover)] active:bg-[var(--scale-actived-clicked)]"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {PLAYBACK_SPEEDS.map((speedOption) => (
                <SelectItem key={speedOption} value={speedOption.toString()}>
                  {speedOption}x
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            size="sm"
            variant="clear"
            style="icon"
            onClick={onMaximize}
            aria-label="Fullscreen"
          >
            <IconArrowsMaximize size={ICON_SIZE.SM} />
          </Button>
        </div>
      </div>
    </div>
  );
});

export const PlayBar = React.forwardRef<HTMLDivElement, PlayBarProps>(
  function PlayBar({ variant = "basic", ...props }, ref) {
    return variant === "expanded" ? (
      <ExpandedPlayBar ref={ref} {...props} />
    ) : (
      <BasicPlayBar ref={ref} {...props} />
    );
  }
);

PlayBar.displayName = "PlayBar";

export { type PlayBarProps };
