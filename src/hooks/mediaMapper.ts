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

interface mediaPathMap {
  path: string;
  type: string;
  recommendedSize: RecommendedSize;
  mediaType: MediaType;
}

export function createMediaMap(mediaConfig: MediaEntry[]) {
  const mediaPathMap: Record<string, mediaPathMap> = {};

  for (const item of mediaConfig) {
    for (const media of item.mediaSrcData) {
      mediaPathMap[media.name] = {
        path: media.data,
        type: media.type,
        recommendedSize: item.recommendedSize,
        mediaType: item.type,
      };
    }
  }

  function getMediaSrc(key: string): string {
    const filename = mediaPathMap[key];
    if (!filename) return "";
    if (filename.type === "import") {
      return (
        getMediaSrcFromManager(filename.path) || getMediaDefaultSrc(filename)
      );
    } else {
      return filename.path != "" ? filename.path : getMediaDefaultSrc(filename);
    }
  }

  function getMediaDefaultSrc(fileData: mediaPathMap): string {
    if (fileData.mediaType === "image") {
      return `https://placehold.co/${fileData.recommendedSize.width}x${fileData.recommendedSize.height}`;
    } else {
      return "https://2050today.org/wp-content/uploads/2020/07/Video-Placeholder.mp4";
    }
  }

  return { getMediaSrc };
}
