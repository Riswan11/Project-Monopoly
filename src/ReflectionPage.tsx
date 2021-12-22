import React from 'react';
import { pages } from './App';
import Button from '@material-ui/core/Button';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import './ReflectionPage.css'

//pages is an enum in App.tsx
interface ReflectionPageProps {
  changePage: (page: pages) => void;
}

export class ReflectionPage extends React.Component<ReflectionPageProps> {
  render() {
    return (
      <div>
        <header>
          <h1 id="reflectionTitle">Time to reflect...</h1>
          <h1 id="lineTitle">_____________________</h1>
        </header>
        <div className="questions">
          <p>How did you feel while playing this game?</p>
          <p>How do you think players on the opposite team felt?</p>
          <p>Do you think it's possible for someone on Stripes team to win?</p>
          <p>What would it take for them to win?</p>
          <p>Did this game seem fair to you? Why or why not?</p>
          <p>Did you see anything in the game that you've seen in real life?</p>
        </div>
          {/* <QuestionsSnackBar /> */}
          <br/><br/>
          <Button size="large" color="primary" variant="outlined" onClick={(e) => this.props.changePage(pages.SurveyPage)}>Continue</Button>
      </div>
    );
  }
}

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       maxWidth: 900,
//       '& > * + *': {
//         marginTop: theme.spacing(2),
//       },
//     },
//   }),
// );

// export default function QuestionsSnackBar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <SnackbarContent
//         message={
//           'How did you feel while playing this game?'
//         }
//       />

//       <SnackbarContent
//         message={
//           'How do you think players on the opposite team felt?'
//         }
//       />

//       <SnackbarContent
//         message={
//           'Do you think it is possible for someone on Stripes team to win? If so, what would it take for them to win?'
//         }
//       />

//       <SnackbarContent
//         message={
//           'Did this game seem fair to you? Why or why not?'
//         }
//       />

//       <SnackbarContent
//         message={
//           'Did you see anything in the game that you have seen in real life?'
//         }
//       />
//     </div>
//   );
// }