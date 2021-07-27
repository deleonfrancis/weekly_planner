import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import { currentPositionWeatherService } from "../../../api/weatherApi/geoWeather";

let selectedTheme = "";

const useStyles = makeStyles((theme) => ({
  weatherDetail: {
    flexGrow: 1,
    alignSelf: "flex-center",
    marginTop: "20px",
  },
  text: {
    color: selectedTheme === "dark" ? "black" : "white",
  },
}));

function JumboWeather() {
  const classes = useStyles();

  useEffect(() => {
    currentPositionWeatherService();
  }, []);

  const userTheme = useSelector((state) => state.guestThemeReducer);
  selectedTheme = `${userTheme.userTheme}`;
  console.log(selectedTheme);
  return (
    <div className={classes.weatherDetail}>
      <Link component="button" variant="body2" underline="none">
        <div className={classes.text}>
          this is where the current weather will go.
        </div>
      </Link>
    </div>
  );
}

export default JumboWeather;
