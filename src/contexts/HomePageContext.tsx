import React, {
  createContext,
  useState,
  ReactNode,
  useMemo,
  useContext,
  useEffect,
} from "react";
import { fetchGames } from "src/services/gameService";
import { GameCategory, GameData } from "src/types/game";

interface HomePageState {
  isLoading: boolean;
  games: GameData[];
  isSearching: boolean;
  error: string | null;
  filteredGames: GameData[];
  selectedCategory: GameCategory;
  setGames: (games: GameData[]) => void;
  setIsLoading: (loading: boolean) => void;
  setIsSearching: (loading: boolean) => void;
  setSelectedCategory: (category: GameCategory) => void;
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
  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      return game.category === selectedCategory;
    });
  }, [games, selectedCategory]);

  useEffect(() => {
    const loadGames = async () => {
      try {
        const gamesData = await fetchGames({ category: selectedCategory });
        setGames(gamesData as GameData[]);
      } catch {
        setError("Failed to fetch games");
      } finally {
        setIsLoading(false);
      }
    };

    setIsLoading(true);
    loadGames().catch((err: unknown) => {
      console.log("Unknown error occured", { err });
    });
  }, [selectedCategory]);

  return (
    <HomePageContext.Provider
      value={{
        isLoading,
        setIsLoading,
        isSearching,
        setIsSearching,
        error,
        games,
        setGames,
        filteredGames,
        selectedCategory,
        setSelectedCategory,
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
