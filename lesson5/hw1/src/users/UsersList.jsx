import React from "react";
import { connect } from "react-redux";
import { filterUsers } from "./users.actions";
import User from "./User.jsx";
import Filter from "../Filter.jsx";
import { usersSelector, filterTextSelector } from "./users.selectors";

const UsersList = ({ filterText, users, setfilterText }) => {
  const filteredUsers = () =>
    users.filter((user) =>
      user.name.toUpperCase().includes(filterText.toUpperCase())
    );

  const onChange = (e) => {
    setfilterText(e.target.value);
  };

  return (
    <div>
      <Filter
        onChange={onChange}
        count={filteredUsers().length}
        filterText={filterText}
      />
      <ul>
        {filteredUsers().map((user) => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    filterText: filterTextSelector(state),
    users: usersSelector(state),
  };
};

const mapDispatch = {
  setfilterText: filterUsers,
};

export default connect(mapState, mapDispatch)(UsersList);
