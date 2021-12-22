import React from 'react';
import { pages } from "./App";
import "./AssignTeamsPage.css"
import { PlayerModel } from './Types';
import { PlayerTeam } from './Types';
import { PlayerToken } from './Types';
import pool from './png/001-pool.png';
import dartboard from './png/008-dartboard.png';
import heart from './png/029-heart.png';
import ghost from './png/012-ghost.png';
import bomb from './png/023-bomb.png';
import diamond from './png/030-diamond.png';
import trophy from './png/011-trophy.png';
import spinner from './png/015-spinner.png';
import Features from './Pages/Features';


interface AssignTeamsPageProps {
    changePage: (page: pages) => void;
    playersList: PlayerModel[];
}

interface AssignTeamsPageState {
    teamInfo: boolean;
}

export class AssignTeamsPage extends React.Component<AssignTeamsPageProps, AssignTeamsPageState> {

    state: AssignTeamsPageState = {
        teamInfo: false
    }

    render() {
        let starsTeamList: PlayerModel[] = this.props.playersList.filter((player: PlayerModel, index)=> index%2 == 0);
        
         let stripesTeamList: PlayerModel[] = this.props.playersList.filter((player: PlayerModel, index)=> index%2 == 1);
         stripesTeamList.map((player: PlayerModel) => player.team = PlayerTeam.Stripes);
        {setTimeout((e) => {this.props.changePage(pages.GameStartPage) }, 10000)}

        {
            return (
                <div className="screen">
                    <h1 className="teamsTitle">Here are the teams:</h1>
                    <h1 id="lineTitle">____________________________</h1>
                    <br/>
                    <table>
                        <tr>
                            <td className="left">
                                <h2 className="listHeader">Stripes</h2>
                                <TeamRoster playersList={stripesTeamList}></TeamRoster>
                            </td>
                            <td className="right">
                                <h2 className="listHeader">Stars</h2>
                                <TeamRoster playersList={starsTeamList}></TeamRoster>
                            </td>
                        </tr>
                    </table>
                    <div className="info" onClick={()=> this.setState({teamInfo: true})}>
                        {/* <h4><u>Click here to hide info about the teams</u></h4> */}
                        <br/><br/>
                        <Features changePage={this.props.changePage}/>                    
                    </div>
                    <br/><br/>
                    <h1 id="lineTitle">____________________</h1>
                    <h2 className="text">Game starting in 10 seconds...</h2>
                    <h1 id="lineTitleish">____________________</h1>
                </div>  
            )
        }
    }
}

interface TeamRosterProps {
    playersList: PlayerModel[];
}

export class TeamRoster extends React.Component<TeamRosterProps> {

    getToken(player: PlayerModel) {
        if(player.token.toString()=="pool"){
            return <img src={pool} width="100" height="100"alt= {player.token.toString()}/>
            }
            else if(player.token.toString()=="dartboard"){
              return <img src={dartboard} width="100" height="100"alt= {player.token.toString()}/>
            }
            else if(player.token.toString()=="heart"){
              return <img src={heart} width="100" height="100"alt= {player.token.toString()}/>
            }      
            else if(player.token.toString()=="ghost"){
              return <img src={ghost} width="100" height="100"alt= {player.token.toString()}/>
            }
            else if(player.token.toString()=="bomb"){
              return <img src={bomb} width="100" height="100"alt= {player.token.toString()}/>
            } 
            else if(player.token.toString()=="diamond"){
              return <img src={diamond} width="100" height="100"alt= {player.token.toString()}/>
            } 
            else if(player.token.toString()=="trophy"){
                return <img src={trophy} width="100" height="100"alt= {player.token.toString()}/>
            } 
            else {
                return <img src={spinner} width="100" height="100"alt= {player.token.toString()}/>
            }
    }

    render() {
        return(
            <div>
                <table className="playerLists">
                    {this.props.playersList.map((player) =>
                        <tr>
                            <td>
                                <ul>
                                    <li><h3 className="playerNames">{player.name}</h3></li>
                                </ul>
                            </td>
                            <td>
                                { this.getToken(player) }
                            </td>
                        </tr>
                    )}
                </table>
            </div>
        )
    }
}