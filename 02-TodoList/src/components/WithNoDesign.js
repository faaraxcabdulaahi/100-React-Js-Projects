import { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputvalue, setInputvalue] = useState("");

  // Add Task function
  const AddTask = () => {
    if (inputvalue.trim()) {
      const taskValue = { task: inputvalue, completed: false };
      setTasks([...tasks, taskValue]);
      setInputvalue("");
    }
  };

  // Handle Completion of task
  const handleCompletionTask = (index) => {
    const updatedTask = tasks.map((task, item) =>
      item === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTask);
  };

  // Handle Deletion of task
  const handleDeletionTask = (index) => {
    const updatedTask = tasks.filter((_, item) => item !== index);
    setTasks(updatedTask);
  };

  // Edit Task function with prompt
  const handleEditTask = (index) => {
    const newTask = prompt("Edit task:", tasks[index].task);
    if (newTask && newTask.trim()) {
      const updatedTasks = tasks.map((task, item) =>
        item === index ? { ...task, task: newTask } : task
      );
      setTasks(updatedTasks);
    }
  };

  return (
    <div>
      {/* Header */}
      <h2>Todo List</h2>

      {/* Input Field */}
      <div>
        <input
          type="text"
          value={inputvalue}
          onChange={(e) => setInputvalue(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={AddTask}>Add</button>
      </div>

      {/* Task List */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span
              className={`text-lg ${
                task.completed
                  ? "line-through text-gray-400"
                  : "text-gray-800"
              }`}
            >
              {task.task}
            </span>
            <div>
              <button onClick={() => handleCompletionTask(index)}>
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button onClick={() => handleEditTask(index)}>Edit</button>
              <button onClick={() => handleDeletionTask(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
