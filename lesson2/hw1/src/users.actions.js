export const ADDUSER = "ADDUSER";
export const DELETEUSER = "DELETEUSER";

export const addUser = (userObj) => {
  return {
    type: ADDUSER,
    user: {
      id: userObj.id,
      name: userObj.name,
    },
  };
};

export const deleteUser = (userId) => {
  return {
    type: DELETEUSER,
    id: userId,
  };
};
