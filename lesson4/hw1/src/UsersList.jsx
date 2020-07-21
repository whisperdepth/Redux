import React from "react";
import { connect } from "react-redux";
import * as pageActions from "./page/page.actions";
import User from "./User.jsx";
import Pagination from "./Pagination.jsx";

const itemsPerPage = 3;

const UsersList = ({ users, page, nextPage, prevPage }) => {
  const from = page * itemsPerPage;
  const to = itemsPerPage + page * itemsPerPage;

  return (
    <div>
      <Pagination
        currentPage={page}
        itemsPerPage={itemsPerPage}
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