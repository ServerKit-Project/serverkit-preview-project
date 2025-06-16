import React from 'react';
import styled, { css, keyframes } from 'styled-components';

export interface ContextMenuProps {
  /**
   * The trigger element that opens the context menu
   */
  children: React.ReactNode;

  /**
   * The content of the context menu
   */
  content: React.ReactNode;

  /**
   * Optional CSS class name
   */
  className?: string;
}

export interface ContextMenuItemProps {
  /**
   * Whether the item is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether the item has a submenu
   * @default false
   */
  hasSubmenu?: boolean;

  /**
   * Callback fired when the item is clicked
   */
  onClick?: () => void;

  /**
   * The content of the item
   */
  children: React.ReactNode;

  /**
   * Optional CSS class name
   */
  className?: string;
}

const slideUpAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(4px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const MenuContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const MenuContent = styled.div<{ $x: number; $y: number }>`
  position: fixed;
  top: ${props => props.$y}px;
  left: ${props => props.$x}px;
  min-width: 220px;
  padding: 0.375rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.05),
    0 4px 8px -2px rgba(0, 0, 0, 0.1),
    0 10px 20px -5px rgba(0, 0, 0, 0.08);
  z-index: 50;
  animation: ${slideUpAndFade} 0.15s cubic-bezier(0.16, 1, 0.3, 1);
  transform-origin: var(--radix-context-menu-content-transform-origin);
  will-change: transform, opacity;
`;

const MenuItem = styled.button<{ $disabled?: boolean }>`
  all: unset;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25;
  color: #1f2937;
  cursor: pointer;
  transition: all 0.15s ease;
  user-select: none;
  position: relative;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }

  &:focus-visible {
    background-color: rgba(0, 0, 0, 0.06);
    outline: none;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.08);
  }

  ${props =>
    props.$disabled &&
    css`
      opacity: 0.4;
      cursor: not-allowed;
      color: #6b7280;

      &:hover {
        background-color: transparent;
      }

      &:active {
        background-color: transparent;
      }
    `}

  svg {
    width: 1rem;
    height: 1rem;
    color: #6b7280;
    margin-left: 0.75rem;
    flex-shrink: 0;
  }
`;

const Separator = styled.div`
  height: 1px;
  margin: 0.375rem -0.375rem;
  background-color: rgba(0, 0, 0, 0.06);
`;

/**
 * Context Menu Item component
 */
export const ContextMenuItem: React.FC<ContextMenuItemProps> = ({
  disabled,
  hasSubmenu,
  onClick,
  children,
  className,
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!disabled && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onClick?.();
    }
  };

  return (
    <MenuItem
      $disabled={disabled}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={className}
      role="menuitem"
      tabIndex={disabled ? -1 : 0}
    >
      {children}
      {hasSubmenu && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.75}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      )}
    </MenuItem>
  );
};

/**
 * Context Menu Separator component
 */
export const ContextMenuSeparator = () => <Separator role="separator" />;

/**
 * Context Menu component for displaying a menu on right-click
 * 
 * @example
 * ```tsx
 * <ContextMenu
 *   content={
 *     <>
 *       <ContextMenuItem onClick={() => console.log('Edit')}>
 *         Edit
 *       </ContextMenuItem>
 *       <ContextMenuItem onClick={() => console.log('Duplicate')}>
 *         Duplicate
 *       </ContextMenuItem>
 *       <ContextMenuSeparator />
 *       <ContextMenuItem onClick={() => console.log('Delete')}>
 *         Delete
 *       </ContextMenuItem>
 *     </>
 *   }
 * >
 *   <div>Right click me</div>
 * </ContextMenu>
 * ```
 */
export const ContextMenu: React.FC<ContextMenuProps> = ({
  children,
  content,
  className,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const menuRef = React.useRef<HTMLDivElement>(null);

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    
    // Calculate position
    let x = event.clientX;
    let y = event.clientY;

    // Get menu dimensions
    const menuWidth = 220;
    const menuHeight = menuRef.current?.offsetHeight || 0;

    // Adjust position if menu would go off screen
    if (x + menuWidth > window.innerWidth) {
      x = window.innerWidth - menuWidth - 8;
    }

    if (y + menuHeight > window.innerHeight) {
      y = window.innerHeight - menuHeight - 8;
    }

    // Keep menu within viewport bounds
    x = Math.max(8, x);
    y = Math.max(8, y);

    setPosition({ x, y });
    setIsOpen(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('contextmenu', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('contextmenu', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <MenuContainer className={className}>
      <div onContextMenu={handleContextMenu}>{children}</div>
      {isOpen && (
        <MenuContent
          ref={menuRef}
          $x={position.x}
          $y={position.y}
          role="menu"
        >
          {content}
        </MenuContent>
      )}
    </MenuContainer>
  );
}; 