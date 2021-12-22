import React from 'react';
import { pages } from "../App";
import './NavBar.css';

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';


interface BottomNavigationProps{
    changePage: (pages: pages) => void;
}

// This is where I put all of my styles
const useStyles = makeStyles({
  root: {
    // width: 1800,
    background: '#ccf2ff 100%',
    height: 56,
  },
});

// NEXT STEP: FIGURE OUT HOW TO CHANGE THE SIZE!!!!

const Navigation = (props: BottomNavigationProps) => {
  // Refer to line 17 for styling
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        console.log(newValue);
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction id = "tab" label="Home" onClick={(e) => props.changePage(pages.HomePage)}/>
      <BottomNavigationAction label="Our Mission" onClick={(e) => props.changePage(pages.MissionPage)}/>
      <BottomNavigationAction label="Rules"onClick={(e) => props.changePage(pages.RulesPage)}/>
      <BottomNavigationAction label="Resources"onClick={(e) => props.changePage(pages.ResourcesPage)}/>
      <BottomNavigationAction label="Quiz"onClick={(e) => props.changePage(pages.QuizPage)}/>
    </BottomNavigation>
    
  );
}

export default Navigation;
