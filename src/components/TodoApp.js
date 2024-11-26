import React, { useState } from 'react';
import '../App.css';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddOrEdit = (text) => {
    if (editingIndex === null) {
      setTodos([...todos, { text }]);
    } else {
      const updatedTodos = [...todos];
      updatedTodos[editingIndex].text = text;
      setTodos(updatedTodos);
      setEditingIndex(null);
    }
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <h1 className="title">待办事项列表</h1>
      <TodoInput
        onAdd={handleAddOrEdit}
        editingItem={editingIndex !== null ? todos[editingIndex] : null}
      />
      <TodoList todos={todos} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default TodoApp;
