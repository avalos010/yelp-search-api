import React, { useEffect } from "react";
import SearchForm from "./form.js";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../actions/action.js";
import "./App.css";

const App = props => {
  useEffect(() => {
    wakeApi();
  }, []);

  const wakeApi = async () => {
    await fetch("https://yelp-server-api.herokuapp.com");
  };

  const faveIt = item => {
    props.addItem(item);
  };

  return (
    <div className="App">
      <h1> Yelp&#x2764;It </h1>
      <ul className="nav">
        <Link to="/faves">
          <li>
            {" "}
            <i className="fa fa-heart fa-3x" />
            <small>Faves</small>
          </li>
        </Link>
      </ul>

      <SearchForm />
      <ul className="data-list">
        {props.data.length > 0 &&
          props.data.map(res => (
            <li key={res.id}>
              <h3>{res.name}</h3>
              <img src={res.image_url} alt={res.name} />
              <p>
                {res.location.display_address[0]}{" "}
                {res.location.display_address[1]}
              </p>
              <a href={"tel:" + res.phone}>{res.phone}</a>
              <h4> {res.price} </h4>
              <h5 className="btn" onClick={() => faveIt(res)}>
                {" "}
                Fave It!{" "}
              </h5>
            </li>
          ))}
      </ul>
    </div>
  );
};

let mapStateToProps = state => ({
  data: state.data,
  list: state.list
});

export default connect(
  mapStateToProps,
  { addItem }
)(App);
