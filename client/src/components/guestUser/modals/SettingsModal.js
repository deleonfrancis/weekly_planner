import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import SettingsIcon from "@material-ui/icons/Settings";
import IconButton from "@material-ui/core/IconButton";
import SelectTheme from "../settings/SelectTheme";

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
    flexGrow: 1,
  },
}));

export default function SettingsModal() {
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
    <div style={{marginLeft:"250px"}}>
      <IconButton
        aria-label="display more actions"
        edge="end"
        color="inherit"
        onClick={handleOpen}
      >
        <SettingsIcon className={classes.settingsIcon} />
      </IconButton>
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
            <h2 id="transition-modal-title">Settings</h2>
            <SelectTheme />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
