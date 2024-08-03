import React, { useState } from 'react';

const TodoItem = ({ todo, toggleComplete, removeTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false); 
  const [editValue, setEditValue] = useState(todo.text); 

  const handleEdit = () => { 
    setIsEditing(true); 
  }; 

  const handleSave = () => { 
    editTodo(todo.id, editValue); 
    setIsEditing(false); 
  }; 
  return (
    <li className={todo.completed ? 'completed' : ''}>
      {isEditing ? ( 
        <> 
          <input 
            type="text" 
            value={editValue} 
            onChange={(e) => setEditValue(e.target.value)} 
          /> 
          <button onClick={handleSave}>Save</button> 
        </> 
      ) : ( 
        <> 
          <span onClick={() => toggleComplete(todo.id)}>
            {todo.text}
          </span>
          <button onClick={handleEdit}>Edit</button> 
          <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
