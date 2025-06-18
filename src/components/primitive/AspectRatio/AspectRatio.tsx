import styled from "styled-components";

interface AspectRatioProps {
  ratio?: number;
}

export const AspectRatio = styled.div<AspectRatioProps>`
  position: relative;
  width: 100%;

  &::before {
    content: "";
    display: block;
    padding-bottom: ${(props) => (1 / (props.ratio || 16 / 9)) * 100}%;
  }

  > * {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
