import React from "react";

const TodoForm = () => {
  return (
    <div className="form-control">
      <span className="checkbox"></span>
      <form>
        <input
          type="text"
          className="todo-input"
          placeholder="Create a new todo..."
        />
      </form>
    </div>
  );
};

export default TodoForm;
