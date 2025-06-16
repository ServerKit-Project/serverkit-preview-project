import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';

interface CarouselContextValue {
  selectedIndex: number;
  slideCount: number;
  next: () => void;
  previous: () => void;
  goTo: (index: number) => void;
  isAutoplay: boolean;
  showDots?: boolean;
}

const CarouselContext = createContext<CarouselContextValue | null>(null);

export const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarousel must be used within a Carousel component');
  }
  return context;
};

export interface CarouselProps {
  /**
   * The content of the carousel
   */
  children: React.ReactNode;

  /**
   * Whether to enable autoplay
   * @default false
   */
  autoplay?: boolean;

  /**
   * Autoplay interval in milliseconds
   * @default 3000
   */
  interval?: number;

  /**
   * Whether to show navigation dots
   * @default true
   */
  showDots?: boolean;

  /**
   * Optional CSS class name for the root element
   */
  className?: string;

  /**
   * Optional CSS class name for the viewport element
   */
  viewportClassName?: string;

  /**
   * Optional CSS class name for the dots container
   */
  dotsClassName?: string;
}

const CarouselRoot = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const CarouselViewport = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 0.5rem;
`;

export const Carousel = ({
  children,
  autoplay = false,
  interval = 3000,
  showDots = true,
  className,
  viewportClassName,
  dotsClassName,
}: CarouselProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(autoplay);

  const next = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % slideCount);
  }, [slideCount]);

  const previous = useCallback(() => {
    setSelectedIndex((prev) => (prev - 1 + slideCount) % slideCount);
  }, [slideCount]);

  const goTo = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  // Update slide count when children change
  useEffect(() => {
    const content = React.Children.toArray(children).find(
      (child) => React.isValidElement(child) && child.type === CarouselContent
    );
    if (React.isValidElement(content)) {
      const items = React.Children.toArray(content.props.children);
      setSlideCount(items.length);
    }
  }, [children]);

  useEffect(() => {
    if (isAutoplay && slideCount > 0) {
      const timer = setInterval(next, interval);
      return () => clearInterval(timer);
    }
  }, [isAutoplay, interval, next, slideCount]);

  const contextValue = {
    selectedIndex,
    slideCount,
    next,
    previous,
    goTo,
    isAutoplay,
    showDots,
  };

  return (
    <CarouselContext.Provider value={contextValue}>
      <CarouselRoot 
        className={className}
        onMouseEnter={() => setIsAutoplay(false)}
        onMouseLeave={() => setIsAutoplay(autoplay)}
      >
        <CarouselViewport className={viewportClassName}>
          {children}
        </CarouselViewport>
        {showDots && <CarouselDots className={dotsClassName} />}
      </CarouselRoot>
    </CarouselContext.Provider>
  );
};

// CarouselContent Component
const StyledCarouselContent = styled.div<{ $selectedIndex: number }>`
  display: flex;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-${props => props.$selectedIndex * 100}%);
  width: 100%;
  height: 100%;
`;

export interface CarouselContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CarouselContent = ({ children, className }: CarouselContentProps) => {
  const { selectedIndex } = useCarousel();
  const childrenArray = React.Children.toArray(children);

  return (
    <StyledCarouselContent $selectedIndex={selectedIndex} className={className}>
      {childrenArray}
    </StyledCarouselContent>
  );
};

// CarouselItem Component
const StyledCarouselItem = styled.div`
  flex: 0 0 100%;
  min-width: 0;
  position: relative;
  padding: 0;
`;

export interface CarouselItemProps {
  children: React.ReactNode;
  className?: string;
}

export const CarouselItem = ({ children, className }: CarouselItemProps) => {
  return (
    <StyledCarouselItem className={className}>
      {children}
    </StyledCarouselItem>
  );
};

// Navigation Buttons
const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  border: none;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const PrevButton = styled(NavigationButton)`
  left: 1rem;
`;

const NextButton = styled(NavigationButton)`
  right: 1rem;
`;

export interface CarouselNavigationProps {
  className?: string;
}

export const CarouselPrevious = ({ className }: CarouselNavigationProps) => {
  const { previous } = useCarousel();
  return (
    <PrevButton onClick={previous} className={className} aria-label="Previous slide">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </PrevButton>
  );
};

export const CarouselNext = ({ className }: CarouselNavigationProps) => {
  const { next } = useCarousel();
  return (
    <NextButton onClick={next} className={className} aria-label="Next slide">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </NextButton>
  );
};

// Dots Component
const DotsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const Dot = styled.button<{ $isActive: boolean }>`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  border: none;
  background: ${props => props.$isActive ? 'currentColor' : 'rgba(0, 0, 0, 0.3)'};
  cursor: pointer;
  padding: 0;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.$isActive ? 'currentColor' : 'rgba(0, 0, 0, 0.5)'};
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);
  }
`;

export interface CarouselDotsProps {
  className?: string;
}

export const CarouselDots = ({ className }: CarouselDotsProps) => {
  const { selectedIndex, slideCount, goTo, showDots } = useCarousel();

  if (!showDots) return null;

  return (
    <DotsContainer className={className}>
      {Array.from({ length: slideCount }).map((_, index) => (
        <Dot
          key={index}
          $isActive={index === selectedIndex}
          onClick={() => goTo(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </DotsContainer>
  );
}; 