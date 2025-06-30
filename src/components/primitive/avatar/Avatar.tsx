import styled from "styled-components";

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
