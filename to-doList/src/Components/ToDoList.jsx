import React, { useState } from 'react';
import "./ToDoList.css" 
import Todo from './ToDo';


  

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (!newTodo.trim()) {
      return;
    }

    const todo = {
      id: Date.now(),
      text: newTodo,
    };

    setTodos([...todos, todo]);
    setNewTodo('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="Neue Aufgabe..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Hinzufügen</button>
      
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onDelete={deleteTodo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

    
