import styled from "styled-components";
import React from "react";

interface CardProps {
  children: React.ReactNode;
  variant?: "elevated" | "outlined";
  padding?: "none" | "small" | "medium" | "large";
  isHoverable?: boolean;
}

type PaddingSize = "none" | "small" | "medium" | "large";

const getPadding = (padding: PaddingSize) => {
  switch (padding) {
    case "none":
      return "0";
    case "small":
      return "0.75rem";
    case "large":
      return "1.5rem";
    default:
      return "1rem";
  }
};

const CardContainer = styled.div<{
  $variant: "elevated" | "outlined";
  $padding: PaddingSize;
  $isHoverable: boolean;
}>`
  background: white;
  border-radius: 0.5rem;
  overflow: hidden;
  padding: ${(props) => getPadding(props.$padding)};
  transition: all 0.2s ease-in-out;

  ${(props) =>
    props.$variant === "elevated"
      ? `
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
      border: none;
    `
      : `
      border: 1px solid #e2e8f0;
    `}

  ${(props) =>
    props.$isHoverable &&
    `
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
    }
  `}
`;

interface CardSubComponentProps {
  children: React.ReactNode;
  padding: PaddingSize;
}

const CardHeader = styled(({ padding, ...props }: CardSubComponentProps) => (
  <div {...props} />
))`
  margin: -${(props) => getPadding(props.padding)};
  margin-bottom: 1rem;
  padding: ${(props) => getPadding(props.padding)};
  border-bottom: 1px solid #e2e8f0;
`;

const CardFooter = styled(({ padding, ...props }: CardSubComponentProps) => (
  <div {...props} />
))`
  margin: -${(props) => getPadding(props.padding)};
  margin-top: 1rem;
  padding: ${(props) => getPadding(props.padding)};
  border-top: 1px solid #e2e8f0;
`;

export const Card: React.FC<CardProps> & {
  Header: typeof CardHeader;
  Footer: typeof CardFooter;
} = ({
  children,
  variant = "elevated",
  padding = "medium",
  isHoverable = false,
}) => {
  const childrenWithPadding = React.Children.map(children, (child) => {
    if (
      React.isValidElement(child) &&
      (child.type === CardHeader || child.type === CardFooter)
    ) {
      return React.cloneElement(child, { padding } as CardSubComponentProps);
    }
    return child;
  });

  return (
    <CardContainer
      $variant={variant}
      $padding={padding}
      $isHoverable={isHoverable}
    >
      {childrenWithPadding}
    </CardContainer>
  );
};

Card.Header = CardHeader;
Card.Footer = CardFooter;
