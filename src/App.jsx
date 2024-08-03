import React, { useReducer, useEffect } from 'react';
import { initialState, Reducer } from './components/Reducer';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './assets/css/styles.css'

const App = () => {
  const [todos, dispatch] = useReducer(Reducer, initialState, () => {
    const localData = localStorage.getItem('todos');
    return localData ? JSON.parse(localData) : initialState;
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    dispatch({ type: 'ADD_TODO', payload: { id: Date.now(), text, completed: false } });
  };

  const toggleComplete = (id) => {
    dispatch({ type: 'TOGGLE_COMPLETE', payload: id });
  };

  const removeTodo = (id) => {
    dispatch({ type: 'REMOVE_TODO', payload: id });
  };
  const editTodo = (id, text) => { 
    dispatch({ type: 'EDIT_TODO', payload: { id, text } }); 
  }; 

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} editTodo={editTodo} />
    </div>
  );
};

export default App;
