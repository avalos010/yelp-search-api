import Context from "./context";

export const Reducers = (state = Context, action) => {
  switch (action.type) {
    case "ADD":
      let exist = state.list.indexOf(action.payload, 0);
      if (exist === -1) {
        return {
          ...state,
          list: [...state.list, action.payload]
        };
      } else {
        alert("Already Exists in Faves!");
        return;
      }
    case "REMOVE":
      const filteredList = state.list.filter(
        state => state.id !== action.payload.id
      );
      return {
        ...state,
        list: filteredList
      };
    case "DATA":
      return {
        ...state,
        data: action.payload
      };

    default:
      return state;
  }
};
// const data = (state = [], action) => {
//   switch (action.type) {
//     case DATA:
//       return action.data;

//     default:
//       return state;
//   }
// };

export default Reducers;
