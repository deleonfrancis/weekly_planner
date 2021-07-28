import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SearchWeatherSection from "./SearchWeatherSection";
import DisplayWeatherSection from "./DisplayWeatherSection";
// import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    // color: theme.palette.text.secondary,
  },
}));

export default function WeatherModalPage() {
  const { searchedWeather } = useSelector((state) => state.weatherReducer);
  const classes = useStyles();

  useEffect(() => {
    // eslint-disable-next-line
    console.log(searchedWeather);
  }, [searchedWeather]);

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Paper style={{width:"300px"}} elevation={0} className={classes.paper}>
            <SearchWeatherSection />
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper  style={{width:"700px"}} elevation={0} className={classes.paper}>
            <DisplayWeatherSection />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
