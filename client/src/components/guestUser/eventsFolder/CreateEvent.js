import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Icon from "@material-ui/core/Icon";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Button from "@material-ui/core/Button";
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import moment from "moment";
import { createEvent } from "../../../redux/actions/eventActions";
import FunctionalEventColorSelector from "./FunctionalEventColorSelector";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  button: {
    margin: theme.spacing(1),
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

function CreateEvent({ handleCloseModal }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { dateClicked, eventBackgroundColor } = useSelector(
    (state) => state.eventReducer
  );
  const [title, setTitle] = useState("");
  const [allDay, setAllDay] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState(
    new Date().toUTCString()
  );
  const [selectedEndDate, setSelectedEndDate] = useState(
    new Date().toUTCString()
  );

  useEffect(() => {
    if (dateClicked) {
      if (
        moment(dateClicked.date).format("MMM Do YY") ===
        moment().format("MMM Do YY")
      ) {
        setSelectedStartDate(new Date().toUTCString());
        setSelectedEndDate(new Date().toUTCString());
      } else {
        setSelectedStartDate(dateClicked.date);
        setSelectedEndDate(dateClicked.date);
      }
    } else {
      setSelectedStartDate(new Date().toUTCString());
      setSelectedEndDate(new Date().toUTCString());
    }
    console.log(eventBackgroundColor);
  }, [eventBackgroundColor]);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeAllDay = () => {
    setAllDay(!allDay);
  };
  const handleStartDateChange = (date) => {
    if (!allDay) {
      setSelectedStartDate(date);
    } else {
      setSelectedStartDate(date);
    }
  };
  const handleEndDateChange = (date) => {
    if (!allDay) {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(date);
    }
  };

  const handleSubmitEvent = () => {
    if (!allDay) {
      dispatch(
        createEvent({
          id: uuidv4(),
          title: title,
          start: moment(selectedStartDate).format(),
          end: moment(selectedEndDate).format(),
          allDay: false,
          backgroundColor: `rgba(${eventBackgroundColor.color.r}, ${eventBackgroundColor.color.g}, ${eventBackgroundColor.color.b}, ${eventBackgroundColor.color.a})`,
        })
      );
    } else {
      dispatch(
        createEvent({
          id: uuidv4(),
          title: title,
          start: moment(selectedStartDate).format("YYYY-MM-DD"),
          end: moment(selectedEndDate).format("YYYY-MM-DD"),
          allDay: true,
          backgroundColor: `rgba(${eventBackgroundColor.color.r}, ${eventBackgroundColor.color.g}, ${eventBackgroundColor.color.b}, ${eventBackgroundColor.color.a})`,
        })
      );
    }
    handleCloseModal();
  };

  return (
    <div style={{ width: "700px" }}>
      <form noValidate autoComplete="off">
        <Grid container justifyContent="space-around">
          <TextField
            id="standard-basic"
            label="Title"
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <IOSSwitch
                checked={allDay}
                onChange={handleChangeAllDay}
                name="checkedB"
              />
            }
            label="All Day Event"
          />
        </Grid>
      </form>

      <div>
        {!allDay ? (
          <div>
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
                  value={selectedStartDate}
                  onChange={handleStartDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="Start Time"
                  value={selectedStartDate}
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
                  value={selectedEndDate}
                  onChange={handleEndDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="End Time"
                  value={selectedEndDate}
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
                  value={selectedStartDate}
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
                  value={selectedEndDate}
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
      <div>
        <FunctionalEventColorSelector />
      </div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => handleCloseModal()}
        endIcon={<Icon>cancel</Icon>}
      >
        Cancel
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleSubmitEvent}
        endIcon={<Icon>send</Icon>}
      >
        Done
      </Button>
    </div>
  );
}

export default CreateEvent;
