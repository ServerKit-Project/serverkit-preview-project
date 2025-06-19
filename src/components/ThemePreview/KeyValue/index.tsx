import { useState } from "react";
import { Copy, Check } from "lucide-react";
import {
  KeyValueContainer,
  KeyValueItem,
  KeyLabel,
  ValueContent,
  CopyButton,
  type KeyValueProps,
} from "@/components/complex/KeyValue";
import { Badge } from "@/components/primitive/Badge/Badge";

export const KeyValuePreview = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  const horizontalItems = [
    {
      key: "사용자 ID",
      value: "USER123456",
      copyable: true,
    },
    {
      key: "이메일",
      value: "user@example.com",
      copyable: true,
    },
    {
      key: "상태",
      value: <Badge>활성</Badge>,
    },
    {
      key: "가입일",
      value: "2024-03-15",
    },
    {
      key: "마지막 로그인",
      value: "2024-03-20 14:30:00",
    },
  ];

  const verticalItems = [
    {
      key: "배송지 주소",
      value: "서울특별시 강남구 테헤란로 123 4층",
      copyable: true,
    },
    {
      key: "연락처",
      value: "010-1234-5678",
      copyable: true,
    },
    {
      key: "결제 수단",
      value: (
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <img
            src="https://via.placeholder.com/32"
            alt="카드"
            style={{ width: "32px", height: "32px", borderRadius: "4px" }}
          />
          신한카드 (1234)
        </div>
      ),
    },
    {
      key: "멤버십 등급",
      value: <Badge variant="success">VIP</Badge>,
    },
  ];

  const renderKeyValueSection = (
    items: typeof horizontalItems,
    props: Partial<KeyValueProps>
  ) => (
    <KeyValueContainer $bordered={props.bordered}>
      {items.map((item, index) => (
        <KeyValueItem
          key={item.key}
          $layout={props.layout}
          $size={props.size}
          $striped={props.striped}
          $index={index}
          $bordered={props.bordered}
        >
          <KeyLabel $layout={props.layout} $size={props.size}>
            {item.key}
          </KeyLabel>
          <ValueContent $layout={props.layout} $size={props.size}>
            {item.value}
            {item.copyable && (
              <CopyButton
                onClick={() =>
                  handleCopy(
                    typeof item.value === "string" ? item.value : "",
                    item.key
                  )
                }
              >
                {copiedField === item.key ? (
                  <>
                    <Check size={14} />
                    복사됨
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    복사
                  </>
                )}
              </CopyButton>
            )}
          </ValueContent>
        </KeyValueItem>
      ))}
    </KeyValueContainer>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <h3>기본 가로 레이아웃</h3>
        {renderKeyValueSection(horizontalItems, {
          layout: "horizontal",
          size: "medium",
          bordered: true,
          striped: true,
        })}
      </div>

      <div>
        <h3>세로 레이아웃</h3>
        {renderKeyValueSection(verticalItems, {
          layout: "vertical",
          size: "medium",
          bordered: true,
        })}
      </div>

      <div>
        <h3>작은 크기</h3>
        {renderKeyValueSection(horizontalItems.slice(0, 3), {
          layout: "horizontal",
          size: "small",
          bordered: true,
        })}
      </div>

      <div>
        <h3>큰 크기</h3>
        {renderKeyValueSection(horizontalItems.slice(0, 3), {
          layout: "horizontal",
          size: "large",
          bordered: true,
          striped: true,
        })}
      </div>
    </div>
  );
};
