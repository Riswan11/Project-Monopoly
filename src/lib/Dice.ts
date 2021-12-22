/**
 * Represents a Dice.
 */

import {IDice} from './interfaces';

export class Dice implements IDice {

  private faceValue: number;
  private init: boolean = true;

  constructor() {
    this.faceValue=1;
    this.roll();
  }

  public roll(): void {
    this.faceValue = Math.floor(Math.random() * 6) + 1;
    if (!this.init) {
      console.log(`Rolled dice with face value: ${this.faceValue}`);
    } else {
      this.init = false;
    }
  }

  public getFaceValue(): number {
    return this.faceValue;
  }

}
