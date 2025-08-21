import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Button } from "@/components/shared/Button/Button";
import {
  IconPlayerPause,
  IconPlayerPlay,
  IconArrowsShuffle,
  IconRepeat,
  IconVolume2,
  IconPlayerTrackPrev,
  IconPlayerTrackNext,
  IconChevronDown,
  IconMaximize,
} from "@tabler/icons-react";

const playBarVariants = cva(
  [
    "relative bg-[var(--scale-white)] border border-[var(--scale-hover)]",
    "transition-all duration-200",
  ],
  {
    variants: {
      variant: {
        basic: "px-4 py-3 rounded-lg",
        expanded: "px-6 py-4 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "basic",
    },
  }
);

interface PlayBarProps extends VariantProps<typeof playBarVariants> {
  className?: string;
  currentTime?: string;
  totalTime?: string;
  isPlaying?: boolean;
  onPlayPause?: () => void;
  onSkipBack?: () => void;
  onSkipForward?: () => void;
  onShuffle?: () => void;
  onRepeat?: () => void;
  onVolumeClick?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  onSpeedClick?: () => void;
  progress?: number;
}

export const PlayBar = React.forwardRef<HTMLDivElement, PlayBarProps>(
  function PlayBar(
    {
      className,
      variant = "basic",
      currentTime = "00:00",
      totalTime = "00:00",
      isPlaying = false,
      onPlayPause,
      onSkipBack,
      onSkipForward,
      onShuffle,
      onRepeat,
      onVolumeClick,
      onMinimize,
      onMaximize,
      onSpeedClick,
      progress = 0,
      ...props
    },
    ref
  ) {
    const isExpanded = variant === "expanded";

    return (
      <div
        ref={ref}
        className={cn(playBarVariants({ variant }), className)}
        {...props}
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--scale-disabled)] rounded-full overflow-hidden">
          <div
            className="h-full bg-[var(--scale-secondary)] rounded-full transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between gap-4 mt-2">
          <div className="flex items-center gap-2 text-sm text-[var(--scale-secondary-text)] whitespace-nowrap">
            <span>{currentTime}</span>
            {isExpanded && (
              <>
                <span>/</span>
                <span>{totalTime}</span>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="clear"
              style="icon"
              onClick={onSkipBack}
              aria-label="Previous track"
            >
              <IconPlayerTrackPrev size={20} />
            </Button>

            <Button
              size="lg"
              variant="clear"
              style="icon"
              onClick={onPlayPause}
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <IconPlayerPause size={24} />
              ) : (
                <IconPlayerPlay size={24} />
              )}
            </Button>

            <Button
              size="sm"
              variant="clear"
              style="icon"
              onClick={onSkipForward}
              aria-label="Next track"
            >
              <IconPlayerTrackNext size={20} />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            {isExpanded && (
              <>
                <Button
                  size="sm"
                  variant="clear"
                  style="icon"
                  onClick={onShuffle}
                  aria-label="Shuffle"
                >
                  <IconArrowsShuffle size={20} />
                </Button>

                <Button
                  size="sm"
                  variant="clear"
                  style="icon"
                  onClick={onRepeat}
                  aria-label="Repeat"
                >
                  <IconRepeat size={20} />
                </Button>
              </>
            )}

            <Button
              size="sm"
              variant="clear"
              style="icon"
              onClick={onVolumeClick}
              aria-label="Volume"
            >
              <IconVolume2 size={20} />
            </Button>

            {isExpanded ? (
              <>
                <Button
                  size="sm"
                  variant="clear"
                  style="icon-text"
                  onClick={onSpeedClick}
                  aria-label="Playback speed"
                >
                  <span className="text-sm">1x</span>
                  <IconChevronDown size={16} />
                </Button>

                <Button
                  size="sm"
                  variant="clear"
                  style="icon"
                  onClick={onMaximize}
                  aria-label="Fullscreen"
                >
                  <IconMaximize size={20} />
                </Button>
              </>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
);

PlayBar.displayName = "PlayBar";

export { playBarVariants, type PlayBarProps };
