import { createContext } from "react";
import { MediaEntry } from "../../hooks/mediaMapper";

export interface MediaContextType {
  getMediaSrc: (key: string, mediaType?: "image" | "video") => string;
  getVideoSrc: (key: string) => string;
  getImageSrc: (key: string) => string;
  mediaConfig: MediaEntry[];
  addMediaConfig: (config: MediaEntry[]) => void;
  removeMediaConfig: (componentName: string) => void;
  // Video 전용 함수들
  addVideoMediaConfig: (config: MediaEntry[]) => void;
  removeVideoMediaConfig: (componentName: string) => void;
  videoMediaConfig: MediaEntry[];
  // Image 전용 함수들
  addImageMediaConfig: (config: MediaEntry[]) => void;
  removeImageMediaConfig: (componentName: string) => void;
  imageMediaConfig: MediaEntry[];
}

export const MediaContext = createContext<MediaContextType | null>(null);

// MediaEntry 타입을 re-export
export type { MediaEntry };
