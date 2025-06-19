import React, { useState } from "react";
import { TooltipContentStyled } from "@/components/complex/Tooltip";
import { HelpCircle, Settings, Info, AlertCircle } from "lucide-react";

export const TooltipPreview: React.FC = () => {
  const [hoveredItems, setHoveredItems] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleMouseEnter = (id: string) => {
    setHoveredItems((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id: string) => {
    setHoveredItems((prev) => ({ ...prev, [id]: false }));
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
        <h3>방향별 툴팁</h3>
        <div
          style={{
            display: "flex",
            gap: "4rem",
            padding: "3rem",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "relative" }}>
            <button
              onMouseEnter={() => handleMouseEnter("top")}
              onMouseLeave={() => handleMouseLeave("top")}
              style={{
                padding: "0.5rem",
                border: "1px solid #e5e7eb",
                borderRadius: "0.375rem",
                cursor: "pointer",
              }}
            >
              <HelpCircle size={20} />
            </button>
            {hoveredItems["top"] && (
              <TooltipContentStyled $side="top" $sideOffset={8}>
                상단에 표시되는 툴팁
              </TooltipContentStyled>
            )}
          </div>

          <div style={{ position: "relative" }}>
            <button
              onMouseEnter={() => handleMouseEnter("right")}
              onMouseLeave={() => handleMouseLeave("right")}
              style={{
                padding: "0.5rem",
                border: "1px solid #e5e7eb",
                borderRadius: "0.375rem",
                cursor: "pointer",
              }}
            >
              <Settings size={20} />
            </button>
            {hoveredItems["right"] && (
              <TooltipContentStyled $side="right" $sideOffset={8}>
                우측에 표시되는 툴팁
              </TooltipContentStyled>
            )}
          </div>

          <div style={{ position: "relative" }}>
            <button
              onMouseEnter={() => handleMouseEnter("bottom")}
              onMouseLeave={() => handleMouseLeave("bottom")}
              style={{
                padding: "0.5rem",
                border: "1px solid #e5e7eb",
                borderRadius: "0.375rem",
                cursor: "pointer",
              }}
            >
              <Info size={20} />
            </button>
            {hoveredItems["bottom"] && (
              <TooltipContentStyled $side="bottom" $sideOffset={8}>
                하단에 표시되는 툴팁
              </TooltipContentStyled>
            )}
          </div>

          <div style={{ position: "relative" }}>
            <button
              onMouseEnter={() => handleMouseEnter("left")}
              onMouseLeave={() => handleMouseLeave("left")}
              style={{
                padding: "0.5rem",
                border: "1px solid #e5e7eb",
                borderRadius: "0.375rem",
                cursor: "pointer",
              }}
            >
              <AlertCircle size={20} />
            </button>
            {hoveredItems["left"] && (
              <TooltipContentStyled $side="left" $sideOffset={8}>
                좌측에 표시되는 툴팁
              </TooltipContentStyled>
            )}
          </div>
        </div>
      </div>

      <div>
        <h3>다양한 컨텐츠</h3>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            padding: "2rem",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "relative" }}>
            <button
              onMouseEnter={() => handleMouseEnter("shortcut")}
              onMouseLeave={() => handleMouseLeave("shortcut")}
              style={{
                padding: "0.5rem 1rem",
                border: "1px solid #e5e7eb",
                borderRadius: "0.375rem",
                cursor: "pointer",
              }}
            >
              단축키
            </button>
            {hoveredItems["shortcut"] && (
              <TooltipContentStyled $side="top" $sideOffset={8}>
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                  }}
                >
                  <kbd
                    style={{
                      padding: "0.25rem 0.5rem",
                      background: "rgba(255,255,255,0.1)",
                      borderRadius: "0.25rem",
                    }}
                  >
                    ⌘
                  </kbd>
                  <span>+</span>
                  <kbd
                    style={{
                      padding: "0.25rem 0.5rem",
                      background: "rgba(255,255,255,0.1)",
                      borderRadius: "0.25rem",
                    }}
                  >
                    K
                  </kbd>
                </div>
              </TooltipContentStyled>
            )}
          </div>

          <div style={{ position: "relative" }}>
            <button
              onMouseEnter={() => handleMouseEnter("multiline")}
              onMouseLeave={() => handleMouseLeave("multiline")}
              style={{
                padding: "0.5rem 1rem",
                border: "1px solid #e5e7eb",
                borderRadius: "0.375rem",
                cursor: "pointer",
              }}
            >
              긴 설명
            </button>
            {hoveredItems["multiline"] && (
              <TooltipContentStyled
                $side="bottom"
                $sideOffset={8}
                style={{ whiteSpace: "normal", maxWidth: "200px" }}
              >
                이것은 여러 줄로 된 툴팁 내용입니다. 필요한 경우 자동으로
                줄바꿈이 됩니다.
              </TooltipContentStyled>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
