/**
 * Represents Monopoly Square.
 */
import {zones} from './enums';
import {ISquare, IPlayer} from './interfaces';
import { Player } from './Player';
import {PropertyInfo} from '../Types'
import { takeRightWhile } from 'lodash';

export class Square implements PropertyInfo {

  protected nextSquare: Square;
  public buyable: boolean;
  public price: number;
  public owned: boolean;
  public rent: number=0;
  public owner: any;
  public railroads: boolean;
  public util: boolean;
  public tax:boolean;
  public zone: number;

  constructor(public readonly name: string, public index: number) {
      this.nextSquare= new Square("placeholder",0);
      this.owner=null;
      this.buyable=true;
      this.price=0;
      this.owned=false;
      this.railroads=false;
      this.util=false;
      this.tax=false;
      this.zone=0;
      if(index>0&&index<10){
        this.zone=zones.red;
      }
      else if(index>10&&index<20){
        this.zone=zones.yellow;
      }
      else if(index>20&&index<30){
        this.zone=zones.blue;
      }
      else if(index>30){
        this.zone=zones.green;
      }
  }
  public setOwned(b: boolean){
    this.owned=b;
  }
  public setOwner(p: Player){
    this.owner=p;
    this.owned=true;
  }
  public setRent(n: number){
      this.rent=n;
  }
  public setBuyable(change:boolean){
    this.buyable=change;
  }
  public setPrice(p: number){
    this.price=p;
  }
  public getName(): string {
    return this.name;
  }
  public getOwner(){
    return this.owner;
  }
  public getPrice():number{
    return this.price;
  }
  public isBuyable():boolean{
    return this.buyable;
  }
  public getIndex(): number {
    return this.index;
  }
  public isOwned(): boolean{
    return this.owned;
  }
  public getRent(): number{
    return this.rent;
  }
  public getNextSquare(): Square {
    return this.nextSquare;
  }
  public isRR(){
    return this.railroads;
  }
  public setRR(b:boolean){
    this.railroads=b;
  }
  public setNextSquare(nextSquare: Square): void {
    this.nextSquare = nextSquare;
  }
  public isUtil(){
    return this.util;
  }
  public setUtil(b:boolean){
    this.util=b;
  }
  public isTax(){
    return this.tax;
  }
  public setTax(b:boolean){
    this.tax=b;
  }
  public getZone(){
    return zones[this.zone];
  }

}
