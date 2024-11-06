import { GameCategory, GameData } from "src/types/game";

interface FetchGameProps {
  category?: GameCategory;
}

export const fetchGames = async ({ category }: FetchGameProps) => {
  const games: GameData[] = [
    {
      name: "Sugar Rsuh",
      imgSrc: "src/assets/games/Group 70.webp",
      category: GameCategory.START,
    },
    {
      name: "Shrolin Crew",
      imgSrc: "src/assets/games/Group 75.webp",
      category: GameCategory.START,
    },
    {
      name: "Big Bad Wolf",
      imgSrc: "src/assets/games/Group 72.webp",
      category: GameCategory.START,
    },
    {
      name: "Book of Egypt",
      imgSrc: "src/assets/games/Group 83.webp",
      category: GameCategory.START,
    },
    {
      name: "Pirates Power",
      imgSrc: "src/assets/games/Group 84.webp",
      category: GameCategory.START,
    },
    {
      name: "Crocodile Blitz Extreme",
      imgSrc: "src/assets/games/Group 85.webp",
      category: GameCategory.START,
    },
    {
      name: "Crocodile Blitz Extreme FB",
      imgSrc: "src/assets/games/Group 85.webp",
      category: GameCategory.START,
    },
    {
      name: "Anaconda Wild 2: Powerplay Jackpot",
      imgSrc: "src/assets/games/Group 86.webp",
      category: GameCategory.JACKPOTS,
    },
    {
      name: "Maya Jackpot",
      imgSrc: "src/assets/games/Group 87.webp",
      category: GameCategory.JACKPOTS,
    },
    {
      name: "Beachlife",
      imgSrc: "src/assets/games/Group 88.webp",
      category: GameCategory.START,
    },
    {
      name: "Azteca: Powerplay Jackpot",
      imgSrc: "src/assets/games/Group 94.webp",
      category: GameCategory.JACKPOTS,
    },
    {
      name: "Inca Jackpot",
      imgSrc: "src/assets/games/sw_ijp.webp.webp",
      category: GameCategory.JACKPOTS,
    },
    {
      name: "Empire Treasures: Pride of Persia",
      imgSrc: "src/assets/games/sw_ijp.webp.webp",
      category: GameCategory.LIVE,
    },
  ];

  const filteredGames = games.filter((game) => game.category === category);

  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(filteredGames);
    }, 2000);
  });
};
