import { useState } from "react";
import { X } from "lucide-react";
import {
  Overlay,
  DialogContainer,
  Header,
  Title,
  Description,
  CloseButton,
  Content,
} from "@/components/complex/Dialog";
import { Button } from "@/components/primitive/Button/Button";

export const DialogPreview = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>다이얼로그 열기</Button>

      <Overlay $isOpen={isOpen}>
        <DialogContainer>
          <Header>
            <Title>다이얼로그 제목</Title>
            <Description>
              이것은 다이얼로그의 설명입니다. 사용자에게 중요한 정보나 작업을
              표시할 때 사용됩니다.
            </Description>
            <CloseButton onClick={handleClose}>
              <X size={18} />
            </CloseButton>
          </Header>

          <Content>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <p>
                다이얼로그의 본문 내용입니다. 여기에는 사용자에게 보여주고 싶은
                주요 내용이나 사용자의 입력이 필요한 폼 등을 배치할 수 있습니다.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "0.5rem",
                  marginTop: "1rem",
                }}
              >
                <Button onClick={handleClose}>취소</Button>
                <Button
                  onClick={() => {
                    alert("확인 버튼이 클릭되었습니다!");
                    handleClose();
                  }}
                >
                  확인
                </Button>
              </div>
            </div>
          </Content>
        </DialogContainer>
      </Overlay>
    </div>
  );
};
