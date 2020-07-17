import { ADDUSER, DELETEUSER } from "./users.actions";

const initialValue = { usersList: [] };
export default (state = initialValue, action) => {
  switch (action.type) {
    case ADDUSER:
      return {
        ...state,
        usersList: state.usersList.concat({
          id: action.user.id,
          name: action.user.name,
        }),
      };

    case DELETEUSER:
      return {
        ...state,
        usersList: state.usersList.filter((user) => user.id !== action.id),
      };

    default:
      return state;
  }
};
