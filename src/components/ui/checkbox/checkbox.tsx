import React from 'react';
import {
  CheckboxContainer,
  CheckboxBox,
  CheckboxIcon,
  LabelWrapper,
  Description,
  CheckboxCardWrapper,
} from './styles';
import { CheckIcon, MinusIcon } from 'lucide-react';

export interface CheckboxProps {
  checked?: boolean | 'indeterminate';
  onCheckedChange?: (value: boolean | 'indeterminate') => void;
  disabled?: boolean;
  label?: string;
  description?: string;
  inCard?: boolean;
  variant?: 'default' | 'blue';
  /**
   * Optional CSS class name
   */
  className?: string;
}


export const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  onCheckedChange,
  disabled,
  label,
  description,
  inCard = false,
  variant = 'default',
}) => {
  const handleToggle = () => {
    if (disabled) return;
    if (onCheckedChange) {
      const newValue = checked === 'indeterminate' ? true : !checked;
      onCheckedChange(newValue);
    }
  };

  const dataState =
    checked === 'indeterminate' ? 'indeterminate' : checked ? 'checked' : 'unchecked';

  const ariaChecked: boolean | 'mixed' = 
    checked === 'indeterminate' ? 'mixed' : !!checked;

  const Wrapper = inCard ? CheckboxCardWrapper : React.Fragment;
  const wrapperProps = inCard ? { 'data-state': dataState } : {};

  return (
    <Wrapper {...wrapperProps}>
      <CheckboxContainer disabled={disabled} onClick={handleToggle}>
        <CheckboxBox
          role="checkbox"
          aria-checked={ariaChecked}
          data-state={dataState}
          disabled={disabled}
          variant={variant ?? 'default'}
        >
          {checked === true && <CheckboxIcon as={CheckIcon} />}
          {checked === 'indeterminate' && <CheckboxIcon as={MinusIcon} />}
        </CheckboxBox>
        <LabelWrapper>
          {label && <span>{label}</span>}
          {description && <Description>{description}</Description>}
        </LabelWrapper>
      </CheckboxContainer>
    </Wrapper>
  );
};
