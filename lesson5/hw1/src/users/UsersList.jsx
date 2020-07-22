import React from "react";
import { connect } from "react-redux";
import { filterUsers } from "./users.actions";
import User from "./User.jsx";
import Filter from "../Filter.jsx";

class UsersList extends React.Component {
  /* state = {
    filterText: "",
  }; */

  filteredUsers = () =>
    this.props.users.filter((user) =>
      user.name.toUpperCase().includes(this.props.filterText.toUpperCase())
    );

  onChange = (e) => {
    filterUsers(e.target.value);
    console.log(e.target.value)

    /* this.setState({
      filterText: e.target.value,
    }); */
  };

  render() {
    
    return (
      <div>
        <Filter
          onChange={this.onChange}
          count={this.filteredUsers().length}
          filterText={this.props.filterText}
        />
        <ul>
          {this.filteredUsers().map((user) => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    filterText: state.filterText,
    users: state.usersList,
  };
};

const mapDispatch = {
  filterUsers: filterUsers,
};

export default connect(mapState, mapDispatch)(UsersList);
