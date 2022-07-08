const Form = ({ handleSubmit, taskInput, setTaskInput }) => {
  return (
    <div className="form-container">
      <h2>Create a task</h2>
      <input
        id="form-input"
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}>
      </input>
      <button type="submit" onClick={handleSubmit}>
        Create
      </button>
    </div>
  );
};

export default Form;
