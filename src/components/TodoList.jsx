import React from 'react';
import TodoItems from './TodoItems';

const TodoList = ({ todos, toggleComplete, removeTodo, editTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItems
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
