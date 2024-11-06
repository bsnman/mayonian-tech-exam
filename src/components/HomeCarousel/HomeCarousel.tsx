import React from "react";
import styles from "./HomeCarousel.module.scss";
import CarouselImage from "src/assets/Frame 18.webp";
import Carousel from "src/components/Carousel";
import BellIcon from "src/assets/bell-svgrepo-com 1.svg?react";

const HomeCarousel: React.FC = () => {
  const carouselItems = [
    {
      imgSrc: CarouselImage,
      icon: <BellIcon />,
      text: "¡FELICIDADES artxxxxipa! GANADOR DESTACADO",
    },
    {
      imgSrc: CarouselImage,
      icon: <BellIcon />,
      text: "¡FELICIDADES artxxxxipa! GANADOR DESTACADO",
    },
    {
      imgSrc: CarouselImage,
      icon: <BellIcon />,
      text: "¡FELICIDADES artxxxxipa! GANADOR DESTACADO",
    },
  ];

  return (
    <div className={styles.homeCarousel}>
      <Carousel autoScroll={true}>
        {carouselItems.map((item, index) => (
          <div className={styles.carouselItem} key={index}>
            <img className={styles.carouselItemImage} src={item.imgSrc} />
            <div className={styles.carouselItemText}>
              {item.icon}
              {item.text}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
