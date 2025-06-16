import React from 'react';
import { StyledInput } from './styles';

export const CommandInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <StyledInput {...props} />;
};
