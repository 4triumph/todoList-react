import React, { useState } from 'react';
import '../App.css';

function TodoInput({ onAdd, editingItem }) {
  const [inputValue, setInputValue] = useState(editingItem ? editingItem.text : '');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim() === '') return;

    onAdd(inputValue);
    setInputValue('');
  };

  React.useEffect(() => {
    setInputValue(editingItem ? editingItem.text : '');
  }, [editingItem]);

  return (
    <div className="input-wrapper">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="添加或编辑待办事项"
      />
      <button onClick={handleSubmit}>
        {editingItem ? '保存' : '添加'}
      </button>
    </div>
  );
}

export default TodoInput;
