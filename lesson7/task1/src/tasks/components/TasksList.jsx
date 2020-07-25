import React from "react";
import { connect } from "react-redux";
import * as tasksActions from "../tasks.actions";
import { sortedListSelector } from "../tasks.selectors";
import Task from "./Task";
import CreateTaskInput from "./CreateTaskInput";

class TasksList extends React.Component {
  componentDidMount() {
    this.props.getTasksList();
  }

  render() {
    return (
      <div className="todo-list">
        <CreateTaskInput onCreate={this.props.createTask} />
        <ul className="list">
          {this.props.tasks.map((task) => (
            <Task
              key={task.id}
              {...task}
              onChange={this.props.updateTask}
              onDelete={this.props.deleteTask}
            />
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    tasks: sortedListSelector(state),
  };
};

const mapDispatch = {
  getTasksList: tasksActions.getTasksList,
  updateTask: tasksActions.updateTask,
  deleteTask: tasksActions.deleteTask,
  createTask: tasksActions.createTask,
};

export default connect(mapState, mapDispatch)(TasksList);
