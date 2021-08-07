import { useState } from 'react';

export default initialValue => {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,
    addItem: todoText => {
      setTodos([...todos, todoText]);
    },
    deleteItem: todoIndex => {
      const newTodos = todos.filter((_, index) => index !== todoIndex);

      setTodos(newTodos);
    }
  };
};