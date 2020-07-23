import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import usersReducer from "./users/users.reducer";

const reducer = combineReducers({
  users: usersReducer,
});

const logger = (store) => (next) => (action) => {
    console.group(action.type);
    console.info(action);
    const result = next(action);
    console.log("next state", store.getState());
    console.groupEnd();
    return result;
  };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk, logger)));

export default store;
