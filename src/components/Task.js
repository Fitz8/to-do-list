const Task = ({ text, handleRemoval, handleOnChange, isDone }) => {
  return (
    <div id="task-container">
    {/* The ternary operator statements are used to change states depending on if the task is checked as done */}
      {isDone ? (
        <p style={{ color: "lightgreen" }}>{text}</p>
      ) : (
        <p style={{ color: "#EEEEEE" }}>{text}</p>
      )}

      <button onClick={handleRemoval}>Remove</button>
      {isDone ? (
        <input
          className="checkbox"
          type="checkbox"
          onChange={handleOnChange}
          checked
        />
      ) : (
        <input 
          className="checkbox" 
          type="checkbox" 
          onChange={handleOnChange} 
        />
      )}
    </div>
  );
};

export default Task;
