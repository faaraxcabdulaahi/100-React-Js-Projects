import { useState } from "react";
import "../index.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Add Task function
  const addTask = () => {
    if (inputValue.trim()) {
      const newTask = { task: inputValue, completed: false };
      console.log(newTask)
      setTasks([...tasks, newTask]);
      setInputValue("");
    }
  };

  // Handle Add Task Completion
  const handleCompletionTask = (index) => {
    const updatedTask = tasks.map((task, item) =>
      item === index ? { ...task, completed: !task.completed } : task
    );
    console.log(updatedTask)
    setTasks(updatedTask);
  };

  // Handle Delete Task
  const handleDeleteTask = (index) => {
    const deletedTask = tasks.filter((_, item) => item !== index);
    console.log(deletedTask)
    setTasks(deletedTask);
  };

  // Handle Edit Task
  const handlEditTask = (index) => {
    const editedTask = prompt("Edit the task", tasks[index].task);
    if (editedTask && editedTask.trim()) {
      const newEditedTask = tasks.map((task, item) =>
        item === index ? { ...task, task: editedTask } : task
      );
      console.log(editedTask)
      setTasks(newEditedTask);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">Todo List</h1>

      <div className="flex items-center gap-1 mb-6">
        <input
          className="p-3 w-64 border border-gray-300 rounded-md shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          value={inputValue}
          placeholder="Enter a task"
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button
          className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition focus:ring-2 focus:ring-blue-500 focus:outline-none"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>

      <ul className="w-[350px] max-w-md space-y-4">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`flex justify-between items-center p-3 shadow-md rounded-md border ${
              task.completed ? "bg-gray-200" : "bg-white"
            }`}
          >
            <span
              className={`text-lg font-medium ${
                task.completed ? "line-through text-gray-500" : "text-gray-800"
              }`}
            >
              {task.task}
            </span>

            <div className="flex gap-2">
              <button
                className={`px-3 py-2 text-md font-medium rounded-md transition ${
                  task.completed
                    ? "bg-yellow-500 text-white hover:bg-yellow-600"
                    : "bg-green-500 text-white hover:bg-green-600"
                }`}
                onClick={() => handleCompletionTask(index)}
              >
                {task.completed ? "Undo" : "Complete"}
              </button>

              <button
                className="px-3 py-1 text-md font-medium bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                onClick={() => handleDeleteTask(index)}
              >
                Delete
              </button>

              <button
                className="px-3 py-1 text-md font-medium bg-blue-400 text-white rounded-md hover:bg-blue-500 transition"
                onClick={() => handlEditTask(index)}
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
