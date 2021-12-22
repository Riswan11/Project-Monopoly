/**
 * Represents Monopoly Interfaces.
 */

import {PieceName, teams} from './enums';
import { Player } from './Player';
import { Square } from './Square';
import { ACard } from './Deck';
import { PlayerModel } from '../Types';

export interface IMonopolyGame {
  playGame: () => void;
  getnumPlayers: () => number;
}

export interface IDice {
  roll(): void;
  getFaceValue(): number;
}

export interface IBoard {
  players:IPlayer[];
  init(): void;
  getSquare(start: ISquare, distance: number): ISquare;
  getStartSquare(): ISquare;
  assignBoard:(ps: IPlayer[]) => void;
  increasePot:(n:number)=> void;
  resetPot:()=>void;
  getPot:()=> number;
  getJail:()=>ISquare;
  getSquarebyIndex:(n:number)=>ISquare;
  getBoardArr:()=>ISquare[];
  //getnumPlayers: () => number;
}

export interface ISquare {
  name: string;
  index: number;
  getName: () => string;
  getIndex: () => number;
  getNextSquare: () => ISquare;
  setNextSquare: (nextSquare: ISquare) => void;
  setPrice:(p: number)=>void;
  setRent:(p: number)=>void;
  setOwned: (b: boolean) =>void;
  setBuyable:(change:boolean) =>void;
  setOwner: (o:Player)=> void;
  getPrice: () => number;
  isBuyable: () =>boolean;
  isOwned: () =>boolean;
  getRent: () =>number;
  getOwner:()=> Player;
  isRR:()=>boolean;
  setRR:(b:boolean)=>void;
  isUtil:()=>boolean;
  setUtil:(b: boolean)=>void;
  isTax:()=> boolean;
  setTax:(b: boolean)=>void;
  getZone:()=> string;
}

export interface IPiece {
  name: PieceName;
  location: Square;
  getPieceName: () => string;
  getLocation: () => Square;
  setLocation: (location: Square) => void;
}

export interface IPlayer {
  name: string;
  piece: IPiece;
  board: IBoard;
  die: IDice[];
  takeTurn: () => void;
  getName: () => string;
  getLocation: () => Square;
  getCircuitsCompleted: () => number;
  pay:(n:number)=>void;
  setMoney:()=> void;
  getMoney:()=>number;
  addRR:()=>void;
  getRR:()=> number;
  addUtil:()=>void;
  getUtil:()=>number;
  setJail:(b: boolean)=> void;
  getJail:()=> boolean;
  getJailTurns:()=>number;
  increaseJailTurns:()=> void;
  resetJailTurns:()=>void;
  setTeam:(t: keyof typeof teams)=> void;
  getTeam:()=>string;
  // setTurn:(b: boolean)=>void;
  // getTurn:()=>boolean;
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
  toString:()=>void;
  getId:()=>number;
}

//export {IMonopolyGame, IDice, IBoard, ISquare, IPiece, IPlayer, IDeck, ICard};
