import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useTodoState from './useTodoState';
import './custom.css';

const App = () => {
  const { todos, addItem, deleteItem } = useTodoState([]);
  return (
    <div className="app-wrap">
      <Typography component="h1" variant="h2">
        Todo List
      </Typography>

      <TodoForm
        saveTodo={todoText => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addItem(trimmedText);
          }
        }}
      />

      <TodoList todos={todos} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
