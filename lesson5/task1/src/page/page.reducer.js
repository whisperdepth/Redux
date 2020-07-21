import { NEXT_PAGE, PREV_PAGE } from "./page.actions";

export default (state = 0, action) => {
  switch (action.type) {
    case NEXT_PAGE:
      return state + 1;

    case PREV_PAGE:
      return state - 1;

    default:
      return state;
  }
};
