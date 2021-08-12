import React from "react";
import WeatherModalText from "../modals/WeatherModalText";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "transparent",
    // color: theme.palette.text.secondary,
  },
}));

function OptionsRow() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{margin:"5px 200px "}}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper elevation={0} className={classes.paper}>
            View Plans
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={0} className={classes.paper}>
            Create New Plan
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={0} className={classes.paper}>
            <WeatherModalText />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default OptionsRow;
