import React from "react";
import { StyledSkeleton } from "@/components/complex/Skeleton";

export const SkeletonPreview: React.FC = () => {
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
        <h3>기본 스켈레톤</h3>
        <StyledSkeleton style={{ width: "200px" }} />
      </div>

      <div>
        <h3>카드 스켈레톤</h3>
        <div
          style={{
            padding: "1rem",
            border: "1px solid #e5e7eb",
            borderRadius: "0.5rem",
            width: "300px",
          }}
        >
          <StyledSkeleton style={{ height: "150px", marginBottom: "1rem" }} />
          <StyledSkeleton style={{ width: "80%", marginBottom: "0.5rem" }} />
          <StyledSkeleton style={{ width: "60%" }} />
        </div>
      </div>

      <div>
        <h3>텍스트 스켈레톤</h3>
        <div style={{ width: "500px" }}>
          <StyledSkeleton style={{ width: "40%", marginBottom: "1rem" }} />
          <StyledSkeleton style={{ marginBottom: "0.5rem" }} />
          <StyledSkeleton style={{ marginBottom: "0.5rem" }} />
          <StyledSkeleton style={{ width: "80%" }} />
        </div>
      </div>

      <div>
        <h3>프로필 스켈레톤</h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            width: "300px",
          }}
        >
          <StyledSkeleton
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              flexShrink: 0,
            }}
          />
          <div style={{ flex: 1 }}>
            <StyledSkeleton
              style={{
                width: "70%",
                marginBottom: "0.5rem",
              }}
            />
            <StyledSkeleton style={{ width: "40%" }} />
          </div>
        </div>
      </div>

      <div>
        <h3>테이블 스켈레톤</h3>
        <div style={{ width: "100%" }}>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "1rem",
                marginBottom: "0.5rem",
              }}
            >
              <StyledSkeleton style={{ width: "30%" }} />
              <StyledSkeleton style={{ width: "40%" }} />
              <StyledSkeleton style={{ width: "30%" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
