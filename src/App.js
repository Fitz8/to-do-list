import { useState } from "react";
import "./App.css";
import Task from "./components/Task.js";
import Form from "./components/Form.js";

function App() {
  //Declaring useStates
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState([""]);

  //Creating a new task when the user submits one
  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, { text: taskInput, isDone: false }]);
  };
  
  //Removing a task from the task array when the remove button is clicked
  const handleRemoval = (index) => {
    let storedTasks = [...tasks];
    storedTasks.splice(index, 1);
    setTasks(storedTasks);
  };
  
  //Detecting when the checkbox is checked/unchecked and setting the correct state
  const handleOnChange = (index) => {
    let storedTasks = [...tasks];
    storedTasks[index].isDone = !storedTasks[index].isDone;
    setTasks(storedTasks);
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      {/* Rendering the create a task form */}
      <Form
        handleSubmit={handleSubmit}
        taskInput={taskInput}
        setTaskInput={setTaskInput}
      />

      {/* Searching through the tasks array and rendering any tasks */}
      {tasks.map((task, index) => {
        return (
          <Task
            text={task.text}
            isDone={task.isDone}
            key={index}
            handleRemoval={() => handleRemoval(index)}
            handleOnChange={() => handleOnChange(index)}
          />
        );
      })}
    </div>
  );
}

export default App;
