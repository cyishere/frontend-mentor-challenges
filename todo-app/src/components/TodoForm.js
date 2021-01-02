import React, { useState } from "react";

const generateId = (todos) => {
  const ids = todos.map((todo) => todo.id);
  return Math.max(...ids) + 1;
};

const TodoForm = ({ todos, setTodos }) => {
  const [todoInput, setTodoInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: generateId(todos),
      content: todoInput,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  return (
    <div className="form-control">
      <div className="checkbox-border-wrap">
        <span className="checkbox"></span>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          placeholder="Create a new todo..."
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
      </form>
    </div>
  );
};

export default TodoForm;
