import React, { createContext, useContext, useReducer } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import Faves from "./components/faves";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Reducers from "./reducer";
import Context from "./context";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/faves" component={Faves} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
