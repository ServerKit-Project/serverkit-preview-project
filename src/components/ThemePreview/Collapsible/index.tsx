import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import {
  Container,
  Trigger,
  Icon,
  Content,
  ContentInner,
} from "@/components/complex/Collapsible";

export const CollapsiblePreview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Trigger $disabled={false} onClick={toggleCollapsible}>
        <span>접기/펼치기 예제</span>
        <Icon $isOpen={isOpen}>
          <ChevronDown size={20} />
        </Icon>
      </Trigger>

      <Content $height={contentHeight}>
        <ContentInner ref={contentRef}>
          <h3>접기/펼치기 컨텐츠</h3>
          <p>
            이것은 접기/펼치기가 가능한 컨텐츠입니다. 트리거 버튼을 클릭하면 이
            컨텐츠가 부드럽게 나타나거나 사라집니다.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul>
            <li>리스트 아이템 1</li>
            <li>리스트 아이템 2</li>
            <li>리스트 아이템 3</li>
          </ul>
        </ContentInner>
      </Content>
    </Container>
  );
};
