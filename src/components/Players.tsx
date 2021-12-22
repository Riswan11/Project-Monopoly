import React, { ReactElement } from 'react'
import {
  Stack,
  Persona,
  PersonaSize,
  PersonaPresence
} from '@fluentui/react';
import { PlayerModel, PlayerToken, AssetsModel } from './../Types';
import './Players.css';
import PlayerAssets from './PlayerAssets';
import pool from './png/001-pool.png';
import dartboard from './png/008-dartboard.png';
import heart from './png/029-heart.png';
import ghost from './png/012-ghost.png';
import bomb from './png/023-bomb.png';
import diamond from './png/030-diamond.png';
import trophy from './png/011-trophy.png';
import spinner from './png/015-spinner.png';

interface Props {
  players: PlayerModel[],
  currentPlayer: PlayerModel,
  assets:AssetsModel[]
}

export default function Players({players, currentPlayer, assets}: Props): ReactElement {
  const isCurrentPlayer = function(player: PlayerModel): boolean {
    return player.name === currentPlayer.name;
  }
let getAssets=(p: PlayerModel): number=> { 
    let a;
    for(let i=0; i< players.length;i++){
      if(isCurrentPlayer(p)){
        a=assets[i];
      }
    }
    return a.name;
  }

  return (
    <div className="players">
      <h4>Players</h4>
      <Stack tokens={{ childrenGap: 10 }}>
        {players.map((player, index) => (
          <Persona
            key={player.name}
            text={player.name}
            secondaryText={PlayerToken[player.team]}
            size={PersonaSize.size72}
            presence={PersonaPresence.online}
            tertiaryText={isCurrentPlayer(player) ? "Playing..." : "Waiting for turn..."}
          />
        ))}
      </Stack>
    </div>
  )
}
// export class Player implements PlayerModel{
//   name: string;
//   team: PlayerTeam;
//   token: PlayerToken;
//   public inJail: boolean;
//   constructor(name: string, team: PlayerTeam, token: PlayerToken){
//     this.name=name;
//     this.team=team; 
//     this.token=token;
//     this.inJail=false;

//   }
//   public getJail(){
//     return this.inJail;
//   }
// }
