import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import styles from "./GameSearch.module.scss";
import Button from "src/components/Button";
import SearchIcon from "src/assets/search.svg?react";
import SearchListIcon from "src/assets/search_list.svg?react";
import { useHomePageState } from "src/contexts/HomePageContext";
import LoadingComponent from "src/components/LoadingComponent";
import GameGallery from "../GameGallery";
import { useGameProviderState } from "src/contexts/GameProviderContext";

const GameSearch: React.FC = () => {
  const { loadGames, games, isLoading } = useHomePageState();
  const { setIsOpen } = useGameProviderState();
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
    void loadGames({ searchKey });
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInvalidSearchKey(false);
    setSearchKey(e.target.value);
  };

  const onFilterGameProvider = () => {
    setIsOpen(true);
  };

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
      <div className={styles.container}>
        {isLoading ? <LoadingComponent /> : <GameGallery games={games} />}
      </div>
    </div>
  );
};

export default GameSearch;
