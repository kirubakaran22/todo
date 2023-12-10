import React from "react";

const TodoContext = React.createContext({
  todos: [],
  todoCount: 0,
  addTodo: () => {},
  removeTodo: () => {},
  toogleCompleteStatus: () => {},
  clearComplete: () => {},
});

export default TodoContext;
