import React from 'react';
import { pages } from "../App";
import './RulesPage.css'

interface RulesScreenProps {
    changePage: (page: pages) => void;
  }
  
  export class RulesPage extends React.Component<RulesScreenProps> {
    render() {
      return (
        <div>
          <h1 id="resourcesTitle">Rules</h1>
          <h1 id="lineTitle">_____________________</h1>
          <div className="rules-container">
            <div className="teams">
              <h3 className="subtitle">Stripes</h3>
              <ol>
                <li>You start off with $700</li>
                <li>Every time you pass go, collect $100</li>
                <li>You cannot buy properties in the blue or green zone</li>
                <li>If you land in jail, you must stay in jail one turn before you’re able to roll doubles to get out or pay a $200 fine</li>
                <li>If you land on free parking, you must go to jail for loitering</li>
                <li>If you roll doubles three times, you must go to jail</li>
                <li>If you draw a card marked ‘Go to Jail’, you must go to jail</li>
                <li>If you roll doubles, take another turn after your turn is complete </li>
                <li>If you land on Income Tax or Investment, you must pay $100</li>
              </ol>
            </div>
            <div className="teams">
              <h3 className="subtitle">Stars</h3>
              <ol>
                <li>You start off with $1,500</li>
                <li>Every time you pass go, collect $200 from the bank as well as $25 from each Stripes player</li>
                <li>You can buy properties in every zone</li>
                <li>You begin with one (1) “Get Out of Jail Free” Card</li>
                <li>If you roll doubles three times, you must go to jail</li>
                <li>If you draw a card marked ‘Go to Jail’, you must go to jail</li>
                <li>If you land in jail you can use your "Get Out of Jail Free” Card; if you run out, you may either roll doubles or pay a fine of $150 to get out</li>
                <li>If you roll doubles, take another turn after your turn is complete </li>
                <li>If you land on Income Tax or Investment, you must pay $100</li>
              </ol>
            </div>
          </div>
          {/* <Button variant="contained" color="primary">
                    Primary
            </Button> */}
        </div>
      );
    }
  }