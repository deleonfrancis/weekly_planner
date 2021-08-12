import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import WeatherModalPage from "../weather/WeatherModalPage";
import { Link, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "transparent",
    // boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 8, 6),
    height: "55%",
  },
  transBack: {
    backgroundColor: "transparent",
  },
  settingsIcon: {
    fontSize: "40px",
  },
}));

export default function WeatherModalText() {
  const classes = useStyles();

  const userTheme = useSelector((state) => state.guestThemeReducer);

  useEffect(() => {
    // console.log(userTheme);
  }, [userTheme]);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div onClick={handleOpen}>
        <Link component="button" variant="body2" underline="none">
          <Paper className={classes.transBack} elevation={0}>
            <Typography>Current Weather</Typography>
          </Paper>
        </Link>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Paper>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">Current Weather</h2>
              <div id="modal-description">
                <WeatherModalPage />
              </div>
            </div>
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
}
