import { GameCategory, GameData } from "src/types/game";

interface FetchGameProps {
  category?: GameCategory;
  searchKey?: string;
}

const games: GameData[] = [
  {
    id: 1,
    name: "Sugar Rush",
    imgSrc: "/assets/games/Group 70.webp",
    category: GameCategory.START,
    favorite: false,
  },
  {
    id: 2,
    name: "Shrolin Crew",
    imgSrc: "/assets/games/Group 75.webp",
    category: GameCategory.START,
    favorite: false,
  },
  {
    id: 3,
    name: "Big Bad Wolf",
    imgSrc: "/assets/games/Group 72.webp",
    category: GameCategory.START,
    favorite: false,
  },
  {
    id: 4,
    name: "Book of Egypt",
    imgSrc: "/assets/games/Group 83.webp",
    category: GameCategory.START,
    favorite: false,
  },
  {
    id: 5,
    name: "Pirates Power",
    imgSrc: "/assets/games/Group 84.webp",
    category: GameCategory.START,
    favorite: false,
  },
  {
    id: 6,
    name: "Crocodile Blitz Extreme",
    imgSrc: "/assets/games/Group 85.webp",
    category: GameCategory.START,
    favorite: false,
  },
  {
    id: 7,
    name: "Crocodile Blitz Extreme FB",
    imgSrc: "/assets/games/Group 85.webp",
    category: GameCategory.START,
    favorite: false,
  },
  {
    id: 8,
    name: "Anaconda Wild 2: Powerplay Jackpot",
    imgSrc: "/assets/games/Group 86.webp",
    category: GameCategory.JACKPOTS,
    favorite: false,
  },
  {
    id: 9,
    name: "Maya Jackpot",
    imgSrc: "/assets/games/Group 87.webp",
    category: GameCategory.JACKPOTS,
    favorite: false,
  },
  {
    id: 10,
    name: "Beachlife",
    imgSrc: "/assets/games/Group 88.webp",
    category: GameCategory.SLOTS,
    favorite: false,
  },
  {
    id: 11,
    name: "Azteca: Powerplay Jackpot",
    imgSrc: "/assets/games/Group 94.webp",
    category: GameCategory.JACKPOTS,
    favorite: false,
  },
  {
    id: 12,
    name: "Inca Jackpot",
    imgSrc: "/assets/games/sw_ijp.webp.webp",
    category: GameCategory.JACKPOTS,
    favorite: false,
  },
  {
    id: 13,
    name: "Empire Treasures: Pride of Persia",
    imgSrc: "/assets/games/sw_ijp.webp.webp",
    category: GameCategory.LIVE,
    favorite: false,
  },
];

export const fetchGames = async ({ category, searchKey }: FetchGameProps) => {
  let filteredGames = games;
  if (category) {
    filteredGames = filteredGames.filter((game) => game.category === category);
  }
  if (searchKey) {
    filteredGames = filteredGames.filter((game) =>
      game.name.toLowerCase().includes(searchKey.toLowerCase())
    );
  }

  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(filteredGames);
    }, 2000);
  });
};

interface ToggleGameFavoriteProps {
  gameId: number;
}

export const toggleGameFavorite = async ({
  gameId,
}: ToggleGameFavoriteProps): Promise<void> => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      const index = games.findIndex((game) => game.id === gameId);
      games[index].favorite = !games[index].favorite;
      resolve();
    }, 1000);
  });
};
