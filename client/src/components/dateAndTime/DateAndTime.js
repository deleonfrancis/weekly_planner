import React, { useState, useEffect } from "react";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  dateAndTime: {
    flexGrow: 1,
    alignSelf: "flex-center",
    marginTop: "20px",
  },
  text: {
    align: "center",
  },
}));

function DateAndTime() {
  const classes = useStyles();

  const [time, setTime] = useState(null);
  const [date, setDate] = useState(null);

  useEffect(() => {
    let now = moment();

    const interval = setInterval(() => {
      setTime(now);
      setDate(now);
    }, 1000);
    return () => clearInterval(interval);
  }, [time, date]);
  
  return (
    <div className={classes.dateAndTime}>
      <div className={classes.text} align="center">
        {date ? date.format("MMM Do, YYYY") : moment().format("MMM Do, YYYY")}
      </div>
      <div className={classes.text} align="center">
        {time ? time.format("h:mm A") : moment().format("h:mm A")}
      </div>
    </div>
  );
}

export default DateAndTime;
