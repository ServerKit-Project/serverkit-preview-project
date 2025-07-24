import React, { useState, useMemo, useCallback } from "react";
import { MediaContext, MediaContextType } from "./MediaContext";
import { MediaEntry, createMediaMap } from "../../hooks/mediaMapper";

interface MediaProviderProps {
  children: React.ReactNode;
  mediaConfig?: MediaEntry[];
}

export const MediaProvider = ({
  children,
  mediaConfig = [],
}: MediaProviderProps) => {
  // Video와 Image를 위한 별도의 state
  const [videoMediaConfig, setVideoMediaConfig] = useState<MediaEntry[]>(
    mediaConfig.filter((item) => item.type === "video")
  );
  const [imageMediaConfig, setImageMediaConfig] = useState<MediaEntry[]>(
    mediaConfig.filter((item) => item.type === "image")
  );

  // Video 관련 함수들
  const addVideoMediaConfig = useCallback((config: MediaEntry[]) => {
    setVideoMediaConfig((prevConfig) => {
      const videoConfigs = config.filter((item) => item.type === "video");
      const newComponentNames = videoConfigs.map((item) => item.componentName);
      const filteredConfig = prevConfig.filter(
        (item) => !newComponentNames.includes(item.componentName)
      );
      return [...filteredConfig, ...videoConfigs];
    });
  }, []);

  const removeVideoMediaConfig = useCallback((componentName: string) => {
    setVideoMediaConfig((prevConfig) =>
      prevConfig.filter((item) => item.componentName !== componentName)
    );
  }, []);

  // Image 관련 함수들
  const addImageMediaConfig = useCallback((config: MediaEntry[]) => {
    setImageMediaConfig((prevConfig) => {
      const imageConfigs = config.filter((item) => item.type === "image");
      const newComponentNames = imageConfigs.map((item) => item.componentName);
      const filteredConfig = prevConfig.filter(
        (item) => !newComponentNames.includes(item.componentName)
      );
      return [...filteredConfig, ...imageConfigs];
    });
  }, []);

  const removeImageMediaConfig = useCallback((componentName: string) => {
    setImageMediaConfig((prevConfig) =>
      prevConfig.filter((item) => item.componentName !== componentName)
    );
  }, []);

  // 전체 mediaConfig는 video와 image를 합친 것
  const dynamicMediaConfig = useMemo(
    () => [...videoMediaConfig, ...imageMediaConfig],
    [videoMediaConfig, imageMediaConfig]
  );

  const mediaMap = useMemo(
    () => createMediaMap(dynamicMediaConfig),
    [dynamicMediaConfig]
  );

  const value: MediaContextType = {
    getVideoSrc: mediaMap.getVideoSrc,
    getImageSrc: mediaMap.getImageSrc,
    addVideoMediaConfig,
    removeVideoMediaConfig,
    addImageMediaConfig,
    removeImageMediaConfig,
    videoMediaConfig,
    imageMediaConfig,
  };

  return (
    <MediaContext.Provider value={value}>{children}</MediaContext.Provider>
  );
};
