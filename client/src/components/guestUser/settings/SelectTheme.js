import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function SelectTheme() {
  const classes = useStyles();

  const userTheme = useSelector((state) => state.guestThemeReducer);
  const dispatch = useDispatch();
  
  const [themeInput, setThemeInput] = useState("");

  const handleDark = () => {
    dispatch(setThemeDark(userTheme));
  };

  const handleLight = () => {
    dispatch(setThemeLight(userTheme));
  };
  const handleChange = (event) => {
    setThemeInput(event.target.value);
  };
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="select-theme-label">Theme</InputLabel>
        <Select
          labelId="select-theme-label"
          id="select-theme"
          value={themeInput? themeInput: ""}
          
          onChange={handleChange}
        >
          <MenuItem onClick={handleDark}>Dark</MenuItem>
          <MenuItem onClick={handleLight}>Light</MenuItem>
        </Select>
        <FormHelperText>Select your theme</FormHelperText>
      </FormControl>
    </div>
  );
}
