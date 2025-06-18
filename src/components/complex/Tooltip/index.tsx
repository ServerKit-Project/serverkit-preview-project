import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const getPosition = ($side: string, $sideOffset: number) => {
  switch ($side) {
    case "top":
      return css`
        left: 50%;
        bottom: calc(100% + ${$sideOffset}px);
        transform: translateX(-50%);
        transform-origin: bottom center;
      `;
    case "right":
      return css`
        left: calc(100% + ${$sideOffset}px);
        top: 50%;
        transform: translateY(-50%);
        transform-origin: left center;
      `;
    case "bottom":
      return css`
        left: 50%;
        top: calc(100% + ${$sideOffset}px);
        transform: translateX(-50%);
        transform-origin: top center;
      `;
    case "left":
      return css`
        right: calc(100% + ${$sideOffset}px);
        top: 50%;
        transform: translateY(-50%);
        transform-origin: right center;
      `;
    default:
      return "";
  }
};

export const TooltipContentStyled = styled.div<{
  $side?: "top" | "right" | "bottom" | "left";
  $sideOffset: number;
}>`
  z-index: 50;
  position: absolute;
  max-width: 320px;
  padding: ${({ theme }) => theme.spacing.small};
  font-family: ${({ theme }) => theme.fontFamily.sans};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.text.white};
  background: ${({ theme }) => theme.colors.deepBlack};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  text-align: center;
  white-space: nowrap;
  pointer-events: none;
  opacity: 1;
  animation: ${fadeIn} 0.16s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
  ${({ $side, $sideOffset }) => getPosition($side || "top", $sideOffset)}

  &::after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    background: ${({ theme }) => theme.colors.deepBlack};
    z-index: 51;
    ${({ $side }) => {
      switch ($side) {
        case "top":
          return css`
            top: 92%;
            left: 50%;
            transform: translateX(-50%) rotate(45deg);
          `;
        case "right":
          return css`
            left: -4px;
            top: 50%;
            transform: translateY(-50%) rotate(45deg);
          `;
        case "bottom":
          return css`
            bottom: 92%;
            left: 50%;
            transform: translateX(-50%) rotate(45deg);
          `;
        case "left":
          return css`
            right: -4px;
            top: 50%;
            transform: translateY(-50%) rotate(45deg);
          `;
        default:
          return "";
      }
    }}
  }
`;
