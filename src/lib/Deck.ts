
import { Player } from "./Player";
import {IDeck,ICard} from '../Types';


export class Deck implements IDeck{
    cards: ICard[];
    top: number;
    constructor(){
        this.cards=new Array<ICard>();
        this.top=0;
        this.buildDeck();
    }
    addCard(c: ICard){
        this.cards.push(c);
    }
    toString(){
        for (let i=0; i<this.cards.length; i++){
            console.log("card "+(i+1)+" "+this.cards[i].toString());
        }
    }
    drawCard(){
        if(this.top>=16){
            this.shuffle();
            this.top=0;
        }
        return this.cards[this.top++];
    }
    buildDeck(){
        for(let i=0;i<16;i++){
            this.createChance(i);
        }
        this.shuffle();
    }
    createChance(id:number){
        if(id==0){
            let c = new ACard("Advance to Go (Collect $200) ", id);
            this.addCard(c);
        }
        if (id==1){
            let c = new ACard("Advance to Illinois Ave—If you pass Go, collect $200", id);
            this.addCard(c);
        }
        if (id==2){
            let c = new ACard("Advance to St. Charles Place – If you pass Go, collect $200 ", id);
            this.addCard(c);
        }
        if (id==3){
            let c = new ACard("Advance token to nearest Utility. If unowned, you may buy it from the Bank. If owned, throw dice and pay owner a total ten times the amount thrown. ", id);
            this.addCard(c);
        }
        if (id==4){
            let c = new ACard("Advance token to the nearest Railroad and pay owner twice the rental to which they are otherwise entitled. If Railroad is unowned, you may buy it from the Bank. ", id);
            this.addCard(c);
        }  
        if (id==5){
            let c = new ACard("Bank pays you dividend of $50 ", id);
            this.addCard(c);
        } 
        if (id==6){
            let c = new ACard("Get Out of Jail Free", id);
            this.addCard(c);
        }  
        if (id==7){
            let c = new ACard("Go Back 3 Spaces", id);
            this.addCard(c);
        }  
        if(id==8){
            let c = new ACard("Bank error in your favor—Collect $200", id);
            this.addCard(c);
        }
        if(id==9){
            let c = new ACard("Pay poor tax of $15 ", id);
            this.addCard(c);
        }
        if(id==10){
            let c= new ACard("Take a walk on the Boardwalk–Advance token to Boardwalk", id);
            this.addCard(c);
        }
        if(id==11){
            let c= new ACard("You have been elected Chairman of the Board–Pay each player $50 ", id);
            this.addCard(c);
        }
        if(id==12){
            let c= new ACard(" You have won a crossword competition—Collect $100 ", id);
            this.addCard(c);
        }
        if(id==13){
            let c = new ACard("Your building and loan matures—Collect $150 ", id);
            this.addCard(c);
        }
        if(id==14){
            let c= new ACard("Go to Jail–Go directly to Jail–Do not pass Go, do not collect $200 ", id);
            this.addCard(c);
        }
        if(id==15){
            let c= new ACard("Doctor's fee—Pay $50 ", id);
            this.addCard(c);
        }
    }
    createCommunity(){
    }
    shuffle() {

        var currentIndex = this.cards.length, temporaryValue, randomIndex;
        
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = this.cards[currentIndex];
          this.cards[currentIndex] = this.cards[randomIndex];
          this.cards[randomIndex] = temporaryValue;
        }
      }
}
export class ACard implements ICard{
    content: string;
    id:number;

    constructor (content: string, id: number){
        this.content=content;
        this.id=id;
    }
    toString():string{
        return (this.content);
    }
    getId():number{
        return this.id;
    }
}

// // var Chance= new Deck();
// var Community=new Deck();
// Community.buildDeck();
// Community.shuffle();
// Community.toString()
// console.log(Community.drawCard().toString());

