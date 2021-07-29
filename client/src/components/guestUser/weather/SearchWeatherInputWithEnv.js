import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import PlacesAutocomplete from "react-places-autocomplete";
import scriptLoader from "react-async-script-loader";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function SearchWeatherInput({ isScriptLoaded, isScriptSucceed }) {
  const classes = useStyles();
  useEffect(() => {}, [isScriptLoaded, isScriptSucceed]);

  const [address, setAddress] = useState("");
  const handleChange = (value) => {
    setAddress(value);
  };
  const handleSelect = (value) => {
    setAddress(value);
  };
  console.log(`isScripted: ${isScriptLoaded}`);
  console.log(`isScriptSucceed: ${isScriptSucceed}`);

  if (isScriptLoaded && isScriptSucceed) {
    return (
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="search-weather"
                label="Search City Or Zip Code"
                variant="outlined"
                {...getInputProps({
                  placeholder: "Search City or Zip Code ...",
                })}
              />
            </form>
            {/* <input
              {...getInputProps({
                placeholder: "Search City or Zip Code ...",
              })}
            /> */}
            <div>
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
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
      //   <form className={classes.root} noValidate autoComplete="off">
      //     <TextField
      //       id="search-weather"
      //       label="Search City Or Zip Code"
      //       variant="outlined"
      //     />
      //   </form>
    );
  } else {
    return <div></div>;
  }
}

export default scriptLoader([
  `https://maps.googleapis.com/maps/api/js?key=${process.env}&libraries=places"`,
])(SearchWeatherInput);
