import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import PlacesAutocomplete from "react-places-autocomplete";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
        width: "25ch",
      //   boxShadow:"none"
    },
  },
}));

export default function SearchWeatherInput() {
  const classes = useStyles();

  const [address, setAddress] = useState("");
  const handleChange = (value) => {
    setAddress(value);
  };
  const handleSelect = (value) => {
    setAddress(value);
  };

  const searchOptions = {
    types: ["(regions)"],
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
      searchOptions={searchOptions}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <Paper elevation={0}>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="search-weather"
                label="Search City Or Zip Code"
                variant="outlined"
                elevation={0}
                {...getInputProps({
                  placeholder: "",
                })}
              />
            </form>
          </Paper>
          <div>
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion) => {
              const className = suggestion.active
                ? "suggestion-item--active"
                : "suggestion-item";
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: "#2196f3", cursor: "pointer", padding:"10px", border:"solid .5px", borderColor:"rgba(255, 255, 255, 0.7)"}
                : { backgroundColor: "transparent", cursor: "pointer", padding:"10px", border:"solid .5px", borderColor:"rgba(255, 255, 255, 0.7)"};
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}
