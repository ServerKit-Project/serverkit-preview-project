import React from 'react';
import { AspectRatioWrapper, AspectRatioContent } from './styles';

export interface AspectRatioProps {
  ratio?: number;
  children: React.ReactNode;
  className?: string;
}

export const AspectRatio: React.FC<AspectRatioProps> = ({
  ratio = 16 / 9,
  children,
  className,
}) => {
  return (
    <AspectRatioWrapper ratio={ratio} className={className}>
      <AspectRatioContent>{children}</AspectRatioContent>
    </AspectRatioWrapper>
  );
};
