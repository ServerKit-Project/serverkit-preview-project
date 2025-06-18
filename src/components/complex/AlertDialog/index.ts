import styled from "styled-components";

export const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const DialogContainer = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  font-weight: 600;
`;

export const Description = styled.p`
  margin: 0 0 1.5rem 0;
  color: #4a5568;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

export const Button = styled.button<{ variant?: "danger" | "default" }>`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  background-color: ${(props) =>
    props.variant === "danger" ? "#e53e3e" : "#e2e8f0"};
  color: ${(props) => (props.variant === "danger" ? "white" : "black")};

  &:hover {
    background-color: ${(props) =>
      props.variant === "danger" ? "#c53030" : "#cbd5e0"};
  }
`;
