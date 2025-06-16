import styled from "styled-components";
import React from "react";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
  fallback?: string;
}

const getSize = (size: "sm" | "md" | "lg") => {
  switch (size) {
    case "sm":
      return "32px";
    case "lg":
      return "64px";
    default:
      return "48px";
  }
};

const AvatarContainer = styled.div<{ size: "sm" | "md" | "lg" }>`
  width: ${(props) => getSize(props.size)};
  height: ${(props) => getSize(props.size)};
  border-radius: 50%;
  overflow: hidden;
  background-color: #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => parseInt(getSize(props.size)) / 2.5}px;
  font-weight: 500;
  color: #4a5568;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Avatar: React.FC<AvatarProps> = ({
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
    <AvatarContainer size={size}>
      {src && !error ? (
        <Image src={src} alt={alt} onError={() => setError(true)} />
      ) : (
        getFallback()
      )}
    </AvatarContainer>
  );
};
