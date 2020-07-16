import React from "react";
import Header from "./Header";
import { user, UserContext } from "./user-context";

class App extends React.Component {
  state = {
    userData: {
      name: user.name,
      avatar_url: user.avatar_url,
    },
  };

  render() {
    return (
      <div className="page">
        <UserContext.Provider value={this.state.userData}>
          <Header />
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
