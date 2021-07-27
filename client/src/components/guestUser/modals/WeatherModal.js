import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import JumboWeather from "../weather/JumboWeather";
import WeatherModalPage from "../weather/WeatherModalPage";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 8, 6),
    height: "55%",
  },
  settingsIcon: {
    fontSize: "40px",
  },
}));

export default function WeatherModal() {
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
        <JumboWeather />
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
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Current Weather</h2>
            <WeatherModalPage />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
