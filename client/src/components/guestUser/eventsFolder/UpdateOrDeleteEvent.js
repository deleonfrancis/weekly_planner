import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Fade, Modal, Paper, TextField } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import {
  closeUpdateOrDeleteEventModal,
  updateEvent,
  deleteEvent,
  setEventBackgroundColor,
} from "../../../redux/actions/eventActions";
import FunctionalEventColorSelector from "./FunctionalEventColorSelector";

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

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#52d869",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

// Component to Read, Update, or Delete Event
function UpdateOrDeleteEvent() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { showUpdateOrDeleteEventModal, selectedEvent } = useSelector(
    (state) => state.eventReducer
  );

  // Bool variable to conditionally show underline of the input title
  const [showUnderline, setShowUnderline] = useState(true);

  // All day toggle switch variable
  const [stateOfAllDay, setStateOfAllDay] = useState(null);

  useEffect(
    () => {
      // console.log(selectedEvent);
      if (!selectedEvent) {
        return;
      } else {
        dispatch(setEventBackgroundColor(selectedEvent.backgroundColor));
        setStateOfAllDay(selectedEvent.allDay);
        // console.log(stateOfAllDay)
        // console.log(selectedEvent.backgroundColor);
        // console.log("useEffect selectedEvent", selectedEvent);
        // console.log("useEffect selectedEvent.allDay", selectedEvent.allDay);
        // console.log(titleChange);
        // setTitleChange(selectedEvent.title)
      }
    },
    [selectedEvent, showUnderline],
    stateOfAllDay
  );

  const handleClose = () => {
    dispatch(closeUpdateOrDeleteEventModal());
  };
  const handleDelete = (id) => {
    dispatch(deleteEvent(id));
  };

  // Changes the title on input change
  const handleChangeTitle = (newTitle) => {
    dispatch(
      updateEvent({
        ...selectedEvent,
        title: newTitle,
      })
    );
  };

  // All Day Toggle
  const handleChangeAllDay = (isAllDay) => {
    setStateOfAllDay(isAllDay);
    // console.log(isAllDay);
    dispatch(
      updateEvent({
        ...selectedEvent,
        allDay: isAllDay,
      })
    );
  };

  // Handles when the start date or time is changed
  const handleStartDateChange = (date) => {
    if (!selectedEvent.allDay) {
      // setSelectedStartDate(date);
    } else {
      // setSelectedStartDate(date);
    }
  };
  // Handles when the end date or time is changed
  const handleEndDateChange = (date) => {
    if (!selectedEvent.allDay) {
      // setSelectedEndDate(date);
    } else {
      // setSelectedEndDate(date);
    }
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
                <form noValidate autoComplete="off">
                  <Grid container justifyContent="space-around">
                    {/* Title Text Field, looks like an h2 on the page. */}
                    <TextField
                      id="selected-title"
                      defaultValue={selectedEvent.title}
                      autoComplete="off"
                      placeholder={selectedEvent.title === "" ? "untitled" : ""}
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
                      onChange={(event) =>
                        handleChangeTitle(event.target.value)
                      }
                    />
                    <FormControlLabel
                      control={
                        <IOSSwitch
                          checked={stateOfAllDay}
                          onChange={() => handleChangeAllDay(!stateOfAllDay)}
                          name="checkedB"
                        />
                      }
                      label="All Day Event"
                    />
                  </Grid>
                </form>
                <div>
                  {/* Not an all day event */}
                  {!stateOfAllDay ? (
                    <div id="modal-description-updateEvent">
                      {/* Start Date and Time */}
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justifyContent="space-around">
                          <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Start Date"
                            value={selectedEvent.start}
                            onChange={handleStartDateChange}
                            KeyboardButtonProps={{
                              "aria-label": "change date",
                            }}
                          />
                          <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            label="Start Time"
                            value={selectedEvent.start}
                            onChange={handleStartDateChange}
                            keyboardIcon={<AccessTimeIcon />}
                            KeyboardButtonProps={{
                              "aria-label": "change time",
                            }}
                          />
                        </Grid>
                      </MuiPickersUtilsProvider>

                      {/* End Date and Time */}
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justifyContent="space-around">
                          <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="End Date"
                            value={selectedEvent.end}
                            onChange={handleEndDateChange}
                            KeyboardButtonProps={{
                              "aria-label": "change date",
                            }}
                          />
                          <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            label="End Time"
                            value={selectedEvent.end}
                            onChange={handleEndDateChange}
                            keyboardIcon={<AccessTimeIcon />}
                            KeyboardButtonProps={{
                              "aria-label": "change time",
                            }}
                          />
                        </Grid>
                      </MuiPickersUtilsProvider>
                    </div>
                  ) : (
                    <div>
                      {/* All Day Event */}
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justifyContent="space-around">
                          <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Start Date"
                            value={selectedEvent.start}
                            onChange={handleStartDateChange}
                            KeyboardButtonProps={{
                              "aria-label": "change date",
                            }}
                          />
                          <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="End Date"
                            value={
                              selectedEvent.end
                                ? selectedEvent.end
                                : selectedEvent.start
                            }
                            onChange={handleEndDateChange}
                            KeyboardButtonProps={{
                              "aria-label": "change date",
                            }}
                          />
                        </Grid>
                      </MuiPickersUtilsProvider>
                    </div>
                  )}
                </div>

                <div style={{ margin: "10px 0px" }}>
                  <FunctionalEventColorSelector />
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
