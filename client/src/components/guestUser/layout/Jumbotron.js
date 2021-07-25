import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import SettingsIcon from "@material-ui/icons/Settings";
import SettingsModal from "../modals/SettingsModal"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.backgroundColor.warning.main
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
  // settingsIcon:{
  //   fontSize: "40px"
  // }
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
          {/* <IconButton
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <SettingsIcon className={classes.settingsIcon} />
          </IconButton> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Jumbotron;
