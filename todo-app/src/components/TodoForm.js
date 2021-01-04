import { useState } from "react";

const generateId = (array) => {
  const ids = array.map((item) => item.id);
  return Math.max(...ids) + 1;
};

const TodoForm = ({ todos, setTodos }) => {
  const [todoInput, setTodoInput] = useState("");

  const handleChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: generateId(todos),
      content: todoInput,
      completed: false,
    };

    setTodos([newTodo, ...todos]);
    setTodoInput("");
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
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default TodoForm;
