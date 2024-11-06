import React from "react";
import styles from "./Home.module.scss";
import HomeCarousel from "src/components/HomeCarousel";
import { HomePageProvider } from "src/contexts/HomePageContext";
import HomeGameList from "src/components/HomeGameList";
import {
  GameProviderProvider,
  useGameProviderState,
} from "src/contexts/GameProviderContext";
import GameProvider from "src/components/GameProvider";

const HomePage: React.FC = () => {
  const { isOpen } = useGameProviderState();

  return (
    <div className={styles.home}>
      <HomeCarousel />
      <HomeGameList />

      <div
        className={`${styles.gameProviderContainer} ${isOpen ? styles.show : styles.hide}`}
      >
        <div className={styles.gameProviderList}>
          <GameProvider />
        </div>
        <div className={styles.backDrop}></div>
      </div>
    </div>
  );
};

const HomePageWrapper: React.FC = () => {
  return (
    <HomePageProvider>
      <GameProviderProvider>
        <HomePage />
      </GameProviderProvider>
    </HomePageProvider>
  );
};

export default HomePageWrapper;
