import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import SettingsModal from "../modals/SettingsModal";
import DateAndTime from "../../dateAndTime/DateAndTime";
import WeatherModal from "../modals/WeatherModal";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  jumbo: {
    boxShadow: "none",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 200,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-center",
    // fontSize: "3.0vw",
  },
}));

function Jumbotron() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0}>
        <AppBar
          elevation={0}
          position="static"
          className={classes.jumbo}
          color="default"
        >
          <Toolbar className={classes.toolbar}>
            <img width="500" src="/wp_Logo.png" alt="" />
            <DateAndTime />
            <WeatherModal />
            <SettingsModal />
          </Toolbar>
        </AppBar>
      </Paper>
    </div>
  );
}

export default Jumbotron;
