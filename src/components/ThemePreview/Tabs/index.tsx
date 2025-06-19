import React, { useState } from "react";
import {
  TabsContainer,
  TabsList,
  TabButton,
  TabContent,
  type TabItem,
} from "@/components/complex/Tabs";

const tabItems: TabItem[] = [
  {
    key: "tab1",
    label: "첫 번째 탭",
    content: (
      <div
        style={{
          padding: "1rem",
          backgroundColor: "#f9fafb",
          borderRadius: "0.5rem",
        }}
      >
        첫 번째 탭의 내용입니다. 여기에는 다양한 컨텐츠가 들어갈 수 있습니다.
      </div>
    ),
  },
  {
    key: "tab2",
    label: "두 번째 탭",
    content: (
      <div
        style={{
          padding: "1rem",
          backgroundColor: "#f9fafb",
          borderRadius: "0.5rem",
        }}
      >
        두 번째 탭의 내용입니다. 이 탭에는 다른 종류의 컨텐츠가 포함됩니다.
      </div>
    ),
  },
  {
    key: "tab3",
    label: "비활성화된 탭",
    content: <div>이 내용은 보이지 않습니다.</div>,
    disabled: true,
  },
  {
    key: "tab4",
    label: "네 번째 탭",
    content: (
      <div
        style={{
          padding: "1rem",
          backgroundColor: "#f9fafb",
          borderRadius: "0.5rem",
        }}
      >
        네 번째 탭의 내용입니다. 마지막 탭의 컨텐츠입니다.
      </div>
    ),
  },
];

export const TabsPreview: React.FC = () => {
  const [activeTab1, setActiveTab1] = useState("tab1");
  const [activeTab2, setActiveTab2] = useState("tab1");
  const [activeTab3, setActiveTab3] = useState("tab1");

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
        <h3>기본 라인 탭</h3>
        <TabsContainer>
          <TabsList>
            {tabItems.map((tab) => (
              <TabButton
                key={tab.key}
                $active={activeTab1 === tab.key}
                $disabled={tab.disabled}
                onClick={() => !tab.disabled && setActiveTab1(tab.key)}
              >
                {tab.label}
              </TabButton>
            ))}
          </TabsList>
          <TabContent>
            {tabItems.find((tab) => tab.key === activeTab1)?.content}
          </TabContent>
        </TabsContainer>
      </div>

      <div>
        <h3>카드 스타일 탭</h3>
        <TabsContainer>
          <TabsList $variant="card">
            {tabItems.map((tab) => (
              <TabButton
                key={tab.key}
                $active={activeTab2 === tab.key}
                $variant="card"
                $disabled={tab.disabled}
                onClick={() => !tab.disabled && setActiveTab2(tab.key)}
              >
                {tab.label}
              </TabButton>
            ))}
          </TabsList>
          <TabContent>
            {tabItems.find((tab) => tab.key === activeTab2)?.content}
          </TabContent>
        </TabsContainer>
      </div>

      <div>
        <h3>크기별 탭</h3>
        <TabsContainer>
          <TabsList>
            {tabItems.slice(0, 3).map((tab) => (
              <TabButton
                key={tab.key}
                $active={activeTab3 === tab.key}
                $size="large"
                $disabled={tab.disabled}
                onClick={() => !tab.disabled && setActiveTab3(tab.key)}
              >
                {tab.label}
              </TabButton>
            ))}
          </TabsList>
          <TabContent>
            {tabItems.find((tab) => tab.key === activeTab3)?.content}
          </TabContent>
        </TabsContainer>
      </div>
    </div>
  );
};
