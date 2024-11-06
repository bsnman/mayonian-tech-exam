import React from "react";
import styles from "./Home.module.scss";
import CarouselImage from "src/assets/Frame 18.webp";
import Carousel from "src/components/Carousel";
import BellIcon from "src/assets/bell-svgrepo-com 1.svg?react";

const Button: React.FC = () => {
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
    <div className={styles.home}>
      <Carousel autoScroll={true}>
        {carouselItems.map((item, index) => (
          <div className={styles["carousel-item"]} key={index}>
            <img className={styles["carousel-item-image"]} src={item.imgSrc} />
            <div className={styles["carousel-item-text"]}>
              {item.icon}
              {item.text}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Button;
