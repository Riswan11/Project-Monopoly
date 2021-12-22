import React from 'react';
import { pages } from './App';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import './Survey.css'



//pages is an enum in App.tsx
interface SurveyPageProps {
  changePage: (page: pages) => void;
}

// export class SurveyPage extends React.Component<SurveyPageProps> {
//   render() {
//     return (
//       <div>
//         <h1>Survey</h1>
//         <div id='survey'><FormControlLabelPosition /></div>
//       </div>
//     );
//   }
// }

export default function SurveyPage(props: SurveyPageProps) {
  return (
    <div>
      <h1 id="surveyTitle">Survey</h1>
      <h1 id="lineTitle">_____________________</h1>
      <FormControl component="fieldset">
        <FormLabel component="legend">Have you heard of redlining BEFORE playing this game?</FormLabel>
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="Yes"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="No"
            labelPlacement="end"
          />
        </FormGroup>

        <FormLabel component="legend">Do you have a better understanding of redlining AFTER playing this game?</FormLabel>
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="Yes"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="No"
            labelPlacement="end"
          />
        </FormGroup>

        <FormLabel component="legend">Do you want to learn more about redlining?</FormLabel>
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="Yes"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="No"
            labelPlacement="end"
          />
        </FormGroup>

        <FormLabel component="legend">Have you heard of gentrification BEFORE playing this game?</FormLabel>
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="Yes"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="No"
            labelPlacement="end"
          />
        </FormGroup>

        <FormLabel component="legend">Do you have a better understanding of gentrification AFTER playing this game?</FormLabel>
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="Yes"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="No"
            labelPlacement="end"
          />
        </FormGroup>

        <FormLabel component="legend">Do you want to learn more about gentrification?</FormLabel>
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="Yes"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="No"
            labelPlacement="end"
          />
        </FormGroup>
        <br/><br/>
        <div className="addedButtons">
          <Button className="actualButton" onClick={(e) => props.changePage(pages.QuizPage)} size="large" variant="outlined" color="primary">
              Take a Quiz!
          </Button>
          <br/> <br/> 
          <Button className="actualButton" onClick={(e) => props.changePage(pages.ResourcesPage)} size="large" variant="outlined" color="primary">
              Check Out More Resources
          </Button>
        </div>
      </FormControl>
    </div>
  );
}
