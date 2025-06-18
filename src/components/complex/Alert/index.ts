import styled from "styled-components";

type AlertVariant = "info" | "success" | "warning" | "error";

export const getAlertColor = (variant: AlertVariant) => {
  switch (variant) {
    case "success":
      return { bg: "#f0fff4", border: "#68d391", text: "#2f855a" };
    case "warning":
      return { bg: "#fffaf0", border: "#f6ad55", text: "#c05621" };
    case "error":
      return { bg: "#fff5f5", border: "#fc8181", text: "#c53030" };
    default:
      return { bg: "#ebf8ff", border: "#63b3ed", text: "#2b6cb0" };
  }
};

export const AlertContainer = styled.div<{ variant: AlertVariant }>`
  width: 100%;
  padding: 1rem;
  border-radius: 4px;
  border-left: 4px solid ${(props) => getAlertColor(props.variant).border};
  background-color: ${(props) => getAlertColor(props.variant).bg};
  color: ${(props) => getAlertColor(props.variant).text};
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
