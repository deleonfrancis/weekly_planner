import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Fade, Modal, Paper } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { closeUpdateOrDeleteEventModal, deleteEvent } from "../../../redux/actions/eventActions";

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
}));

function UpdateAndDeleteEvent() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { showUpdateOrDeleteEventModal, selectedEvent } = useSelector(
    (state) => state.eventReducer
  );

  useEffect(() => {
    //   const event = {selectedEvent}
    //   console.log(event.selectedEvent)
    if (!selectedEvent) {
      return;
    } else console.log(selectedEvent.id);
  }, [selectedEvent]);

  const handleClose = () => {
    dispatch(closeUpdateOrDeleteEventModal());
  };
  const handleDelete = (id) => {
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
                  onClick={() => handleDelete(selectedEvent.id)}
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
    </div>
  );
}

export default UpdateAndDeleteEvent;
