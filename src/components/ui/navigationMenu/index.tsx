import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationMenuRoot = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  z-index: 10;
`;

export const NavigationMenuList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 4px;
  list-style: none;
  margin: 0;
  padding: 4px;
  border-radius: 6px;
  background-color: transparent;
`;

export const NavigationMenuItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
`;

export const NavigationMenuTrigger = styled.button`
  all: unset;
  padding: 8px 12px;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  color: hsl(240 4% 16%);
  background-color: transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: all 150ms;

  &:focus-visible {
    outline: 2px solid hsl(240 4% 16%);
    outline-offset: 2px;
  }

  &:hover {
    background-color: hsl(240 5% 96%);
  }

  &[data-state="open"] {
    background-color: hsl(240 5% 96%);
  }
`;

export const NavigationMenuContent = styled.div<{ isOpen?: boolean }>`
  position: absolute;
  left: 0;
  top: 100%;
  width: max-content;
  padding: 20px;
  margin-top: 8px;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgb(0 0 0 / 0.1);
  animation: scale-in 0.2s ease-out;
  transform-origin: top center;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  z-index: 20;

  @keyframes scale-in {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const NavigationMenuLink = styled(NavLink)`
  display: block;
  padding: 8px 12px;
  text-decoration: none;
  color: hsl(240 4% 16%);
  font-size: 14px;
  line-height: 1.4;
  border-radius: 4px;
  transition: all 150ms;
  cursor: pointer;

  &:hover {
    background-color: hsl(240 5% 96%);
    color: hsl(240 6% 10%);
  }

  &:focus {
    outline: none;
    background-color: hsl(240 5% 96%);
    color: hsl(240 6% 10%);
  }

  &.active {
    background-color: hsl(240 5% 96%);
    color: hsl(240 6% 10%);
  }
`;

export const NavigationMenuViewport = styled.div`
  position: relative;
  transform-origin: top center;
  margin-top: 10px;
  width: 100%;
  border-radius: 6px;
  overflow: hidden;
`;

export const NavigationMenuIndicator = styled.div<{ isVisible?: boolean }>`
  display: ${(props) => (props.isVisible ? "block" : "none")};
  height: 2px;
  background-color: hsl(240 4% 16%);
  position: absolute;
  bottom: -4px;
  left: var(--left, 0);
  width: var(--width, 100%);
  transition: all 0.2s ease;
`;
