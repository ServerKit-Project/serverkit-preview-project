import { useState } from "react";
import { X } from "lucide-react";
import {
  ModalBackdrop,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalBody,
} from "@/components/complex/Modal";
import { Button } from "@/components/primitive/Button/Button";

export const ModalPreview = () => {
  const [modalConfig, setModalConfig] = useState<{
    isOpen: boolean;
    size: "small" | "medium" | "large" | "fullscreen";
  }>({
    isOpen: false,
    size: "medium",
  });

  const openModal = (size: "small" | "medium" | "large" | "fullscreen") => {
    setModalConfig({ isOpen: true, size });
  };

  const closeModal = () => {
    setModalConfig((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <Button onClick={() => openModal("small")}>작은 모달</Button>
      <Button onClick={() => openModal("medium")}>중간 모달</Button>
      <Button onClick={() => openModal("large")}>큰 모달</Button>
      <Button onClick={() => openModal("fullscreen")}>전체화면 모달</Button>

      <ModalBackdrop $isOpen={modalConfig.isOpen} onClick={() => closeModal()}>
        <ModalContainer
          $isOpen={modalConfig.isOpen}
          $size={modalConfig.size}
          onClick={(e) => e.stopPropagation()}
          style={{
            display: "flex",
            flexDirection: "column",
            height: modalConfig.size === "fullscreen" ? "100%" : "auto",
          }}
        >
          <ModalHeader>
            <ModalTitle>
              {modalConfig.size === "small" && "작은 모달"}
              {modalConfig.size === "medium" && "중간 모달"}
              {modalConfig.size === "large" && "큰 모달"}
              {modalConfig.size === "fullscreen" && "전체화면 모달"}
            </ModalTitle>
            <CloseButton onClick={closeModal}>
              <X size={24} />
            </CloseButton>
          </ModalHeader>

          <ModalBody style={{ flex: 1, overflow: "auto" }}>
            <div>
              <h3 style={{ margin: "0 0 0.5rem 0" }}>모달 내용</h3>
              <p style={{ margin: "0 0 1rem 0" }}>
                이것은 {modalConfig.size} 크기의 모달입니다. 모달은 사용자의
                주의를 특정 내용이나 작업에 집중시키기 위해 사용됩니다.
              </p>
              <p style={{ margin: "0 0 1rem 0" }}>
                모달은 다음과 같은 경우에 사용됩니다:
              </p>
              <ul style={{ margin: "0" }}>
                <li>중요한 정보 표시</li>
                <li>사용자 입력 요청</li>
                <li>작업 확인</li>
                <li>상세 정보 표시</li>
              </ul>
            </div>
          </ModalBody>

          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              justifyContent: "flex-end",
              padding: "1rem",
              borderTop: "1px solid #CBD5E0",
              marginTop: "auto",
            }}
          >
            <Button variant="danger" onClick={closeModal}>
              취소
            </Button>
            <Button onClick={closeModal}>확인</Button>
          </div>
        </ModalContainer>
      </ModalBackdrop>
    </div>
  );
};
