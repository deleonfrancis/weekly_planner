import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { v4 as uuidv4 } from "uuid";
import TextField from "@material-ui/core/TextField";
import PlacesAutocomplete from "react-places-autocomplete";
import { easing, Paper } from "@material-ui/core";
import {
  getSearchedWeather,
  addToSearchHistory,
} from "../../../redux/actions/weatherActions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function SearchWeatherInput() {
  const classes = useStyles();
  const { searchHistory } = useSelector((state) => state.weatherReducer);
  const searchHistoryStringArray = searchHistory.map((string) => {
    return (string = string.searchInfo);
  });
  useEffect(() => {
    // searchHistoryStringArray();
    // console.log(searchHistoryStringArray);
    // eslint-disable-next-line
  }, [searchHistory]);

  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const handleChange = (value) => {
    setSearch(value);
  };
  const handleSelect = (value) => {
    // console.log(typeof value);
    if (!value) {
      return;
    }
    setSearch(value);
    dispatch(getSearchedWeather(value));

    const checkDuplicateEntry = () => {
      if (!searchHistoryStringArray.includes(value)) {
        return dispatch(
          addToSearchHistory({ id: uuidv4(), searchInfo: value })
        );
      } else return;
    };
    checkDuplicateEntry();
  };

  const searchOptions = {
    types: ["(regions)"],
  };

  return (
    <PlacesAutocomplete
      value={search}
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

              const style = suggestion.active
                ? {
                    backgroundColor: "#2196f3",
                    cursor: "pointer",
                    padding: "10px",
                    border: "solid .3px",
                    borderColor: "rgba(255, 255, 255, 0.7)",
                  }
                : {
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    padding: "10px",
                    border: "solid .5px",
                    borderColor: "rgba(255, 255, 255, 0.7)",
                  };
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
