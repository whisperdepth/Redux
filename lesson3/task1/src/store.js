import { createStore, combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import  userReducer  from "./users.reducer";

export const appReducer = combineReducers({
  counter: counterReducer,
  users: userReducer,
});

const store = createStore(appReducer);

export default store;
