import { useState, useRef, useEffect } from "react";
import {
  Settings,
  User,
  CreditCard,
  Mail,
  MessageSquare,
  PlusCircle,
  UserPlus,
  ChevronRight,
  LogOut,
} from "lucide-react";
import {
  StyledContent,
  StyledItem,
  StyledSubContent,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  SubWrapper,
} from "@/components/complex/DropdownMenu";
import { Button } from "@/components/primitive/Button/Button";

export const DropdownMenuPreview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setActiveSubmenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleItemClick = (action: string) => {
    console.log("Action:", action);
    setIsOpen(false);
    setActiveSubmenu(null);
  };

  return (
    <div style={{ position: "relative" }} ref={dropdownRef}>
      <Button onClick={() => setIsOpen(!isOpen)}>메뉴 열기</Button>

      {isOpen && (
        <StyledContent>
          <StyledItem onClick={() => handleItemClick("profile")}>
            <User size={16} style={{ marginRight: "0.5rem" }} />
            프로필
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </StyledItem>

          <StyledItem onClick={() => handleItemClick("billing")}>
            <CreditCard size={16} style={{ marginRight: "0.5rem" }} />
            결제
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </StyledItem>

          <StyledItem onClick={() => handleItemClick("settings")}>
            <Settings size={16} style={{ marginRight: "0.5rem" }} />
            설정
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </StyledItem>

          <DropdownMenuSeparator />

          <SubWrapper
            onMouseEnter={() => setActiveSubmenu("new")}
            onMouseLeave={() => setActiveSubmenu(null)}
          >
            <StyledItem style={{ justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <PlusCircle size={16} style={{ marginRight: "0.5rem" }} />
                새로 만들기
              </div>
              <ChevronRight size={16} />
            </StyledItem>

            {activeSubmenu === "new" && (
              <StyledSubContent>
                <StyledItem onClick={() => handleItemClick("new-post")}>
                  <MessageSquare size={16} style={{ marginRight: "0.5rem" }} />
                  게시글
                </StyledItem>

                <StyledItem onClick={() => handleItemClick("new-message")}>
                  <Mail size={16} style={{ marginRight: "0.5rem" }} />
                  메시지
                </StyledItem>

                <StyledItem onClick={() => handleItemClick("invite-member")}>
                  <UserPlus size={16} style={{ marginRight: "0.5rem" }} />
                  멤버 초대
                </StyledItem>
              </StyledSubContent>
            )}
          </SubWrapper>

          <DropdownMenuSeparator />

          <StyledItem
            onClick={() => handleItemClick("logout")}
            style={{ color: "#e53e3e" }}
          >
            <LogOut size={16} style={{ marginRight: "0.5rem" }} />
            로그아웃
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </StyledItem>
        </StyledContent>
      )}
    </div>
  );
};
