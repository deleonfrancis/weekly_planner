import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import SearchWeatherInput from "./SearchWeatherInput";
import NearMeSearchBtn from "./NearMeSearchBtn";

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
        <NearMeSearchBtn />
        <Typography>or</Typography>
        <SearchWeatherInput />
      </Paper>
    </div>
  );
}
