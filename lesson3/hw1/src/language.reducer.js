import { SET_LANGUAGE } from "./language.actions";

const initialstate = "en";

export default (state = initialstate, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.payload.lang;

    default:
      return state;
  }
};
