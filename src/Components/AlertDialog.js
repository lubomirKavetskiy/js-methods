import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const AlertDialog = ({
  openAlertDialog,
  handleToggleAlertDialog,
  titleChoosenMethod,
  children,
}) => (
  <div>
    {/* <Button onClick={handleClickOpen}>Open alert dialog</Button> */}
    <Dialog
      open={openAlertDialog}
      onClose={handleToggleAlertDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{titleChoosenMethod}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {children}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleToggleAlertDialog} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);

export default AlertDialog;
