const TodoFilterControl = ({
  filterStatus,
  setFilterStatus,
  setFilteredTodos,
  todos,
}) => {
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

  return (
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
  );
};

export default TodoFilterControl;
