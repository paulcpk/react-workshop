const TodoList = (props) => {
  const { tasks, handleComplete, handleRemove, handleRemoveAll } = props;

  return (
    <ul className="todo">
      {tasks.map((task, index) => (
        <li key={index}>
          <div className="checkAndTask">
            <label className="checkContainer">
              <input type="checkbox" onClick={() => handleComplete(index)} />
              <span className="checkmark"></span>
            </label>
            <span>{task.task}</span>
          </div>
          <button onClick={() => handleRemove(index)}>
            Delete Todo
          </button>
        </li>
      ))}
      {tasks.length > 1 && (
        <p>
          <button className="delete-all" onClick={() => handleRemoveAll()}>
            Delete all Todos
          </button>
        </p>
      )}
    </ul>
  );
};

export default TodoList;
