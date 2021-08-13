import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import {
  setDefaultWeatherToNearMe,
  setDefaultWeatherData,
} from "../../../redux/actions/weatherActions";
import { Paper, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  weatherDetail: {
    flexGrow: 1,
    alignSelf: "flex-center",
    // marginTop: "20px",
  },
  text: {
    // color: selectedTheme === "dark" ? "white" : "black",
  },
  paper: {
    backgroundColor: "transparent",
  },
}));

function JumboWeather() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { userTheme } = useSelector((state) => state.guestThemeReducer);
  const {
    currentLocationWeather,
    unitOfMeasure,
    defaultWeather,
    defaultWeatherData,
  } = useSelector((state) => state.weatherReducer);

  useEffect(() => {
    if (defaultWeather === "Near Me") {
      dispatch(setDefaultWeatherToNearMe());
    } else {
      dispatch(setDefaultWeatherData(defaultWeather));
    }
    // eslint-disable-next-line
  }, [userTheme, unitOfMeasure, defaultWeather]);

  return (
    <div className={classes.weatherDetail}>
      {(currentLocationWeather || defaultWeatherData) && (
        <Link component="button" variant="body2" underline="none">
          {defaultWeather && (
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <img
                src={defaultWeatherData.current.condition.icon}
                alt="weatherIcon"
                style={{ padding: "0px 15px" }}
              />
              <div>
                <Paper elevation={0} className={classes.paper}>
                  <Typography className={classes.text}>
                    {unitOfMeasure === "imperial"
                      ? `${Math.round(
                          defaultWeatherData.current.temp_f
                        )}°F`
                      : `${Math.round(
                          defaultWeatherData.current.temp_c
                        )}°C`}
                  </Typography>
                  <Typography className={classes.text}>
                    {defaultWeatherData.location.name},{" "}
                    {defaultWeatherData.location.region}
                  </Typography>
                </Paper>
              </div>
            </Grid>
          )}
        </Link>
      )}
    </div>
  );
}

export default JumboWeather;
