import styled from "styled-components";
import React from "react";

interface AspectRatioProps {
  ratio?: number;
  children: React.ReactNode;
}

const Container = styled.div<{ ratio: number }>`
  position: relative;
  width: 100%;

  &::before {
    content: "";
    display: block;
    padding-bottom: ${(props) => (1 / props.ratio) * 100}%;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  > * {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const AspectRatio: React.FC<AspectRatioProps> = ({
  ratio = 16 / 9,
  children,
}) => {
  return (
    <Container ratio={ratio}>
      <Content>{children}</Content>
    </Container>
  );
};
