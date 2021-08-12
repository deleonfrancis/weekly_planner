import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import TodayIcon from "@material-ui/icons/Today";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function CalendarModalTrigger() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <IconButton>
          <TodayIcon style={{ fontSize: "350px", margin:"10px" }} />
        </IconButton>
      </Grid>
    </div>
  );
}

export default CalendarModalTrigger;
