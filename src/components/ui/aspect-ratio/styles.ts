import styled from 'styled-components';

export const AspectRatioWrapper = styled.div<{ ratio: number }>`
  position: relative;
  width: 100%;
  padding-top: ${({ ratio }) => `${(1 / ratio) * 100}%`}; /* height based on ratio */
`;

export const AspectRatioContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
