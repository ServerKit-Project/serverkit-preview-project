import React from 'react';
import { GroupWrapper, GroupHeading } from './styles';

export const CommandGroup = ({
  heading,
  children,
  className,
}: {
  heading: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <GroupWrapper className={className}>
      <GroupHeading>{heading}</GroupHeading>
      {children}
    </GroupWrapper>
  );
};
