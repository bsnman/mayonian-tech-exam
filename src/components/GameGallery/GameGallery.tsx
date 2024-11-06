import React from "react";
import styles from "./GameGallery.module.scss";
import Button from "src/components/Button";
import { GameData } from "src/types/game";
import StarIcon from "src/assets/FAVE.svg?react";
import { useHomePageState } from "src/contexts/HomePageContext";

interface GameGalleryProps {
  games: GameData[];
}

const GameGallery: React.FC<GameGalleryProps> = ({ games }) => {
  const { toggleFavorite } = useHomePageState();

  const onFaveClick = (game: GameData) => {
    void toggleFavorite(game.id);
  };

  return games.length === 0 ? (
    <div className={styles.noGames}>
      <div>No Games</div>
    </div>
  ) : (
    <div className={styles.gameListContainer}>
      {games.map((game) => (
        <div className={styles.gameListContainerItem} key={game.id}>
          <img src={game.imgSrc} />
          <Button className={styles.faveIcon} onClick={() => onFaveClick(game)}>
            <StarIcon className={game.favorite ? styles.favorite : ""} />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default GameGallery;
