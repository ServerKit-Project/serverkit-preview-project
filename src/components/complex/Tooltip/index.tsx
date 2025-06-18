import * as React from "react";
import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
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
  padding: 4px 12px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  background: #18181b;
  border-radius: 8px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
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
    background: #18181b;
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

const TooltipProvider = React.createContext<{
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  side?: "top" | "right" | "bottom" | "left";
  sideOffset: number;
}>({
  isOpen: false,
  setIsOpen: () => {},
  sideOffset: 8,
});

interface TooltipProps {
  children: React.ReactNode;
  delayDuration?: number;
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
  className?: string;
}

export function Tooltip({
  children,
  delayDuration = 200,
  side = "top",
  sideOffset = 8,
  className,
}: TooltipProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [timeoutId, setTimeoutId] = React.useState<NodeJS.Timeout>();

  const handleMouseEnter = React.useCallback(() => {
    const id = setTimeout(() => setIsOpen(true), delayDuration);
    setTimeoutId(id);
  }, [delayDuration]);

  const handleMouseLeave = React.useCallback(() => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsOpen(false);
  }, [timeoutId]);

  return (
    <TooltipProvider.Provider value={{ isOpen, setIsOpen, side, sideOffset }}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ position: "relative", display: "inline-block" }}
        className={className}
      >
        {children}
      </div>
    </TooltipProvider.Provider>
  );
}

interface TooltipTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}

export function TooltipTrigger({
  children,
  asChild,
  className,
}: TooltipTriggerProps) {
  if (asChild) {
    return children;
  }
  return (
    <span className={className} style={{ display: "inline-block" }}>
      {children}
    </span>
  );
}

interface TooltipContentProps {
  children: React.ReactNode;
  className?: string;
}

export function TooltipContent({ children, className }: TooltipContentProps) {
  const { isOpen, side, sideOffset } = React.useContext(TooltipProvider);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted || !isOpen) return null;

  return (
    <TooltipContentStyled
      $side={side}
      $sideOffset={sideOffset}
      className={className}
    >
      {children}
    </TooltipContentStyled>
  );
}

Tooltip.displayName = "Tooltip";
TooltipTrigger.displayName = "TooltipTrigger";
TooltipContent.displayName = "TooltipContent";
