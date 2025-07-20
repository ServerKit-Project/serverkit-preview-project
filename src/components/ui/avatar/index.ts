import styled from "styled-components";

export type AvatarSize = "small" | "medium" | "large";

const getSize = (size: AvatarSize = "medium") => {
  switch (size) {
    case "small":
      return "32px";
    case "large":
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
