import { TASKS_LIST_RECEIVED } from "./tasks.actions";

const initialValue = {
  tasksList: [],
};

export default (state = initialValue, action) => {
  switch (action.type) {
    case TASKS_LIST_RECEIVED:
      return {
        ...state,
        tasksList: action.payload.tasksList,
      };
    default:
      return state;
  }
};
