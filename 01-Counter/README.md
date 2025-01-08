# Counter Component

## Overview
This project is a simple **Counter Component** built using **React** and styled with **Tailwind CSS**. The component demonstrates fundamental React concepts such as:
- State management with the `useState` hook.
- Event handling for button clicks.
- Dynamic rendering of the user interface.

---

## Project Showcase

### Video Demo
https://github.com/user-attachments/assets/88667011-c801-4755-b92d-db2d6049ea78

- The video showcases incrementing, decrementing, and resetting the counter interactively.
- It also highlights the application's responsive design and smooth user interface.


## Features

### 1. **Increment Count**
- **Functionality:** Increases the counter value by 1 when the `+` button is clicked.
- **Implementation:**
  - The `increment` function updates the `count` state using `setCount`.

### 2. **Decrement Count**
- **Functionality:** Decreases the counter value by 1 when the `-` button is clicked.
- **Implementation:**
  - The `decrement` function updates the `count` state using `setCount`.

### 3. **Reset Count**
- **Functionality:** Resets the counter value to 0 when the reset button (`\u27F3`) is clicked.
- **Implementation:**
  - The `reset` function sets the `count` state to 0 using `setCount`.

---

## Code Explanation

### State Management
- **`count`**: Holds the current value of the counter.
- The `useState` hook initializes the `count` state to 0 and provides methods to update it.

### Functions
#### 1. `increment`
- Updates the `count` state by adding 1.

#### 2. `decrement`
- Updates the `count` state by subtracting 1.

#### 3. `reset`
- Resets the `count` state to its initial value (0).

### JSX Structure
#### 1. **Heading**
- Displays the current counter value dynamically using the `count` state.

#### 2. **Buttons**
- Three buttons (`+`, `-`, and `\u27F3`) for incrementing, decrementing, and resetting the counter.
- Each button triggers its corresponding function (`increment`, `decrement`, or `reset`) via the `onClick` event.

---

## Styling
The application uses **Tailwind CSS** for responsive and modern UI design. Notable styles include:
- **Buttons:**
  - Hover effects with transitions for smooth interactions.
  - Distinct background colors for each action (green for increment, red for decrement, blue for reset).
  - Rounded corners and shadows for a polished look.
- **Container:**
  - Vertically and horizontally centered layout.
  - Light gray background for the entire screen.
- **Text:**
  - Bold and orange-styled heading to display the counter value.

---

## How to Run

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser at `http://localhost:5000/`.

---

## Key Learnings
- Managing React state using the `useState` hook.
- Event handling in React components.
- Styling components with Tailwind CSS.

---




