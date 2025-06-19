import { useState, useEffect, useCallback } from "react";
import {
  Copy,
  Edit,
  Trash,
  Share,
  Download,
  ChevronRight,
  FileText,
  Image,
  Video,
} from "lucide-react";
import {
  MenuContainer,
  MenuItem,
  IconWrapper,
  Label,
  Submenu,
  Divider,
  SubMenuIcon,
} from "@/components/complex/ContextMenu";

export const ContextMenuPreview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const handleContextMenu = useCallback((e: MouseEvent) => {
    e.preventDefault();
    const x = e.clientX;
    const y = e.clientY;

    // 화면 경계 체크
    const menuWidth = 220;
    const menuHeight = 300;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    setPosition({
      x: x + menuWidth > windowWidth ? windowWidth - menuWidth : x,
      y: y + menuHeight > windowHeight ? windowHeight - menuHeight : y,
    });
    setIsOpen(true);
  }, []);

  const handleClickOutside = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest("[data-context-menu]")) {
      setIsOpen(false);
      setActiveSubmenu(null);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleContextMenu, handleClickOutside]);

  const handleAction = (action: string) => {
    console.log("Action:", action);
    setIsOpen(false);
    setActiveSubmenu(null);
  };

  if (!isOpen) return null;

  return (
    <MenuContainer $position={position} data-context-menu>
      <MenuItem onClick={() => handleAction("copy")}>
        <IconWrapper>
          <Copy size={16} />
        </IconWrapper>
        <Label>복사하기</Label>
      </MenuItem>

      <MenuItem onClick={() => handleAction("edit")}>
        <IconWrapper>
          <Edit size={16} />
        </IconWrapper>
        <Label>편집하기</Label>
      </MenuItem>

      <MenuItem
        onMouseEnter={() => setActiveSubmenu("new")}
        onMouseLeave={() => setActiveSubmenu(null)}
        $hasSubmenu
      >
        <IconWrapper>
          <FileText size={16} />
        </IconWrapper>
        <Label>새로 만들기</Label>
        <SubMenuIcon>
          <ChevronRight size={16} />
        </SubMenuIcon>

        <Submenu $isOpen={activeSubmenu === "new"}>
          <MenuItem onClick={() => handleAction("new-document")}>
            <IconWrapper>
              <FileText size={16} />
            </IconWrapper>
            <Label>문서</Label>
          </MenuItem>
          <MenuItem onClick={() => handleAction("new-image")}>
            <IconWrapper>
              <Image size={16} />
            </IconWrapper>
            <Label>이미지</Label>
          </MenuItem>
          <MenuItem onClick={() => handleAction("new-video")}>
            <IconWrapper>
              <Video size={16} />
            </IconWrapper>
            <Label>비디오</Label>
          </MenuItem>
        </Submenu>
      </MenuItem>

      <Divider />

      <MenuItem onClick={() => handleAction("share")}>
        <IconWrapper>
          <Share size={16} />
        </IconWrapper>
        <Label>공유하기</Label>
      </MenuItem>

      <MenuItem onClick={() => handleAction("download")}>
        <IconWrapper>
          <Download size={16} />
        </IconWrapper>
        <Label>다운로드</Label>
      </MenuItem>

      <Divider />

      <MenuItem $danger onClick={() => handleAction("delete")}>
        <IconWrapper>
          <Trash size={16} />
        </IconWrapper>
        <Label>삭제하기</Label>
      </MenuItem>
    </MenuContainer>
  );
};
