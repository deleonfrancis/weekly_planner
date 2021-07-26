import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    
    dateAndTime: {
      flexGrow: 1,
      alignSelf: "flex-center",
      marginTop: "20px"
      // fontSize: "3.0vw",
    },
  }));

function DateAndTime() {
    const classes = useStyles();

    return (
        <div className={classes.dateAndTime}>
            <div>this is where the date will go</div>
            <div>this is where the time will go</div>
        </div>
    )
}

export default DateAndTime
