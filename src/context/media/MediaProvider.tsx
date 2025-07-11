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
  const [dynamicMediaConfig, setDynamicMediaConfig] =
    useState<MediaEntry[]>(mediaConfig);

  const addMediaConfig = useCallback((config: MediaEntry[]) => {
    setDynamicMediaConfig((prevConfig) => {
      const newComponentNames = config.map((item) => item.componentName);
      const filteredConfig = prevConfig.filter(
        (item) => !newComponentNames.includes(item.componentName)
      );
      return [...filteredConfig, ...config];
    });
  }, []);

  const removeMediaConfig = useCallback((componentName: string) => {
    setDynamicMediaConfig((prevConfig) =>
      prevConfig.filter((item) => item.componentName !== componentName)
    );
  }, []);

  const mediaMap = useMemo(
    () => createMediaMap(dynamicMediaConfig),
    [dynamicMediaConfig]
  );

  const value: MediaContextType = {
    getMediaSrc: mediaMap.getMediaSrc,
    mediaConfig: dynamicMediaConfig,
    addMediaConfig,
    removeMediaConfig,
  };

  return (
    <MediaContext.Provider value={value}>{children}</MediaContext.Provider>
  );
};
