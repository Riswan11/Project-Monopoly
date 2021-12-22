import React from 'react';
import './App.css';
import { MissionPage } from "./Pages/MissionPage";
import { RulesPage } from "./Pages/RulesPage";
import ResourcesPage from "./Pages/ResourcesPage";
import Navigation from './Pages/NavBar';
import './Pages/NavBar.css';
import './App.css';
import { HomePage } from "./HomePage";
import { GameLobby } from './GameLobby';
import { AssignTeamsPage } from "./AssignTeamsPage";
import GameStartPage from "./containers/GameStartPage";
import { ReflectionPage } from './ReflectionPage';
import SurveyPage from './Survey';
import Feedback from './Feedback'
import { QuizPage } from './Pages/QuizPage'
import { AVPage } from './Pages/AV-Work';
import InfoTab from './Pages/InfoTab';
import Features from './Pages/Features';
import { PlayerModel, PlayerTeam, PlayerToken } from './Types'


export enum pages {
  HomePage,
  GameLobby, 
  AssignTeamsPage,
  GameStartPage,
  MissionPage,
  RulesPage,
  ResourcesPage,
  ReflectionPage,
  SurveyPage,
  Feedback,
  RatingPage,
  QuizPage,
  InfoTab,
  Features,
}

interface AppState {
  currentPage: pages;
  playersList: PlayerModel[];
}

export class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = { 
      currentPage: pages.HomePage, 
      playersList: [],
    };
  }
  render() {
    
    // With the NavBar, if I want any other pages to appear, I just need to add another OR statement
    let NavBar;
    let page = this.state.currentPage;
    // If the current page is any of these pages listed, then display the Nav Bar
    if (page === pages.HomePage || page === pages.MissionPage || page === pages.RulesPage || page === pages.ResourcesPage || page === pages.ReflectionPage || page === pages.SurveyPage) {
      NavBar = <Navigation changePage={this.changeScreen} />
    }
    // If not, then the Nav Bar does not appear
    else {
      NavBar = <div />
    }
    // Renders the Navigation bar AND the current screen
    return <div className="App">
      {NavBar}
      {this.getCurrentScreen()}
    </div>;
  }

  private getCurrentScreen = (): JSX.Element => {
    switch (this.state.currentPage) {
      case pages.HomePage:
        return <HomePage changePage={this.changeScreen} />;
      case pages.GameLobby:
        return <GameLobby changePage={this.changeScreen} playersList={this.state.playersList}/>; 
      case pages.AssignTeamsPage:
        return <AssignTeamsPage changePage={this.changeScreen} playersList={this.state.playersList}/>;
      case pages.GameStartPage:
        return <GameStartPage changePage={this.changeScreen} playersList={this.state.playersList}/>;
      case pages.MissionPage:
        return <MissionPage changePage={this.changeScreen} playersList={this.state.playersList}/>;
      case pages.RulesPage:
        return <RulesPage changePage={this.changeScreen} />;
      case pages.ResourcesPage:
        return <ResourcesPage changePage={this.changeScreen} />;
      case pages.ReflectionPage:
        return <ReflectionPage changePage={this.changeScreen} />;
      case pages.SurveyPage:
        return <SurveyPage changePage={this.changeScreen} />;
      case pages.Feedback:
        return <Feedback changePage={this.changeScreen} />;
      case pages.QuizPage:
        return <QuizPage changePage={this.changeScreen} />;
      case pages.InfoTab:
        return <InfoTab changePage={this.changeScreen} playersList={this.state.playersList}/>;
      case pages.Features:
        return <Features changePage={this.changeScreen} />;
      default:
        return <div>ERROR</div>
    }
  };

  private changeScreen = (nextPage: pages) => {
    this.setState((state, props) => ({
      currentPage: nextPage
    }));
  }
}

export default App;
