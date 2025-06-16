import styled from "styled-components";
import React from "react";

type BadgeVariant =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
}

const getVariantStyles = (variant: BadgeVariant) => {
  switch (variant) {
    case "primary":
      return { bg: "#ebf8ff", text: "#2b6cb0", border: "#63b3ed" };
    case "secondary":
      return { bg: "#faf5ff", text: "#553c9a", border: "#b794f4" };
    case "success":
      return { bg: "#f0fff4", text: "#2f855a", border: "#68d391" };
    case "warning":
      return { bg: "#fffaf0", text: "#c05621", border: "#f6ad55" };
    case "danger":
      return { bg: "#fff5f5", text: "#c53030", border: "#fc8181" };
    default:
      return { bg: "#f7fafc", text: "#4a5568", border: "#cbd5e0" };
  }
};

const BadgeContainer = styled.span<{ variant: BadgeVariant }>`
  display: inline-flex;
  align-items: center;
  padding: 0.125rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.25;
  background-color: ${(props) => getVariantStyles(props.variant).bg};
  color: ${(props) => getVariantStyles(props.variant).text};
  border: 1px solid ${(props) => getVariantStyles(props.variant).border};
  white-space: nowrap;
`;

export const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  children,
}) => {
  return <BadgeContainer variant={variant}>{children}</BadgeContainer>;
};
