import styled from "styled-components";

const sizes = {
  sm: {
    width: "32px",
    height: "18px",
    thumbSize: "14px",
  },
  md: {
    width: "40px",
    height: "22px",
    thumbSize: "18px",
  },
  lg: {
    width: "48px",
    height: "26px",
    thumbSize: "22px",
  },
} as const;

export const SwitchContainer = styled.label<{ size: "sm" | "md" | "lg" }>`
  position: relative;
  display: inline-block;
  width: ${(props) => sizes[props.size].width};
  height: ${(props) => sizes[props.size].height};
`;

export const SwitchInput = styled.input<{ $size: "sm" | "md" | "lg" }>`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #2563eb;
  }

  &:checked + span:before {
    transform: translateX(
      calc(
        ${(props) => sizes[props.$size].width} -
          ${(props) => sizes[props.$size].thumbSize} - 2px
      )
    );
  }

  &:focus + span {
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
  }

  &:disabled + span {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const SwitchSlider = styled.span<{ size: "sm" | "md" | "lg" }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #e5e7eb;
  transition: 0.2s;
  border-radius: 999px;

  &:before {
    position: absolute;
    content: "";
    height: ${(props) => sizes[props.size].thumbSize};
    width: ${(props) => sizes[props.size].thumbSize};
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: 0.2s;
    border-radius: 50%;
  }

  &:hover {
    background-color: #d1d5db;
  }
`;
