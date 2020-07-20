import React from "react";
import { connect } from "react-redux";
import * as usersActions from "./user/users.actions";

const Users = ({ users, createUser, deleteUser }) => {
  const onUserCreate = () => {
    const id = Math.round(Math.random() * 1000000);
    const newUser = {
      id,
      name: `User # ${id}`,
    };

    createUser(newUser);
  };

  return (
    <div className="users">
      <button onClick={onUserCreate} className="users__create-btn">
        Create user
      </button>
      <ul className="users__list">
        {users.map((user) => (
          <li key={user.id} className="users__list-item">
            {user.name}
            <button
              onClick={() => deleteUser(user.id)}
              className="users__delete-btn"
            >
              +
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    users: state.users.usersList,
  };
};

const mapDispatch = {
  createUser: usersActions.addUser,
  deleteUser: usersActions.deleteUser,
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsers = connector(Users);

export default ConnectedUsers;
