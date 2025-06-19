import { useState } from "react";
import { X } from "lucide-react";
import {
  Overlay,
  DrawerContainer,
  CloseButton,
  Content,
} from "@/components/complex/Drawer";
import { Button } from "@/components/primitive/Button/Button";

export const DrawerPreview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [placement, setPlacement] = useState<
    "left" | "right" | "top" | "bottom"
  >("right");
  const [size, setSize] = useState<"sm" | "md" | "lg" | "xl" | "full">("md");

  const handleOpen = (
    newPlacement: "left" | "right" | "top" | "bottom",
    newSize: "sm" | "md" | "lg" | "xl" | "full"
  ) => {
    setPlacement(newPlacement);
    setSize(newSize);
    setIsOpen(true);
  };

  const handleClose = () => setIsOpen(false);

  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <Button onClick={() => handleOpen("left", "md")}>왼쪽 드로어</Button>

      <Button onClick={() => handleOpen("right", "md")}>오른쪽 드로어</Button>

      <Button onClick={() => handleOpen("top", "md")}>상단 드로어</Button>

      <Button onClick={() => handleOpen("bottom", "md")}>하단 드로어</Button>

      <Button onClick={() => handleOpen("right", "sm")}>작은 드로어</Button>

      <Button onClick={() => handleOpen("right", "lg")}>큰 드로어</Button>

      <Button onClick={() => handleOpen("right", "full")}>
        전체 화면 드로어
      </Button>

      <Overlay $isOpen={isOpen} onClick={handleClose} />

      <DrawerContainer $isOpen={isOpen} $placement={placement} $size={size}>
        <CloseButton onClick={handleClose}>
          <X size={20} />
        </CloseButton>

        <Content>
          <h2 style={{ marginTop: 0 }}>드로어 제목</h2>

          <p>
            이것은 드로어의 내용입니다. 드로어는 화면의 측면이나 상하단에서
            슬라이딩되어 나타나는 패널입니다.
          </p>

          <p>드로어는 다음과 같은 경우에 유용합니다:</p>

          <ul>
            <li>네비게이션 메뉴</li>
            <li>필터 패널</li>
            <li>상세 정보 표시</li>
            <li>설정 패널</li>
          </ul>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div style={{ marginTop: "2rem" }}>
            <Button onClick={handleClose}>닫기</Button>
          </div>
        </Content>
      </DrawerContainer>
    </div>
  );
};
