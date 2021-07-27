import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    
    weatherDetail: {
      flexGrow: 1,
      alignSelf: "flex-center",
      marginTop: "20px"
      // fontSize: "3.0vw",
    },
  }));


function JumboWeather() {
    const classes = useStyles();
    return (
        <button className={classes.weatherDetail} align="center">
            this is where the current weather will go.
        </button>
    )
}

export default JumboWeather
