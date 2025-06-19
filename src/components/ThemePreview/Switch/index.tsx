import React, { useState } from "react";
import {
  SwitchContainer,
  SwitchInput,
  SwitchSlider,
} from "@/components/complex/Switch";

export const SwitchPreview: React.FC = () => {
  const [switches, setSwitches] = useState({
    switch1: false,
    switch2: true,
    switch3: false,
    switch4: true,
    switch5: false,
  });

  const handleSwitchChange = (name: keyof typeof switches) => {
    setSwitches((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

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
        <h3>크기별 스위치</h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <SwitchContainer size="sm">
              <SwitchInput
                type="checkbox"
                $size="sm"
                checked={switches.switch1}
                onChange={() => handleSwitchChange("switch1")}
              />
              <SwitchSlider size="sm" />
            </SwitchContainer>
            <span>Small</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <SwitchContainer size="md">
              <SwitchInput
                type="checkbox"
                $size="md"
                checked={switches.switch2}
                onChange={() => handleSwitchChange("switch2")}
              />
              <SwitchSlider size="md" />
            </SwitchContainer>
            <span>Medium</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <SwitchContainer size="lg">
              <SwitchInput
                type="checkbox"
                $size="lg"
                checked={switches.switch3}
                onChange={() => handleSwitchChange("switch3")}
              />
              <SwitchSlider size="lg" />
            </SwitchContainer>
            <span>Large</span>
          </div>
        </div>
      </div>

      <div>
        <h3>비활성화된 스위치</h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <SwitchContainer size="md">
              <SwitchInput
                type="checkbox"
                $size="md"
                checked={false}
                disabled
              />
              <SwitchSlider size="md" />
            </SwitchContainer>
            <span>Off</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <SwitchContainer size="md">
              <SwitchInput type="checkbox" $size="md" checked={true} disabled />
              <SwitchSlider size="md" />
            </SwitchContainer>
            <span>On</span>
          </div>
        </div>
      </div>

      <div>
        <h3>라벨이 있는 스위치</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem",
              border: "1px solid #e5e7eb",
              borderRadius: "0.5rem",
              width: "fit-content",
            }}
          >
            <SwitchContainer size="md">
              <SwitchInput
                type="checkbox"
                $size="md"
                checked={switches.switch4}
                onChange={() => handleSwitchChange("switch4")}
              />
              <SwitchSlider size="md" />
            </SwitchContainer>
            <span>이메일 알림 받기</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem",
              border: "1px solid #e5e7eb",
              borderRadius: "0.5rem",
              width: "fit-content",
            }}
          >
            <SwitchContainer size="md">
              <SwitchInput
                type="checkbox"
                $size="md"
                checked={switches.switch5}
                onChange={() => handleSwitchChange("switch5")}
              />
              <SwitchSlider size="md" />
            </SwitchContainer>
            <span>다크 모드</span>
          </div>
        </div>
      </div>
    </div>
  );
};
