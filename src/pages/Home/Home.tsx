import React from "react";
import styles from "./Home.module.scss";
import HomeCarousel from "src/components/HomeCarousel";
import { HomePageProvider } from "src/contexts/HomePageContext";
import HomeGameList from "src/components/HomeGameList";

const HomePage: React.FC = () => {
  return (
    <div className={styles.home}>
      <HomeCarousel />
      <HomeGameList />
    </div>
  );
};

const HomePageWrapper: React.FC = () => {
  return (
    <HomePageProvider>
      <HomePage />
    </HomePageProvider>
  );
};

export default HomePageWrapper;
