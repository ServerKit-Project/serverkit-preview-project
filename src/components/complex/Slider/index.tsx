import styled from "styled-components";

export const SliderRoot = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  touch-action: none;
  user-select: none;
  cursor: pointer;

  &[data-disabled="true"] {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const SliderTrack = styled.div`
  position: relative;
  flex-grow: 1;
  height: 2px;
  background-color: hsl(240 6% 90%);
  border-radius: 9999px;
  overflow: hidden;
`;

export const SliderRange = styled.div`
  position: absolute;
  height: 100%;
  background-color: hsl(240 5% 26%);
`;

export const SliderThumb = styled.div`
  position: absolute;
  display: block;
  width: 16px;
  height: 16px;
  background-color: white;
  border: 2px solid hsl(240 5% 26%);
  border-radius: 9999px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px hsl(240 5% 96%), 0 0 0 4px hsl(240 5% 26%);
  }
`;
