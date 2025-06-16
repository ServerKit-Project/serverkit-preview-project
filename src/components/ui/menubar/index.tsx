import { createContext, useContext, useState, useRef, useEffect } from "react";
import type {
  MenubarProps,
  MenubarMenuProps,
  MenubarTriggerProps,
  MenubarContentProps,
  MenubarItemProps,
  MenubarSubProps,
  MenubarSubTriggerProps,
  MenubarSubContentProps,
  MenubarShortcutProps,
  MenubarCheckboxItemProps,
  MenubarRadioGroupProps,
  MenubarRadioItemProps,
} from "./types.tsx";
import {
  StyledMenubar,
  StyledMenubarMenu,
  StyledMenubarTrigger,
  StyledMenubarContent,
  StyledMenubarItem,
  StyledMenubarCheckboxItem,
  StyledMenubarRadioItem,
  StyledMenubarSeparator,
  StyledMenubarShortcut,
  StyledMenubarSubTrigger,
  StyledMenubarSubContent,
  StyledSubMenuWrapper,
} from "./styles";

const MenuContext = createContext<{
  open: boolean;
  setOpen: (value: boolean) => void;
}>({ open: false, setOpen: () => {} });

const SubMenuContext = createContext<{
  open: boolean;
  setOpen: (value: boolean) => void;
}>({ open: false, setOpen: () => {} });

const RadioContext = createContext<{
  value?: string;
  onValueChange?: (value: string) => void;
}>({});

export const Menubar = ({ children }: MenubarProps) => {
  return <StyledMenubar>{children}</StyledMenubar>;
};

export const MenubarMenu = ({ children }: MenubarMenuProps) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<number>();

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setOpen(false);
    }, 300);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <MenuContext.Provider value={{ open, setOpen }}>
      <StyledMenubarMenu
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        {children}
      </StyledMenubarMenu>
    </MenuContext.Provider>
  );
};

export const MenubarTrigger = ({ children }: MenubarTriggerProps) => {
  const { open, setOpen } = useContext(MenuContext);
  return (
    <StyledMenubarTrigger
      onClick={() => setOpen(!open)}
      onMouseEnter={() => setOpen(true)}
      data-state={open ? "open" : "closed"}
    >
      {children}
    </StyledMenubarTrigger>
  );
};

export const MenubarContent = ({ children }: MenubarContentProps) => {
  const { open } = useContext(MenuContext);
  if (!open) return null;
  return <StyledMenubarContent>{children}</StyledMenubarContent>;
};

export const MenubarItem = ({
  children,
  disabled,
  inset,
  onSelect,
}: MenubarItemProps) => {
  const { setOpen } = useContext(MenuContext);
  return (
    <StyledMenubarItem
      $inset={inset}
      onClick={() => {
        onSelect?.();
        setOpen(false);
      }}
      data-disabled={disabled}
    >
      {children}
    </StyledMenubarItem>
  );
};

export const MenubarSub = ({ children }: MenubarSubProps) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<number>();

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setOpen(false);
    }, 400);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <SubMenuContext.Provider value={{ open, setOpen }}>
      <StyledSubMenuWrapper
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        {children}
      </StyledSubMenuWrapper>
    </SubMenuContext.Provider>
  );
};

export const MenubarSubTrigger = ({ children }: MenubarSubTriggerProps) => {
  const { setOpen } = useContext(SubMenuContext);
  return (
    <StyledMenubarSubTrigger onMouseEnter={() => setOpen(true)}>
      {children}
    </StyledMenubarSubTrigger>
  );
};

export const MenubarSubContent = ({ children }: MenubarSubContentProps) => {
  const { open } = useContext(SubMenuContext);
  if (!open) return null;
  return <StyledMenubarSubContent>{children}</StyledMenubarSubContent>;
};

export const MenubarShortcut = ({ children }: MenubarShortcutProps) => {
  return <StyledMenubarShortcut>{children}</StyledMenubarShortcut>;
};

export const MenubarCheckboxItem = ({
  children,
  checked,
  onCheckedChange,
  disabled,
  inset,
}: MenubarCheckboxItemProps) => {
  const { setOpen } = useContext(MenuContext);
  return (
    <StyledMenubarCheckboxItem
      $inset={inset}
      onClick={() => {
        onCheckedChange?.(!checked);
        setOpen(false);
      }}
      data-checked={checked}
      data-disabled={disabled}
    >
      {children}
    </StyledMenubarCheckboxItem>
  );
};

export const MenubarRadioGroup = ({
  children,
  value,
  onValueChange,
}: MenubarRadioGroupProps) => {
  return (
    <RadioContext.Provider value={{ value, onValueChange }}>
      {children}
    </RadioContext.Provider>
  );
};

export const MenubarRadioItem = ({
  children,
  value,
  disabled,
  inset,
}: MenubarRadioItemProps) => {
  const { value: groupValue, onValueChange } = useContext(RadioContext);
  const { setOpen } = useContext(MenuContext);

  return (
    <StyledMenubarRadioItem
      $inset={inset}
      onClick={() => {
        onValueChange?.(value);
        setOpen(false);
      }}
      data-checked={groupValue === value}
      data-disabled={disabled}
    >
      {children}
    </StyledMenubarRadioItem>
  );
};

export const MenubarSeparator = () => {
  return <StyledMenubarSeparator />;
};
