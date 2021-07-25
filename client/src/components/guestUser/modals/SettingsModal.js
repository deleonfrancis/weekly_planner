import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import SettingsIcon from "@material-ui/icons/Settings";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import {
  setThemeLight,
  setThemeDark,
} from "../../../redux/actions/guestThemeActions";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: "55%",
  },
  settingsIcon: {
    fontSize: "40px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    width: "100%",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function SettingsModal() {
  const classes = useStyles();

  const userTheme = useSelector((state) => state.guestThemeReducer);
  const dispatch = useDispatch();
  const [themeInput, setThemeInput] = useState('');

  useEffect(() => {
    console.log(userTheme);
  }, [userTheme]);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDark = () => {
    dispatch(setThemeDark());
  };

  const handleLight = () => {
    dispatch(setThemeLight());
  };
  const handleChange = (event) => {
    setThemeInput(event.target.value);
  };
  return (
    <div>
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

            <FormControl className={classes.formControl}>
              <InputLabel id="select-theme-label">Theme</InputLabel>
              <Select
                labelId="select-theme-label"
                id="select-theme"
                value={themeInput}
                onChange={handleChange}
              >
                <MenuItem onClick={handleDark}>Dark</MenuItem>
                <MenuItem onClick={handleLight}>Light</MenuItem>
              </Select>
              <FormHelperText>Select your theme</FormHelperText>
            </FormControl>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
