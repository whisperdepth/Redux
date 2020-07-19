import store from "./store";
import { setLanguage } from "./language.actions";
import { addProduct, removeProduct } from './cart.actions';
import { setUser, removeUser } from './user.actions';


store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(setLanguage("uk"));
store.dispatch(addProduct({id: 1, name: "shotgun"}));
store.dispatch(addProduct({id: 2, name: "katana"}));
store.dispatch(removeProduct(1));
store.dispatch(setUser({id: 1, name: 'Tom'}));
store.dispatch(removeUser())