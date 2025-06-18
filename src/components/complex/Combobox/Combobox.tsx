import styled from "styled-components";
import React, { useState, useRef, useEffect } from "react";

interface ComboboxOption {
  value: string;
  label: string;
}

interface ComboboxProps {
  options: ComboboxOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
}

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input<{ $hasError: boolean }>`
  width: 100%;
  padding: 0.625rem 2.5rem 0.625rem 0.75rem;
  border: 1px solid ${(props) => (props.$hasError ? "#e53e3e" : "#e2e8f0")};
  border-radius: 0.375rem;
  font-size: 1rem;
  color: #2d3748;
  background-color: white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: ${(props) => (props.$hasError ? "#e53e3e" : "#cbd5e0")};
  }

  &:focus {
    outline: none;
    border-color: #3182ce;
    box-shadow: 0 0 0 1px #3182ce;
  }

  &:disabled {
    background-color: #f7fafc;
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const ToggleButton = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 0.25rem;
  color: #4a5568;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const OptionsList = styled.ul<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 0.25rem;
  padding: 0.5rem 0;
  background-color: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  max-height: 200px;
  overflow-y: auto;
  display: ${(props) => (props.$isOpen ? "block" : "none")};
`;

export const Option = styled.li<{ $isSelected: boolean }>`
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  background-color: ${(props) =>
    props.$isSelected ? "#ebf8ff" : "transparent"};
  color: ${(props) => (props.$isSelected ? "#2b6cb0" : "#2d3748")};

  &:hover {
    background-color: #f7fafc;
  }
`;

export const ErrorText = styled.span`
  color: #e53e3e;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
`;

export const Combobox: React.FC<ComboboxProps> = ({
  options,
  value = "",
  onChange,
  placeholder = "선택하세요",
  disabled = false,
  error,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((option) => option.value === value);
  const displayValue = selectedOption ? selectedOption.label : searchTerm;

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setIsOpen(true);
  };

  const handleOptionClick = (option: ComboboxOption) => {
    onChange?.(option.value);
    setSearchTerm("");
    setIsOpen(false);
  };

  return (
    <Container ref={containerRef}>
      <Input
        type="text"
        value={displayValue}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)}
        placeholder={placeholder}
        disabled={disabled}
        $hasError={!!error}
      />
      <ToggleButton
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
      >
        ▼
      </ToggleButton>
      <OptionsList $isOpen={isOpen}>
        {filteredOptions.map((option) => (
          <Option
            key={option.value}
            $isSelected={option.value === value}
            onClick={() => handleOptionClick(option)}
          >
            {option.label}
          </Option>
        ))}
        {filteredOptions.length === 0 && (
          <Option $isSelected={false}>검색 결과가 없습니다</Option>
        )}
      </OptionsList>
      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};
