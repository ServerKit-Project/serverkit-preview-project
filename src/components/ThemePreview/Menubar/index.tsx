import { useState } from "react";
import {
  Save,
  FileText,
  FolderOpen,
  Settings,
  Edit,
  Copy,
  Scissors,
  ClipboardPaste,
  Undo,
  Redo,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
} from "lucide-react";
import {
  StyledMenubar,
  StyledMenubarMenu,
  StyledMenubarTrigger,
  StyledMenubarContent,
  StyledMenubarItem,
  StyledMenubarSeparator,
  StyledMenubarShortcut,
  StyledSubMenuWrapper,
  StyledMenubarSubTrigger,
  StyledMenubarSubContent,
  StyledMenubarCheckboxItem,
  StyledMenubarRadioItem,
} from "@/components/complex/Menubar";

export const MenubarPreview = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [textAlignment, setTextAlignment] = useState("left");
  const [textStyle, setTextStyle] = useState({
    bold: false,
    italic: false,
    underline: false,
  });

  const handleMenuClick = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
    setActiveSubMenu(null);
  };

  const handleSubMenuEnter = (submenu: string) => {
    setActiveSubMenu(submenu);
  };

  const handleSubMenuLeave = () => {
    setActiveSubMenu(null);
  };

  const handleMenuItemClick = (action: string) => {
    console.log("Action:", action);
    setActiveMenu(null);
    setActiveSubMenu(null);
  };

  return (
    <StyledMenubar>
      <StyledMenubarMenu>
        <StyledMenubarTrigger
          onClick={() => handleMenuClick("file")}
          data-state={activeMenu === "file" ? "open" : "closed"}
        >
          파일
        </StyledMenubarTrigger>
        {activeMenu === "file" && (
          <StyledMenubarContent>
            <StyledMenubarItem onClick={() => handleMenuItemClick("new")}>
              <FileText size={16} style={{ marginRight: "0.5rem" }} />
              새로 만들기
              <StyledMenubarShortcut>⌘N</StyledMenubarShortcut>
            </StyledMenubarItem>
            <StyledMenubarItem onClick={() => handleMenuItemClick("open")}>
              <FolderOpen size={16} style={{ marginRight: "0.5rem" }} />
              열기...
              <StyledMenubarShortcut>⌘O</StyledMenubarShortcut>
            </StyledMenubarItem>
            <StyledMenubarItem onClick={() => handleMenuItemClick("save")}>
              <Save size={16} style={{ marginRight: "0.5rem" }} />
              저장
              <StyledMenubarShortcut>⌘S</StyledMenubarShortcut>
            </StyledMenubarItem>
          </StyledMenubarContent>
        )}
      </StyledMenubarMenu>

      <StyledMenubarMenu>
        <StyledMenubarTrigger
          onClick={() => handleMenuClick("edit")}
          data-state={activeMenu === "edit" ? "open" : "closed"}
        >
          편집
        </StyledMenubarTrigger>
        {activeMenu === "edit" && (
          <StyledMenubarContent>
            <StyledMenubarItem onClick={() => handleMenuItemClick("undo")}>
              <Undo size={16} style={{ marginRight: "0.5rem" }} />
              실행 취소
              <StyledMenubarShortcut>⌘Z</StyledMenubarShortcut>
            </StyledMenubarItem>
            <StyledMenubarItem onClick={() => handleMenuItemClick("redo")}>
              <Redo size={16} style={{ marginRight: "0.5rem" }} />
              다시 실행
              <StyledMenubarShortcut>⇧⌘Z</StyledMenubarShortcut>
            </StyledMenubarItem>
            <StyledMenubarSeparator />
            <StyledMenubarItem onClick={() => handleMenuItemClick("cut")}>
              <Scissors size={16} style={{ marginRight: "0.5rem" }} />
              잘라내기
              <StyledMenubarShortcut>⌘X</StyledMenubarShortcut>
            </StyledMenubarItem>
            <StyledMenubarItem onClick={() => handleMenuItemClick("copy")}>
              <Copy size={16} style={{ marginRight: "0.5rem" }} />
              복사
              <StyledMenubarShortcut>⌘C</StyledMenubarShortcut>
            </StyledMenubarItem>
            <StyledMenubarItem onClick={() => handleMenuItemClick("paste")}>
              <ClipboardPaste size={16} style={{ marginRight: "0.5rem" }} />
              붙여넣기
              <StyledMenubarShortcut>⌘V</StyledMenubarShortcut>
            </StyledMenubarItem>
          </StyledMenubarContent>
        )}
      </StyledMenubarMenu>

      <StyledMenubarMenu>
        <StyledMenubarTrigger
          onClick={() => handleMenuClick("format")}
          data-state={activeMenu === "format" ? "open" : "closed"}
        >
          서식
        </StyledMenubarTrigger>
        {activeMenu === "format" && (
          <StyledMenubarContent>
            <StyledSubMenuWrapper
              onMouseEnter={() => handleSubMenuEnter("text-style")}
              onMouseLeave={handleSubMenuLeave}
            >
              <StyledMenubarSubTrigger>
                <Edit size={16} style={{ marginRight: "0.5rem" }} />
                텍스트 스타일
              </StyledMenubarSubTrigger>
              {activeSubMenu === "text-style" && (
                <StyledMenubarSubContent>
                  <StyledMenubarCheckboxItem
                    data-checked={textStyle.bold}
                    onClick={() =>
                      setTextStyle((prev) => ({ ...prev, bold: !prev.bold }))
                    }
                  >
                    <Bold size={16} style={{ marginRight: "0.5rem" }} />
                    굵게
                    <StyledMenubarShortcut>⌘B</StyledMenubarShortcut>
                  </StyledMenubarCheckboxItem>
                  <StyledMenubarCheckboxItem
                    data-checked={textStyle.italic}
                    onClick={() =>
                      setTextStyle((prev) => ({
                        ...prev,
                        italic: !prev.italic,
                      }))
                    }
                  >
                    <Italic size={16} style={{ marginRight: "0.5rem" }} />
                    기울임꼴
                    <StyledMenubarShortcut>⌘I</StyledMenubarShortcut>
                  </StyledMenubarCheckboxItem>
                  <StyledMenubarCheckboxItem
                    data-checked={textStyle.underline}
                    onClick={() =>
                      setTextStyle((prev) => ({
                        ...prev,
                        underline: !prev.underline,
                      }))
                    }
                  >
                    <Underline size={16} style={{ marginRight: "0.5rem" }} />
                    밑줄
                    <StyledMenubarShortcut>⌘U</StyledMenubarShortcut>
                  </StyledMenubarCheckboxItem>
                </StyledMenubarSubContent>
              )}
            </StyledSubMenuWrapper>

            <StyledMenubarSeparator />

            <StyledMenubarRadioItem
              data-checked={textAlignment === "left"}
              onClick={() => setTextAlignment("left")}
            >
              <AlignLeft size={16} style={{ marginRight: "0.5rem" }} />
              왼쪽 정렬
            </StyledMenubarRadioItem>
            <StyledMenubarRadioItem
              data-checked={textAlignment === "center"}
              onClick={() => setTextAlignment("center")}
            >
              <AlignCenter size={16} style={{ marginRight: "0.5rem" }} />
              가운데 정렬
            </StyledMenubarRadioItem>
            <StyledMenubarRadioItem
              data-checked={textAlignment === "right"}
              onClick={() => setTextAlignment("right")}
            >
              <AlignRight size={16} style={{ marginRight: "0.5rem" }} />
              오른쪽 정렬
            </StyledMenubarRadioItem>
            <StyledMenubarRadioItem
              data-checked={textAlignment === "justify"}
              onClick={() => setTextAlignment("justify")}
            >
              <AlignJustify size={16} style={{ marginRight: "0.5rem" }} />
              양쪽 정렬
            </StyledMenubarRadioItem>
          </StyledMenubarContent>
        )}
      </StyledMenubarMenu>

      <StyledMenubarMenu>
        <StyledMenubarTrigger
          onClick={() => handleMenuClick("settings")}
          data-state={activeMenu === "settings" ? "open" : "closed"}
        >
          설정
        </StyledMenubarTrigger>
        {activeMenu === "settings" && (
          <StyledMenubarContent>
            <StyledMenubarItem
              onClick={() => handleMenuItemClick("preferences")}
            >
              <Settings size={16} style={{ marginRight: "0.5rem" }} />
              환경설정
              <StyledMenubarShortcut>⌘,</StyledMenubarShortcut>
            </StyledMenubarItem>
          </StyledMenubarContent>
        )}
      </StyledMenubarMenu>
    </StyledMenubar>
  );
};
