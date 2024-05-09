import React, { useState } from 'react';

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo(''); // Corrected to setNewTodo to clear the input field
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-10">
          <h2 className="text-warning">Todo List</h2>
          <input
            className="form-control mb-4"
            placeholder="New Task"
            value={newTodo} 
            onChange={(e) => {
              setNewTodo(e.target.value);
            }}
          />
        </div>
        <div className="col-sm-2"> 
          <button className="btn btn-success" onClick={addTodo}>
            Add Task
          </button>
        </div>
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index} className={todo.completed ? 'completed' : ''}>
              <span onClick={() => toggleComplete(index)}>{todo.text}</span>
              <button className='btn btn-danger' onClick={() => deleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
