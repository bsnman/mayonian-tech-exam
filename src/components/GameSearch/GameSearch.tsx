import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import styles from "./GameSearch.module.scss";
import Button from "src/components/Button";
import SearchIcon from "src/assets/search.svg?react";
import SearchListIcon from "src/assets/search_list.svg?react";
import { useHomePageState } from "src/contexts/HomePageContext";
import LoadingComponent from "src/components/LoadingComponent";
import GameGallery from "src/components/GameGallery";
import CloseIcon from "src/assets/close.svg?react";

import { useGameProviderState } from "src/contexts/GameProviderContext";

const GameSearch: React.FC = () => {
  const { loadGames, games, isLoading, setGames } = useHomePageState();
  const {
    setIsOpen,
    selectedGameProviderId,
    selectedGame,
    setSelectedGameProviderId,
  } = useGameProviderState();
  const [invalidSearcKey, setInvalidSearchKey] = useState<boolean>(false);

  const [searchKey, setSearchKey] = useState<string>("");

  const onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearchClick();
    }
  };

  const onSearchClick = () => {
    if (searchKey === "") {
      setInvalidSearchKey(true);
      return;
    }
    void loadGames({ searchKey, gameProviderId: selectedGameProviderId });
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInvalidSearchKey(false);
    setSearchKey(e.target.value);
  };

  const onFilterGameProvider = () => {
    setIsOpen(true);
  };

  const removeGameProviderFilter = () => {
    setSelectedGameProviderId(null);
    setGames([]);
  };

  useEffect(() => {
    setSearchKey("");
    if (selectedGameProviderId) {
      void loadGames({ gameProviderId: selectedGameProviderId });
    }
  }, [selectedGameProviderId, loadGames]);

  return (
    <div className={styles.gameSearch}>
      <div className={styles.inputSearchBox}>
        <SearchIcon
          className={`${styles.searchIconInput} ${invalidSearcKey && styles.invalid}`}
        />
        <input
          className={`${styles.inputText} ${invalidSearcKey && styles.invalid}`}
          value={searchKey}
          onChange={onInputChange}
          onKeyUp={onKeyUp}
        />
        <Button onClick={onFilterGameProvider} className={styles.searchBtn}>
          <SearchListIcon className={styles.searchListIcon} />
        </Button>
      </div>
      {selectedGame ? (
        <>
          <div className={styles.gamesByContainer}>
            <div>Game Provider: {selectedGame.name} </div>
            <Button onClick={removeGameProviderFilter}>
              <CloseIcon className={styles.closeIcon} />
            </Button>
          </div>
        </>
      ) : null}
      <div className={styles.container}>
        {isLoading ? <LoadingComponent /> : <GameGallery games={games} />}
      </div>
    </div>
  );
};

export default GameSearch;
