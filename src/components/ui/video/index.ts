import styled, { css } from "styled-components";

interface VideoContainerProps {
  aspectRatio?: "16:9" | "4:3" | "1:1";
  fullWidth?: boolean;
}

interface VideoControlsProps {
  position?: "bottom" | "overlay";
  visible?: boolean;
}

export const VideoContainer = styled.div<VideoContainerProps>`
  position: relative;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  max-width: 100%;
  
  ${({ aspectRatio }) => {
    switch (aspectRatio) {
      case "16:9":
        return css`
          aspect-ratio: 16/9;
        `;
      case "4:3":
        return css`
          aspect-ratio: 4/3;
        `;
      case "1:1":
        return css`
          aspect-ratio: 1/1;
        `;
      default:
        return css`
          aspect-ratio: 16/9;
        `;
    }
  }}
`;

export const VideoElement = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const VideoControls = styled.div<VideoControlsProps>`
  position: ${({ position }) => (position === "overlay" ? "absolute" : "relative")};
  bottom: ${({ position }) => (position === "overlay" ? "0" : "auto")};
  left: 0;
  right: 0;
  background: ${({ position, theme }) =>
    position === "overlay" ? "rgba(0, 0, 0, 0.7)" : theme.colors.background.secondary};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ position, theme }) =>
    position === "overlay" ? "0 0 " + theme.borderRadius + " " + theme.borderRadius : theme.borderRadius};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  transition: opacity 0.3s ease;
`;

export const VideoPlayButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.white};
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.background.hover.primary};
    transform: scale(1.05);
  }
`;

export const VideoProgress = styled.div`
  flex: 1;
  height: 4px;
  background: ${({ theme }) => theme.colors.border.default};
  border-radius: 2px;
  position: relative;
  cursor: pointer;
`;

export const VideoProgressBar = styled.div<{ progress: number }>`
  height: 100%;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 2px;
  width: ${({ progress }) => progress}%;
  transition: width 0.1s ease;
`;

export const VideoTime = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-family: ${({ theme }) => theme.fontFamily.sans};
`;

export const VideoVolumeControl = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
`;

export const VideoVolumeSlider = styled.input`
  width: 80px;
  height: 4px;
  background: ${({ theme }) => theme.colors.border.default};
  border-radius: 2px;
  outline: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 12px;
    height: 12px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: ${({ theme }) => theme.borderRadius};

  &:hover {
    opacity: 1;
  }
`; 