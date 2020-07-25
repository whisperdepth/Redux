import {
  fetchTasksList,
  fetchUpdateTask,
  fetchDeleteTask,
  fetchCreateTask,
} from "./tasksGateway";
import { tasksListSelector } from "./tasks.selectors";
export const TASKS_LIST_RECEIVED = "TASKS/TASKS_LIST_RECEIVED";

const tasksListReceived = (tasksList) => {
  return {
    type: TASKS_LIST_RECEIVED,
    payload: {
      tasksList,
    },
  };
};

export const getTasksList = () => {
  return (dispatch) => {
    fetchTasksList().then((tasksList) => {
      dispatch(tasksListReceived(tasksList));
    });
  };
};

export const updateTask = (taskId) => {
  return (dispatch, getState) => {
    const state = getState();
    const tasksList = tasksListSelector(state);
    const task = tasksList.find((task) => task.id === taskId);
    const updatedTask = {
      ...task,
      done: !task.done,
    };
    fetchUpdateTask(taskId, updatedTask).then(() => dispatch(getTasksList()));
  };
};

export const deleteTask = (taskId) => {
  return (dispatch) => {
    fetchDeleteTask(taskId).then(() => dispatch(getTasksList()));
  };
};

export const createTask = (text) => {
  return (dispatch) => {
    const taskData = {
      text,
      done: false,
    };
    fetchCreateTask(taskData).then(() => dispatch(getTasksList()));
  };
};
