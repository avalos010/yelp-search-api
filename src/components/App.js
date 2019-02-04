import React, { useEffect, useContext, useReducer } from "react";
import SearchForm from "./form.js";
import { Link } from "react-router-dom";
import Context from "../context";
import Faves from "../components/faves";
import Reducers from "../reducer";
import "./App.css";

const App = props => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(Reducers, initialState);

  useEffect(() => {
    wakeApi();
  }, []);

  const wakeApi = async () => {
    await fetch("https://yelp-server-api.herokuapp.com");
  };

  const faveIt = item => {
    dispatch({ type: "ADD", payload: item });
  };

  return (
    <div className="App">
      <Context.Provider value={{ state, dispatch }}>
        {false && <Faves />}
        <h1> Yelp&#x2764;It </h1>
        <ul className="nav">
          <Link exact to="/faves">
            <li>
              {" "}
              <i className="fa fa-heart fa-3x" />
              <small>Faves</small>
            </li>
          </Link>
        </ul>
        <SearchForm />
        <ul className="data-list">
          {state.data.length > 0 &&
            state.data.map(res => (
              <li key={res.id}>
                <h3>{res.name}</h3>
                <img src={res.image_url} alt={res.name} />
                <p>
                  {res.location.display_address[0]}{" "}
                  {res.location.display_address[1]}
                </p>
                <a href={"tel:" + res.phone}>{res.phone}</a>
                <h4> {res.price} </h4>
                <h5
                  className="btn"
                  onClick={() => dispatch({ type: "ADD", payload: res })}
                >
                  {" "}
                  Fave It!{" "}
                </h5>
              </li>
            ))}
        </ul>
      </Context.Provider>
    </div>
  );
};

export default App;
