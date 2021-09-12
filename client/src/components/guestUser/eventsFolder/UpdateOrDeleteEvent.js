import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Fade, Modal, Paper, TextField } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  closeUpdateOrDeleteEventModal,
  updateEvent,
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
  textField: {
    width: 300,
    margin: 0,
  },
  //style for font size
  resize: {
    fontSize: 25,
    fontWeight: "bolder",
  },
  noBorder: {
    border: "none",
  },
}));

function UpdateOrDeleteEvent() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { showUpdateOrDeleteEventModal, selectedEvent } = useSelector(
    (state) => state.eventReducer
  );

  // Bool variable to conditionally show underline of the input title
  const [showUnderline, setShowUnderline] = useState(true);

  // Variable to store title change
  // const [titleChange, setTitleChange] = useState(selectedEvent);

  // const [updatedEvent, setUpdatedEvent] = useState(selectedEvent)

  useEffect(() => {
    // const event = {selectedEvent}
    // console.log(event.selectedEvent)
    // console.log(selectedEvent);
    // console.log(selectedEvent.title);
    if (!selectedEvent) {
      return;
    } else {
      // console.log(selectedEvent);
      // console.log(titleChange);
      // setTitleChange(selectedEvent.title)
    }
  }, [selectedEvent, showUnderline]);

  const handleClose = () => {
    dispatch(closeUpdateOrDeleteEventModal());
  };
  const handleDelete = (id) => {
    dispatch(deleteEvent(id));
  };

  

  const handleChangeTitle = (newTitle) => {
    // const titleChange = selectedEvent.assign(selectedEvent.title === newTitle);
    // titleChange(newTitle)
    // console.log(titleChange);
    // console.log(selectedEvent, selectedEvent.title === newTitle)
    // console.log(newTitle)
    // console.log(selectedEvent.title)
    dispatch(updateEvent({
      ...selectedEvent,
      title: newTitle
    }))
    // console.log(titleChange);
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
                {/* Title Text Field, looks like an h2 on the page. */}
                <TextField
                  id="selected-title"
                  defaultValue={selectedEvent.title}
                  autoComplete="off"
                  InputProps={{
                    classes: {
                      input: classes.resize,
                    },
                    disableUnderline: showUnderline,
                  }}
                  className={classes.textField}
                  onFocus={() => {
                    // Show Border Under Text
                    setShowUnderline(false);
                  }}
                  onBlur={() => {
                    // Remove Border Under Text
                    setShowUnderline(true);
                  }}
                  onChange={(event) => handleChangeTitle(event.target.value)}
                />
                <div id="modal-description-addEvent">
                  this is where the update and delete will go
                </div>
                {/* Delete Button */}
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

export default UpdateOrDeleteEvent;
