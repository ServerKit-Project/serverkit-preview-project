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
      // componentName과 mediaType을 조합하여 고유한 키 생성
      const uniqueKey = `${item.componentName}_${item.type}_${media.name}`;
      mediaPathMap[uniqueKey] = {
        path: media.data,
        type: media.type,
        recommendedSize: item.recommendedSize,
        mediaType: item.type,
      };
      
      // 하위 호환성을 위해 기존 방식도 유지 (mediaType이 없는 키)
      // 단, 이미 존재하지 않는 경우에만 추가
      if (!mediaPathMap[media.name]) {
        mediaPathMap[media.name] = {
          path: media.data,
          type: media.type,
          recommendedSize: item.recommendedSize,
          mediaType: item.type,
        };
      }
    }
  }

  function getMediaSrc(key: string, mediaType?: MediaType): string {
    let filename: mediaPathMap | undefined;
    
    // mediaType이 제공된 경우 타입별 키로 먼저 검색
    if (mediaType) {
      // 먼저 componentName_type_mediaName 형식으로 검색
      const keys = Object.keys(mediaPathMap);
      const typeSpecificKey = keys.find(k => 
        k.includes(`_${mediaType}_`) && (k.endsWith(`_${key}`) || k === `${key}_${mediaType}_${key}`)
      );
      
      if (typeSpecificKey) {
        filename = mediaPathMap[typeSpecificKey];
      }
    }
    
    // 타입별 키로 찾지 못한 경우 기존 방식으로 검색
    if (!filename) {
      filename = mediaPathMap[key];
    }
    
    if (!filename) return "";
    
    if (filename.type === "import") {
      return (
        getMediaSrcFromManager(filename.path) || getMediaDefaultSrc(filename)
      );
    } else {
      return filename.path !== "" ? filename.path : getMediaDefaultSrc(filename);
    }
  }

  function getMediaDefaultSrc(fileData: mediaPathMap): string {
    if (fileData.mediaType === "image") {
      return `https://placehold.co/${fileData.recommendedSize.width}x${fileData.recommendedSize.height}`;
    } else {
      return "https://2050today.org/wp-content/uploads/2020/07/Video-Placeholder.mp4";
    }
  }

  // video와 image를 구분하여 가져오는 헬퍼 함수들
  function getVideoSrc(key: string): string {
    return getMediaSrc(key, "video");
  }

  function getImageSrc(key: string): string {
    return getMediaSrc(key, "image");
  }

  return { getMediaSrc, getVideoSrc, getImageSrc };
}
