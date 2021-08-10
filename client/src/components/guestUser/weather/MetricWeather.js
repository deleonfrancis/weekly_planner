import React, { useEffect } from "react";
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
    fontSize:"20px",
    margin:"0px"
    //   color: theme.palette.text.secondary,
  },
}));

export default function MetricWeather() {
  const { searchedWeather } = useSelector((state) => state.weatherReducer);
  const classes = useStyles();

  //   const classes = useStyles();

  useEffect(() => {
    // eslint-disable-next-line
    // console.log(searchedWeather);
  }, [searchedWeather]);
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={0} className={classes.paper}>
            <h1>{searchedWeather?.current?.temp_c ?? ""}°</h1>
          </Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6}>
          <Paper elevation={0} className={classes.paper}>
            <p>
              High: {searchedWeather?.forecast?.forecastday[0]?.day?.maxtemp_c ?? ""}°
            </p>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={0} className={classes.paper}>
            <p>Low: {searchedWeather?.forecast?.forecastday[0]?.day?.mintemp_c ?? ""}°</p>
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={0} className={classes.paper}>
          <p>Feels Like: {searchedWeather?.current?.feelslike_c ?? ""}°</p>
        </Paper>
      </Grid>
      <Grid container>
        <Grid item xs={4}>
          <Paper elevation={0} className={classes.paper}>
            <p style={{fontSize:"20px"}}>Humidity: {searchedWeather?.current?.humidity ?? ""}%</p>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={0} className={classes.paper}>
            <ul style={{listStyleType: "none", padding:"0px"}}>
              Wind
              <li style={{fontSize:"15px"}}>{searchedWeather?.current?.wind_kph ?? ""} kph</li>
              <li style={{fontSize:"15px"}}>Direction: {searchedWeather?.current?.wind_dir ?? ""}</li>
              <li style={{fontSize:"15px"}}>Degree: {searchedWeather?.current?.wind_degree ?? ""}°</li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={0} className={classes.paper}>
            <p>UV Index: {searchedWeather?.current?.uv ?? ""}</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
