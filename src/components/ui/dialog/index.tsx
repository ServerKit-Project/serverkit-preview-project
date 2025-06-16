import * as React from "react";
import styled, { css, keyframes } from "styled-components";

// Overlay animation
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

// Fade in/out only
const fadeDialogIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
const fadeDialogOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const DialogOverlay = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  z-index: 100;
  animation: ${props => props.$open ? fadeIn : fadeOut} 0.28s cubic-bezier(0.22, 1, 0.36, 1);
`;

const DialogContentRoot = styled.div<{ $open: boolean; $maxWidth?: string }>`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 101;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.16);
  transform: translate(-50%, -50%);
  max-width: ${props => props.$maxWidth || '425px'};
  width: 100%;
  padding: 32px 24px;
  animation: ${props => props.$open ? fadeDialogIn : fadeDialogOut} 0.28s cubic-bezier(0.22, 1, 0.36, 1);
  outline: none;
  min-width: unset;
  transform-origin: center;
`;

const DialogHeaderRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
  margin-bottom: 24px;
`;

const DialogTitleRoot = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`;

const DialogDescriptionRoot = styled.p`
  color: #6b7280;
  font-size: 14px;
  margin: 0;
`;

const DialogFooterRoot = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 24px;
`;

const DialogCloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  color: #6b7280;
  font-size: 20px;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: background 0.15s;
  &:hover {
    background: #f3f4f6;
    color: #111;
  }
`;

interface DialogContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}
const DialogContext = React.createContext<DialogContextType | undefined>(undefined);

export function Dialog({ children, defaultOpen = false }: { children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      {children}
    </DialogContext.Provider>
  );
}

export function DialogTrigger({ asChild, children }: { asChild?: boolean; children: React.ReactNode }) {
  const ctx = React.useContext(DialogContext);
  if (!ctx) throw new Error('DialogTrigger must be used within Dialog');
  const triggerProps = {
    onClick: () => ctx.setOpen(true),
    tabIndex: 0,
    role: 'button',
    'aria-haspopup': 'dialog' as const,
    'aria-expanded': ctx.open,
  };
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, triggerProps);
  }
  return <button {...triggerProps}>{children}</button>;
}

export function DialogContent({ children, className, style, maxWidth, showClose = true }: { children: React.ReactNode; className?: string; style?: React.CSSProperties; maxWidth?: string; showClose?: boolean }) {
  const ctx = React.useContext(DialogContext);
  if (!ctx) throw new Error('DialogContent must be used within Dialog');
  if (!ctx.open) return null;
  return (
    <>
      <DialogOverlay $open={ctx.open} onClick={() => ctx.setOpen(false)} />
      <DialogContentRoot
        $open={ctx.open}
        $maxWidth={maxWidth}
        className={className}
        style={style}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
      >
        {showClose && (
          <DialogCloseButton aria-label="Close" onClick={() => ctx.setOpen(false)}>
            ×
          </DialogCloseButton>
        )}
        {children}
      </DialogContentRoot>
    </>
  );
}

export function DialogHeader({ children }: { children: React.ReactNode }) {
  return <DialogHeaderRoot>{children}</DialogHeaderRoot>;
}

export function DialogTitle({ children }: { children: React.ReactNode }) {
  return <DialogTitleRoot>{children}</DialogTitleRoot>;
}

export function DialogDescription({ children }: { children: React.ReactNode }) {
  return <DialogDescriptionRoot>{children}</DialogDescriptionRoot>;
}

export function DialogFooter({ children }: { children: React.ReactNode }) {
  return <DialogFooterRoot>{children}</DialogFooterRoot>;
}

export function DialogClose({ asChild, children }: { asChild?: boolean; children: React.ReactNode }) {
  const ctx = React.useContext(DialogContext);
  if (!ctx) throw new Error('DialogClose must be used within Dialog');
  const closeProps = {
    onClick: () => ctx.setOpen(false),
  };
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, closeProps);
  }
  return <button type="button" {...closeProps}>{children}</button>;
} 