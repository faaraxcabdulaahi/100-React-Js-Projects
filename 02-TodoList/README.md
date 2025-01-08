# Todo List Application

## Project Showcase

### Video Demo
https://github.com/user-attachments/assets/fe378b7d-6338-4fd9-b36e-856295598dfe
- The video showcases how to add, complete, edit, and delete tasks interactively.
- It also highlights the application's responsive design and smooth user experience.

(To add a video, upload it to a platform like YouTube or attach the file, then replace the current link with the appropriate URL.)


## Overview
This is a simple and interactive **React Todo List Application** that allows users to:
- Add tasks
- Mark tasks as complete/incomplete
- Edit tasks
- Delete tasks

The application is built using **React** and styled with **Tailwind CSS**. It demonstrates the use of React's state management with the `useState` hook and dynamic rendering.

---

## Features

### 1. **Add Tasks**
- **Functionality:** Allows users to add tasks to the list.
- **Implementation:**
  - `addTask` function checks if the input is not empty.
  - A new task object (`{ task: inputValue, completed: false }`) is added to the `tasks` array.
  - The input value is cleared after adding.

### 2. **Mark Tasks as Complete/Incomplete**
- **Functionality:** Toggle between completed and incomplete states for a task.
- **Implementation:**
  - `handleCompletionTask` updates the `completed` property of the selected task using the `map` method.
  - Changes are reflected dynamically with conditional class styling.

### 3. **Edit Tasks**
- **Functionality:** Allows users to edit an existing task.
- **Implementation:**
  - `handlEditTask` uses the `prompt` method to get the new task value.
  - Updates the task array with the new value if the input is valid.

### 4. **Delete Tasks**
- **Functionality:** Removes a task from the list.
- **Implementation:**
  - `handleDeleteTask` filters out the task at the given index.

---

## Code Explanation

### State Management
- **`tasks`**: Holds the list of tasks as an array of objects, where each object has the structure `{ task: string, completed: boolean }`.
- **`inputValue`**: Stores the current value of the task input field.

### Functions
#### 1. `addTask`
- Adds a new task to the list.
- Clears the input field after adding.

#### 2. `handleCompletionTask`
- Toggles the `completed` status of a task based on its index.

#### 3. `handleDeleteTask`
- Removes a task from the list based on its index.

#### 4. `handlEditTask`
- Edits a specific task by showing a prompt with the current task value.
- Updates the task if the input is valid.

### JSX Structure
#### 1. **Input Section**
- Input field for adding new tasks.
- Add Task button.

#### 2. **Task List**
- Dynamically renders tasks from the `tasks` array.
- Each task has buttons to complete, delete, and edit.

---

## Styling
The application uses **Tailwind CSS** for responsive and modern UI components. Notable styles include:
- Button transitions and hover effects.
- Conditional styling for tasks (e.g., strikethrough for completed tasks).
- Utility classes for spacing, colors, borders, and shadows.

---

## How to Run
1. Clone the repository.
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies.
   ```bash
   npm install
   ```

3. Start the development server.
   ```bash
   npm start
   ```

4. Open the app in your browser at `http://localhost:3000/`.

---

## Key Learnings
- Managing React state with the `useState` hook.
- Dynamic rendering of lists using `map`.
- Handling user input and form interactions in React.
- Styling React components with Tailwind CSS.

---

## Future Improvements
- Add persistent storage using Local Storage or a database.
- Implement a drag-and-drop feature to reorder tasks.
- Add due dates and priorities for tasks.
- Enhance the UI with animations and additional customization options.

---

