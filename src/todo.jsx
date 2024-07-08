import React from "react";

const TodoItem = ({ item, onDelete, onToggle }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => onToggle(item.id)}
      />
      <span style={{ textDecoration: "none" }}>{item.task}</span>
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
