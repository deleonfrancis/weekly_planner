import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Paper } from "@material-ui/core";
import SearchWeatherInput from "./SearchWeatherInput";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function SearchWeatherSection() {
  const classes = useStyles();
  return (
    <div>
      <Paper>
        <SearchWeatherInput />
      </Paper>
    </div>
  );
}
