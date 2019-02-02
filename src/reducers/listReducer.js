import { combineReducers } from "redux";
import { ADD, REMOVE, DATA } from "../actions/action.js";

let list = (state = [], action) => {
  switch (action.type) {
    case ADD:
      let exist = state.indexOf(action.item, 0);
      if (exist === -1) {
        return [...state, action.item];
      } else {
        alert("Already Exists in Faves!");
        return;
      }
    case REMOVE:
      return state.filter(state => state.id !== action.id);

    default:
      return state;
  }
};

let data = (state = [], action) => {
  switch (action.type) {
    case DATA:
      return action.data;

    default:
      return state;
  }
};

export default combineReducers({
  list,
  data
});
