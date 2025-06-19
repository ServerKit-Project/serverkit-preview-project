import { useState, useEffect } from "react";
import {
  Search,
  Settings,
  User,
  Mail,
  Bell,
  HelpCircle,
  LogOut,
} from "lucide-react";
import {
  Overlay,
  Container,
  SearchInput,
  ItemsList,
  Item,
  IconWrapper,
  Label,
  Shortcut,
  ShortcutKey,
} from "@/components/complex/Command";

export const CommandPreview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const items = [
    {
      icon: <Search size={18} />,
      label: "검색",
      shortcut: ["⌘", "K"],
    },
    {
      icon: <Settings size={18} />,
      label: "설정",
      shortcut: ["⌘", ","],
    },
    {
      icon: <User size={18} />,
      label: "프로필",
      shortcut: ["⌘", "P"],
    },
    {
      icon: <Mail size={18} />,
      label: "메시지",
      shortcut: ["⌘", "M"],
    },
    {
      icon: <Bell size={18} />,
      label: "알림",
      shortcut: ["⌘", "N"],
    },
    {
      icon: <HelpCircle size={18} />,
      label: "도움말",
      shortcut: ["⌘", "H"],
    },
    {
      icon: <LogOut size={18} />,
      label: "로그아웃",
      shortcut: ["⌘", "L"],
    },
  ];

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }

      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredItems.length - 1 ? prev + 1 : prev
        );
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
      }

      if (e.key === "Enter") {
        e.preventDefault();
        // 선택된 항목 실행
        console.log("Selected:", filteredItems[selectedIndex].label);
        setIsOpen(false);
      }

      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, filteredItems]);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        style={{
          padding: "0.5rem 1rem",
          background: "#f7fafc",
          border: "1px solid #e2e8f0",
          borderRadius: "0.375rem",
          cursor: "pointer",
        }}
      >
        커맨드 팔레트 열기 (⌘K)
      </button>
    );
  }

  return (
    <Overlay onClick={() => setIsOpen(false)}>
      <Container onClick={(e) => e.stopPropagation()}>
        <SearchInput
          autoFocus
          placeholder="명령어 검색..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setSelectedIndex(0);
          }}
        />
        <ItemsList>
          {filteredItems.map((item, index) => (
            <Item
              key={item.label}
              $isSelected={index === selectedIndex}
              onClick={() => {
                console.log("Clicked:", item.label);
                setIsOpen(false);
              }}
            >
              <IconWrapper>{item.icon}</IconWrapper>
              <Label>{item.label}</Label>
              <Shortcut>
                {item.shortcut.map((key, keyIndex) => (
                  <ShortcutKey key={keyIndex}>{key}</ShortcutKey>
                ))}
              </Shortcut>
            </Item>
          ))}
        </ItemsList>
      </Container>
    </Overlay>
  );
};
