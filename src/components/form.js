import React, { useContext } from "react";
import Context from "../context";

let SearchForm = () => {
  const { state, dispatch } = useContext(Context);

  const search = async e => {
    e.preventDefault();
    const response = await fetch(
      "https://yelp-server-api.herokuapp.com/query",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          term: e.target[0].value,
          location: e.target[1].value
        })
      }
    );
    const json = await response.json();
    // props.setData(json);

    dispatch({ type: "DATA", payload: json });
    console.log("this is the react state", state);
  };

  return (
    <form onSubmit={search}>
      <input type="text" placeholder="Search For.." />
      <input type="text" placeholder="Location" />
      <input type="submit" value="Search" />
    </form>
  );
};

export default SearchForm;
