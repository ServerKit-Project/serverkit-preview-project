import { getMediaSrcFromManager } from "./mediaManager";

type MediaConfigItem = { name: string; data: string; type: string };

export function createMediaMap(mediaConfig: MediaConfigItem[]) {
  const mediaPathMap: Record<string, { path: string; type: string }> = {};

  for (const item of mediaConfig) {
    mediaPathMap[item.name] = { path: item.data, type: item.type };
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
