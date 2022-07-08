const Task = ({ text, handleRemoval, handleOnChange, isDone }) => {
  return (
    <div id="task-container">
    {/* The ternary operator statements are used to change states depending on if the task is checked as done */}
        <p style={isDone ? ({color:"lightgreen"}) : ({color:"#EEEEEE"})}>{text}</p>
        <button onClick={handleRemoval}>Remove</button>
        <input
          className="checkbox"
          type="checkbox"
          onChange={handleOnChange}
          checked = {isDone}
        />
    </div>
  );
};

export default Task;
