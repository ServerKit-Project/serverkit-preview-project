import { createContext } from "react";
import { MediaEntry } from "../../hooks/mediaMapper";

export interface MediaContextType {
  getMediaSrc: (key: string) => string;
  mediaConfig: MediaEntry[];
  addMediaConfig: (config: MediaEntry[]) => void;
  removeMediaConfig: (componentName: string) => void;
}

export const MediaContext = createContext<MediaContextType | null>(null);

// MediaEntry 타입을 re-export
export type { MediaEntry };
