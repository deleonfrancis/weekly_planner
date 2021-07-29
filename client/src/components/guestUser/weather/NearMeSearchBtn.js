import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { getCurrentLocationWeather } from "../../../redux/actions/weatherActions";


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function NearMeSearchBtn() {
  const classes = useStyles();
  const dispatch = useDispatch();


  const handleClick = () =>{
      dispatch(getCurrentLocationWeather())
  }

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>near_me</Icon>}
        onClick={handleClick}
      >
        Near Me
      </Button>
    </div>
  );
}
