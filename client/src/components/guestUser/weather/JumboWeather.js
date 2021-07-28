import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import { getCurrentLocationWeather } from "../../../redux/actions/weatherActions";
import { Grid, Typography } from "@material-ui/core";

let selectedTheme = "";

const useStyles = makeStyles((theme) => ({
  weatherDetail: {
    flexGrow: 1,
    alignSelf: "flex-center",
    // marginTop: "20px",
  },
  text: {
    color: selectedTheme === "dark" ? "black" : "white",
  },
}));

function JumboWeather() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userTheme = useSelector((state) => state.guestThemeReducer);
  const { currentLocationWeather, unitOfMeasure} = useSelector(
    (state) => state.weatherReducer
  );

  useEffect(() => {
    dispatch(getCurrentLocationWeather());
    // eslint-disable-next-line
  }, []);

  // console.log(currentLocationWeather);

  selectedTheme = `${userTheme.userTheme}`;

  return (
    <div className={classes.weatherDetail}>
      <Link component="button" variant="body2" underline="none">
        {currentLocationWeather && (
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <img
              src={currentLocationWeather.current.condition.icon}
              alt="weatherIcon"
              style={{marginRight:"25px"}}
              
            />
            <div>
              <Typography className={classes.text}>
                {unitOfMeasure==="imperial" ? currentLocationWeather.current.temp_f : currentLocationWeather.current.temp_c}°
              </Typography>
              <Typography className={classes.text}>
                {currentLocationWeather.location.name},{" "}
                {currentLocationWeather.location.region}
              </Typography>
            </div>
          </Grid>
        )}
      </Link>
    </div>
  );
}

export default JumboWeather;
