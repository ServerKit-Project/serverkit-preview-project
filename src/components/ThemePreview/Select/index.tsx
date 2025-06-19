import React, { useState } from "react";
import {
  SelectContainer,
  SelectButton,
  SelectIcon,
  SelectDropdown,
  SelectOption,
  PlaceholderText,
} from "@/components/complex/Select";

export const SelectPreview: React.FC = () => {
  const [selectedValue1, setSelectedValue1] = useState<string | null>(null);
  const [selectedValue2, setSelectedValue2] = useState<string | null>(null);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const options = [
    { value: "option1", label: "옵션 1" },
    { value: "option2", label: "옵션 2" },
    { value: "option3", label: "옵션 3", disabled: true },
    { value: "option4", label: "옵션 4" },
    { value: "option5", label: "옵션 5" },
  ];

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
        <h3>기본 셀렉트</h3>
        <SelectContainer>
          <SelectButton onClick={() => setIsOpen1(!isOpen1)} $size="medium">
            {selectedValue1 ? (
              options.find((opt) => opt.value === selectedValue1)?.label
            ) : (
              <PlaceholderText>옵션을 선택하세요</PlaceholderText>
            )}
            <SelectIcon $isOpen={isOpen1} />
          </SelectButton>
          <SelectDropdown $isOpen={isOpen1}>
            {options.map((option) => (
              <SelectOption
                key={option.value}
                $disabled={option.disabled}
                $selected={selectedValue1 === option.value}
                onClick={() => {
                  if (!option.disabled) {
                    setSelectedValue1(option.value);
                    setIsOpen1(false);
                  }
                }}
              >
                {option.label}
              </SelectOption>
            ))}
          </SelectDropdown>
        </SelectContainer>
      </div>

      <div>
        <h3>에러 상태 셀렉트</h3>
        <SelectContainer $fullWidth>
          <SelectButton
            onClick={() => setIsOpen2(!isOpen2)}
            $size="medium"
            $error
            $fullWidth
          >
            {selectedValue2 ? (
              options.find((opt) => opt.value === selectedValue2)?.label
            ) : (
              <PlaceholderText>필수 선택 항목입니다</PlaceholderText>
            )}
            <SelectIcon $isOpen={isOpen2} />
          </SelectButton>
          <SelectDropdown $isOpen={isOpen2} $fullWidth>
            {options.map((option) => (
              <SelectOption
                key={option.value}
                $disabled={option.disabled}
                $selected={selectedValue2 === option.value}
                onClick={() => {
                  if (!option.disabled) {
                    setSelectedValue2(option.value);
                    setIsOpen2(false);
                  }
                }}
              >
                {option.label}
              </SelectOption>
            ))}
          </SelectDropdown>
        </SelectContainer>
      </div>

      <div>
        <h3>비활성화된 셀렉트</h3>
        <SelectContainer>
          <SelectButton $size="medium" $disabled>
            <PlaceholderText>비활성화됨</PlaceholderText>
            <SelectIcon />
          </SelectButton>
        </SelectContainer>
      </div>
    </div>
  );
};
