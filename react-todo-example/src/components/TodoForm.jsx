const TodoForm = (props) => {
  const { formInput, handleChange, handleSubmit } = props;

  return (
    <form className="form-input" onSubmit={handleSubmit}>
      <input required type="text" value={formInput} onChange={handleChange} />
      <button className="btn-add" type="submit" alt="Add task">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
