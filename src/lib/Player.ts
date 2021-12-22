/**
 * Represents Monopoly Player.
 */

import {IBoard, IDice, IPiece, IPlayer, ISquare, IDeck,ICard} from './interfaces';
import {teams, zones} from './enums'
import {Square} from './Square'
import { PlayerTeam, PlayerModel, PlayerToken, PlayerLocation } from '../Types';
// import * as readline from 'readline';

export class Player implements PlayerModel {

  private circuitsCompleted: number = 0;
  name: string;
  team: PlayerTeam;
  token: PlayerToken;
  inJail: boolean;
  public money:number=0;
  public railroads: number;
  public util:number;
  public jailTurns:number;
  public jailbreak:number=0;
  public locindex:number;
  utilities: number;
  // public turn:boolean;
  
  constructor(name: string, team: PlayerTeam, token: PlayerToken, inJail: boolean ) {
    this.name=name;
    this.token=token;
    this.inJail=inJail;
    this.railroads=0;
    this.util=0;
    this.jailTurns=0;
    this.team=team;
    this.locindex=0;
    this.utilities=0;
    if (team=="Stars"){
      this.jailbreak=1;
    }
    else{
      this.jailbreak=0;
    }
  }
  // public takeTurn(): void {
  //   // const readline = require('readline');
    

  //   // let rl = readline.createInterface({
  //   //   input: process.stdin,
  //   //   output: process.stdout
  //   // });
  //   // console.log(`${this.name} is currently on ${this.token.location.getName()} $${this.piece.getLocation().getPrice()} (${this.piece.getLocation().getIndex()})`);
  //   // console.log(`${this.name} is taking their turn...`);
  //   let rollTotal: number = 0;
  //   let roll1:number=0;
  //   let double: boolean=false;
  //   // double=true;
  //   // this.die.forEach((dice: IDice) => {
  //   //   dice.roll();
  //   //   rollTotal += dice.getFaceValue();
  //   //   roll1=dice.getFaceValue();
  //   // });
  //   // if(roll1==rollTotal-roll1){
  //   //   double=true;
  //   // }
  //   if(this.getJail()){
  //       inJailBehavior(this, double, rollTotal);
  //   }
  //   else{
  //     // console.log("Rolled a "+rollTotal);
  //     const newLoc: ISquare = this.board.getSquare(this.piece.getLocation(), rollTotal);
  //     const oldLocationIndex: number = this.piece.getLocation().getIndex();
  //     const newLocationIndex: number = newLoc.getIndex();
  //     this.piece.setLocation(newLoc);
  //     console.log(`${this.name} is moving piece ${this.piece.getPieceName()} ${rollTotal} places from ${oldLocationIndex} to ${this.piece.getLocation().getName()} (${this.piece.getLocation().getIndex()})`+" in the "+this.piece.getLocation().getZone()+" zone.");
  //     if(newLoc.isBuyable()){
  //         if(!newLoc.isOwned()){
  //           if(this.getTeam()== "Stars"){
  //             console.log("do you want to buy "+newLoc.getName()+"? (y/n)");
  //           }
  //           else{
  //             if(newLoc.getZone()!=zones[3]){
  //               console.log("do you want to buy "+newLoc.getName()+"? (y/n)");
  //             }
  //             else{
  //               console.log("Sorry, "+newLoc.getName()+" is in the "+newLoc.getZone()+" zone. Players on the "+this.getTeam()+" team are not permitted to own property in this zone.");
  //             }
  //           }
  //           // console.log("do you want to buy "+newLoc.getName()+"? (y/n)");
  //           // console.log(newLoc.getName()+" is "+newLoc.isOwned());
  //         }
  //         else{
              // if(newLoc.getOwner().getName()===(this.getName())){
              //   console.log("You own this property!");
              // }
              // else{
              //   if(newLoc.isRR()){
              //     let rent=0; 
              //     if(newLoc.getOwner().getRR()==1 ||newLoc.getOwner().getRR()==2){
              //         rent=25*newLoc.getOwner().getRR();
              //     }
              //     else if(newLoc.getOwner().getRR()==3){rent=100;}
              //     else{rent=200;}
              //     this.money-=rent;
              //     newLoc.getOwner().pay(rent);
              //     console.log(this.name+ " paid " +newLoc.getOwner().getName() +" $"+ rent+" in rent");
              //     console.log(this.name +" now has $"+this.getMoney());
              //     console.log(newLoc.getOwner().getName()+ " has $"+newLoc.getOwner().getMoney());
              //   }
              //   else if(newLoc.isUtil()){
              //     let rent=0;
              //     if(newLoc.getOwner().getUtil()==1){
              //       rent=4*rollTotal;
              //     }
              //     else if(newLoc.getOwner().getUtil()==2){
              //       rent=10*rollTotal;
              //     }
              //     this.money-=rent;
              //     newLoc.getOwner().pay(rent);
              //     console.log(this.name+ " paid " +newLoc.getOwner().getName() +" $"+ rent+" in rent");
              //     console.log(this.name +" now has $"+this.getMoney());
              //     console.log(newLoc.getOwner().getName()+ " has $"+newLoc.getOwner().getMoney());
              //   }
              //   else{
              //     this.money-=newLoc.getRent();
              //     newLoc.getOwner().pay(newLoc.getRent());
              //     console.log(this.name+ " paid " +newLoc.getOwner().getName() +" $"+ newLoc.getRent()+" in rent");
              //     console.log(this.name +" now has $"+this.getMoney());
              //     console.log(newLoc.getOwner().getName()+ " has $"+newLoc.getOwner().getMoney());
              //   }
              // }
  //             // console.log("do you want to buy "+newLoc.getName());
  //         }
  //     }
  //     else{
      //   if (newLoc.isTax()){
      //     this.money-=newLoc.getPrice();
      //     this.board.increasePot(newLoc.getPrice());
      //     console.log(this.name+ " paid $"+ newLoc.getPrice()+" to the pot");
      //     console.log("pot total: $"+this.board.getPot());
      //   }
      //   else if(newLoc.getIndex()==20){
      //     if(this.getTeam()=="Stars"){
      //       this.pay(this.board.getPot());
      //       console.log(this.getName()+" got paid $"+this.board.getPot()+" from the pot");
      //       this.board.resetPot();
      //       console.log("pot reset to: $"+this.board.getPot());
      //     }
      //     else{
      //       console.log("No Loitering Stripes! Go directly to jail. Do not collect the pot.");
      //       goToJail(this);
      //     }
      //   }
      //   else if(newLoc.getIndex()==2||newLoc.getIndex()==17||newLoc.getIndex()==33){
      //     handleChanceCard(this,newLocationIndex);
      //   }
      //   else if(newLoc.getIndex()==7||newLoc.getIndex()==22||newLoc.getIndex()==36){
      //     handleChanceCard(this,newLocationIndex);
      //   }
      //   else if(newLoc.getIndex()==30){
      //     goToJail(this);
      //   }
      // }
    //   if (newLocationIndex < oldLocationIndex &&this.getJail()==false) {
    //     if(this.getTeam()== "Stars"){
    //       this.pay(200);
    //       console.log(`${this.name} passed GO! $200 for you!`);
    //     }
    //     else{
    //       this.pay(100);
    //       console.log(`${this.name} passed GO! $100 for you!`);
    //     }
    //     this.circuitsCompleted += 1;
    //   }
    // }
  // }
  public setMoney(){
    if (this.team==PlayerTeam.Stars){
      this.money=1500;
    }
    else{
      this.money=700;
    }
    // this.money=1500;
  }
  public pay(n: number){
    this.money+=n;
  }
  // public setTurn(b:boolean){
  //   this.turn=b;
  // }
  // public getTurn(){
  //   return this.turn;
  // }
  // public getLocation(): number {
  //   return this.token.position;
  // }
  // public setLocation(n: number): void  {
  //   this.token.position=n;
  // }
  public getName(): string {
    return this.name;
  }
  public getCircuitsCompleted(): number {
    return this.circuitsCompleted;
  }
  public getMoney(): number{
    return this.money;
  }
  public addRR(){
    this.railroads++;
  }
  public getRR(){
    return this.railroads;
  }
  public addUtil(){
    this.util++;
  }
  public getUtil(){
    return this.util;
  }
  public setJail(b: boolean){
    this.inJail=b;
  }
  public getJail(){
    return this.inJail;
  }
  public increaseJailTurns(){
    this.jailTurns++;
  }
  public resetJailTurns(){
    this.jailTurns=0;
  }
  public getJailTurns(){
    return this.jailTurns;
  }
  public setTeam(t: keyof typeof PlayerTeam){
    if(PlayerTeam[t]==PlayerTeam.Stars){
      this.team=PlayerTeam.Stars;
      this.jailbreak=1;
    }
    else{
      this.team=PlayerTeam.Stripes;
      this.jailbreak=0;
    }
  }
  public getTeam(){
    return PlayerTeam[this.team];
  }
}
// function goToJail(p: Player){
//   console.log(p.getName()+" has been sent to Jail");
//           let Jail: ISquare=p.board.getJail();
//           p.piece.setLocation(Jail);
//           console.log(p.getName()+ " is on "+p.piece.getLocation().getName());
//           p.increaseJailTurns();
//           p.setJail(true);
//     if(p.jailbreak>0){
//       console.log(p.getName()+" used a Get Out of Jail Free Card!");
//       p.jailbreak--;
//       p.setJail(false);
//     }
// }
// function inJailBehavior(p:Player,double:boolean, roll: number){
//     if(p.getJailTurns()==3&&!double&&p.getTeam()=="Stars"){
//       p.resetJailTurns();
//       p.pay(-100);
//       console.log(p.getName()+" paid $100 to get out of Jail");
//       p.setJail(false);
//     }
//     else if(p.getTeam()== "Stars" &&p.getTeam()=="Stars"){
//       if(p.getJailTurns()==3&&!double&&p.getTeam()=="Stars"){
//         p.resetJailTurns();
//         p.pay(-200);
//         console.log(p.getName()+" paid $200 to get out of Jail");
//         p.setJail(false);
//       }
//     }
//     else if ((p.getJailTurns()<=3&&double&&p.getTeam()=="Stars")||(p.getJailTurns()<=3&&double&&p.getTeam()=="Stripes")){
//       p.setJail(false);
//       const newLoc: ISquare = p.board.getSquare(p.piece.getLocation(), roll);
//       const oldLocationIndex: number = p.piece.getLocation().getIndex();
//       const newLocationIndex: number = newLoc.getIndex();
//       p.piece.setLocation(newLoc);
//       console.log(p.name+" rolled doubles and got out of jail! they're now on " +p.piece.getLocation().getName());
//       p.resetJailTurns();
//     }
//     else if(p.getJailTurns()==1&&!double&&p.getTeam()=="Stripes"){
//       console.log("Stripes players must remain in Jail for 1 turn.");

//     }
//     else{ 
//       p.increaseJailTurns();
//       console.log(p.getName()+" has been in Jail for "+p.jailTurns+" turns.");
//     }
// }
// function handleChanceCard(p: Player, newLocationIndex: number){
          // let c =p.decks[0].drawCard();
          // console.log("You drew: "+c.toString());
          // if(c.getId()==0){
          //   p.piece.setLocation(p.board.getStartSquare());
          //   console.log(p.getName()+ " has moved to "+p.piece.getLocation().getName());
          // }
          // else if(c.getId()==1){
          //   p.piece.setLocation(p.board.getSquarebyIndex(24));
          //   console.log(p.getName()+ " has moved to "+p.piece.getLocation().getName());
          // }
          // else if(c.getId()==2){
          //   p.piece.setLocation(p.board.getSquarebyIndex(11));
          //   console.log(p.getName()+ " has moved to "+p.piece.getLocation().getName());
          // }
          // else if(c.getId()==3){
          //   let closest=100;
          //   let closestUtil;
          //   for (let i=0; i<p.board.getBoardArr().length;i++){
          //     if(p.board.getBoardArr()[i].isUtil()){
          //       if(closest>Math.abs(newLocationIndex-p.board.getBoardArr()[i].getIndex())){
          //         closest=Math.abs(newLocationIndex-p.board.getBoardArr()[i].getIndex());
          //         closestUtil=p.board.getSquarebyIndex(i);
          //       }
          //     }
          //   }
          //   p.piece.setLocation(closestUtil);
          //   console.log(p.getName()+ " has moved to "+p.piece.getLocation().getName());
          // }
          // else if(c.getId()==4){
          //   let closest=100;
          //   let closestRR;
          //   for (let i=0; i<p.board.getBoardArr().length;i++){
          //     if(p.board.getBoardArr()[i].isRR()){
          //       if(closest>Math.abs(newLocationIndex-p.board.getBoardArr()[i].getIndex())){
          //         closest=Math.abs(newLocationIndex-p.board.getBoardArr()[i].getIndex());
          //         closestRR=p.board.getSquarebyIndex(i);
          //       }
          //     }
          //   }
          //   p.piece.setLocation(closestRR);
          //   //console.log(p.getName()+ " has moved to "+p.piece.getLocation().getName());
          // }
          // else if(c.getId()==5){
          //   p.pay(50);
          // }
          // else if(c.getId()==6){
          //   p.jailbreak++;
          // }
          // else if(c.getId()==7){
          //   p.piece.setLocation(p.board.getSquarebyIndex(newLocationIndex-3));
          //   //console.log(p.getName()+ " has moved to "+p.piece.getLocation().getName());
          // }
          // else if(c.getId()==8){
          //   p.pay(200);
          // }
          // else if(c.getId()==9){
          //   p.pay(-15);
          // }
          // else if(c.getId()==10){
          //   p.piece.setLocation(p.board.getSquarebyIndex(39));
          //   //console.log(p.getName()+ " has moved to "+p.piece.getLocation().getName());
          // }
          // else if(c.getId()==11){
          //   // let arr=p.board.getnumPlayers();
          //   // for(let i=0; i<arr.length;i++){
          //   //   // if(!(p===p.board.getPlayers[i])){
          //   //     p.pay(-50);
          //   //     p.board.getPlayers()[i].pay(50);
          //   //   // }
          //   // }
          // }
          // else if(c.getId()==12){
          //   p.pay(100);
          // }
          // else if(c.getId()==13){
          //   p.pay(150);
          // }
          // else if(c.getId()==14){
          //   goToJail(p);
          // }
          // else if(c.getId()==15){
          //   p.pay(-50);
          // }

// }
