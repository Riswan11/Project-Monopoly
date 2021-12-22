import React, { Component } from 'react'
import { PlayerModel, PlayerTeam, PlayerToken } from '../Types'
import { PrimaryButton } from '@fluentui/react'
import MonopolyGame from './MonopolyGame';
import { pages } from "../App";
import { Player } from '../lib/Player';
import { IDeck, ICard } from '../lib/interfaces';
import InfoTab from '../Pages/InfoTab';
import './GameStartPage.css'

interface Props {
  changePage: (page: pages) => void;
  playersList: PlayerModel[];
}
interface State {
  playing: boolean,
  players: PlayerModel[],
}

export default class GameStartPage extends Component<Props, State> {

  state = {
    playing: true,
    players: this.props.playersList,
    /*[
      { name: 'Lucas', team: PlayerTeam.Stars, token: PlayerToken.Spectacle, inJail: false, railroads: 0, utilities: 0, jailTurns:0, jailbreak:0},
      { name: 'Olivia', team: PlayerTeam.Stripes, token: PlayerToken.Flower, inJail: false, railroads: 0, utilities: 0, jailTurns:0, jailbreak:1},
      { name: 'Blake', team: PlayerTeam.Stripes, token: PlayerToken.Aeroplane, inJail: false, railroads: 0, utilities: 0, jailTurns:0, jailbreak:0},
      { name: 'James', team: PlayerTeam.Stars, token: PlayerToken.BassClef, inJail: false, railroads: 0, utilities: 0, jailTurns:0, jailbreak:1},
      { name: 'Mike', team: PlayerTeam.Stripes, token: PlayerToken.BasketBall, inJail: false, railroads: 0, utilities: 0, jailTurns:0, jailbreak:0},
      { name: 'Ankita', team: PlayerTeam.Stars, token: PlayerToken.A, inJail: false, railroads: 0, utilities: 0, jailTurns:0, jailbreak:0},
    ]*/
  }
  // readonly createDeck= ()=> new Deck();
  readonly startGame = () => this.setState({playing: true});
  // readonly exitGame = () => this.setState({playing: false});

  render() {
    return (
      <div>
        <div className="welcome">
          <p>Welcome to <br/> <b>Project Monopoly: Educate to liberate</b></p>
        </div>
        <h1 id="lineTitleGame">_____________________</h1>
        <div className="InfoButton" >
          {/* The change page funciton inside info tab makes use of the change 
          page property here on the mission page. Change Page property on the 
          mission page is a function */}
        <InfoTab changePage={this.props.changePage} playersList={this.state.players}></InfoTab>
        </div>
        
        <div>
          {/* {
            this.state.playing
              // ? <PrimaryButton text="Exit Game" onClick={this.exitGame} />
              ? <p />
              // : <PrimaryButton text="Start Game" onClick={this.startGame} />
          } */}
        </div>
        
        <div>
          {
            this.state.playing
              ? <MonopolyGame players={this.state.players} />
              // ?<MonopolyGame decks={this.state.decks}/>
              : <span>Click to start game</span>
          }
        </div>
      </div>
    )
  }
}
