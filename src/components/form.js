import React from "react";
import { setData } from "../actions/action.js";
import { connect } from "react-redux";

let SearchForm = props => {
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
    props.setData(json);
  };

  return (
    <form onSubmit={search}>
      <input type="text" placeholder="Search For.." />
      <input type="text" placeholder="Location" />
      <input type="submit" value="Search" />
    </form>
  );
};

let mapStateToProps = state => ({
  data: state.data,
  list: state.list
});

export default connect(
  mapStateToProps,
  { setData }
)(SearchForm);
