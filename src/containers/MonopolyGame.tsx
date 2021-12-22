import React, { Component } from 'react'
import GameHeader from '../components/GameHeader'
import PlayerAssets from '../components/PlayerAssets'
import Players from '../components/Players'
import {
  PlayerModel,
  AssetsModel,
  PlayerTeam,
  PropertyInfo,
  PlayerLocation,
} from '../Types'
import GameBoard from '../components/GameBoard/GameBoard'
import Card from '../components/GameBoard/Card'
// import {Deck} from '../lib/Deck';
import { ACard} from '../lib/ACard';
import { IDeck, ICard, IBoard } from '../Types';
import { Board } from '../lib/Board'
import { Square } from '../lib/Square'
import { isBuffer } from 'util'


interface Props {
  players: PlayerModel[]
}

interface State {
  currentIndex: number,
  playerLocations: PlayerLocation[],
  playerAssets: AssetsModel[],
  roll1: number,
  roll2:number,
  double:boolean,
  chance: ICard[],
  community: ICard[],
  top1: number, 
  top2: number, 
  board: PropertyInfo[];
  firstturn: boolean;
  turnnum:number;
  pot: number;
  lastLoc:number;
}

export default class MonopolyGame extends Component<Props, State> {
  totalBoardPositions = 40;
  state: State = {
    currentIndex: 0,
    playerLocations: this.props.players.map(player => {
      return {
        position: 0,
        token: player.token,
      };
    }),
    playerAssets: this.props.players.map(player => {
      if (player.team === PlayerTeam.Stars) {
        return {
          amount: 1500,
          properties: []
        };
      } else {
        return {
          amount: 700,
          properties: []
        };
      }
    }),
    roll1:0,
    roll2:0,
    double: false,
    chance: [],
    community: [],
    top1: 0, 
    top2:0,
    board: [],
    firstturn: true,
    turnnum:1,
    pot:0,
    lastLoc:0,
  }

  readonly playersCount = (): number => this.props.players.length;
  readonly currentPlayer = (): PlayerModel => this.props.players[this.state.currentIndex];
  readonly currentPlayerAssets = (): AssetsModel => this.state.playerAssets[this.state.currentIndex];
  getAssets=(p: PlayerModel): AssetsModel=> { 
    let a;
    for(let i=0; i< this.props.players.length;i++){
      if(this.props.players[i].name==p.name){
        a=this.state.playerAssets[i];
      }
    }
    return a;
  }
  readonly getLoc=(n: number): PropertyInfo=> this.state.board[n];
  readonly getNewLoc=(p: PropertyInfo, dist: number)=>(this.state.board[(p.index + dist) % 40])

  readonly onDiceRolled = (roll1: number, roll2:number,  double: boolean) => {
    let rollTotal=roll1+roll2;
    const playerLocation = this.state.playerLocations[this.state.currentIndex];
    const nextPosition = (playerLocation.position + rollTotal) % this.totalBoardPositions;
    const newPlayerLocations = [...this.state.playerLocations];
    if(this.state.firstturn){
      this.setState({firstturn:false, board:this.getBoard(), chance: this.createDeck(), community: this.createDeck()});
    }
    if(this.currentPlayer().inJail){
      this.inJailBehavior(double, nextPosition,playerLocation,newPlayerLocations);
    }
    else{
      newPlayerLocations[this.state.currentIndex] = {
        ...playerLocation,
        position: nextPosition
      };
      this.setState({ playerLocations: newPlayerLocations, roll1:roll1, roll2:roll2, double:double, lastLoc:playerLocation.position},this.checkMove);
    }
    // Update current player's position
  }
  checkMove=()=>{
      let b=this.state.board;
      let n=this.state.playerLocations[this.state.currentIndex].position;
      let newLoc=b[n];
      let rollTotal=this.state.roll1+this.state.roll2;
      let p=this.state.pot;
      // how can I get the new location?? Need to check index/name of loc to code behavior
      // Move to next player
      if(this.state.double){
        alert(this.currentPlayer().name + ' rolled a ' + this.state.roll1+" and a " +this.state.roll2+ ". You rolled doubles! You're now on "+newLoc.name.replace('<br/>',' '));
      }
      else{
        alert(this.currentPlayer().name + ' rolled a ' + this.state.roll1+" and a " +this.state.roll2+". You're now on "+newLoc.name.replace('<br/>',' '));
      }
      if(newLoc.buyable){
          if(!newLoc.owned){
            if(this.currentPlayer().team== "Stars"){
              if(window.confirm("Do you want to buy "+newLoc.name.replace('<br/>',' ')+"?")){
                this.currentPlayerAssets().amount-=newLoc.price;
                this.currentPlayerAssets().properties.push(newLoc);
                newLoc.owner=this.currentPlayer();
                newLoc.owned=true;
                if(newLoc.railroads){
                  this.currentPlayer().railroads++;
                }
                else if(newLoc.util){
                  this.currentPlayer().utilities++;
                }
              }
            }
            else{
              if(newLoc.zone!=4){
                  if(window.confirm("Do you want to buy "+newLoc.name.replace('<br/>',' ')+"?")){
                    this.currentPlayerAssets().amount-=newLoc.price;
                    this.currentPlayerAssets().properties.push(newLoc);
                    newLoc.owner=this.currentPlayer();
                    newLoc.owned=true;
                  }
                  if(newLoc.railroads){
                    this.currentPlayer().railroads++;
                  }
                  else if(newLoc.util){
                    this.currentPlayer().utilities++;
                  }
              }
              else{
                alert("Sorry, "+newLoc.name.replace('<br/>',' ')+" is in the green zone. \nPlayers on the "+this.currentPlayer().team+" team are not qualified to own property in this zone. \nThis is called redlining. " );
              }
            }
          }
          else{
            if(newLoc.owner!=undefined){
              if(newLoc.owner.name===(this.currentPlayer.name)){
                alert("You own this property!");
              }
              else{
                if(newLoc.railroads){
                  let rent=0; 
                  if(newLoc.owner.railroads==1 ||newLoc.owner.railroads==2){
                      rent=25*newLoc.owner.railroads;
                  }
                  else if(newLoc.owner.railroads==3){rent=100;}
                  else{rent=200;}
                  this.currentPlayerAssets().amount-=rent;
                  this.getAssets( newLoc.owner).amount+=rent;
                  alert(this.currentPlayer().name+ " paid " +newLoc.owner.name +" $"+ rent+" in rent. \n"+this.currentPlayer().name +" now has $"+this.currentPlayerAssets().amount+". "+newLoc.owner.name+ " has $"+this.getAssets(newLoc.owner).amount );
                  // alert(this.currentPlayer().name +" now has $"+this.currentPlayerAssets().amount);
                  // alert(newLoc.owner.name+ " has $"+this.getAssets(newLoc.owner).amount);
                }
                else if(newLoc.util){
                  let rent=0;
                  if(newLoc.owner.utilities==1){
                    rent=4*rollTotal;
                  }
                  else if(newLoc.owner.utilities==2){
                    rent=10*rollTotal;
                  }
                  this.currentPlayerAssets().amount-=rent;
                  this.getAssets( newLoc.owner).amount+=rent;
                  alert(this.currentPlayer().name+ " paid " +newLoc.owner.name +" $"+ rent+" in rent. \n"+this.currentPlayer().name +" now has $"+this.currentPlayerAssets().amount+". "+newLoc.owner.name+ " has $"+this.getAssets(newLoc.owner).amount );
                }
                else{
                  this.currentPlayerAssets().amount-=newLoc.rent;
                  this.getAssets( newLoc.owner).amount+=newLoc.rent;
                  alert(this.currentPlayer().name+ " paid " +newLoc.owner.name +" $"+ newLoc.rent+" in rent. \n"+this.currentPlayer().name +" now has $"+this.currentPlayerAssets().amount+". "+newLoc.owner.name+ " has $"+this.getAssets(newLoc.owner).amount );
                }
              }
            }
            }
          }
        else{
          if (newLoc.tax){
            this.currentPlayerAssets().amount-=newLoc.price;
            p+=newLoc.price;
            alert(this.currentPlayer().name+ " paid $"+ newLoc.price+" to the pot. Pot total: $"+p);
            this.setState({pot:p});
          }
          else if(n==20){
            if(this.currentPlayer().team=="Stars"){
              this.currentPlayerAssets().amount+=p;
              alert(this.currentPlayer().name+" got paid $"+p+" from the pot. Pot is now: $0");
              p=0;
              this.setState({pot:p});
            }
            else{
              alert("No Loitering Stripes! Go directly to jail for suspicious behavior. Do not collect the pot. \nThis is called over policing.");
              this.goToJail();
            }
          }
          else if(n==2||n==17||n==33){
            this.handleChanceCard(0,rollTotal, newLoc);
          }
          else if(n==7||n==22||n==36){
            this.handleChanceCard(1,rollTotal, newLoc);
          }
          else if(n==30){
            this.goToJail();
          }
        }
        if (n < this.state.lastLoc &&this.currentPlayer().inJail==false) {
          if(this.currentPlayer().team== "Stars"){
            this.currentPlayerAssets().amount+=200;
            alert(`${this.currentPlayer().name} passed GO! $200 for you and $25 from each Stripes player!`);
              for(let i=0; i<this.props.players.length;i++){
                if(!(this.props.players[i].team=="Stripes")){
                  this.getAssets(this.props.players[i]).amount-=25;
                  this.currentPlayerAssets().amount+=25;
                }
              }
          }
          else{
            this.currentPlayerAssets().amount+=100;
            alert(`${this.currentPlayer().name} passed GO! $100 for you!`);
          }
        } 
      // if(nextPosition<playerLocation.position)
      if(!this.state.double){
        const nextPlayerIndex = (this.state.currentIndex + 1) % this.playersCount();
        this.setState({board:b, currentIndex: nextPlayerIndex, turnnum:1});
      }
      else{
        if(this.state.turnnum==3){
          alert("You've rolled doubles three times in a row. You've been sent to jail.")
          this.goToJail();
        }
        else{
          this.setState({turnnum: this.state.turnnum++});
        }
      }
    }
  goToJail=()=>{
    let b=this.state.board;
    alert(this.currentPlayer().name+" has been sent to Jail");
    const playerLocation = this.state.playerLocations[this.state.currentIndex];
      const nextPosition = 10;
      const newPlayerLocations = [...this.state.playerLocations];
      newPlayerLocations[this.state.currentIndex] = {
        ...playerLocation,
        position: nextPosition
      };
      this.currentPlayer().inJail=true;
      this.currentPlayer().jailTurns++;
    if(this.currentPlayer().jailbreak>0){
      alert(this.currentPlayer().name+" used a Get Out of Jail Free Card!");
      this.currentPlayer().jailbreak--;
      this.currentPlayer().inJail=false;
    }
    const nextPlayerIndex = (this.state.currentIndex + 1) % this.playersCount();
    this.setState({playerLocations: newPlayerLocations,board:b, currentIndex: nextPlayerIndex});
  }
  inJailBehavior=(double:boolean, nextPosition: number,playerLocation:PlayerLocation, newPlayerLocations:PlayerLocation[])=>{
      alert(this.currentPlayer().name + ' rolled a ' + this.state.roll1+" and a " +this.state.roll2+ ".");
      if(this.currentPlayer().jailTurns==4&&!double&&this.currentPlayer().team=="Stars"){
        this.currentPlayer().jailTurns=0;
        this.currentPlayerAssets().amount-=100;
        alert(this.currentPlayer().name+" paid $100 to get out of Jail");
        this.currentPlayer().inJail=false;
        const nextPlayerIndex = (this.state.currentIndex + 1) % this.playersCount();
        this.setState({currentIndex:nextPlayerIndex});
      }
        else if(this.currentPlayer().jailTurns==3&&!double&&this.currentPlayer().team=="Stripes"){
        this.currentPlayer().jailTurns=0;
        this.currentPlayerAssets().amount-=200;
        alert(this.currentPlayer().name+" paid $200 to get out of Jail");
        this.currentPlayer().inJail=false;
        const nextPlayerIndex = (this.state.currentIndex + 1) % this.playersCount();
        this.setState({currentIndex:nextPlayerIndex});
      }
      else if (this.currentPlayer().jailTurns<=3&&double){
        this.currentPlayer().inJail=false;
        //move to newLic
        newPlayerLocations[this.state.currentIndex] = {
          ...playerLocation,
          position: nextPosition
        };
        let b=this.state.board;
        let n=this.state.playerLocations[this.state.currentIndex].position;
        let newLoc=b[n];
        alert(this.currentPlayer().name+" rolled doubles and got out of jail! they're now on " +newLoc.name.replace("<br/>"," "));
        this.currentPlayer().jailTurns=0;
        this.setState({ playerLocations: newPlayerLocations, double:double, lastLoc:playerLocation.position,board:b},this.checkMove);
        const nextPlayerIndex = (this.state.currentIndex + 1) % this.playersCount();
        this.setState({ playerLocations: newPlayerLocations, double:double, lastLoc:playerLocation.position,board:b, currentIndex:nextPlayerIndex},this.checkMove);
      }
      else{ 
        this.currentPlayer().jailTurns++;
        alert(this.currentPlayer().name+" has been in Jail for "+this.currentPlayer().jailTurns+" turns.");
        const nextPlayerIndex = (this.state.currentIndex + 1) % this.playersCount();
        this.setState({currentIndex:nextPlayerIndex});
      }
  }
  drawCard(index:number){
    if(index==1){
      let ch=this.shuffle(this.state.chance)
      let t=this.state.top1;
      if(t==16){
        t=0;
      }
      this.setState({chance:ch, top1:t++})
      return ch[t];
    }
    else{
      let com=this.shuffle(this.state.community);
      let t= this.state.top2;
      if(t==16){
        t=0;
      }
      this.setState({community:com, top2:t++})
      return com[t];
    }
  }
  handleChanceCard=(index:number, rollTotal:number, newLoc: PropertyInfo)=>{
    let oldLoc: number=newLoc.index;
    let nLoc: number=100;
    let c =this.drawCard(index);
    alert("You drew: \n"+ c.toString());
    let b=this.state.board;
          console.log("You drew: "+c.toString());
          if(c.getId()==0){
            const playerLocation = this.state.playerLocations[this.state.currentIndex];
            const nextPosition = 0;
            const newPlayerLocations = [...this.state.playerLocations];
            newPlayerLocations[this.state.currentIndex] = {
              ...playerLocation,
              position: nextPosition
            };
            let newLoc=b[nextPosition];
            nLoc=nextPosition;
            this.setState({playerLocations:newPlayerLocations});
            console.log(this.currentPlayer().name+ " has moved to "+newLoc.name);
          }
          else if(c.getId()==1){
            const playerLocation = this.state.playerLocations[this.state.currentIndex];
            const nextPosition = 24;
            const newPlayerLocations = [...this.state.playerLocations];
            newPlayerLocations[this.state.currentIndex] = {
              ...playerLocation,
              position: nextPosition
            };
            let newLoc=b[nextPosition];
            nLoc=nextPosition;
            this.setState({playerLocations:newPlayerLocations});
            console.log(this.currentPlayer().name+ " has moved to "+newLoc.name);
          }
          else if(c.getId()==2){
            const playerLocation = this.state.playerLocations[this.state.currentIndex];
            const nextPosition = 11;
            const newPlayerLocations = [...this.state.playerLocations];
            newPlayerLocations[this.state.currentIndex] = {
              ...playerLocation,
              position: nextPosition
            };
            nLoc=nextPosition;
            let newLoc=b[nextPosition];
            this.setState({playerLocations:newPlayerLocations});
            console.log(this.currentPlayer().name+ " has moved to "+newLoc.name);
          }
          else if(c.getId()==3){
            let closest=100;
            let closestUtil;
            for (let i=0; i<b.length;i++){
              if(b[i].util){
                if(closest>Math.abs(this.state.playerLocations[this.state.currentIndex].position-i)){
                  closest=Math.abs(this.state.playerLocations[this.state.currentIndex].position-i);
                  closestUtil=i;
                }
              }
            }
            const playerLocation = this.state.playerLocations[this.state.currentIndex];
            const nextPosition = closestUtil;
            const newPlayerLocations = [...this.state.playerLocations];
            newPlayerLocations[this.state.currentIndex] = {
              ...playerLocation,
              position: nextPosition
            };
            nLoc=nextPosition;
            let newLoc=b[nextPosition];
            this.setState({playerLocations:newPlayerLocations});
            console.log(this.currentPlayer().name+ " has moved to "+newLoc.name);
              if(newLoc.owned){
                  if(newLoc.owner!=undefined){
                    let rent=0;
                  if(newLoc.owner.utilities==1){
                    rent=4*rollTotal;
                  }
                  else if(newLoc.owner.utilities==2){
                    rent=10*rollTotal;
                  }
                  rent=2+newLoc.rent;
                  this.currentPlayerAssets().amount-=rent;
                  this.getAssets(newLoc.owner).amount+=rent;
                  alert(this.currentPlayer().name+ " paid " +newLoc.owner.name +" $"+ rent+" in rent. \n"+this.currentPlayer().name +" now has $"+this.currentPlayerAssets().amount+". "+newLoc.owner.name+ " has $"+this.getAssets(newLoc.owner).amount );
                }
              }
              else{
                    if(this.currentPlayer().team== "Stars"){
                      if(window.confirm("Do you want to buy "+newLoc.name.replace('<br/>',' ')+"?")){
                        this.currentPlayerAssets().amount-=newLoc.price;
                        this.currentPlayerAssets().properties.push(newLoc);
                        newLoc.owner=this.currentPlayer();
                        newLoc.owned=true;
                        this.currentPlayer().utilities++;
                      }
        
                    }
                    else{
                      if(newLoc.zone!=4){
                          if(window.confirm("Do you want to buy "+newLoc.name.replace('<br/>',' ')+"?")){
                            this.currentPlayerAssets().amount-=newLoc.price;
                            this.currentPlayerAssets().properties.push(newLoc);
                            newLoc.owner=this.currentPlayer();
                            newLoc.owned=true;
                            this.currentPlayer().utilities++;
                          }
                      }
                      else{
                        alert("Sorry, "+newLoc.name.replace('<br/>',' ')+" is in the green zone. \nPlayers on the "+this.currentPlayer().team+" team are not qualified to own property in this zone. \nThis is called redlining.");
                      }
                    }
                 }
          }
          else if(c.getId()==4){
            let closest=100;
            let closestRR;
            for (let i=0; i<b.length;i++){
              if(b[i].railroads){
                if(closest>Math.abs(this.state.playerLocations[this.state.currentIndex].position-i)){
                  closest=Math.abs(this.state.playerLocations[this.state.currentIndex].position-i);
                  closestRR=i;
                }
              }
            }
            const playerLocation = this.state.playerLocations[this.state.currentIndex];
            const nextPosition = closestRR;
            const newPlayerLocations = [...this.state.playerLocations];
            newPlayerLocations[this.state.currentIndex] = {
              ...playerLocation,
              position: nextPosition
            };
            nLoc=nextPosition;
            let newLoc=b[nextPosition];
            this.setState({playerLocations:newPlayerLocations});
            console.log(this.currentPlayer().name+ " has moved to "+newLoc.name);
              if(newLoc.owned){
                if (newLoc.owner!=undefined){
                  let rent=0; 
                  if(newLoc.owner.railroads==1 ||newLoc.owner.railroads==2){
                          rent=25*newLoc.owner.railroads;
                  }
                  else if(newLoc.owner.railroads==3){rent=100;}
                  else{rent=200;}
                  rent=2*rent;
                  this.currentPlayerAssets().amount-=rent;
                  this.getAssets(newLoc.owner).amount+=rent;
                  alert(this.currentPlayer().name+ " paid " +newLoc.owner.name +" $"+ rent+" in rent. \n"+this.currentPlayer().name +" now has $"+this.currentPlayerAssets().amount+". "+newLoc.owner.name+ " has $"+this.getAssets(newLoc.owner).amount );
                }
              }
              else{
                if(this.currentPlayer().team== "Stars"){
                  if(window.confirm("Do you want to buy "+newLoc.name.replace('<br/>',' ')+"?")){
                    this.currentPlayerAssets().amount-=newLoc.price;
                    this.currentPlayerAssets().properties.push(newLoc);
                    newLoc.owner=this.currentPlayer();
                    newLoc.owned=true;
                    this.currentPlayer().utilities++;
                  }
    
                }
                else{
                  if(newLoc.zone!=4){
                      if(window.confirm("Do you want to buy "+newLoc.name.replace('<br/>',' ')+"?")){
                        this.currentPlayerAssets().amount-=newLoc.price;
                        this.currentPlayerAssets().properties.push(newLoc);
                        newLoc.owner=this.currentPlayer();
                        newLoc.owned=true;
                        this.currentPlayer().utilities++;
                      }
                  }
                  else{
                    alert("Sorry, "+newLoc.name.replace('<br/>',' ')+" is in the green zone. \nPlayers on the "+this.currentPlayer().team+" team are not permitted to own property in this zone.\nThis is called redlining.");
                  }
                }
              }
          }
          else if(c.getId()==5){
            this.currentPlayerAssets().amount+=50;
          }
          else if(c.getId()==6){
            this.currentPlayer().jailbreak++;
          }
          else if(c.getId()==7){
            const playerLocation = this.state.playerLocations[this.state.currentIndex];
            let nextPosition;
            if(newLoc.index-3>0){
              nextPosition = newLoc.index-3;
            }
            else{
              nextPosition = 40-newLoc.index;
            }
            const newPlayerLocations = [...this.state.playerLocations];
            newPlayerLocations[this.state.currentIndex] = {
              ...playerLocation,
              position: nextPosition
            };
            nLoc=nextPosition;
            this.setState({playerLocations:newPlayerLocations});
          }
          else if(c.getId()==8){
            this.currentPlayerAssets().amount+=200;
          }
          else if(c.getId()==9){
            this.currentPlayerAssets().amount-=15;          }
          else if(c.getId()==10){
            const playerLocation = this.state.playerLocations[this.state.currentIndex];
            const nextPosition = 39;
            const newPlayerLocations = [...this.state.playerLocations];
            newPlayerLocations[this.state.currentIndex] = {
              ...playerLocation,
              position: nextPosition
            };
            nLoc=nextPosition;
            this.setState({playerLocations:newPlayerLocations});
          }
          else if(c.getId()==11){
            for(let i=0; i<this.props.players.length;i++){
              if(!(this.props.players[i]===this.currentPlayer())){
                this.getAssets(this.props.players[i]).amount+=50;
                this.currentPlayerAssets().amount-=50;
              }
            }
          }
          else if(c.getId()==12){
            this.currentPlayerAssets().amount+=100;
          }
          else if(c.getId()==13){
            this.currentPlayerAssets().amount+=150;
          }
          else if(c.getId()==14){
            this.goToJail();
          }
          else if(c.getId()==15){
            this.currentPlayerAssets().amount-=50;
          }
          if (nLoc < oldLoc &&this.currentPlayer().inJail==false) {
            if(this.currentPlayer().team== "Stars"){
              this.currentPlayerAssets().amount+=200;
              alert(`${this.currentPlayer().name} passed GO! $200 for you and $25 from each Stripes player!`);
              for(let i=0; i<this.props.players.length;i++){
                if(!(this.props.players[i].team=="Stripes")){
                  this.getAssets(this.props.players[i]).amount-=25;
                  this.currentPlayerAssets().amount+=25;
                }
              }
            }
            else{
              this.currentPlayerAssets().amount+=100;
              alert(`${this.currentPlayer().name} passed GO! $100 for you!`);
            }
          } 
    }
  createDeck=():ICard[]=>{
    let d: ICard[]=[];
    for (let i=0; i<16;i++){
      this.build(i, d);
    }
    this.shuffle(d);
    return d;
  }
  shuffle=(d: ICard[]): ICard[] => {

    var currentIndex = d.length, temporaryValue, randomIndex;
    
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = d[currentIndex];
      d[currentIndex] = d[randomIndex];
      d[randomIndex] = temporaryValue;
    }
    return d; 
  }
  build =(id: number, deck:ICard[])=>{
      if(id==0){
          let c = new ACard("Advance to Go (Collect $200) ", id);
          deck.push(c);
      }
      if (id==1){
          let c = new ACard("Advance to Illinois Ave—If you pass Go, collect money award", id);
          deck.push(c);
      }
      if (id==2){
          let c = new ACard("Advance to St. Charles Place – If you pass Go, collect money award ", id);
          deck.push(c);
      }
      if (id==3){
          let c = new ACard("Advance token to nearest Utility. If unowned, you may buy it from the Bank. If owned, throw dice and pay owner a total ten times the amount thrown. ", id);
          deck.push(c);
      }
      if (id==4){
          let c = new ACard("Advance token to the nearest School and pay owner twice the rental to which they are otherwise entitled. If School is unowned, you may buy it from the Bank. ", id);
          deck.push(c);
      }  
      if (id==5){
          let c = new ACard("Bank pays you dividend of $50 ", id);
          deck.push(c);
      } 
      if (id==6){
          let c = new ACard("Get Out of Jail Free", id);
          deck.push(c);
      }  
      if (id==7){
          let c = new ACard("Go Back 3 Spaces", id);
          deck.push(c);
      }  
      if(id==8){
          let c = new ACard("Bank error in your favor—Collect $200", id);
          deck.push(c);
      }
      if(id==9){
          let c = new ACard("Pay poor tax of $15 ", id);
          deck.push(c);
      }
      if(id==10){
          let c= new ACard("Take a walk on the Boardwalk–Advance token to Boardwalk", id);
          deck.push(c);
      }
      if(id==11){
          let c= new ACard("You have been elected Chairman of the Board–Pay each player $50 ", id);
          deck.push(c);
      }
      if(id==12){
          let c= new ACard(" You have won a crossword competition—Collect $100 ", id);
          deck.push(c);
      }
      if(id==13){
          let c = new ACard("Your building and loan matures—Collect $150 ", id);
          deck.push(c);
      }
      if(id==14){
          let c= new ACard("Go to Jail–Go directly to Jail–Do not pass Go, do not collect money award ", id);
          deck.push(c);
      }
      if(id==15){
          let c= new ACard("Doctor's fee—Pay $50 ", id);
          deck.push(c);
      }
  }
  readonly propertyInfos = (): PropertyInfo[] => {
    let board: PropertyInfo[]=[];
    for (let i: number = 0; i < 40; i++) {
      if (i==0){
        board[i]= { name: 'Go', buyable: false,price: 0,owned: false,rent:0, railroads: false,util: false,tax:false,zone: 0, index: i, owner: undefined};
      }
      if(i==1){
        board[i]={ name: 'Meditterr- <br/>anean<br/>Avenue', buyable: true,price: 60,owned: false,rent:2, railroads: false,util: false,tax:false,zone:1, index: i, owner: undefined};
      }
      if(i==2||i==17||i==33){
        board[i]=      { name: 'Community Chest', buyable: false,price: 0,owned: false,rent:0, railroads: false,util: false,tax:false,zone: 0, index: i, owner: undefined};
      }
      if (i==3){
        board[i]={ name: 'Artic<br/>Avenue', buyable: true,price: 60,owned: false,rent:4, railroads: false,util: false,tax:false,zone: 1, index: i, owner: undefined};
      }
      if( i==4){
        board[i]= { name: 'Stocks<br/>and Bonds', buyable: false,price: 200,owned: false,rent:0, railroads: false,util: false,tax:true,zone: 0, index: i, owner: undefined};

      }
      if(i==5){
        board[i]=      { name: 'Public School', buyable: true,price: 200,owned: false,rent:0, railroads: true,util: false,tax:false,zone: 1, index: i, owner: undefined  };
      }
      if(i==6){
        board[i]=      { name: 'Massachu- <br/>setts<br/>Avenue', buyable: true,price: 100,owned: false,rent:6, railroads: false,util: false,tax:false,zone: 1, index: i, owner: undefined };

      }
      if(i==7 ||i==22|| i==36){
        board[i]=      { name: 'Chance', buyable: false,price: 0,owned: false,rent:0, railroads: false,util: false,tax:false,zone: 0, index: i, owner: undefined};
      }
      if(i==8){
        board[i]=      { name: 'Vermont<br/>Avenue',buyable: true,price: 100,owned: false,rent:6, railroads: false,util: false,tax:false,zone: 1, index: i, owner: undefined};
      }
      if(i==9){
        board[i]=      { name: 'Connecticut<br/>Avenue', buyable: true,price: 120,owned: false,rent:8, railroads: false,util: false,tax:false,zone: 1, index: i, owner: undefined };

      }
      if(i==10){
        board[i]=      { name: 'Jail', buyable: false,price: 0,owned: false,rent:0, railroads: false,util: false,tax:false,zone: 0, index: i, owner: undefined };

      }
      if(i==11){
        board[i]=      { name: 'St.Charles<br/>Place', buyable: true,price: 140,owned: false,rent:10, railroads: false,util: false,tax:false,zone: 2, index: i, owner: undefined };

      }
      if(i==12){
        board[i]=      { name: 'Hospital', buyable: true,price: 150,owned: false,rent:0, railroads: false,util: true,tax:false,zone: 2, index: i, owner: undefined};
      }
      if(i==13){
        board[i]=      { name: 'States<br/>Avenue', buyable: true,price: 140,owned: false,rent:10, railroads: false,util: false,tax:false,zone: 2, index: i, owner: undefined};

      }
      if(i==14){
        board[i]=      { name: 'Virginia<br/>Avenue', buyable: true,price: 160,owned: false,rent:12, railroads: false,util: false,tax:false,zone: 2, index: i, owner: undefined};

      }
      if(i==15){
        board[i]=      { name: 'Charter School', buyable: true,price: 200,owned: false,rent:0, railroads: true,util: false,tax:false,zone: 2, index: i, owner: undefined};

      }
      if(i==16){
        board[i]=      { name: 'St.James<br/>Place', buyable: true,price: 180,owned: false,rent:14, railroads: false,util: false,tax:false,zone: 2, index: i, owner: undefined };
      }
      if(i==18){
        board[i]=      { name: 'Tennessee<br/>Avenue', buyable: true,price: 180,owned: false,rent:14, railroads: false,util: false,tax:false,zone: 2, index: i, owner: undefined };

      }
      if(i==19){
        board[i]=      { name: 'New York<br/>Avenue', buyable: true,price: 200,owned: false,rent:16, railroads: false,util: false,tax:false,zone: 2, index: i, owner: undefined};

      }
      if(i==20){
        board[i]=      { name: "Free<br/>Parking", buyable: false,price: 0,owned: false,rent:0, railroads: false,util: false,tax:false,zone: 0, index: i, owner: undefined };

      }
      if(i==21){
        board[i]=      { name: 'Kentucky<br/>Avenue', buyable: true,price: 220,owned: false,rent:18, railroads: false,util: false,tax:false,zone: 3, index: i, owner: undefined};

      }
      if(i==23){
        board[i]=      { name: 'Indiana<br/>Avenue', buyable: true,price: 220,owned: false,rent:18, railroads: false,util: false,tax:false,zone: 3, index: i, owner: undefined };

      }
      if(i==24){
        board[i]=      { name: 'Illinois<br/>Avenue', buyable: true,price: 240,owned: false,rent:20, railroads: false,util: false,tax:false,zone: 3, index: i, owner: undefined };

      }
      if(i==25){
        board[i]=      { name: 'Private<br/>School', buyable: true,price: 200,owned: false,rent:0, railroads: false,util: true,tax:false,zone: 3, index: i, owner: undefined};
      }
      if(i==26){
        board[i]=      { name: 'Atlantic<br/>Avenue', buyable: true,price: 260,owned: false,rent:22, railroads: false,util: false,tax:false,zone: 3, index: i, owner: undefined };

      }
      if(i==27){
        board[i]=      { name: 'Ventnor<br/>Avenue', buyable: true,price: 260,owned: false,rent:22, railroads: false,util: false,tax:false,zone: 3, index: i, owner: undefined};
      }
      if(i==28){
         board[i]=      { name: 'Grocery<br/>Store', buyable: true,price: 150,owned: false,rent:0, railroads: false,util: true,tax:false,zone: 3, index: i, owner: undefined};

      }
      if(i==29){
        board[i]=      { name: 'Marvin<br/>Gardens', buyable: true,price: 280,owned: false,rent:24, railroads: false,util: false,tax:false,zone: 3, index: i, owner: undefined};

      }
      if(i==30){
        board[i]=      { name: "Go To<br/>Jail", buyable: false,price: 0,owned: false,rent:0, railroads: false,util: false,tax:false,zone: 0, index: i, owner: undefined };

      }
      if(i==31){
        board[i]=      { name: 'Pacific<br/>Avenue', buyable: true,price: 300,owned: false,rent:26, railroads: false,util: false,tax:false,zone: 4, index: i, owner: undefined};

      }
      if(i==32){
        board[i]=      { name: 'North Carolina<br/>Avenue', buyable: true,price: 300,owned: false,rent:26, railroads: false,util: false,tax:false,zone: 4, index: i, owner: undefined};

      }
      if(i==34){
        board[i]=      { name: 'Pennsylvania<br/>Avenue', buyable: true,price: 320,owned: false,rent:28, railroads: false,util: false,tax:false,zone: 4, index: i, owner: undefined};

      }
      if(i==35){
        board[i]=      { name: 'Boarding<br/>School', buyable: true,price: 320,owned: false,rent:28, railroads: true,util: false,tax:false,zone: 4, index: i, owner: undefined};

      }
      if(i==37){
        board[i]=      { name: 'Park<br/>Place', buyable: true, price: 350,owned: false,rent:35, railroads: false,util: false,tax:false,zone: 4, index: i, owner: undefined};

      }
      if(i==38){
        board[i]=      { name: 'Retirement<br/>Fund', buyable: false,price: 200,owned: false,rent:0, railroads: false,util: false,tax:true,zone: 4, index: i, owner: undefined};

      }
      if(i==39){
        board[i]=      { name: 'Boardwalk', buyable: true, price: 400,owned: false,rent:50, railroads: false,util: false,tax:false,zone: 4, index: i, owner: undefined};

      }
    }
    return board;
  }
  getBoard=(): PropertyInfo[] =>{ return this.propertyInfos()}
  render() {
      return (
        <div className="ms-Grid" dir="ltr">
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm6 ms-md8 ms-lg12">
            <GameHeader
              message={"It's " + this.currentPlayer().name + "'s turn"}
            />
            </div>
          </div>
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12 ms-md2 ms-lg2">
              <PlayerAssets player={this.currentPlayer()} assets={this.currentPlayerAssets()} />
            </div>
            <div className="ms-Grid-col ms-sm12 ms-md8 ms-lg8">
                <GameBoard
                dice={[]}
                boardWidth={800}
                board={this.getBoard()}
                playerLocations={this.state.playerLocations}
                onDiceRolled={this.onDiceRolled}
                // reRender={this.reRender}
                // onNewTile={this.onNewTile}
                // doGameLogic={this.doGameLogic}
              />
              <Card/>
            </div>
            <div className="ms-Grid-col ms-sm12 ms-md2 ms-lg2">
              <Players
                players={this.props.players}
                currentPlayer={this.currentPlayer()}
                assets={this.state.playerAssets}
              />
            </div>
          </div>
        </div>
      )
  }
}
