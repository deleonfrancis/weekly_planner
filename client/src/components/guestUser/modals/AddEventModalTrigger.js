import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { Fade, Grid, Modal, Paper } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import AddIcon from "@material-ui/icons/Add";
import CreateEvent from "../eventsFolder/CreateEvent";
import {
  closeCreateEventModal,
  openCreateEventModal,
} from "../../../redux/actions/eventActions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "transparent",
    padding: theme.spacing(4, 8, 6),
    height: "55%",
  },
  addEvent: {
    // alignContent: "flex-end",
    margin: theme.spacing(1),
  },
}));

function AddEventModalTrigger() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { showCreateEventModal } = useSelector((state) => state.eventReducer);

  const handleOpen = () => {
    dispatch(openCreateEventModal());
  };

  const handleClose = () => {
    dispatch(closeCreateEventModal());
  };
  return (
    <div>
      <div className={classes.root}>
        <Grid container justifyContent="flex-start">
          <IconButton
            onClick={handleOpen}
            aria-label="add"
            className={classes.addEvent}
          >
            <AddIcon fontSize="large" />
          </IconButton>
        </Grid>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={showCreateEventModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showCreateEventModal}>
          <Paper>
            <div className={classes.paper}>
              <h2 id="transition-modal-title-addEvent">Create Event</h2>
              <div id="modal-description-addEvent">
                <CreateEvent handleCloseModal={handleClose} />
              </div>
            </div>
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
}

export default AddEventModalTrigger;
