import React, { useState } from "react";
import { StyledTextarea } from "@/components/complex/Textarea";

export const TextareaPreview: React.FC = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("이 텍스트는 읽기 전용입니다.");
  const [value3, setValue3] = useState("");

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
        <h3>기본 텍스트영역</h3>
        <StyledTextarea
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
          placeholder="여기에 텍스트를 입력하세요..."
        />
        <div
          style={{
            marginTop: "0.5rem",
            fontSize: "0.875rem",
            color: "#6b7280",
          }}
        >
          입력된 글자 수: {value1.length}
        </div>
      </div>

      <div>
        <h3>읽기 전용 텍스트영역</h3>
        <StyledTextarea value={value2} readOnly />
      </div>

      <div>
        <h3>비활성화된 텍스트영역</h3>
        <StyledTextarea
          value="이 텍스트영역은 비활성화되어 있습니다."
          disabled
        />
      </div>

      <div>
        <h3>에러 상태 텍스트영역</h3>
        <StyledTextarea
          value={value3}
          onChange={(e) => setValue3(e.target.value)}
          placeholder="필수 입력 항목입니다..."
          $error={value3.length === 0}
        />
        {value3.length === 0 && (
          <div
            style={{
              marginTop: "0.5rem",
              fontSize: "0.875rem",
              color: "#ef4444",
            }}
          >
            이 필드는 필수입니다.
          </div>
        )}
      </div>

      <div>
        <h3>자동 크기 조절 텍스트영역</h3>
        <StyledTextarea
          style={{ minHeight: "120px", resize: "vertical" }}
          placeholder="이 텍스트영역은 수직으로 크기를 조절할 수 있습니다..."
        />
      </div>

      <div>
        <h3>최대 길이 제한 텍스트영역</h3>
        <StyledTextarea
          maxLength={100}
          placeholder="최대 100자까지 입력할 수 있습니다..."
          style={{ marginBottom: "0.5rem" }}
        />
        <div style={{ fontSize: "0.875rem", color: "#6b7280" }}>
          최대 100자까지 입력할 수 있습니다.
        </div>
      </div>
    </div>
  );
};
