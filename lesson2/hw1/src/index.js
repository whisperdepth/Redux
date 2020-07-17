import store from "./store";
import { addUser, deleteUser } from "./users.actions";

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(addUser({ name: "a", id: 1 }));
store.dispatch(deleteUser(1));
