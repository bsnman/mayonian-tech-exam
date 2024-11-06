import React, { useState, useRef, ReactNode, useEffect } from "react";
import styles from "./Carousel.module.scss";

interface CarouselProps {
  children: ReactNode[];
  autoScroll?: boolean;
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoScroll = false,
  interval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const slidesRef = useRef<HTMLDivElement>(null);
  const [skipAutoScroll, setSkipAutoScroll] = useState<boolean>(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;

    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swipe left (next)
      setSkipAutoScroll(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === children.length - 1 ? 0 : prevIndex + 1
      );
    } else if (distance < -minSwipeDistance) {
      // Swipe right (previous)
      setSkipAutoScroll(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? children.length - 1 : prevIndex - 1
      );
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    if (!autoScroll) return;
    if (skipAutoScroll) {
      setSkipAutoScroll(false);
      return;
    }

    const autoScrollInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === children.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(autoScrollInterval);
  }, [autoScroll, interval, children.length, skipAutoScroll]);

  return (
    <div
      className={styles.carousel}
      ref={slidesRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={styles.slides}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children.map((child, index) => (
          <div className={styles.slide} key={index}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
