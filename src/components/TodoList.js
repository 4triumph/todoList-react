import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onEdit, onDelete }) {
  return (
    <ul style={styles.list}>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

const styles = {
  list: {
    listStyleType: 'none',
    padding: 0,
  },
};

export default TodoList;
