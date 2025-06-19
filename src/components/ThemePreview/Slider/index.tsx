import React, { useState } from "react";
import {
  SliderRoot,
  SliderTrack,
  SliderRange,
  SliderThumb,
} from "@/components/complex/Slider";

export const SliderPreview: React.FC = () => {
  const [value1, setValue1] = useState(50);
  const [value2, setValue2] = useState(30);
  const [value3, setValue3] = useState(80);

  const handleSliderChange = (
    e: React.MouseEvent | React.TouchEvent,
    setValue: (value: number) => void,
    disabled = false
  ) => {
    if (disabled) return;

    const slider = e.currentTarget as HTMLDivElement;
    const rect = slider.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const position = ((clientX - rect.left) / rect.width) * 100;
    const clampedValue = Math.min(Math.max(position, 0), 100);
    setValue(Math.round(clampedValue));
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
        <h3>기본 슬라이더</h3>
        <div style={{ width: "300px" }}>
          <SliderRoot
            onMouseDown={(e) => handleSliderChange(e, setValue1)}
            onTouchStart={(e) => handleSliderChange(e, setValue1)}
          >
            <SliderTrack>
              <SliderRange style={{ width: `${value1}%` }} />
            </SliderTrack>
            <SliderThumb
              style={{
                left: `calc(${value1}% - 8px)`,
                transform: "translateY(-50%)",
                top: "50%",
              }}
            />
          </SliderRoot>
          <div style={{ marginTop: "0.5rem", textAlign: "center" }}>
            값: {value1}
          </div>
        </div>
      </div>

      <div>
        <h3>비활성화된 슬라이더</h3>
        <div style={{ width: "300px" }}>
          <SliderRoot data-disabled="true">
            <SliderTrack>
              <SliderRange style={{ width: `${value2}%` }} />
            </SliderTrack>
            <SliderThumb
              style={{
                left: `calc(${value2}% - 8px)`,
                transform: "translateY(-50%)",
                top: "50%",
              }}
            />
          </SliderRoot>
          <div style={{ marginTop: "0.5rem", textAlign: "center" }}>
            값: {value2}
          </div>
        </div>
      </div>

      <div>
        <h3>커스텀 스타일 슬라이더</h3>
        <div style={{ width: "300px" }}>
          <SliderRoot
            onMouseDown={(e) => handleSliderChange(e, setValue3)}
            onTouchStart={(e) => handleSliderChange(e, setValue3)}
            style={{ height: "36px" }}
          >
            <SliderTrack style={{ height: "8px", backgroundColor: "#e5e7eb" }}>
              <SliderRange
                style={{
                  width: `${value3}%`,
                  backgroundColor: "#4F46E5",
                }}
              />
            </SliderTrack>
            <SliderThumb
              style={{
                left: `calc(${value3}% - 12px)`,
                transform: "translateY(-50%)",
                top: "50%",
                width: "24px",
                height: "24px",
                borderColor: "#4F46E5",
              }}
            />
          </SliderRoot>
          <div style={{ marginTop: "0.5rem", textAlign: "center" }}>
            값: {value3}
          </div>
        </div>
      </div>
    </div>
  );
};
