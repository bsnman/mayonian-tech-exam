import { GameCategory, GameData } from "src/types/game";

interface FetchGameProps {
  category?: GameCategory;
  searchKey?: string;
}

export const fetchGames = async ({ category, searchKey }: FetchGameProps) => {
  const games: GameData[] = [
    {
      name: "Sugar Rsuh",
      imgSrc: "/assets/games/Group 70.webp",
      category: GameCategory.START,
    },
    {
      name: "Shrolin Crew",
      imgSrc: "/assets/games/Group 75.webp",
      category: GameCategory.START,
    },
    {
      name: "Big Bad Wolf",
      imgSrc: "/assets/games/Group 72.webp",
      category: GameCategory.START,
    },
    {
      name: "Book of Egypt",
      imgSrc: "/assets/games/Group 83.webp",
      category: GameCategory.START,
    },
    {
      name: "Pirates Power",
      imgSrc: "/assets/games/Group 84.webp",
      category: GameCategory.START,
    },
    {
      name: "Crocodile Blitz Extreme",
      imgSrc: "/assets/games/Group 85.webp",
      category: GameCategory.START,
    },
    {
      name: "Crocodile Blitz Extreme FB",
      imgSrc: "/assets/games/Group 85.webp",
      category: GameCategory.START,
    },
    {
      name: "Anaconda Wild 2: Powerplay Jackpot",
      imgSrc: "/assets/games/Group 86.webp",
      category: GameCategory.JACKPOTS,
    },
    {
      name: "Maya Jackpot",
      imgSrc: "/assets/games/Group 87.webp",
      category: GameCategory.JACKPOTS,
    },
    {
      name: "Beachlife",
      imgSrc: "/assets/games/Group 88.webp",
      category: GameCategory.START,
    },
    {
      name: "Azteca: Powerplay Jackpot",
      imgSrc: "/assets/games/Group 94.webp",
      category: GameCategory.JACKPOTS,
    },
    {
      name: "Inca Jackpot",
      imgSrc: "/assets/games/sw_ijp.webp.webp",
      category: GameCategory.JACKPOTS,
    },
    {
      name: "Empire Treasures: Pride of Persia",
      imgSrc: "/assets/games/sw_ijp.webp.webp",
      category: GameCategory.LIVE,
    },
  ];

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
