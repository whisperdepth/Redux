const usersList = [];
import { ADDUSER, DELETEUSER } from "./users.actions";

export default (state = usersList, action) => {
  switch (action.type) {
    case ADDUSER:
      return [
        ...state,
        {
          id: action.user.id,
          name: action.user.name,
        },
      ];

    case DELETEUSER:
      return state.filter((user) => user.id !== action.id);

    default:
      return state;
  }
};
