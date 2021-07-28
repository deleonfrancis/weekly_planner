import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import {
    setToImperial,
  setToMetric,
} from "../../../redux/actions/weatherActions";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function SelectMeasurement() {
  const classes = useStyles();

  const unitOfMeasure = useSelector((state) => state.weatherReducer);
  const dispatch = useDispatch();

  const [unitInput, setUnitInput] = useState("");

  const handleImperial = () => {
    dispatch(setToImperial(unitOfMeasure));
  };

  const handleMetric = () => {
    dispatch(setToMetric(unitOfMeasure));
  };
  const handleChange = (event) => {
    setUnitInput(event.target.value);
  };
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="select-theme-label">
          Unit of Measurement
        </InputLabel>
        <Select
          labelId="select-theme-label"
          id="select-theme"
          value={unitInput ? unitInput : ""}
          onChange={handleChange}
        >
          <MenuItem value={"Imperial"} onClick={handleImperial}>Imperial</MenuItem>
          <MenuItem value={"Metric"} onClick={handleMetric}>Metric</MenuItem>
        </Select>
        <FormHelperText>Select your unit of measurement</FormHelperText>
      </FormControl>
    </div>
  );
}
