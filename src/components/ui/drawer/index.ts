import styled from "styled-components";

type DrawerPlacement = "left" | "right" | "top" | "bottom";
type DrawerSize = "small" | "medium" | "large" | "extraLarge" | "full";

const getSize = (size: DrawerSize) => {
  switch (size) {
    case "small":
      return "280px";
    case "medium":
      return "320px";
    case "large":
      return "400px";
    case "extraLarge":
      return "560px";
    case "full":
      return "100%";
    default:
      return "320px";
  }
};

export const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  z-index: 50;
`;

export const DrawerContainer = styled.div<{
  $isOpen: boolean;
  $placement: DrawerPlacement;
  $size: DrawerSize;
}>`
  position: fixed;
  background: white;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  transition: transform 0.3s ease-in-out;
  z-index: 51;

  ${(props) => {
    const size = getSize(props.$size);
    switch (props.$placement) {
      case "left":
        return `
          top: 0;
          left: 0;
          bottom: 0;
          width: ${size};
          transform: translateX(${props.$isOpen ? "0" : "-100%"});
        `;
      case "right":
        return `
          top: 0;
          right: 0;
          bottom: 0;
          width: ${size};
          transform: translateX(${props.$isOpen ? "0" : "100%"});
        `;
      case "top":
        return `
          top: 0;
          left: 0;
          right: 0;
          height: ${size};
          transform: translateY(${props.$isOpen ? "0" : "-100%"});
        `;
      case "bottom":
        return `
          bottom: 0;
          left: 0;
          right: 0;
          height: ${size};
          transform: translateY(${props.$isOpen ? "0" : "100%"});
        `;
    }
  }}
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem;
  background: none;
  border: none;
  color: #a0aec0;
  cursor: pointer;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    color: #4a5568;
    background-color: #f7fafc;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #e2e8f0;
  }
`;

export const Content = styled.div`
  padding: 1.5rem;
  height: 100%;
  overflow-y: auto;
`;
