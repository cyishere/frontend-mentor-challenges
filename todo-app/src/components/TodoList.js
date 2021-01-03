import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos }) => {
  const [leftTodoCount, setLeftTodoCount] = useState(0);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    const unCompletedTodos = todos.filter((todo) => !todo.completed);
    setLeftTodoCount(unCompletedTodos.length);
  }, [todos]);

  const handleFilter = (status) => {
    setFilterStatus(status);
    switch (status) {
      case "active":
        return setFilteredTodos(todos.filter((todo) => !todo.completed));

      case "completed":
        return setFilteredTodos(todos.filter((todo) => todo.completed));

      default:
        return setFilteredTodos(todos);
    }
  };

  const clearCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed));
    setFilteredTodos(todos.filter((todo) => !todo.completed));
    setFilterStatus("all");
  };

  const textPlacer = filterStatus === "completed" ? "closed task" : "task";

  return (
    <section className="todo-list-section">
      {filteredTodos.length < 1 ? (
        <p className="info-text">There's no {textPlacer}</p>
      ) : (
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <TodoItem
              todo={todo}
              key={todo.id}
              setTodos={setTodos}
              todos={todos}
            />
          ))}
        </ul>
      )}

      <div className="todo-filter-control">
        <div className="todos-count">{leftTodoCount} items left</div>
        <div className="control-btn group">
          <button
            className={filterStatus === "all" ? "btn active" : "btn"}
            onClick={() => handleFilter("all")}
          >
            All
          </button>
          <button
            className={filterStatus === "active" ? "btn active" : "btn"}
            onClick={() => handleFilter("active")}
          >
            Active
          </button>
          <button
            className={filterStatus === "completed" ? "btn active" : "btn"}
            onClick={() => handleFilter("completed")}
          >
            Completed
          </button>
        </div>
        <div className="control-btn">
          <button className="btn" onClick={clearCompletedTodos}>
            Clear Completed
          </button>
        </div>
      </div>
    </section>
  );
};

export default TodoList;
