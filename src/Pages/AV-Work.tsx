import React from 'react';
import { pages } from "../App";
import Button from '@material-ui/core/Button';
// import { QuizPage } from '../Quiz';
// import { FeedbackPage } from '../Feedback';
// import NavBar from './NavBar';



interface AVSceenProps {
  changePage: (page: pages) => void;
}

export class AVPage extends React.Component<AVSceenProps> {
  render() {
    return (
      <div>
        {/* <NavBar changePage = {this.props.changePage}/> */}
        <h1>Alejandra's Navigation Page</h1>
        <h2>The features I'm working on don't appear until after the game is played.
          I creatd this nav page to display my work.</h2>
        <Button variant="contained" color="primary" onClick={() => this.props.changePage(pages.ReflectionPage)}>Questions/Reflection</Button>
        <Button variant="contained" color="primary" onClick={() => this.props.changePage(pages.SurveyPage)}>Survey</Button>
        <Button variant="contained" color="primary" onClick={() => this.props.changePage(pages.QuizPage)}>Quiz</Button>
        <Button variant="contained" color="primary" onClick={() => this.props.changePage(pages.Feedback)}>Feedback</Button>
      </div>
    );
  }
}