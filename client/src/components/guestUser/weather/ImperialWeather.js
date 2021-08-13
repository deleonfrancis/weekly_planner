import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    fontSize: "20px",
    margin: "0px",
    //   color: theme.palette.text.secondary,
  },
}));

export default function ImperialWeather() {
  const { searchedWeather, defaultWeatherData } = useSelector(
    (state) => state.weatherReducer
  );
  const classes = useStyles();
  const [weather, setWeather] = useState(defaultWeatherData);

  useEffect(() => {
    if (searchedWeather) {
      setWeather(searchedWeather);
    }
    // eslint-disable-next-line
  }, [searchedWeather, defaultWeatherData]);

  const currentTemp = weather.current.temp_f;
  const highTemp = weather.forecast.forecastday[0].day.maxtemp_f;
  const lowTemp = weather.forecast.forecastday[0].day.mintemp_f;
  const feelsLike = weather.current.feelslike_f;

  //   const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={0} className={classes.paper}>
            <h1>{Math.round(currentTemp)}°F</h1>
          </Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6}>
          <Paper elevation={0} className={classes.paper}>
            <p>High: {Math.round(highTemp)}°F</p>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={0} className={classes.paper}>
            <p>Low: {Math.round(lowTemp)}°F</p>
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={0} className={classes.paper}>
          <p>Feels Like: {Math.round(feelsLike)}°F</p>
        </Paper>
      </Grid>
      <Grid container>
        <Grid item xs={4}>
          <Paper elevation={0} className={classes.paper}>
            <p style={{ fontSize: "20px" }}>
              Humidity: {weather.current.humidity}%
            </p>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={0} className={classes.paper}>
            <ul style={{ listStyleType: "none", padding: "0px" }}>
              Wind
              <li style={{ fontSize: "15px" }}>
                {weather.current.wind_mph} mph
              </li>
              <li style={{ fontSize: "15px" }}>
                Direction: {weather.current.wind_dir}
              </li>
              <li style={{ fontSize: "15px" }}>
                Degree: {weather.current.wind_degree}°
              </li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={0} className={classes.paper}>
            <p>UV Index: {weather.current.uv}</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
