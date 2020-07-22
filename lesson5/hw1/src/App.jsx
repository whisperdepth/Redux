import React from "react";
import UsersLIst from "./users/UsersList.jsx";
import store from "./store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <UsersLIst />;
    </Provider>
  );
};

export default App;
