import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import {
  getCurrentLocationWeather,
  getSearchedWeather,
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
    searchedWeather,
    unitOfMeasure,
    defaultWeather,
  } = useSelector((state) => state.weatherReducer);

  useEffect(() => {
    if (defaultWeather === "Near Me") {
      dispatch(getCurrentLocationWeather());
    } else {
      dispatch(getSearchedWeather(defaultWeather));
    }
    // eslint-disable-next-line
  }, [userTheme, unitOfMeasure, defaultWeather]);

  return (
    <div className={classes.weatherDetail}>
      {(currentLocationWeather || searchedWeather) && (
        <Link component="button" variant="body2" underline="none">
          {defaultWeather === "Near Me" ? (
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <img
                src={currentLocationWeather?.current?.condition?.icon ?? ""}
                alt="weatherIcon"
                style={{ padding: "0px 15px" }}
              />
              <div>
                <Paper elevation={0} className={classes.paper}>
                  <Typography className={classes.text}>
                    {unitOfMeasure === "imperial"
                      ? `${Math.round(
                          currentLocationWeather?.current?.temp_f ?? ""
                        )}°F`
                      : `${Math.round(
                          currentLocationWeather?.current?.temp_c ?? ""
                        )}°C`}
                  </Typography>
                  <Typography className={classes.text}>
                    {currentLocationWeather?.location?.name ?? ""},{" "}
                    {currentLocationWeather?.location?.region ?? ""}
                  </Typography>
                </Paper>
              </div>
            </Grid>
          ) : (
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <img
                src={searchedWeather?.current?.condition?.icon ?? ""}
                alt="weatherIcon"
                style={{ padding: "0px 15px" }}
              />
              <div>
                <Paper elevation={0} className={classes.paper}>
                  <Typography className={classes.text}>
                    {unitOfMeasure === "imperial"
                      ? `${Math.round(
                          searchedWeather?.current?.temp_f ?? ""
                        )}°F`
                      : `${Math.round(
                          searchedWeather?.current?.temp_c ?? ""
                        )}°C`}
                  </Typography>
                  <Typography className={classes.text}>
                    {searchedWeather?.location?.name ?? ""},{" "}
                    {searchedWeather?.location?.region ?? ""}
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
