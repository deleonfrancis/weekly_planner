import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import SearchWeatherInput from "./SearchWeatherInput";
import NearMeSearchBtn from "./NearMeSearchBtn";
import SearchHistorySection from "./SearchHistorySection";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: "25ch",
//     },
//   },
// }));

export default function SearchWeatherSection() {
  // const classes = useStyles();
  return (
    <div>
      <Paper elevation={0}>
        <NearMeSearchBtn />
        <Typography>or</Typography>
        <SearchWeatherInput />
        <SearchHistorySection />
      </Paper>
    </div>
  );
}
