export enum GameCategory {
  START = "START",
  NEW = "NEW",
  SLOTS = "SLOTS",
  LIVE = "LIVE",
  JACKPOTS = "JACKPOTS",
}

export interface GameData {
  id: number;
  name: string;
  imgSrc: string;
  category: GameCategory;
  favorite: boolean;
  gameProviderId: number;
}

export interface GameProvider {
  id: number;
  name: string;
  imgSrc: string;
}
