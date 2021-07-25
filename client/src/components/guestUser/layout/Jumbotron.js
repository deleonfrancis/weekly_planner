import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import SettingsModal from "../modals/SettingsModal"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
  },
}));

function Jumbotron() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "red" }}>
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="h2" noWrap>
            Weekly Planner
          </Typography>
          <SettingsModal />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Jumbotron;
