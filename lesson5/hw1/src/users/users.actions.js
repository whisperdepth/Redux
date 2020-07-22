export const FILTER_USERS = "USERS/FILTER_USERS";

export const filterUsers = (filterText) => {
  return {
    type: FILTER_USERS,
    payload: {
      filterText,
    },
  };
};
