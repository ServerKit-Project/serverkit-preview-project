import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../theme";
import { ThemeCustomizer } from "../components/complex/ThemeCustomizer";
import { Button } from "../components/primitive/Button";
import { Input } from "../components/primitive/Input";
import {
  CardRoot,
  CardHeaderRoot,
  CardTitleRoot,
  CardContentRoot,
} from "../components/primitive/Card";
import styled from "styled-components";

const PreviewContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const PreviewSection = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.background.secondary};
  border-radius: ${(props) => props.theme.borderRadius};
`;

const ComponentPreview = styled.div`
  margin: 20px 0;
  > * {
    margin: 10px 0;
  }
`;

const ThemePreviewPage: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);

  return (
    <ThemeProvider theme={currentTheme}>
      <PreviewContainer>
        <h1>테마 프리뷰</h1>
        <ThemeCustomizer onThemeChange={setCurrentTheme} />

        <PreviewSection>
          <h2>컴포넌트 프리뷰</h2>
          <ComponentPreview>
            <h3>버튼</h3>
            <Button>기본 버튼</Button>
            <Button variant="primary">프라이머리 버튼</Button>
            <Button variant="secondary">세컨더리 버튼</Button>
            <Button variant="danger">위험 버튼</Button>
          </ComponentPreview>

          <ComponentPreview>
            <h3>입력</h3>
            <Input placeholder="기본 입력" />
            <Input placeholder="비활성화 입력" disabled />
          </ComponentPreview>

          <ComponentPreview>
            <h3>카드</h3>
            <CardRoot>
              <CardHeaderRoot>
                <CardTitleRoot>카드 제목</CardTitleRoot>
              </CardHeaderRoot>
              <CardContentRoot>
                <p>카드 내용이 여기에 들어갑니다.</p>
              </CardContentRoot>
            </CardRoot>
          </ComponentPreview>
        </PreviewSection>
      </PreviewContainer>
    </ThemeProvider>
  );
};

export default ThemePreviewPage;
