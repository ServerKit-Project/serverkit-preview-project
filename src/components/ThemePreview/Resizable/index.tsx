import React from "react";
import {
  ResizableContainer,
  ResizablePanel,
  VerticalHandle,
  HorizontalHandle,
  CornerHandle,
  HandleWrapper,
} from "@/components/complex/Resizable";

export const ResizablePreview: React.FC = () => {
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
        <h3>수평 리사이즈</h3>
        <div style={{ height: "200px", border: "1px solid #e5e7eb" }}>
          <ResizableContainer direction="horizontal">
            <ResizablePanel defaultSize={200} minSize={100} maxSize={500}>
              <div
                style={{
                  padding: "1rem",
                  height: "100%",
                  backgroundColor: "#f3f4f6",
                }}
              >
                왼쪽 패널
              </div>
              <HandleWrapper position="right">
                <VerticalHandle visible />
              </HandleWrapper>
            </ResizablePanel>
            <ResizablePanel>
              <div
                style={{
                  padding: "1rem",
                  height: "100%",
                  backgroundColor: "#f9fafb",
                }}
              >
                오른쪽 패널
              </div>
            </ResizablePanel>
          </ResizableContainer>
        </div>
      </div>

      <div>
        <h3>수직 리사이즈</h3>
        <div style={{ height: "400px", border: "1px solid #e5e7eb" }}>
          <ResizableContainer direction="vertical">
            <ResizablePanel defaultSize={150} minSize={100} maxSize={300}>
              <div
                style={{
                  padding: "1rem",
                  height: "100%",
                  backgroundColor: "#f3f4f6",
                }}
              >
                상단 패널
              </div>
              <HandleWrapper position="bottom">
                <HorizontalHandle visible />
              </HandleWrapper>
            </ResizablePanel>
            <ResizablePanel>
              <div
                style={{
                  padding: "1rem",
                  height: "100%",
                  backgroundColor: "#f9fafb",
                }}
              >
                하단 패널
              </div>
            </ResizablePanel>
          </ResizableContainer>
        </div>
      </div>

      <div>
        <h3>자유 리사이즈</h3>
        <div
          style={{
            position: "relative",
            width: "300px",
            height: "200px",
            border: "1px solid #e5e7eb",
            resize: "both",
            overflow: "auto",
          }}
        >
          <div
            style={{
              padding: "1rem",
              height: "100%",
              backgroundColor: "#f3f4f6",
            }}
          >
            모서리를 드래그하여 크기 조절
          </div>
          <HandleWrapper position="corner">
            <CornerHandle visible />
          </HandleWrapper>
        </div>
      </div>
    </div>
  );
};
