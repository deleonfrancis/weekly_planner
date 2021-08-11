import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import HistoryIcon from "@material-ui/icons/History";
import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { getSearchedWeather, removeFromSearchHistory } from "../../../redux/actions/weatherActions";

function SearchHistorySection() {
  const { searchHistory } = useSelector((state) => state.weatherReducer);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   // console.log(searchHistory);
  // }, [searchHistory]);

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    deleteIcon: {
      "&:hover": {
        // backgroundColor: "transparent",
        color: "red",
      },
    },
  }));

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleSelected = (value) => {
    // console.log(value);
    if (!value) {
      return;
    }
    dispatch(getSearchedWeather(value));
    // console.log(value);
  };
  const handleDelete = (id) => {
    dispatch(removeFromSearchHistory(id))
  };

  return (
    <div>
      {searchHistory.length > 0 && (
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          // subheader={
          //   <ListSubheader component="div" id="nested-list-subheader">
          //     Search History
          //   </ListSubheader>
          // }
          className={classes.root}
        >
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText primary="View Search History" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {searchHistory.map((search) => {
                return (
                  <ListItem
                    onClick={() => handleSelected(search.searchInfo)}
                    button
                    className={classes.nested}
                  >
                    <ListItemText primary={search.searchInfo} />
                    <ListItemSecondaryAction>
                      <IconButton
                        className={classes.deleteIcon}
                        onClick={() => handleDelete(search.id)}
                        edge="end"
                        aria-label="delete"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                );
              })}
            </List>
          </Collapse>
        </List>
      )}
    </div>
  );
}

export default SearchHistorySection;
