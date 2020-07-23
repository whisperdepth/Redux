import React from "react";
import { connect } from "react-redux";
import * as usersActions from "./users.actions";
import { getUserData } from "./users.gateway";

class SearchField extends React.Component {
  state = {
    userName: "",
  };

  onChange = (e) => {
    this.setState({
      userName: e.target.value,
    });
  };

  handleUserSearch = () => {
    this.props.fetchUserData(this.state.userName);
  };

  render() {
    return (
      <div className="name-form">
        <input
          onChange={this.onChange}
          value={this.state.value}
          type="text"
          className="name-form__input"
        />
        <button onClick={this.handleUserSearch} className="btn">
          Show
        </button>
      </div>
    );
  }
}

const mapDispatch = {
  showSpinner: usersActions.showSpinner,
  userDataReceived: usersActions.userDataReceived,
  fetchUserData: usersActions.fetchUserData,
};

export default connect(null, mapDispatch)(SearchField);
