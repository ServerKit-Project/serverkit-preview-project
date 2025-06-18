import React from 'react';
import styled from 'styled-components';

const NavigationMenuRoot = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  z-index: 10;
`;

const NavigationMenuList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 4px;
  list-style: none;
  margin: 0;
  padding: 4px;
  border-radius: 6px;
  background-color: transparent;
`;

const NavigationMenuItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
`;

const NavigationMenuTrigger = styled.button`
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

const NavigationMenuContent = styled.div<{ $isOpen?: boolean }>`
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
  display: ${props => props.$isOpen ? 'block' : 'none'};
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

const NavigationMenuLink = styled.a`
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
`;

const NavigationMenuViewport = styled.div`
  position: relative;
  transform-origin: top center;
  margin-top: 10px;
  width: 100%;
  border-radius: 6px;
  overflow: hidden;
`;

const NavigationMenuIndicator = styled.div<{ $isVisible?: boolean }>`
  display: ${props => props.$isVisible ? 'block' : 'none'};
  height: 2px;
  background-color: hsl(240 4% 16%);
  position: absolute;
  bottom: -4px;
  left: var(--left, 0);
  width: var(--width, 100%);
  transition: all 0.2s ease;
`;

interface NavigationMenuProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

interface NavigationMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
}

interface NavigationMenuTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

interface NavigationMenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  isOpen?: boolean;
}

interface NavigationMenuLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

interface NavigationMenuIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  isVisible?: boolean;
}

export const NavigationMenu = React.forwardRef<HTMLElement, NavigationMenuProps>(
  ({ children, ...props }, ref) => {
    return (
      <NavigationMenuRoot ref={ref as any} {...props}>
        {children}
      </NavigationMenuRoot>
    );
  }
);

export const NavigationMenuListComponent = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
  ({ children, ...props }, ref) => {
    return (
      <NavigationMenuList ref={ref} {...props}>
        {children}
      </NavigationMenuList>
    );
  }
);

export const NavigationMenuItemComponent = React.forwardRef<HTMLLIElement, NavigationMenuItemProps>(
  ({ children, ...props }, ref) => {
    return (
      <NavigationMenuItem ref={ref} {...props}>
        {children}
      </NavigationMenuItem>
    );
  }
);

export const NavigationMenuTriggerComponent = React.forwardRef<HTMLButtonElement, NavigationMenuTriggerProps>(
  ({ children, ...props }, ref) => {
    return (
      <NavigationMenuTrigger ref={ref} {...props}>
        {children}
      </NavigationMenuTrigger>
    );
  }
);

export const NavigationMenuContentComponent = React.forwardRef<HTMLDivElement, NavigationMenuContentProps>(
  ({ children, isOpen, ...props }, ref) => {
    return (
      <NavigationMenuContent ref={ref} $isOpen={isOpen} {...props}>
        {children}
      </NavigationMenuContent>
    );
  }
);

export const NavigationMenuLinkComponent = React.forwardRef<HTMLAnchorElement, NavigationMenuLinkProps>(
  ({ children, ...props }, ref) => {
    return (
      <NavigationMenuLink ref={ref} {...props}>
        {children}
      </NavigationMenuLink>
    );
  }
);

export const NavigationMenuViewportComponent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, ...props }, ref) => {
    return (
      <NavigationMenuViewport ref={ref} {...props}>
        {children}
      </NavigationMenuViewport>
    );
  }
);

export const NavigationMenuIndicatorComponent = React.forwardRef<HTMLDivElement, NavigationMenuIndicatorProps>(
  ({ isVisible, ...props }, ref) => {
    return (
      <NavigationMenuIndicator ref={ref} $isVisible={isVisible} {...props} />
    );
  }
);

NavigationMenu.displayName = 'NavigationMenu';
NavigationMenuListComponent.displayName = 'NavigationMenuList';
NavigationMenuItemComponent.displayName = 'NavigationMenuItem';
NavigationMenuTriggerComponent.displayName = 'NavigationMenuTrigger';
NavigationMenuContentComponent.displayName = 'NavigationMenuContent';
NavigationMenuLinkComponent.displayName = 'NavigationMenuLink';
NavigationMenuViewportComponent.displayName = 'NavigationMenuViewport';
NavigationMenuIndicatorComponent.displayName = 'NavigationMenuIndicator';

export {
  NavigationMenuListComponent as NavigationMenuList,
  NavigationMenuItemComponent as NavigationMenuItem,
  NavigationMenuTriggerComponent as NavigationMenuTrigger,
  NavigationMenuContentComponent as NavigationMenuContent,
  NavigationMenuLinkComponent as NavigationMenuLink,
  NavigationMenuViewportComponent as NavigationMenuViewport,
  NavigationMenuIndicatorComponent as NavigationMenuIndicator,
}; 