import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import PlacesAutocomplete from "react-places-autocomplete";
import { Paper } from "@material-ui/core";
import {
  setDefaultWeather,
  getSearchedWeather,
  setDefaultWeatherData
} from "../../../redux/actions/weatherActions";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function SelectDefaultWeather() {
  const classes = useStyles();

  const { defaultWeather } =
    useSelector((state) => state.weatherReducer);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [userSelection, setUserSelection] = useState("");
  const [showSpecifiedLocationInput, setShowSpecifiedLocationInput] =
    useState(false);

  const handleDefaultCurrentLocation = () => {
    setShowSpecifiedLocationInput(false);
    dispatch(setDefaultWeather("Near Me"));
  };
  const handleDefaultSpecifiedLocation = (value) => {
    if (!value) {
      return;
    }
    setSearch(value);
    dispatch(setDefaultWeather(value));
    dispatch(setDefaultWeatherData(value))
    setShowSpecifiedLocationInput(false);
  };

  const handleTextChange = (search) => {
    setSearch(search);
  };
  const handleUserSelection = (event) => {
    setUserSelection(event.target.value);
  };
  const searchOptions = {
    types: ["(regions)"],
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="select-default-weather-label">
          Default Weather
        </InputLabel>
        <Select
          labelId="select-default-weather-label"
          id="select-default-weather"
          value={userSelection ? userSelection : ""}
          onChange={handleUserSelection}
        >
          <MenuItem value="Near Me" onClick={handleDefaultCurrentLocation}>
            Near Me
          </MenuItem>
          <MenuItem
            value="Enter Location"
            onClick={() => setShowSpecifiedLocationInput(true)}
          >
            Enter Location
          </MenuItem>
        </Select>
        {showSpecifiedLocationInput && (
          <PlacesAutocomplete
            value={search}
            onChange={handleTextChange}
            onSelect={handleDefaultSpecifiedLocation}
            searchOptions={searchOptions}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div>
                <Paper elevation={0}>
                  <form
                    style={{ margin: "15px 0px 5px" }}
                    className={classes.root}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="text-default-weather"
                      label="Enter City Or Zip Code"
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
        )}
        <FormHelperText>{`Currently set to "${defaultWeather}."`}</FormHelperText>
      </FormControl>
    </div>
  );
}
