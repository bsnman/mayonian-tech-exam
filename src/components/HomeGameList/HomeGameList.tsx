import React from "react";
import styles from "./HomeGameList.module.scss";
import Button from "src/components/Button";
import SearchIcon from "src/assets/search.svg?react";
import FireIcon from "src/assets/fire-svgrepo-com 1.svg?react";
import NewIcon from "src/assets/NEW.svg?react";
import DealerIcon from "src/assets/casino-dealer-illustration-2-svgrepo-com 1.svg?react";
import JackpotIcon from "src/assets/jackpots.svg?react";
import { useHomePageState } from "src/contexts/HomePageContext";
import { GameCategory } from "src/types/game";

const HomeGameList: React.FC = () => {
  const { selectedCategory, setSelectedCategory, isSearching, setIsSearching } =
    useHomePageState();

  const categories = [
    {
      text: "START",
      icon: <FireIcon />,
      type: GameCategory.START,
    },
    {
      text: "NEW",
      icon: <NewIcon />,
      type: GameCategory.NEW,
    },
    {
      text: "SLOTS",
      icon: <JackpotIcon />,
      type: GameCategory.SLOTS,
    },
    {
      text: "LIVE",
      icon: <DealerIcon />,
      type: GameCategory.LIVE,
    },
    {
      text: "JACKPOTS",
      icon: <JackpotIcon />,
      type: GameCategory.JACKPOTS,
    },
  ];

  const isActive = (categoryType: GameCategory): boolean => {
    return !isSearching && categoryType === selectedCategory;
  };

  const onCategoryClick = (categoryType: GameCategory) => {
    setIsSearching(false);
    setSelectedCategory(categoryType);
  };

  const onSearchClick = () => {
    setIsSearching(true);
  };

  return (
    <div className={styles.homeGameList}>
      <div className={styles.filterButtonsContainer}>
        <Button
          onClick={onSearchClick}
          className={`${styles.button} ${isSearching && styles.active}`}
        >
          <SearchIcon />
          SEARCH
        </Button>
        <div className={styles.divider} />

        {categories.map((category, index) => (
          <Button
            onClick={() => onCategoryClick(category.type)}
            className={`${styles.button} ${isActive(category.type) && styles.active}`}
            key={index}
          >
            {category.icon}
            {category.text}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default HomeGameList;
