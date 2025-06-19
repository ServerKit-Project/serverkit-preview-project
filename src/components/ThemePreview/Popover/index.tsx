import React, { useState } from "react";
import { Settings2, X } from "lucide-react";
import {
  StyledPopoverContent,
  StyledPopoverTrigger,
  StyledPopoverArrow,
} from "@/components/complex/Popover";

export const PopoverPreview: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<{
    side: "top" | "right" | "bottom" | "left";
    align: "start" | "center" | "end";
  }>({
    side: "bottom",
    align: "center",
  });

  const handleClose = () => setIsOpen(false);

  return (
    <div
      style={{
        padding: "5rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <div style={{ position: "relative" }}>
        <StyledPopoverTrigger onClick={() => setIsOpen(!isOpen)}>
          <Settings2 size={24} />
        </StyledPopoverTrigger>

        {isOpen && (
          <StyledPopoverContent
            side={position.side}
            align={position.align}
            sideOffset={8}
            animation={{ duration: 200 }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "0.5rem",
              }}
            >
              <h3 style={{ margin: 0 }}>설정</h3>
              <button
                onClick={handleClose}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                }}
              >
                <X size={18} />
              </button>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <p style={{ margin: "0 0 0.5rem 0" }}>위치 설정</p>
              <select
                value={position.side}
                onChange={(e) =>
                  setPosition((prev) => ({
                    ...prev,
                    side: e.target.value as any,
                  }))
                }
                style={{
                  marginBottom: "0.5rem",
                  width: "100%",
                  padding: "0.25rem",
                }}
              >
                <option value="top">상단</option>
                <option value="right">우측</option>
                <option value="bottom">하단</option>
                <option value="left">좌측</option>
              </select>

              <select
                value={position.align}
                onChange={(e) =>
                  setPosition((prev) => ({
                    ...prev,
                    align: e.target.value as any,
                  }))
                }
                style={{ width: "100%", padding: "0.25rem" }}
              >
                <option value="start">시작</option>
                <option value="center">중앙</option>
                <option value="end">끝</option>
              </select>
            </div>

            <button
              onClick={handleClose}
              style={{
                width: "100%",
                padding: "0.5rem",
                background: "#4F46E5",
                color: "white",
                border: "none",
                borderRadius: "0.25rem",
                cursor: "pointer",
              }}
            >
              저장하기
            </button>
            <StyledPopoverArrow side={position.side} />
          </StyledPopoverContent>
        )}
      </div>

      <div style={{ marginTop: "2rem" }}>
        <p>현재 설정:</p>
        <pre>{JSON.stringify(position, null, 2)}</pre>
      </div>
    </div>
  );
};
