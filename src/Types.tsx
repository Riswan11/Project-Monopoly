export enum PlayerTeam {
  Stripes = 'Stripes',
  Stars = 'Stars',
}
export interface PlayerModel {
  name: string,
  team: PlayerTeam,
  token: PlayerToken;
  inJail: boolean;
  railroads:number,
  utilities: number,
  jailTurns:number, 
  jailbreak:number,
}

export function createPlayerModel(n: string, t: PlayerToken) {

  return {
    name: n, team: PlayerTeam.Stars, token: t, inJail: false, railroads: 0, utilities: 0, jailTurns:0, jailbreak:0
  }
}

export enum PlayerToken {
  addPlayer = "addPlayer",
  pool = "pool",
  dartboard = 'dartboard',
  heart = 'heart',
  ghost = 'ghost',
  bomb = 'bomb',
  diamond='diamond',
  trophy = 'trophy',
  spinner = 'spinner'
}

export interface PlayerLocation {
  position: number,
  token: PlayerToken
}
// export interface IPiece {
//   token: PlayerToken;
//   location: ISquare;
//   // getPieceName: () => string;
//   // getLocation: () => ISquare;
//   // setLocation: (location: ISquare) => void;
// }
export interface PropertyInfo {
  name: string,
  buyable: boolean,
  price: number,
  owned: boolean,
  rent: number,
  railroads: boolean,
  util: boolean,
  tax:boolean,
  zone: number,
  index:number,
  owner?:PlayerModel,
  // price: number,
  // rent: number,
  // mortgage: number,
  // isLand: boolean,
  // costOfHouse?: number
}
export interface IDice {
  roll(): void;
  getFaceValue(): number;
}

export interface AssetsModel {
  amount: number;
  properties: PropertyInfo[];
}

export enum TileRotation {
  rotate0 = 'rotate0',
  rotate45 = 'rotate45',
  rotate90 = 'rotate90',
  rotate180 = 'rotate180',
  rotate135 = 'rotate135',
  rotate225 = 'rotate225',
  rotate270 = 'rotate270',
  rotate315 = 'rotate315',
}
export interface IDeck{
  cards: ICard[];
  top: number;
  addCard:(c:ICard)=>void;
  toString:()=>void;
  createChance:(n:number)=>void;
  createCommunity:(n:number)=>void;
  drawCard:()=>ICard;
  shuffle:()=>void;
  buildDeck:()=>void;
}

export interface ICard{
  content: string;
  toString:()=>string;
  getId:()=>number;
}
export interface IBoard {
  players:PlayerModel[];
  squares: PropertyInfo[];
}
export interface ISquare {
  name: string;
  index: number;
}