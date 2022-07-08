import { useState } from "react";
import "./App.css";
import Task from "./components/Task.js";
import Form from "./components/Form.js";
function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState(['']);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, { text: taskInput, isDone: false }]);
    console.log(tasks);
  };

  const handleRemoval = (index) => {
    let storedTasks = [...tasks];
    storedTasks.splice(index, 1);
    setTasks(storedTasks);
  }

  const handleOnChange = (index) => {
    let storedTasks = [...tasks];
    storedTasks[index].isDone = !storedTasks[index].isDone;
    setTasks(storedTasks);
  }

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <Form 
      handleSubmit={handleSubmit} 
      taskInput={taskInput} 
      setTaskInput={setTaskInput} 
      />

      {tasks.map((task, index) => {
        return(
          <Task 
          text={task.text} 
          isDone = {task.isDone}
          key = {index} 
          handleRemoval = { () => handleRemoval(index)}
          handleOnChange ={ () => handleOnChange(index)}
          />
        )
      }) 
      }
    </div>
  );
}

export default App;
