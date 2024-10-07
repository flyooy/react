import React from 'react';
import "./ToDo.css"
function Todo({ todo, onDelete }) {
    return (
      <div>
    <li>
      {todo.text}
      <button className="delete" onClick={() => onDelete(todo.id)}>Удалить</button>
            </li>
            </div>
  );
}

export default Todo;