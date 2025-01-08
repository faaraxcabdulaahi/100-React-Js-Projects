import { useState } from "react";
import "../index.css";  // Ensure Tailwind CSS is imported

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
    <div className="max-w-lg mx-auto my-10 p-5 bg-white rounded-lg shadow-lg">
      {/* Header */}
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-5">
        Todo List
      </h2>

      {/* Input Field */}
      <div className="flex mb-5">
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={inputvalue}
          onChange={(e) => setInputvalue(e.target.value)}
          placeholder="Add a new task"
        />
        <button
          onClick={AddTask}
          className="p-3 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none"
        >
          Add
        </button>
      </div>

      {/* Task List */}
      <ul className="space-y-4">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-md hover:bg-gray-100"
          >
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
              <button
                onClick={() => handleCompletionTask(index)}
                className="p-2 mr-2 bg-green-500 text-white rounded-full hover:bg-green-600"
              >
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button
                onClick={() => handleEditTask(index)}
                className="p-2 mr-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeletionTask(index)}
                className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
