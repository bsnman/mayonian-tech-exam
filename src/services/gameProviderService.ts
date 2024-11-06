import { GameProvider } from "src/types/game";

const gameProviders: GameProvider[] = [
  {
    id: 1,
    name: "Evo",
    imgSrc: "/assets/game_providers/EVO.webp",
  },
  {
    id: 2,
    name: "Expanse",
    imgSrc: "/assets/game_providers/EXPANSE.webp",
  },
  {
    id: 3,
    name: "EZG",
    imgSrc: "/assets/game_providers/EZG.webp",
  },
  {
    id: 4,
    name: "Game Art",
    imgSrc: "/assets/game_providers/GAMEART.webp",
  },
  {
    id: 5,
    name: "Habanero",
    imgSrc: "/assets/game_providers/HAB.webp",
  },
  {
    id: 6,
    name: "Hacksaw Gaming",
    imgSrc: "/assets/game_providers/HACKSAW.webp",
  },
  {
    id: 7,
    name: "MPlay",
    imgSrc: "/assets/game_providers/MPLAY.webp",
  },
  {
    id: 8,
    name: "Play N Go",
    imgSrc: "/assets/game_providers/PNG.webp",
  },
  {
    id: 9,
    name: "Playson",
    imgSrc: "/assets/game_providers/PS.webp",
  },
  {
    id: 10,
    name: "Playtech",
    imgSrc: "/assets/game_providers/PT.webp",
  },
  {
    id: 11,
    name: "Relax Gaming",
    imgSrc: "/assets/game_providers/RELAX.webp",
  },
  {
    id: 12,
    name: "Every Matrix",
    imgSrc: "/assets/game_providers/EM.webp",
  },
  {
    id: 13,
    name: "Inbet Games",
    imgSrc: "/assets/game_providers/INBET.webp",
  },
  {
    id: 14,
    name: "NetENT",
    imgSrc: "/assets/game_providers/NETENT (1).webp",
  },
  {
    id: 15,
    name: "PG Slot Gamestop",
    imgSrc: "/assets/game_providers/PGSOFT.webp",
  },
  {
    id: 16,
    name: "Pragmatic Play",
    imgSrc: "/assets/game_providers/PP.webp",
  },
  {
    id: 17,
    name: "Red Tiger",
    imgSrc: "/assets/game_providers/REDTIGER.webp",
  },
];

export const fetchGameProviders = async (): Promise<GameProvider[]> => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(gameProviders);
    }, 2000);
  });
};
