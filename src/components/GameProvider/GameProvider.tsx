import React from "react";
import styles from "./GameProvider.module.scss";
import CloseIcon from "src/assets/close.svg?react";

import SearchListIcon from "src/assets/search_list.svg?react";
import Button from "../Button";
import { useGameProviderState } from "src/contexts/GameProviderContext";

const GameProvider: React.FC = () => {
  const { gameProviders, setIsOpen } = useGameProviderState();

  return (
    <div className={styles.gameProvider}>
      <div className={styles.header}>
        <div className={styles.left}>
          <SearchListIcon className={styles.searchListIcon} />
          Game Provider
          <div className={styles.tag}>119</div>
        </div>
        <div className={styles.right}>
          <Button onClick={() => setIsOpen(false)}>
            <CloseIcon className={styles.closeIcon} />
          </Button>
        </div>
      </div>

      <div className={styles.gameProviderList}>
        {gameProviders.map((gameProvider) => (
          <div className={styles.gameProviderItem} key={gameProvider.id}>
            <img title={gameProvider.name} src={gameProvider.imgSrc} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameProvider;
