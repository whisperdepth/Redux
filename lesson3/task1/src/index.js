import store from "./store";
import { increment, decrement, reset } from "./counter.actions";
import { addUser, deleteUser, updateUser } from "./users.actions";

store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());
store.dispatch(addUser({ id: 1, name: "a" }));
store.dispatch(updateUser(1, { id: 1, name: "b" }));
store.dispatch(deleteUser(1));
