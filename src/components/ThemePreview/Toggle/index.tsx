import React, { useState } from "react";
import { ToggleRoot } from "@/components/complex/Toggle";
import { Bell, BellOff, Sun, Moon, Volume2, VolumeX } from "lucide-react";

export const TogglePreview: React.FC = () => {
  const [toggleStates, setToggleStates] = useState({
    notifications: false,
    theme: false,
    sound: false,
    simple: false,
    outline: false,
  });

  const handleToggle = (key: keyof typeof toggleStates) => {
    setToggleStates((prev) => ({
      ...prev,
      [key]: !prev[key],
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
        <h3>아이콘이 있는 토글</h3>
        <div style={{ display: "flex", gap: "1rem" }}>
          <ToggleRoot
            $pressed={toggleStates.notifications}
            onClick={() => handleToggle("notifications")}
          >
            {toggleStates.notifications ? (
              <Bell size={18} style={{ marginRight: "0.5rem" }} />
            ) : (
              <BellOff size={18} style={{ marginRight: "0.5rem" }} />
            )}
            알림
          </ToggleRoot>

          <ToggleRoot
            $pressed={toggleStates.theme}
            onClick={() => handleToggle("theme")}
          >
            {toggleStates.theme ? (
              <Moon size={18} style={{ marginRight: "0.5rem" }} />
            ) : (
              <Sun size={18} style={{ marginRight: "0.5rem" }} />
            )}
            테마
          </ToggleRoot>

          <ToggleRoot
            $pressed={toggleStates.sound}
            onClick={() => handleToggle("sound")}
          >
            {toggleStates.sound ? (
              <Volume2 size={18} style={{ marginRight: "0.5rem" }} />
            ) : (
              <VolumeX size={18} style={{ marginRight: "0.5rem" }} />
            )}
            소리
          </ToggleRoot>
        </div>
      </div>

      <div>
        <h3>크기별 토글</h3>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <ToggleRoot
            $size="sm"
            $pressed={toggleStates.simple}
            onClick={() => handleToggle("simple")}
          >
            작게
          </ToggleRoot>

          <ToggleRoot
            $pressed={toggleStates.simple}
            onClick={() => handleToggle("simple")}
          >
            기본
          </ToggleRoot>

          <ToggleRoot
            $size="lg"
            $pressed={toggleStates.simple}
            onClick={() => handleToggle("simple")}
          >
            크게
          </ToggleRoot>
        </div>
      </div>

      <div>
        <h3>아웃라인 토글</h3>
        <div style={{ display: "flex", gap: "1rem" }}>
          <ToggleRoot
            $variant="outline"
            $pressed={toggleStates.outline}
            onClick={() => handleToggle("outline")}
          >
            옵션 1
          </ToggleRoot>

          <ToggleRoot
            $variant="outline"
            $pressed={!toggleStates.outline}
            onClick={() => handleToggle("outline")}
          >
            옵션 2
          </ToggleRoot>
        </div>
      </div>

      <div>
        <h3>비활성화된 토글</h3>
        <ToggleRoot disabled>비활성화됨</ToggleRoot>
      </div>
    </div>
  );
};
