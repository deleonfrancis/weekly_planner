import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { v4 as uuidv4 } from "uuid";
// import { createEvent } from "../../../redux/actions/eventActions";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function CreateEvent() {
  const classes = useStyles();
  const [title, setTitle] = useState("");

  useEffect(() => {
    console.log(title);
  }, [title]);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Title" onChange={handleChange} />
      </form>
    </div>
  );
}

export default CreateEvent;
