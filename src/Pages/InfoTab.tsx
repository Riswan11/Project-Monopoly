import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles, createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { pages } from "../App";
import './InfoTab.css'
import { AssignTeamsPage, TeamRoster } from '../AssignTeamsPage';
import { PlayerModel, PlayerTeam, PlayerToken } from '../Types';

// feedback
import Feedback from '../Feedback';

// Accordion --> drop down button feature
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

// imported for Rules popup
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

// Dialog
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

interface InfoTabProps{
    changePage: (pages: pages) => void;
    playersList: PlayerModel[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      // justifyContent: 'center',
      padding: '20px 20px 20px 55px',
    },
    paper: {
      marginRight: theme.spacing(2),
    },
    // Added for rules: X button
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
  }),
);



const InfoTab = (props: InfoTabProps) => {
  const classes = useStyles();
  // research syntax for variable name and method name
  const [open, setOpen] = React.useState(false);
  // specificaly for end Game
  const [openEndGame, setOpenEndGame] = React.useState(false);
  // specificaly for rules
  const [openRules, setOpenRules] = React.useState(false);
  // specificaly for teams
  const [openTeams, setOpenTeams] = React.useState(false);

  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // function for when we click on the info tab
  const handleClickOpen = () => {
    setOpen(true);
    prevOpen.current = open;
  };

  // function for when closing the info tab
  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
        return;
    }

    setOpen(false);
    };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab' ) {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  // END GAME
  // function for when we click on the end game tab
  const handleClickOpenEndGame = () => {
    setOpenEndGame(true);
  };
    
  // function for when ending the game
  const handleCloseEndGame = (event: React.MouseEvent<EventTarget>) => {
    setOpenEndGame(false);
  };

  // RULES
  // function for when we click on the rules tab
  const handleClickOpenRules = () => {
    setOpenRules(true);
  };
    
  // function for when ending the game
  const handleCloseRules = (event: React.MouseEvent<EventTarget>) => {
    setOpenRules(false);
  };

  // TEAMS
  // function for when we click on the teams tab
  const handleClickOpenTeams = () => {
    setOpenTeams(true);
  };

  const starsTeamList: PlayerModel[] = props.playersList.filter((player: PlayerModel, index)=> index%2 == 0);
  const stripesTeamList: PlayerModel[] = props.playersList.filter((player: PlayerModel, index)=> index%2 == 1);
    
  // function for when ending the game
  const handleCloseTeams= (event: React.MouseEvent<EventTarget>) => {
    setOpenTeams(false);
  };

  return (
    <div className={classes.root}>
      <div>
        {/* Info dropdown button   */}
        <Accordion>
          <div className="infoButton">
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                /* The three lines below generate the dropdown list 
                when the button OR the expand more icon is clicked */
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                {/* This button anchors the toggle dropdown to prevent errors */}
                  <div className="innerInfoButton">
                  <Button
                      color='primary'
                      // background-color='primary'
                      ref={anchorRef}
                      >
                      Info
                  </Button>
                  </div>
            </AccordionSummary>
            </div>
        </Accordion>
        
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClickOpenRules}>Rules</MenuItem>
                    <MenuItem onClick={handleClickOpenTeams}>Teams</MenuItem>
                    <MenuItem onClick={handleClickOpenEndGame}>End Game</MenuItem>
                    {/* div specifically for Rules */}
                    <div>
                        <Dialog onClose={handleCloseRules} aria-labelledby="customized-dialog-title" open={openRules}>
                            <DialogTitle className="rulesTitle" id="customized-dialog-title">
                                {/* X button to close out */}
                                <IconButton aria-label="close" className={classes.closeButton} onClick={handleCloseRules}>
                                    <CloseIcon />
                                </IconButton>
                                Rules
                            </DialogTitle>
                            <DialogContent dividers>
                            <div className="rules-container">
                                <Typography gutterBottom>
                                <div className="rulesTeams">
                                <b id="teamName">Stripes</b> 
                                <ol id="gameList">
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
                                </Typography>
                                <Typography gutterBottom>
                                <div className="rulesTeams">
                                    <b id="teamName">Stars</b> 
                                    <ol id="gameList">
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
                                </Typography>
                            </div>
                            </DialogContent>
                        </Dialog>
                    </div>

                    {/* div specifically for Teams */}
                    <div>
                        <Dialog onClose={handleCloseTeams} aria-labelledby="customized-dialog-title" open={openTeams}>
                            <DialogTitle className="rulesTitle" id="customized-dialog-title">
                                {/* X button to close out */}
                                <IconButton aria-label="close" className={classes.closeButton} onClick={handleCloseTeams}>
                                    <CloseIcon />
                                </IconButton>
                                Teams
                            </DialogTitle>
                            <DialogContent dividers>
                            <div className="rules-container">
                                <Typography gutterBottom>
                                <div className="rulesTeams">
                                <b id="teamName">Stripes</b> 
                                <TeamRoster playersList={stripesTeamList}/>
                                </div>
                                </Typography>
                                <Typography gutterBottom>
                                <div className="rulesTeams">
                                    <b id="teamName">Stars</b> 
                                    <TeamRoster playersList={starsTeamList}/>                                
                                </div>
                                </Typography>
                            </div>
                            </DialogContent>
                        </Dialog>
                    </div>

                    {/* div specifically for end game button */}
                    <div>
                        <Dialog
                        open={openEndGame}
                        onClose={handleCloseEndGame}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        >
                        <DialogTitle id="alert-dialog-title">{"Are you sure you want to end the game?"}</DialogTitle>
                        <DialogActions>
                            {/* The change page funciton inside Feedback makes use of the change 
                            page property here on the info tab file. Change Page property on the 
                            InfoTab file is a function */}
                            <Feedback changePage={props.changePage}/>
                            <Button onClick={handleCloseEndGame} color="primary" autoFocus>
                            No
                            </Button>
                        </DialogActions>
                        </Dialog>
                    </div>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
      <div>
    </div>
  </div>
  );
}

export default InfoTab;