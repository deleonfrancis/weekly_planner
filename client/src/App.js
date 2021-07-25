import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Jumbotron from "./components/guestUser/layout/Jumbotron";

import "./css/app.css";

function App() {
  return (
    <Provider store={store}>
      <Jumbotron />
      <div className=""></div>
    </Provider>
  );
}

export default App;
