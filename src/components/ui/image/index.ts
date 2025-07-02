import styled from "styled-components";

export const ImageContainer = styled.div<{
  width?: string | number;
  height?: string | number;
}>`
  display: inline-block;
  overflow: hidden;
  ${({ width }) =>
    width &&
    (typeof width === "number" ? `width: ${width}px;` : `width: ${width};`)}
  ${({ height }) =>
    height &&
    (typeof height === "number"
      ? `height: ${height}px;`
      : `height: ${height};`)}
`;

export const StyledImage = styled.img<{
  fit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  rounded?: string | number | "circle";
  width?: string | number;
  height?: string | number;
}>`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: ${({ fit }) => fit || "cover"};

  ${({ rounded }) => {
    if (rounded === "circle") {
      return "border-radius: 50%;";
    }
    if (rounded) {
      return `border-radius: ${
        typeof rounded === "number" ? `${rounded}px` : rounded
      };`;
    }
    return "";
  }}
`;

export const ImagePlaceholder = styled.div<{
  width?: string | number;
  height?: string | number;
  rounded?: string | number | "circle";
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  color: ${({ theme }) => theme.colors.text.secondary};
  width: 100%;
  height: 100%;

  ${({ rounded }) => {
    if (rounded === "circle") {
      return "border-radius: 50%;";
    }
    if (rounded) {
      return `border-radius: ${
        typeof rounded === "number" ? `${rounded}px` : rounded
      };`;
    }
    return "";
  }}
`;
