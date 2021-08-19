import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Fade, Modal, Paper } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import { closeUpdateOrDeleteEventModal } from "../../../redux/actions/eventActions";

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

function UpdateAndDeleteEvent() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { showUpdateOrDeleteEventModal } = useSelector(
    (state) => state.eventReducer
  );

  const handleClose = () => {
    dispatch(closeUpdateOrDeleteEventModal());
  };

  return (
    <div>
      {showUpdateOrDeleteEventModal && (
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
                <h2 id="transition-modal-title-addEvent">Event Title</h2>
                <div id="modal-description-addEvent">
                  this is where the update and delete will go
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
