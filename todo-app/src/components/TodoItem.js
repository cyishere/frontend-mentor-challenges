import React from "react";
import IconCheck from "../images/icon-check.svg";

const TodoItem = ({ todo }) => {
  const classes = todo.completed ? "completed" : "";
  const checkIcon = todo.completed ? (
    <img src={IconCheck} alt="Completed" />
  ) : (
    ""
  );
  return (
    <li className={classes}>
      <input type="checkbox" defaultChecked={todo.completed} />
      <div className="checkbox-border-wrap">
        <span className="checkbox">{checkIcon}</span>
      </div>
      <p>{todo.content}</p>
    </li>
  );
};

export default TodoItem;
