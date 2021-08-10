import React, { useEffect } from "react";
import { useSelector } from "react-redux";
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

export default function Location() {
  const { searchedWeather } = useSelector((state) => state.weatherReducer);
  //   const classes = useStyles();

  useEffect(() => {
    // eslint-disable-next-line
    // console.log(searchedWeather);
  }, [searchedWeather]);

  return (
    <div>
      {/* <h2 className={{ marginTop: "0px" }}>
        {searchedWeather.location.name}, {searchedWeather.location.region}
      </h2> */}
      {searchedWeather?.location?.country === "United States of America" ? (
        <h2 className={{ marginTop: "0px" }}>
          {searchedWeather?.location?.name}, {searchedWeather?.location?.region}
        </h2>
      ) : (
        <h2 className={{ marginTop: "0px" }}>
          {searchedWeather?.location?.name}, {searchedWeather?.location?.country}
        </h2>
      )}
    </div>
  );
}
