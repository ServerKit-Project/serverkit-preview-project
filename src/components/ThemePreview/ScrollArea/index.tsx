import React from "react";
import { StyledScrollArea } from "@/components/complex/ScrollArea";

const generateLongContent = () => {
  return Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      style={{
        padding: "1rem",
        borderBottom: "1px solid #e5e7eb",
        backgroundColor: i % 2 === 0 ? "#f9fafb" : "#ffffff",
      }}
    >
      항목 {i + 1}: 긴 컨텐츠를 표시하기 위한 스크롤 영역 예시입니다. 이
      텍스트는 스크롤바의 동작을 시연하기 위해 반복됩니다.
    </div>
  ));
};

export const ScrollAreaPreview: React.FC = () => {
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
        <h3>기본 스크롤 영역</h3>
        <div style={{ border: "1px solid #e5e7eb", borderRadius: "0.5rem" }}>
          <StyledScrollArea style={{ height: "300px" }}>
            {generateLongContent()}
          </StyledScrollArea>
        </div>
      </div>

      <div>
        <h3>커스텀 높이 스크롤 영역</h3>
        <div style={{ border: "1px solid #e5e7eb", borderRadius: "0.5rem" }}>
          <StyledScrollArea style={{ height: "200px" }}>
            {generateLongContent()}
          </StyledScrollArea>
        </div>
      </div>

      <div>
        <h3>가로 스크롤 영역</h3>
        <div style={{ border: "1px solid #e5e7eb", borderRadius: "0.5rem" }}>
          <StyledScrollArea style={{ height: "100px" }}>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                padding: "1rem",
                minWidth: "1000px",
              }}
            >
              {Array.from({ length: 10 }, (_, i) => (
                <div
                  key={i}
                  style={{
                    flex: "0 0 150px",
                    height: "50px",
                    backgroundColor: "#f3f4f6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "0.25rem",
                  }}
                >
                  가로 항목 {i + 1}
                </div>
              ))}
            </div>
          </StyledScrollArea>
        </div>
      </div>
    </div>
  );
};
