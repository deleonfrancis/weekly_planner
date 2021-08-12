import React from "react";
import { useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Jumbotron from "./components/guestUser/layout/Jumbotron";
import "./css/app.css";
import Calendar from "./components/guestUser/layout/Calendar";

function Main() {
  const userTheme = useSelector((state) => state.guestThemeReducer);
  const userThemeString = userTheme.userTheme
    
  const theme = createTheme({
      palette: {
        type: `${ userThemeString }`,
      },
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Jumbotron />
      <Calendar />
    </ThemeProvider>
  );
}

export default Main;
