import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Fade, Modal, Paper } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import CancelIcon from "@material-ui/icons/Cancel";
import {
  closeUpdateOrDeleteEventModal,
  deleteEvent,
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
  deleteIcon: {
    "&:hover": {
      color: "red",
    },
  },
  deleteButton: {
    margin: theme.spacing(1),
    backgroundColor: "#23078a",
    "&:hover": {
      backgroundColor: "red",
    },
  },
  cancelButton: {
    margin: theme.spacing(1),
    backgroundColor: "#23078a",
    "&:hover": {
      backgroundColor: "transparent",
      color: "green",
    },
  },
}));

function UpdateAndDeleteEvent() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { showUpdateOrDeleteEventModal, selectedEvent } = useSelector(
    (state) => state.eventReducer
  );

  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  useEffect(() => {
    //   const event = {selectedEvent}
    //   console.log(event.selectedEvent)
    if (!selectedEvent) {
      return;
    } else console.log(selectedEvent);
  }, [selectedEvent]);

  const handleClose = () => {
    dispatch(closeUpdateOrDeleteEventModal());
  };

  const handleDelete = (id) => {
    setShowConfirmDelete(false);
    dispatch(deleteEvent(id));
  };

  return (
    <div>
      {showUpdateOrDeleteEventModal && selectedEvent && (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={showUpdateOrDeleteEventModal}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={showUpdateOrDeleteEventModal}>
            <Paper>
              <div className={classes.paper}>
                <h2 id="transition-modal-title-addEvent">
                  {selectedEvent.title}
                </h2>
                <div id="modal-description-addEvent">
                  this is where the update and delete will go
                </div>
                <IconButton
                  className={classes.deleteIcon}
                  onClick={() => setShowConfirmDelete(true)}
                  edge="end"
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </Paper>
          </Fade>
        </Modal>
      )}
      {showConfirmDelete && (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={showConfirmDelete}
          onClose={() => setShowConfirmDelete(false)}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={showConfirmDelete}>
            <Paper>
              <div className={classes.paper}>
                <h3 id="confirm-delete">
                  {`Delete "${selectedEvent.title}?"`}
                </h3>
                <div>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(selectedEvent.id)}
                    className={classes.deleteButton}
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => setShowConfirmDelete(false)}
                    className={classes.cancelButton}
                    startIcon={<CancelIcon />}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </Paper>
          </Fade>
        </Modal>
      )}
    </div>
  );
}

export default UpdateAndDeleteEvent;
