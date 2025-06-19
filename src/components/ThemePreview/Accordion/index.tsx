import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  AccordionContainer,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
} from "@/components/complex/Accordion";

export const AccordionPreview = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const items = [
    {
      title: "섹션 1",
      content:
        "이것은 첫 번째 아코디언 섹션의 내용입니다. 여기에 원하는 내용을 넣을 수 있습니다.",
    },
    {
      title: "섹션 2",
      content:
        "두 번째 섹션입니다. 아코디언은 콘텐츠를 깔끔하게 정리하는데 도움이 됩니다.",
    },
    {
      title: "섹션 3",
      content: "마지막 섹션입니다. 각 섹션은 독립적으로 열고 닫을 수 있습니다.",
    },
  ];

  return (
    <AccordionContainer>
      {items.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionHeader
            isOpen={openItems.includes(index)}
            onClick={() => toggleItem(index)}
          >
            {item.title}
            <ChevronDown
              size={20}
              style={{
                transform: openItems.includes(index)
                  ? "rotate(180deg)"
                  : "none",
                transition: "transform 0.3s ease",
              }}
            />
          </AccordionHeader>
          <AccordionContent isOpen={openItems.includes(index)}>
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionContainer>
  );
};
