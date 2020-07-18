import { store, increment, decrement } from "./counter";

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(increment())