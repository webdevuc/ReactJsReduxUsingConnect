import { combineReducers } from "redux";
import usersReducer from "./reducer";
const rootreducer = combineReducers({
  data1: usersReducer,
}
);
export default rootreducer;
