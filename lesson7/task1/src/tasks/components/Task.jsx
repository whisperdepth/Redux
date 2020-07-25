import React from "react";

const Task = ({ id, done, text, onChange, onDelete }) => {
  return (
    <li className={`list-item ${done ? "list-item_done" : null}`}>
      <input
        onChange={() => onChange(id)}
        checked={done}
        className="list-item__checkbox"
        type="checkbox"
      />
      <span className="list-item__text">{text}</span>
      <button
        onClick={() => onDelete(id)}
        className="list-item__delete-btn"
      ></button>
    </li>
  );
};

export default Task;
