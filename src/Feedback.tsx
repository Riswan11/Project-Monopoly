import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { pages } from './App';
import SimpleRating from './Rating';

interface FeedbackPageProps {
  changePage: (page: pages) => void;
}

//dialog box with a form 
export default function Feedback(props: FeedbackPageProps) {
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
      <Button color="primary" onClick={handleClickOpen}>
        Yes, I am sure
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Thanks for Playing!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please take a moment to rate your experiance and provide additional feedback.
            <SimpleRating />
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Comments"
            type="msg"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={(e) => props.changePage(pages.ReflectionPage)} color="primary">
             Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

