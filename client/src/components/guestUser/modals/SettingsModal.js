import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import SettingsIcon from "@material-ui/icons/Settings";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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
    // width: "70%",
    height: "50%",
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

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
              <Select
                // value={age}
                // onChange={handleChange}
                displayEmpty
                className={classes.selectEmpty}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="" disabled>
                  Theme
                </MenuItem>
                <MenuItem value={10}>Dark</MenuItem>
                <MenuItem value={20}>Light</MenuItem>
              </Select>
              <FormHelperText>Select your theme</FormHelperText>
            </FormControl>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
