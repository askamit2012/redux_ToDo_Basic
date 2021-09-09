import { combineReducers } from "redux";
import counterReducer from "./counter";
import toDoReducer from "./toDoReducer";

const allReducers = combineReducers({
  counter: counterReducer,
  toDoReducer,
});

export default allReducers;
