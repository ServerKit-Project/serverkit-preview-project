import { useState, useEffect, useCallback } from "react";

interface UseVolumeProps {
  initialVolume?: number;
  onVolumeChange?: (volume: number) => void;
}

interface UseVolumeReturn {
  volume: number;
  isMuted: boolean;
  setVolume: (volume: number) => void;
  handleMuteToggle: () => void;
}

export const useVolume = ({
  initialVolume = 50,
  onVolumeChange,
}: UseVolumeProps = {}): UseVolumeReturn => {
  const [volume, setVolumeState] = useState(initialVolume);
  const [isMuted, setIsMuted] = useState(false);
  const [previousVolume, setPreviousVolume] = useState(initialVolume);

  useEffect(() => {
    if (volume === 0 && !isMuted) {
      setIsMuted(true);
    } else if (volume > 0 && isMuted) {
      setIsMuted(false);
    }
  }, [volume, isMuted]);

  const setVolume = useCallback(
    (newVolume: number) => {
      setVolumeState(newVolume);
      onVolumeChange?.(newVolume);
    },
    [onVolumeChange]
  );

  const handleMuteToggle = useCallback(() => {
    if (isMuted || volume === 0) {
      const volumeToRestore = previousVolume > 0 ? previousVolume : 50;
      setVolume(volumeToRestore);
      setIsMuted(false);
    } else {
      setPreviousVolume(volume);
      setVolume(0);
      setIsMuted(true);
    }
  }, [isMuted, volume, previousVolume, setVolume]);

  return {
    volume,
    isMuted,
    setVolume,
    handleMuteToggle,
  };
};
