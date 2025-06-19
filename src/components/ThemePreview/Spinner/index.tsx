import React from "react";
import { StyledSpinner } from "@/components/complex/Spinner";

export const SpinnerPreview: React.FC = () => {
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
        <h3>크기별 스피너</h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <div>
            <p>Small</p>
            <StyledSpinner $size="sm" />
          </div>
          <div>
            <p>Medium</p>
            <StyledSpinner $size="md" />
          </div>
          <div>
            <p>Large</p>
            <StyledSpinner $size="lg" />
          </div>
        </div>
      </div>

      <div>
        <h3>로딩 상태 예시</h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "1rem",
            border: "1px solid #e5e7eb",
            borderRadius: "0.5rem",
            width: "fit-content",
          }}
        >
          <StyledSpinner $size="sm" />
          <span>데이터를 불러오는 중...</span>
        </div>
      </div>

      <div>
        <h3>버튼 내 스피너</h3>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "0.375rem",
            backgroundColor: "#4F46E5",
            color: "white",
            cursor: "pointer",
          }}
        >
          <StyledSpinner
            $size="sm"
            style={{
              borderColor: "white",
              borderTopColor: "rgba(255,255,255,0.3)",
            }}
          />
          처리 중...
        </button>
      </div>

      <div>
        <h3>카드 로딩 상태</h3>
        <div
          style={{
            position: "relative",
            padding: "2rem",
            border: "1px solid #e5e7eb",
            borderRadius: "0.5rem",
            width: "300px",
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.05)",
          }}
        >
          <StyledSpinner $size="lg" />
        </div>
      </div>
    </div>
  );
};
