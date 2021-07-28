import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ImperialWeather from "./ImperialWeather";
import Location from "./Location";
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";

// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       padding: theme.spacing(2),
//       textAlign: 'center',
//       color: theme.palette.text.secondary,
//     },
//   }));

export default function DisplayWeatherSection() {
  const { searchedWeather, unitOfMeasure } = useSelector(
    (state) => state.weatherReducer
  );
  //   const classes = useStyles();

  useEffect(() => {
    // eslint-disable-next-line
    console.log(searchedWeather);
  }, [searchedWeather]);

  return (
    <div>
      <Location />
      <ImperialWeather />
    </div>
  );
}
