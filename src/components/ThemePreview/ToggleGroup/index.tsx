import React, { useState } from "react";
import {
  ToggleGroupContainer,
  ToggleItemButton,
} from "@/components/complex/ToggleGroup";
import {
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  CheckSquare,
} from "lucide-react";

export const ToggleGroupPreview: React.FC = () => {
  const [textAlign, setTextAlign] = useState<string>("left");
  const [textStyle, setTextStyle] = useState<string[]>([]);
  const [listType, setListType] = useState<string>("none");

  const handleTextStyleChange = (value: string) => {
    setTextStyle((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <div
      style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <div>
        <h3>단일 선택 토글 그룹</h3>
        <ToggleGroupContainer>
          <ToggleItemButton
            $pressed={textAlign === "left"}
            onClick={() => setTextAlign("left")}
          >
            <AlignLeft size={16} />
            왼쪽
          </ToggleItemButton>
          <ToggleItemButton
            $pressed={textAlign === "center"}
            onClick={() => setTextAlign("center")}
          >
            <AlignCenter size={16} />
            가운데
          </ToggleItemButton>
          <ToggleItemButton
            $pressed={textAlign === "right"}
            onClick={() => setTextAlign("right")}
          >
            <AlignRight size={16} />
            오른쪽
          </ToggleItemButton>
        </ToggleGroupContainer>
      </div>

      <div>
        <h3>다중 선택 토글 그룹</h3>
        <ToggleGroupContainer>
          <ToggleItemButton
            $pressed={textStyle.includes("bold")}
            onClick={() => handleTextStyleChange("bold")}
          >
            <Bold size={16} />
            굵게
          </ToggleItemButton>
          <ToggleItemButton
            $pressed={textStyle.includes("italic")}
            onClick={() => handleTextStyleChange("italic")}
          >
            <Italic size={16} />
            기울임
          </ToggleItemButton>
          <ToggleItemButton
            $pressed={textStyle.includes("underline")}
            onClick={() => handleTextStyleChange("underline")}
          >
            <Underline size={16} />
            밑줄
          </ToggleItemButton>
        </ToggleGroupContainer>
      </div>

      <div>
        <h3>비활성화된 토글 그룹</h3>
        <ToggleGroupContainer>
          <ToggleItemButton $disabled>
            <List size={16} />
            기본 목록
          </ToggleItemButton>
          <ToggleItemButton $disabled>
            <ListOrdered size={16} />
            번호 목록
          </ToggleItemButton>
          <ToggleItemButton $disabled>
            <CheckSquare size={16} />
            체크 목록
          </ToggleItemButton>
        </ToggleGroupContainer>
      </div>

      <div>
        <h3>현재 상태</h3>
        <pre
          style={{
            backgroundColor: "#f3f4f6",
            padding: "1rem",
            borderRadius: "0.5rem",
            fontSize: "0.875rem",
          }}
        >
          {JSON.stringify(
            {
              textAlign,
              textStyle,
              listType,
            },
            null,
            2
          )}
        </pre>
      </div>
    </div>
  );
};
