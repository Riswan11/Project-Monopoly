import React from 'react';
import { pages } from "./App";
import "./HomePage.css"
import monopolyMan from './Pages/Resource-Pics/monopoly-man.png'
import monopolyBoard from './Pages/Resource-Pics/monopoly-board.png'


interface HomePageProps {
    changePage: (page: pages) => void;
}

export class HomePage extends React.Component<HomePageProps> {
    render() {
        return (
            <div className="App">
              <header className="App-header">
                <div className="heading">
                  {/* <div className="man">
                    <img src={monopolyMan} alt="Monopoly Man" height={350} width={380}/>
                  </div> */}
                  <div className="words">
                    <h1 className="Title">Project <br/> MONOPOLY</h1> 
                    <h2 className="Subtitle">Educate to Liberate</h2>
                  </div>
                </div>
                  <div className="board">
                    <img onClick={(e) => this.props.changePage(pages.GameLobby)} src={monopolyBoard} alt="Monopoly Board" height={330} width={800}/>
                  </div>

                  <h1 id="lineTitle">________________________</h1>                  <h2 className="Slogan">Can you beat the system?</h2>

                  <button className="Create-Game-Button" onClick={(e) => this.props.changePage(pages.GameLobby)}>Create Game</button>
                  <br/> <br/>
                  <h1 id="lineTitle">________________________</h1>
                  <p/>
              </header>
            </div>
        )
    }
}