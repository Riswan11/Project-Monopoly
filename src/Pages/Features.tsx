import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { pages } from "../App";
import './Feature.css'


import Typography from '@material-ui/core/Typography';

// imported for Rules popup
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

// Dialog
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

interface FeaturesProps{
    changePage: (pages: pages) => void;
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



export default function Features(props: FeaturesProps) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleSubmit = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <Button size="large" variant="outlined" color="primary" onClick={handleClickOpen}>
          Learn More About Each Team
        </Button>
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle className="rulesTitle" id="customized-dialog-title">
                {/* X button to close out */}
                <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
                Features
            </DialogTitle>
            <DialogContent dividers>
            <div className="rules-container">
                <Typography gutterBottom>
                <div className="rulesTeams">
                <b id="teamName">Features of Stripes</b> 
                    <ul>
                        <li><h3 className="playerNames">You begin with <u>$700</u></h3></li>
                        <li><h3 className="playerNames">You begin with <u>0</u> <i>Get Out of Jail Free</i> Cards</h3></li>
                        <li><h3 className="playerNames">Collect $100 when you pass GO</h3></li>
                    </ul>
                </div>
                </Typography>
                <h1 id="lineTitle">______________</h1>
                <Typography gutterBottom>
                <div className="rulesTeams">
                    <b id="teamName">Features of Stars</b> 
                    <ul>
                        <li><h3 className="playerNames">You begin with <u>$1500</u></h3></li>
                        <li><h3 className="playerNames">You begin with <u>1</u> <i>Get Out of Jail Free</i> Cards</h3></li>
                        <li><h3 className="playerNames">Collect $200 from the bank and $25 from each Stripes player when you pass GO</h3></li>
                    </ul>
                                            
                </div>
                </Typography>
            </div>
            </DialogContent>
        </Dialog>
        
    </div>
    );
  }
                    

       