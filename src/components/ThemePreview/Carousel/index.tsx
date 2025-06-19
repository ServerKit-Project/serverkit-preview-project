import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  CarouselContainer,
  CarouselTrack,
  CarouselSlide,
  CarouselButton,
  DotsContainer,
  Dot,
} from "@/components/complex/Carousel";

export const CarouselPreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      content: (
        <div
          style={{
            height: "300px",
            background: "#4A90E2",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
          }}
        >
          슬라이드 1
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div
          style={{
            height: "300px",
            background: "#50C878",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
          }}
        >
          슬라이드 2
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div
          style={{
            height: "300px",
            background: "#E25141",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
          }}
        >
          슬라이드 3
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <CarouselContainer>
      <CarouselTrack $currentIndex={currentIndex}>
        {slides.map((slide) => (
          <CarouselSlide key={slide.id}>{slide.content}</CarouselSlide>
        ))}
      </CarouselTrack>

      <CarouselButton $direction="prev" onClick={prevSlide}>
        <ChevronLeft size={24} />
      </CarouselButton>

      <CarouselButton $direction="next" onClick={nextSlide}>
        <ChevronRight size={24} />
      </CarouselButton>

      <DotsContainer>
        {slides.map((_, index) => (
          <Dot
            key={index}
            $isActive={currentIndex === index}
            onClick={() => goToSlide(index)}
          />
        ))}
      </DotsContainer>
    </CarouselContainer>
  );
};
