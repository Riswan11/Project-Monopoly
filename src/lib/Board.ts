/**
 * Represents Monopoly Board.
 */

import {ISquare, IPlayer} from './interfaces';
import {Square} from './Square';
import { Player } from './Player';
import { isPlainObject } from 'lodash';
import { PlayerModel, IBoard, PropertyInfo } from '../Types';

export class Board implements IBoard {

  public squares: Array<Square>=[];
  public players: Array<PlayerModel>=[];
  public pot: number=0;;
  constructor(){
    this.squares = [];
    this.buildSquares();
    this.linkSquares();
    this.pot=0;
  }
  // public init(): void {
  //   console.log('Setting up Monopoly Board');
  //   this.squares = [];
  //   this.buildSquares();
  //   this.linkSquares();
  //   this.pot=0;
  // }
  // public getPlayers(): IPlayer[] {
  //   return this.players;
  // };
  public getSquare(start: number, distance: number): Square {
    const endIndex: number = (start + distance) % 40;
    return this.getSquarebyIndex(endIndex);
  }
  public getSquarebyIndex(index:number): Square{
    return this.squares[index];
  }
  public setPlayers(players: PlayerModel[]){
    this.players=players;
  }
  public getStartSquare(): Square {
    return this.squares[0];
  }
  public getBoardArr(){
    return this.squares;
  }
  public getJail(): Square {
    return this.squares[10];
  }
  public increasePot(n: number){
    this.pot+=n;
  }
  public resetPot(){
    this.pot=0;
  }
  public getPot(){
    return this.pot;
  }
  protected buildSquares(): void {
    for (let i: number = 0; i < 40; i++) {
      this.build(i);
      // console.log(i+" created " + this.squares[i].getName())
    }
  }
  public assignBoard(ps: Player[]): void {
    for (let i: number = 0; i< this.squares.length; i++) {
      if(this.squares[i].isBuyable()){
        if(i%2==0){
          this.squares[i].setOwner(ps[0]);
          if(this.squares[i].isUtil()){ps[0].addUtil();}
        }
        else{
          this.squares[i].setOwner(ps[1]);
          if(this.squares[i].isRR()){ps[1].addRR();}
          if(this.squares[i].isUtil()){ps[1].addUtil();}
        }
      }
    }
    console.log(ps[0].getName()+" owns "+ps[0].getRR()+" Railroads");
    console.log(ps[1].getName()+" owns "+ps[1].getRR()+" Railroads");
  }

  protected linkSquares(): void {
    for (let i: number = 0; i < this.squares.length - 1; i++) {
      this.link(i);
    }
    const first: Square = this.squares[0];
    const last: Square = this.squares[this.squares.length - 1];
    last.setNextSquare(first);
  }

  private build(i: number): void {
    if (i==0){
      const square: Square = new Square(`Go`, i);
      square.setBuyable(false);
      this.squares[i] = square;
    }
    if(i==1){
      const square: Square = new Square(`Mediterranean Avenue`, i);
      square.setPrice(60);
      square.setRent(2);
      this.squares[i] = square;
    }
    if(i==2||i==17||i==33){
      const square: Square = new Square(`Community Chest`, i);
      square.setBuyable(false);
      this.squares[i] = square;
    }
    if (i==3){
      const square: Square = new Square(`Baltic Ave`, i);
      square.setRent(4);
      square.setPrice(60);
      this.squares[i] = square;
    }
    if( i==4){
      const square: Square = new Square(`City Tax`, i);
      square.setTax(true);
      square.setPrice(200);
      square.setBuyable(false);
      this.squares[i] = square;
    }
    if(i==5){
      const square: Square = new Square(`Reading Railroad`, i);
      square.setRR(true);
      square.setPrice(200);
      this.squares[i] = square;
    }
    if(i==6){
      const square: Square = new Square(`Massachusetts Avenue`, i);
      square.setRent(6);
      square.setPrice(100);
      this.squares[i] = square;
    }
    if(i==7 ||i==22|| i==36){
      const square: Square = new Square('Chance', i);
      square.setBuyable(false);
      this.squares[i] = square;
    }
    if(i==8){
      const square: Square = new Square(`Vermont Avenue`, i);
      square.setRent(6);
      square.setPrice(100);
      this.squares[i] = square;
    }
    if(i==9){
      const square: Square = new Square(`Conneticut Avenue`, i);
      square.setRent(8);
      square.setPrice(120);
      this.squares[i] = square;
    }
    if(i==10){
      const square: Square = new Square(`Jail`, i);
      square.setBuyable(false);
      this.squares[i] = square;
    }
    if(i==11){
      const square: Square = new Square('St Charles Place', i);
      square.setRent(10);
      square.setPrice(140);
      this.squares[i] = square;
    }
    if(i==12){
      const square: Square = new Square(`Electrity Company`, i);
      square.setUtil(true);
      square.setPrice(150);
      this.squares[i] = square;
    }
    if(i==13){
      const square: Square = new Square(`States Avenue`, i);
      square.setRent(10);
      square.setPrice(140);
      this.squares[i] = square;
    }
    if(i==14){
      const square: Square = new Square(`Virginia Avenue`, i);
      square.setRent(12);
      square.setPrice(160);
      this.squares[i] = square;
    }
    if(i==15){
      const square: Square = new Square(`Pennsylvania Railroad`, i);
      square.setRR(true);
      square.setPrice(200);
      this.squares[i] = square;
    }
    if(i==16){
      const square: Square = new Square(`St James Place`, i);
      square.setRent(14);
      square.setPrice(180);
      this.squares[i] = square;
    }
    if(i==18){
      const square: Square = new Square(`Tennessee Avenue`, i);
      square.setRent(14);
      square.setPrice(180);
      this.squares[i] = square;
    }
    if(i==19){
      const square: Square = new Square(`New York Avenue`, i);
      square.setRent(16);
      square.setPrice(200);
      this.squares[i] = square;
    }
    if(i==20){
      const square: Square = new Square(`Free Parking`, i);
      square.setBuyable(false);
      this.squares[i] = square;
    }
    if(i==21){
      const square: Square = new Square(`Kentucky Avenue`, i);
      square.setRent(18);
      square.setPrice(220);
      this.squares[i] = square;
    }
    if(i==23){
      const square: Square = new Square(`Indiana Avenue`, i);
      square.setRent(18);
      square.setPrice(220);
      this.squares[i] = square;
    }
    if(i==24){
      const square: Square = new Square(`Illinois Avenue`, i);
      square.setRent(20);
      square.setPrice(240);
      this.squares[i] = square;
    }
    if(i==25){
      const square: Square = new Square(`B&O Railroad`, i);
      square.setRR(true);
      square.setPrice(200);
      this.squares[i] = square;
    }
    if(i==26){
      const square: Square = new Square(`Atlantic Avenue`, i);
      square.setRent(22);
      square.setPrice(260);
      this.squares[i] = square;
    }
    if(i==27){
      const square: Square = new Square(`Ventnor Avenue`, i);
      square.setRent(22);
      square.setPrice(260);
      this.squares[i] = square;
    }
    if(i==28){
      const square: Square = new Square(`Water Works`, i);
      square.setUtil(true);
      square.setPrice(150);
      this.squares[i] = square;
    }
    if(i==29){
      const square: Square = new Square(`Marvin Gardens`, i);
      square.setRent(24);
      square.setPrice(280);
      this.squares[i] = square;
    }
    if(i==30){
      const square: Square = new Square(`Go To Jail`, i);
      square.setBuyable(false);
      this.squares[i] = square;
    }
    if(i==31){
      const square: Square = new Square(`Pacific Avenue`, i);
      square.setRent(26);
      square.setPrice(300);
      this.squares[i] = square;
    }
    if(i==32){
      const square: Square = new Square(`North Carolina Avenue`, i);
      square.setRent(26);
      square.setPrice(300);
      this.squares[i] = square;
    }
    if(i==34){
      const square: Square = new Square(`Pennsylvania Avenue`, i);
      square.setRent(28);
      square.setPrice(320);
      this.squares[i] = square;
    }
    if(i==35){
      const square: Square = new Square(`Short Line`, i);
      square.setRR(true);
      square.setPrice(200);
      this.squares[i] = square;
    }
    if(i==37){
      const square: Square = new Square(`Park Place`, i);
      square.setRent(35);
      square.setPrice(350);
      this.squares[i] = square;
    }
    if(i==38){
      const square: Square = new Square(`Luxury Tax`, i);
      square.setTax(true);
      square.setPrice(100);
      square.setBuyable(false);
      this.squares[i] = square;
    }
    if(i==39){
      const square: Square = new Square(`Boardwalk`, i);
      square.setRent(50);
      square.setPrice(400);
      this.squares[i] = square;
    }
    // const square: Square = new Square(`Square ${i + 1}`, i);
    // this.squares[i] = square;
  }

  private link(i: number): void {
    const current: Square = this.squares[i];
    const next: Square = this.squares[i + 1];
    current.setNextSquare(next);
  }
  public getSquares(): Square[]{
    return this.squares;
  }

}
