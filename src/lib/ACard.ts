import {ICard} from '../Types'
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