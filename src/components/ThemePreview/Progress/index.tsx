import React, { useState, useEffect } from "react";
import { ProgressRoot, ProgressIndicator } from "@/components/complex/Progress";

export const ProgressPreview: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsRunning(false);
            return 100;
          }
          return prev + 1;
        });
      }, 50);

      return () => clearInterval(timer);
    }
  }, [isRunning]);

  const handleReset = () => {
    setProgress(0);
    setIsRunning(true);
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
        <h3>기본 프로그레스</h3>
        <ProgressRoot style={{ width: "300px" }}>
          <ProgressIndicator
            $value={progress}
            $max={100}
            $indeterminate={false}
          />
        </ProgressRoot>
        <div style={{ marginTop: "1rem" }}>
          <button
            onClick={handleReset}
            style={{
              padding: "0.5rem 1rem",
              background: "#4F46E5",
              color: "white",
              border: "none",
              borderRadius: "0.25rem",
              cursor: "pointer",
            }}
          >
            {progress >= 100 ? "다시 시작" : "진행 중..."}
          </button>
          <span style={{ marginLeft: "1rem" }}>{progress}%</span>
        </div>
      </div>

      <div>
        <h3>불확정 프로그레스</h3>
        <ProgressRoot style={{ width: "300px" }}>
          <ProgressIndicator $value={0} $max={100} $indeterminate={true} />
        </ProgressRoot>
      </div>

      <div>
        <h3>커스텀 너비 프로그레스</h3>
        <ProgressRoot style={{ width: "500px" }}>
          <ProgressIndicator $value={75} $max={100} $indeterminate={false} />
        </ProgressRoot>
      </div>
    </div>
  );
};
