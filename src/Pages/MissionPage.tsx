import React from 'react';
import { pages } from "../App";
import InfoTab from './InfoTab';
import './MissionPage.css'
import quote from './Pics-Icons/icons8-quote-left-64.png'
import star from './Pics-Icons/icons8-asterisk-96.png'
import { PlayerModel } from '../Types';



interface MissionScreenProps {
  changePage: (page: pages) => void;
  playersList: PlayerModel[];
}

export class MissionPage extends React.Component<MissionScreenProps> {
  render() {
    return (
      <div>
        <div className="mission-container">
          <h1 id="missionTitle">Our Mission</h1>
          {/* <h1 id="dashTitle">- - - - - - - - - - - - - - - -</h1> */}
          <h1 id="lineTitle">_____________________</h1>
          <div className="missionQuote">
            <div className="doubleQuote">
              <img src={quote} alt="quote" height={100} width={100}></img>
            </div>
            <div className="quote">
              <p><b>Empower yourself to engage in conversations about
              race and racism.</b></p>
            </div>
          </div>
          <div id="star">
            <img src={star} alt="star" height={100} width={100}></img>
          </div>
          <div className="message">
            <p>
              Racism is centric to American history and remains a destructive
              force in everyone's lives. Despite its persistent relevance and
              impacts, many are hesitant to talk about race at all. This reluctance
              is caused by many different factors; some of these feelings may
              include discomfort with the topic, guilt for one's privileges,
              hesitance due to being ill-informed about these sorts of dialogues,
              feeling antagonized by the subject, and so much more.
              </p>
            <p>
              This program will empower you to engage in conversations about
              race and racism. Having these discussions is integral to dismantling
              the systems that keep oppression alive. We hope that <b><i>Project
              Monopoly: Educate to Liberate</i></b> will allow users to empathize
              with those who are oppressed by racism, educate them about the nuances
              of the current climate on racism, and ultimately spark constructive
              conversations about race.
              </p>
          </div>
        </div>
      </div>
    );
  }
}
