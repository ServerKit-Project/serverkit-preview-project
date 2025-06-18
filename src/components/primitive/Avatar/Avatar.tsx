import styled from "styled-components";
import React from "react";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
  fallback?: string;
}

type AvatarSize = "sm" | "md" | "lg";

const getSize = (size: AvatarSize = "md") => {
  switch (size) {
    case "sm":
      return "32px";
    case "lg":
      return "64px";
    default:
      return "48px";
  }
};

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Avatar = styled.div<{ size?: AvatarSize }>`
  width: ${(props) => getSize(props.size)};
  height: ${(props) => getSize(props.size)};
  border-radius: 50%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => parseInt(getSize(props.size)) / 2.5}px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const AvatarComponent: React.FC<AvatarProps> = ({
  src,
  alt = "",
  size = "md",
  fallback,
}) => {
  const [error, setError] = React.useState(false);

  const getFallback = () => {
    if (fallback) return fallback;
    if (alt) return alt.charAt(0).toUpperCase();
    return "?";
  };

  return (
    <Avatar size={size}>
      {src && !error ? (
        <AvatarImage src={src} alt={alt} onError={() => setError(true)} />
      ) : (
        getFallback()
      )}
    </Avatar>
  );
};
