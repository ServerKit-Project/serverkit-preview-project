import styled from "styled-components";

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const CarouselTrack = styled.div<{ currentIndex: number }>`
  display: flex;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-${(props) => props.currentIndex * 100}%);
`;

export const CarouselSlide = styled.div`
  flex: 0 0 100%;
  width: 100%;
`;

export const CarouselButton = styled.button<{ direction: "prev" | "next" }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.direction === "prev" ? "left: 1rem;" : "right: 1rem;")}
  background: ${({ theme }) => theme.colors.pureWhite}CC;
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
  color: ${({ theme }) => theme.colors.text.primary};

  &:hover {
    background: ${({ theme }) => theme.colors.pureWhite};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
  }
`;

export const DotsContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 1;
`;

export const Dot = styled.button<{ isActive: boolean }>`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  border: none;
  background: ${(props) =>
    props.isActive
      ? props.theme.colors.primary
      : props.theme.colors.pureWhite + "CC"};
  cursor: pointer;
  padding: 0;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
  }
`;
