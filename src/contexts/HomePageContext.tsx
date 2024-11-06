import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
  useCallback,
} from "react";
import { fetchGames, toggleGameFavorite } from "src/services/gameService";
import { GameCategory, GameData } from "src/types/game";

interface LoadGamesProps {
  searchKey?: string;
  category?: GameCategory;
  gameProviderId?: number | null;
}

interface HomePageState {
  isLoading: boolean;
  games: GameData[];
  isSearching: boolean;
  error: string | null;
  selectedCategory: GameCategory;
  setGames: (games: GameData[]) => void;
  setIsLoading: (loading: boolean) => void;
  setIsSearching: (loading: boolean) => void;
  setSelectedCategory: (category: GameCategory) => void;
  loadGames: (props: LoadGamesProps) => Promise<void>;
  toggleFavorite: (gameId: number) => Promise<void>;
}

const HomePageContext = createContext<HomePageState | undefined>(undefined);

export const HomePageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [games, setGames] = useState<GameData[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<GameCategory>(
    GameCategory.START
  );

  const loadGames = useCallback(
    async ({ searchKey, category, gameProviderId }: LoadGamesProps) => {
      setIsLoading(true);
      try {
        const gamesData = await fetchGames({
          category: category,
          searchKey: searchKey,
          gameProviderId: gameProviderId,
        });
        setGames(gamesData as GameData[]);
      } catch {
        setError("Failed to fetch games");
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const toggleFavorite = async (gameId: number) => {
    const currentGame = games.find((game) => game.id === gameId);

    if (currentGame === undefined) {
      throw new Error("Game not found");
    }

    const isFavorite = currentGame.favorite;
    setGames((prevState) => {
      const gameIndex = prevState.findIndex((game) => game.id === gameId);

      if (gameIndex !== -1) {
        const updatedGames = [
          ...prevState.slice(0, gameIndex),
          {
            ...prevState[gameIndex],
            favorite: !isFavorite,
          },
          ...prevState.slice(gameIndex + 1),
        ];
        return updatedGames;
      }

      return prevState;
    });
    await toggleGameFavorite({ gameId });
  };

  useEffect(() => {
    if (!isSearching) {
      loadGames({ category: selectedCategory }).catch((err: unknown) => {
        console.log("Unknown error occured", { err });
      });
    }
  }, [loadGames, isSearching, selectedCategory]);

  return (
    <HomePageContext.Provider
      value={{
        isLoading,
        setIsLoading,
        isSearching,
        setIsSearching,
        error,
        games,
        loadGames,
        setGames,
        selectedCategory,
        setSelectedCategory,
        toggleFavorite,
      }}
    >
      {children}
    </HomePageContext.Provider>
  );
};

export const useHomePageState = (): HomePageState => {
  const context = useContext(HomePageContext);
  if (!context) {
    throw new Error("useHomePageState must be used within a HomePageProvider");
  }
  return context;
};
