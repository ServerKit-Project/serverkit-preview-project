import { getMediaSrcFromManager } from "../sdk/resource/mediaManager";

type MediaType = "image" | "video";

interface RecommendedSize {
  width: number;
  height: number;
}

interface mediaSrcData {
  name: string;
  data: string;
  type: "import" | "url";
}

export interface MediaEntry {
  purpose: string;
  type: MediaType;
  componentName: string;
  recommendedSize: RecommendedSize;
  mediaSrcData: mediaSrcData[];
}

export function createMediaMap(mediaConfig: MediaEntry[]) {
  const mediaPathMap: Record<string, { path: string; type: string }> = {};

  for (const item of mediaConfig) {
    for (const media of item.mediaSrcData) {
      mediaPathMap[media.name] = {
        path: media.data,
        type: media.type,
      };
    }
  }

  function getMediaSrc(key: string): string | null {
    const filename = mediaPathMap[key];
    if (!filename) return null;
    if (filename.type === "import") {
      return getMediaSrcFromManager(filename.path);
    } else {
      return filename.path;
    }
  }

  return { getMediaSrc };
}
