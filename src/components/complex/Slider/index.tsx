import React from 'react';
import styled from 'styled-components';

const SliderRoot = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  touch-action: none;
  user-select: none;
  cursor: pointer;

  &[data-disabled="true"] {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const SliderTrack = styled.div`
  position: relative;
  flex-grow: 1;
  height: 2px;
  background-color: hsl(240 6% 90%);
  border-radius: 9999px;
  overflow: hidden;
`;

const SliderRange = styled.div`
  position: absolute;
  height: 100%;
  background-color: hsl(240 5% 26%);
`;

const SliderThumb = styled.div`
  position: absolute;
  display: block;
  width: 16px;
  height: 16px;
  background-color: white;
  border: 2px solid hsl(240 5% 26%);
  border-radius: 9999px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px hsl(240 5% 96%), 0 0 0 4px hsl(240 5% 26%);
  }
`;

interface SliderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  onChange?: (value: number) => void;
  onChangeEnd?: (value: number) => void;
}

export const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  ({ value, min = 0, max = 100, step = 1, disabled = false, onChange, onChangeEnd, ...props }, ref) => {
    const [isDragging, setIsDragging] = React.useState(false);
    const sliderRef = React.useRef<HTMLDivElement>(null);

    const clamp = (value: number, min: number, max: number) => {
      return Math.min(Math.max(value, min), max);
    };

    const getValueFromPosition = (position: number) => {
      if (!sliderRef.current) return value;

      const { left, width } = sliderRef.current.getBoundingClientRect();
      const percentage = clamp((position - left) / width, 0, 1);
      const rawValue = min + (max - min) * percentage;
      const steppedValue = Math.round(rawValue / step) * step;
      return clamp(steppedValue, min, max);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!isDragging || disabled) return;
      const newValue = getValueFromPosition(event.clientX);
      onChange?.(newValue);
    };

    const handlePointerUp = () => {
      if (!isDragging) return;
      setIsDragging(false);
      onChangeEnd?.(value);
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
    };

    const handlePointerDown = (event: React.PointerEvent) => {
      if (disabled) return;
      const newValue = getValueFromPosition(event.clientX);
      onChange?.(newValue);
      setIsDragging(true);
      document.addEventListener('pointermove', handlePointerMove);
      document.addEventListener('pointerup', handlePointerUp);
    };

    const percentage = ((value - min) / (max - min)) * 100;

    return (
      <SliderRoot
        ref={ref}
        data-disabled={disabled}
        onPointerDown={handlePointerDown}
        {...props}
      >
        <SliderTrack ref={sliderRef}>
          <SliderRange style={{ width: `${percentage}%` }} />
        </SliderTrack>
        <SliderThumb
          style={{ left: `calc(${percentage}% - 8px)` }}
          role="slider"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          tabIndex={disabled ? -1 : 0}
        />
      </SliderRoot>
    );
  }
);

Slider.displayName = 'Slider'; 