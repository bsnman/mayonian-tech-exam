export enum GameCategory {
  START = "START",
  NEW = "NEW",
  SLOTS = "SLOTS",
  LIVE = "LIVE",
  JACKPOTS = "JACKPOTS",
}

export interface GameData {
  name: string;
  imgSrc: string;
  category: GameCategory;
}
