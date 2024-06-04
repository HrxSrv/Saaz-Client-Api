import React, { useState, forwardRef } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Slide } from '@mui/material';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TilePopup = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Tile Details"}</DialogTitle>
        <DialogContent>
          {/* Add your images and links here */}
          <div>
            <img src="your-image-url.jpg" alt="Example" style={{ width: '100%' }} />
            <a href="https://example.com">Example Link</a>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TilePopup;
