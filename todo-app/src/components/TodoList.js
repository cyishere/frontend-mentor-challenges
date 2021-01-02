import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  const [leftTodoCount, setLeftTodoCount] = useState(0);

  useEffect(() => {
    const unCompletedTodos = todos.filter((todo) => !todo.completed);
    setLeftTodoCount(unCompletedTodos.length);
  }, [todos]);

  return (
    <section className="todo-list-section">
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
      <div className="todo-filter-control">
        <div className="todos-count">{leftTodoCount} items left</div>
        <div className="control-btn group">
          <button className="btn btn-text active">All</button>
          <button className="btn btn-text">Active</button>
          <button className="btn btn-text">Completed</button>
        </div>
        <div className="control-btn">
          <button className="btn btn-text">Clear Completed</button>
        </div>
      </div>
    </section>
  );
};

export default TodoList;
