import { createStore, combineReducers } from "redux";
import pageReducer from "./page/page.reducer";
import usersReducer from "./users/users.reducer";

const appReducer = combineReducers({
  page: pageReducer,
  users: usersReducer,
});

const store = createStore(appReducer);
export default store;
