import React from 'react';
import '../App.css';

function TodoItem({ todo, index, onEdit, onDelete }) {
  return (
    <li className="list-item">
      <span className="todo-text">{todo.text}</span>
      <div className="button-container">
        <button className="edit-button" onClick={() => onEdit(index)}>编辑</button>
        <button className="delete-button" onClick={() => onDelete(index)}>删除</button>
      </div>
    </li>
  );
}


export default TodoItem;
