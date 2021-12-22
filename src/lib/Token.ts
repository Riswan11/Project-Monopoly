/**
 * Represents Monopoly Piece.
 */

import {PieceName} from './enums';
import {Square} from './Square'
import {IPiece, ISquare} from './interfaces';
import { PlayerToken , PlayerLocation} from '../Types';

export class Token implements PlayerLocation {
  position: number;
  token: PlayerToken;

  constructor(token: PlayerToken) {
    this.token=token;
    this.position=0;
  }

  // public getPieceName(): string {
  //   return PieceName[this.name];
  // }

  public getLocationIndex(): number {
    return this.position;
  }

  public setLocation(position: number): void {
    this.position = position;
  }

}
