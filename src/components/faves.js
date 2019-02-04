import React, { useContext, useReducer } from "react";
import Context from "../context";
import Reducers from "../reducer";
import { Link } from "react-router-dom";

let Faves = ({ state, dispatch }) => {
  return (
    <div>
      <h1> Favorites </h1>
      <Link to="/">
        <i className="fa fa-home fa-3x">
          <small>Home</small>
        </i>
      </Link>

      <ul className="fave-list">
        {state.list &&
          state.list.map(res => (
            <li key={res.id}>
              <h3>{res.name}</h3>
              <img src={res.image_url} alt={res.name} />
              <p>
                {res.location.display_address[0]}{" "}
                {res.location.display_address[1]}
              </p>
              <h4> {res.price} </h4>
              <h5
                className="btn"
                onClick={() => dispatch({ type: "REMOVE", payload: res.id })}
              >
                {" "}
                unFave!{" "}
              </h5>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Faves;
