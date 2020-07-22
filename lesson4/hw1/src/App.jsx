import React from "react";
import UsersList from "./UsersList";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  
  console.log(store.getState());
  return (
    <Provider store={store}>
      <UsersList />
    </Provider>
  );
};

export default App;
