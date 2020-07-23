import React from "react";
import { connect } from "react-redux";
import { isFetchingSelector, userDataSelector } from "./users.selectors";
import Spinner from "./Spinner";

const UserInfo = ({ userData, isFetching }) => {

  if (isFetching) return <Spinner />;
  if (!userData) return null;

  return (
    <div className="user">
      <img
        src={userData.avatar_url}
        alt="User Avatar"
        className="user__avatar"
      />
      <div className="user__info">
        <span className="user__name">{userData.name}</span>
        <span className="user__location">{userData.location}</span>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    isFetching: isFetchingSelector(state),
    userData: userDataSelector(state),
  };
};

export default connect(mapState)(UserInfo);
