import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { fetchGameProviders } from "src/services/gameProviderService";
import { GameProvider } from "src/types/game";

interface HomePageState {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  error: string | null;
  gameProviders: GameProvider[];
  selectedGameProviderId: number | null;
  selectedGame: GameProvider | undefined;
  setSelectedGameProviderId: (gameProviderId: number | null) => void;
}

const GameProviderContext = createContext<HomePageState | undefined>(undefined);

export const GameProviderProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [gameProviders, setGameProviders] = useState<GameProvider[]>([]);
  const [selectedGameProviderId, setSelectedGameProviderId] = useState<
    number | null
  >(null);

  const selectedGame = useMemo(
    () =>
      gameProviders.find(
        (gameProvider) => gameProvider.id === selectedGameProviderId
      ),
    [gameProviders, selectedGameProviderId]
  );

  useEffect(() => {
    const loadGameProviders = async () => {
      setIsLoading(true);
      try {
        const gamesData = await fetchGameProviders();
        setGameProviders(gamesData);
      } catch {
        setError("Failed to fetch games providers");
      } finally {
        setIsLoading(false);
      }
    };

    loadGameProviders().catch((err) => {
      console.log("Unknown error occured", err);
    });
  }, []);

  return (
    <GameProviderContext.Provider
      value={{
        isOpen,
        setIsOpen,
        isLoading,
        setIsLoading,
        error,
        gameProviders,
        selectedGameProviderId,
        selectedGame,
        setSelectedGameProviderId,
      }}
    >
      {children}
    </GameProviderContext.Provider>
  );
};

export const useGameProviderState = (): HomePageState => {
  const context = useContext(GameProviderContext);
  if (!context) {
    throw new Error(
      "useGameProviderState must be used within a GameProviderProvider"
    );
  }
  return context;
};
