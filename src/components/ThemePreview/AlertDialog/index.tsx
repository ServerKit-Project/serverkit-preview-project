import React from "react";
import {
  Overlay,
  DialogContainer,
  Title,
  Description,
  ButtonGroup,
  Button,
} from "@/components/complex/AlertDialog";

export const AlertDialogPreview: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>기본 알림 다이얼로그</h2>
      <Button onClick={() => setIsOpen(true)}>알림 다이얼로그 열기</Button>

      <Overlay isOpen={isOpen}>
        <DialogContainer>
          <Title>정말 삭제하시겠습니까?</Title>
          <Description>
            이 작업은 되돌릴 수 없습니다. 계속하시겠습니까?
          </Description>
          <ButtonGroup>
            <Button onClick={() => setIsOpen(false)}>취소</Button>
            <Button variant="danger" onClick={() => setIsOpen(false)}>
              삭제
            </Button>
          </ButtonGroup>
        </DialogContainer>
      </Overlay>
    </div>
  );
};
