import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Container,
  Input,
  ToggleButton,
  OptionsList,
  Option,
  ErrorText,
} from "@/components/complex/Combobox";

export const ComboboxPreview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const options = [
    "서울",
    "부산",
    "대구",
    "인천",
    "광주",
    "대전",
    "울산",
    "세종",
    "경기",
    "강원",
  ];

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setHasError(false);
    setIsOpen(true);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setInputValue(option);
    setIsOpen(false);
    setHasError(false);
  };

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const validateInput = () => {
    if (!options.includes(inputValue)) {
      setHasError(true);
    }
  };

  return (
    <Container ref={containerRef}>
      <Input
        value={inputValue}
        onChange={handleInputChange}
        onBlur={validateInput}
        placeholder="도시를 선택하세요"
        $hasError={hasError}
      />
      <ToggleButton onClick={toggleOptions}>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </ToggleButton>

      <OptionsList $isOpen={isOpen}>
        {filteredOptions.map((option) => (
          <Option
            key={option}
            $isSelected={option === selectedOption}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </Option>
        ))}
        {filteredOptions.length === 0 && (
          <Option $isSelected={false}>검색 결과가 없습니다</Option>
        )}
      </OptionsList>

      {hasError && <ErrorText>올바른 도시를 선택해주세요</ErrorText>}
    </Container>
  );
};
