import { useState, useEffect, useRef, useCallback } from "react";
import { formatPlaybackTime } from "@/lib/time";

interface UsePlaybackProps {
  duration?: number;
  onProgressChange?: (progress: number) => void;
  onTimeChange?: (currentTime: string, totalTime: string) => void;
}

interface UsePlaybackReturn {
  isPlaying: boolean;
  progress: number;
  currentTime: string;
  totalTime: string;

  togglePlayPause: () => void;
  skipBackward: () => void;
  skipForward: () => void;
  setProgress: (progress: number) => void;

  reset: () => void;
}

export const usePlayback = ({
  duration = 300,
  onProgressChange,
  onTimeChange,
}: UsePlaybackProps = {}): UsePlaybackReturn => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentSeconds, setCurrentSeconds] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const togglePlayPause = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  const skipBackward = useCallback(() => {
    setCurrentSeconds((prev) => {
      const newSeconds = Math.max(prev - 10, 0);
      setProgress((newSeconds / duration) * 100);
      return newSeconds;
    });
  }, [duration]);

  const skipForward = useCallback(() => {
    setCurrentSeconds((prev) => {
      const newSeconds = Math.min(prev + 10, duration);
      setProgress((newSeconds / duration) * 100);
      return newSeconds;
    });
  }, [duration]);

  const setProgressManual = useCallback(
    (newProgress: number) => {
      setProgress(newProgress);
      setCurrentSeconds((newProgress / 100) * duration);
    },
    [duration]
  );

  const reset = useCallback(() => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentSeconds(0);
  }, []);

  useEffect(() => {
    if (isPlaying && currentSeconds < duration) {
      intervalRef.current = setInterval(() => {
        setCurrentSeconds((prev) => {
          if (prev >= duration) {
            setIsPlaying(false);
            return duration;
          }
          const newSeconds = prev + 1;
          const newProgress = (newSeconds / duration) * 100;
          setProgress(newProgress);

          onProgressChange?.(newProgress);
          onTimeChange?.(
            formatPlaybackTime(newSeconds, duration),
            formatPlaybackTime(duration, duration)
          );

          return newSeconds;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, currentSeconds, duration, onProgressChange, onTimeChange]);

  return {
    isPlaying,
    progress,
    currentTime: formatPlaybackTime(currentSeconds, duration),
    totalTime: formatPlaybackTime(duration, duration),

    togglePlayPause,
    skipBackward,
    skipForward,
    setProgress: setProgressManual,

    reset,
  };
};
