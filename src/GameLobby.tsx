import React, { ChangeEvent } from 'react';
import {pages} from './App';
import './GameLobby.css'
import addPlayer from './images/addPlayer.png'
import { PlayerModel, PlayerTeam, createPlayerModel, PlayerToken } from './Types'
import pool from './png/001-pool.png';
import dartboard from './png/008-dartboard.png';
import heart from './png/029-heart.png';
import ghost from './png/012-ghost.png';
import bomb from './png/023-bomb.png';
import diamond from './png/030-diamond.png';
import trophy from './png/011-trophy.png';
import spinner from './png/015-spinner.png';

interface GameLobbyProps {
    changePage: (page: pages) => void;
    playersList: PlayerModel[];
}
interface GameLobbyState{
    playernames: string[], 
    tokennames:string[],
}

export class GameLobby extends React.Component<GameLobbyProps>{
    

    render(){
        return(
            <div className="overall">
                <h1 className="screenName">Your Game Lobby</h1>
                <h1 id="lineTitle">____________________________</h1>
                <h1 className="subInfo">Add up to 8 players</h1>
                <div className="alignAttempt">
                    <table className="addPlayer">
                        <tr>
                            <AddPlayer playersList={this.props.playersList}/> {/*Each of these components appears as the "Add Player" button on screen */}
                            <AddPlayer playersList={this.props.playersList}/>
                            <AddPlayer playersList={this.props.playersList}/>
                            <AddPlayer playersList={this.props.playersList}/>
                            <AddPlayer playersList={this.props.playersList}/>
                            <AddPlayer playersList={this.props.playersList}/>
                            <AddPlayer playersList={this.props.playersList}/>
                            <AddPlayer playersList={this.props.playersList}/>
                        </tr>
                    </table>
                </div>
                <button className="Start-Button" onClick={(e) => this.props.changePage(pages.AssignTeamsPage)}>Start!</button>
                <button className="Back-Button" onClick={(e) => this.props.changePage(pages.HomePage)}>Back</button>
                <br/><br/><br/>
                <h1 id="bottomLine">____________________________</h1>

            </div>
        )
    }
}

interface AddPlayerProps {
    playersList: PlayerModel[];
}

interface AddPlayerState {
    name: string,
    image: string,
    token: PlayerToken,
    added: boolean,
    finishedAdding: boolean,
    playernames: string[],
    playertokens: string[],
}

class AddPlayer extends React.Component<AddPlayerProps,AddPlayerState> {
    constructor(props: any){
        super(props)
        this.setPlayerName = this.setPlayerName.bind(this);
        this.sealPlayer = this.sealPlayer.bind(this);
        this.removePlayer = this.removePlayer.bind(this);

    }

    state: AddPlayerState = {
        name: "",
        image: addPlayer,
        token: PlayerToken.addPlayer,
        added: false,
        finishedAdding: false,
        playernames: [],
        playertokens:[],
    };

    setPlayerName(event: any) {
        this.setState({
            name: event.target.value,
        })
    }

    sealPlayer(event: any){
        this.setState({
            finishedAdding: true
        })
        console.log("Name " + this.state.name + "image " + this.state.image); 
        this.props.playersList.push(createPlayerModel(this.state.name, this.state.token));
    }

    removePlayer() {
        console.log("We made it into the method");
        let updatedPlayersList: PlayerModel[] = this.props.playersList.filter((player: PlayerModel)=> (!(player.name.toString() == this.state.name) && !(player.token == this.state.token)));
        this.props.playersList.length= 0;
        this.props.playersList.concat(updatedPlayersList);
        this.setState({added: false, finishedAdding: false, name: "", image: addPlayer});
        console.log("We made it to the end of the method");
    }

    render() {
        if(!this.state.added) { 
            return (
                <button onClick = {() => this.setState({added: true})}>
                    <td className="eachPlayer">
                        <table className="playerInfo">
                            <tr>
                                <h3>{"AddPlayer"}</h3>
                            </tr>
                            <tr>
                                <img className="img" src={this.state.image} alt=""></img>
                            </tr>
                        </table>
                    </td>
                </button>
            );
        } else if (this.state.added && !this.state.finishedAdding) { {/* Once user presses on this component, they would like to create a Player instance, so this view gives them an input box and some image choices to pick from */}
            return (
                <td className="eachPlayer">
                    <table className="playerInfo">
                        <tr>
                            Name: 
                            <input type="text" value = {this.state.name} onChange={this.setPlayerName}></input>
                            <input type="submit" onClick= {this.sealPlayer}></input>
                        </tr>
                        <tr>
                            <img className="img"src={this.state.image}></img>
                        </tr>
                    </table>
                    <table>
                        <tr>
                            <td>
                                <button> <img className="img" src={pool} onClick = {(event) => {this.setState({image: pool, token: PlayerToken.pool})}}></img> </button>
                                <button> <img className="img" src={dartboard} onClick = {(event) => {this.setState({image: dartboard, token: PlayerToken.dartboard})}}></img> </button>
                                <button> <img className="img" src={heart} onClick = {(event) => {this.setState({image: heart, token: PlayerToken.heart})}}></img> </button>
                                <button> <img className="img" src={ghost} onClick = {(event) => {this.setState({image: ghost, token: PlayerToken.ghost})}}></img> </button>
                                <button> <img className="img" src={bomb} onClick = {(event) => {this.setState({image: bomb, token: PlayerToken.bomb})}}></img> </button>
                                <button> <img className="img" src={diamond} onClick = {(event) => {this.setState({image: diamond, token: PlayerToken.diamond})}}></img> </button>
                                <button> <img className="img" src={trophy} onClick = {(event) => {this.setState({image: trophy, token: PlayerToken.trophy})}}></img> </button>
                                <button> <img className="img" src={spinner} onClick = {(event) => {this.setState({image: spinner, token: PlayerToken.spinner})}}></img> </button>
                            </td>
                        </tr>
                    </table>
                </td>
            );
        } else {
            return (
                <td className="eachPlayer">
                    <table className="playerInfo">
                        <tr className="exit">
                            {/*<button onClick={this.removePlayer}>X</button> The button does not keep removed players from being pushed into gameplay, so I am commenting it out in case I have time to fix it, so we do not confuse our users with something that does not work for now.*/}
                        </tr>
                        <tr>
                            <h3>{this.state.name}</h3>
                        </tr>
                        <tr>
                            <img className="img" src={this.state.image}></img>
                        </tr>
                    </table>
                </td>
            );
        }
    }
}