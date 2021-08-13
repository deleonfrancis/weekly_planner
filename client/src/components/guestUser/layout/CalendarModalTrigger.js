import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import TodayIcon from "@material-ui/icons/Today";
import { Fade, Grid, Modal, Paper } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import CalendarModal from "../modals/CalendarModal";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  calendarIcon: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // height: "55%",
  },
  paper: {
    backgroundColor: "transparent",
    padding: theme.spacing(4, 8, 6),
    height: "55%",
  },
}));

function CalendarModalTrigger() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div onClick={handleOpen} className={classes.root}>
        <Grid container justifyContent="center">
          <IconButton className={classes.calendarIcon}>
            <TodayIcon style={{ fontSize: "350px", margin: "10px" }} />
          </IconButton>
        </Grid>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Paper>
            <div className={classes.paper}>
              <h2 id="transition-modal-title-calendar">Calendar</h2>
              <div id="modal-description-calendar">
                <CalendarModal />
              </div>
            </div>
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
}

export default CalendarModalTrigger;
