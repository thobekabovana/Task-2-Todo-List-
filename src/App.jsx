import { useEffect, useState } from "react";
import "./styles.css";
import TodoItem from "./todo.jsx";

const Todo = () => {
  const [task, setTask] = useState([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("todo"));
    if (stored) {
      setTask(stored);
    }
  }, []);

  const updateLocalStorage = (updatedTasks) => {
    localStorage.setItem("todo", JSON.stringify(updatedTasks));
    setTask(updatedTasks);
  };

  const addTodo = () => {
    if (todo.trim() !== "") {
      const newTask = { id: Date.now(), task: todo, completed: false };
      const updatedTasks = [...task, newTask];
      updateLocalStorage(updatedTasks);
      setTodo("");
    }
  };

  const deleteTodo = (id) => {
    const updatedTasks = task.filter((item) => item.id !== id);
    updateLocalStorage(updatedTasks);
  };

  const toggleTodo = (id) => {
    const updatedTasks = task.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    updateLocalStorage(updatedTasks);
  };

  return (
    <div className="todo-container">
      <h1> Todo List</h1>

      <div className="add-todo">
        <input
          type="text"
          className="input-todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="todo-btn" onClick={addTodo}>
          Add Todo
        </button>
      </div>

      <div className="todo-list">
        <h1>Todo List</h1>
        <ul>
          {task.map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              onDelete={deleteTodo}
              onToggle={toggleTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
