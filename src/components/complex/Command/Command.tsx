import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";

interface CommandItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  shortcut?: string[];
  onSelect?: () => void;
}

interface CommandProps {
  items: CommandItem[];
  placeholder?: string;
  onClose?: () => void;
}

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  padding-top: 10vh;
  z-index: 50;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 640px;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  overflow: hidden;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: none;
  border-bottom: 1px solid #e2e8f0;
  font-size: 1rem;
  color: #2d3748;
  background: transparent;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #a0aec0;
  }
`;

export const ItemsList = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;

export const Item = styled.div<{ $isSelected: boolean }>`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  cursor: pointer;
  background-color: ${(props) =>
    props.$isSelected ? "#f7fafc" : "transparent"};

  &:hover {
    background-color: #f7fafc;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.75rem;
  color: #4a5568;
`;

export const Label = styled.div`
  flex: 1;
  font-size: 0.875rem;
  color: #2d3748;
`;

export const Shortcut = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export const ShortcutKey = styled.kbd`
  padding: 0.125rem 0.375rem;
  font-size: 0.75rem;
  font-family: monospace;
  background-color: #edf2f7;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  color: #4a5568;
`;

export const Command: React.FC<CommandProps> = ({
  items,
  placeholder = "검색...",
  onClose,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();
          setSelectedIndex((current) =>
            current < filteredItems.length - 1 ? current + 1 : 0
          );
          break;
        case "ArrowUp":
          event.preventDefault();
          setSelectedIndex((current) =>
            current > 0 ? current - 1 : filteredItems.length - 1
          );
          break;
        case "Enter":
          event.preventDefault();
          if (filteredItems[selectedIndex]) {
            filteredItems[selectedIndex].onSelect?.();
            onClose?.();
          }
          break;
        case "Escape":
          event.preventDefault();
          onClose?.();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [filteredItems, selectedIndex, onClose]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [searchTerm]);

  const handleClickOutside = (event: React.MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      onClose?.();
    }
  };

  return (
    <Overlay onClick={handleClickOutside}>
      <Container ref={containerRef}>
        <SearchInput
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          autoFocus
        />
        <ItemsList>
          {filteredItems.map((item, index) => (
            <Item
              key={item.id}
              $isSelected={index === selectedIndex}
              onClick={() => {
                item.onSelect?.();
                onClose?.();
              }}
            >
              {item.icon && <IconWrapper>{item.icon}</IconWrapper>}
              <Label>{item.label}</Label>
              {item.shortcut && (
                <Shortcut>
                  {item.shortcut.map((key, i) => (
                    <ShortcutKey key={i}>{key}</ShortcutKey>
                  ))}
                </Shortcut>
              )}
            </Item>
          ))}
          {filteredItems.length === 0 && (
            <Item $isSelected={false}>
              <Label>검색 결과가 없습니다</Label>
            </Item>
          )}
        </ItemsList>
      </Container>
    </Overlay>
  );
};
