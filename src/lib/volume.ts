import { IconVolume, IconVolume2, IconVolumeOff } from "@tabler/icons-react";

export type VolumeIcon =
  | typeof IconVolume
  | typeof IconVolume2
  | typeof IconVolumeOff;

/**
 * 볼륨과 음소거 상태에 따라 적절한 볼륨 아이콘을 반환합니다.
 *
 * @param volume - 볼륨 레벨 (0-100)
 * @param isMuted - 음소거 상태
 * @returns 적절한 볼륨 아이콘 컴포넌트
 *
 * @example
 * getVolumeIcon(0, false) // IconVolumeOff
 * getVolumeIcon(30, false) // IconVolume2
 * getVolumeIcon(80, false) // IconVolume
 * getVolumeIcon(50, true) // IconVolumeOff (muted)
 */
export const getVolumeIcon = (volume: number, isMuted: boolean): VolumeIcon => {
  if (isMuted || volume === 0) return IconVolumeOff;
  if (volume < 50) return IconVolume2;
  return IconVolume;
};
