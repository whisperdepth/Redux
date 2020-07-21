import React from "react";
import { connect } from "react-redux";
import * as pageActions from "./page/page.actions";
import User from "./User.jsx";
import Pagination from "./Pagination.jsx";

const UsersList = ({ users, page, nextPage, prevPage }) => {
  const from = page * 3;
  const to = 3 + page * 3;

  return (
    <div>
      <Pagination
        currentPage={page}
        itemsPerPage={3}
        totalItems={users.length}
        goNext={nextPage}
        goPrev={prevPage}
      />
      <ul className="users">
        {users.slice(from, to).map((user) => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    users: state.users.usersList,
    page: state.page,
  };
};

const mapDispatch = {
  nextPage: pageActions.nextPage,
  prevPage: pageActions.prevPage,
};

export default connect(mapState, mapDispatch)(UsersList);
