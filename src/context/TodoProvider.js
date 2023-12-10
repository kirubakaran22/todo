import { useReducer } from "react";
import TodoContext from "./todo-context";

const defaultTodoState = {
  todos: [],
  todoCount: 0,
};

const todoReducer = (state, action) => {
  if (action.type === "ADD NEW") {
    const updatedItem = [...state.todos];
    updatedItem.unshift(action.newItem);
    const count = updatedItem.length;
    return {
      todos: updatedItem,
      todoCount: count,
    };
  }
  if (action.type === "REMOVE") {
    const updatedItem = state.todos.filter((item) => item.id !== action.id);
    const count = updatedItem.length;
    return {
      todos: updatedItem,
      todoCount: count,
    };
  }
  if (action.type === "TOOGLE COMPLETE") {
    const itemToToogleIndex = state.todos.findIndex(
      (item) => item.id === action.id
    );
    const itemToToogle = state.todos[itemToToogleIndex];
    const updatedItem = {
      ...itemToToogle,
      completed: !itemToToogle.completed,
    };
    const updatedTodos = [...state.todos];
    updatedTodos[itemToToogleIndex] = updatedItem;
    const count = updatedTodos.length;

    return {
      todos: updatedTodos,
      todoCount: count,
    };
  }
  if (action.type === "CLEAR COMPLETE") {
    const updatedItem = state.todos.filter((item) => !item.completed);
    const count = updatedItem.length;
    return {
      todos: updatedItem,
      todoCount: count,
    };
  }
  return defaultTodoState;
};

const TodoProvider = (props) => {
  const [todoState, dispatchTodoAction] = useReducer(
    todoReducer,
    defaultTodoState
  );

  const addTodoHandler = (newTodo) => {
    dispatchTodoAction({ type: "ADD NEW", newItem: newTodo });
  };
  const removeTodoHandler = (id) => {
    dispatchTodoAction({ type: "REMOVE", id: id });
  };
  const toogleCompleteStatusHandler = (id) => {
    dispatchTodoAction({ type: "TOOGLE COMPLETE", id: id });
  };
  const clearCompleteHandler = () => {
    dispatchTodoAction({ type: "CLEAR COMPLETE" });
  };

  const todoContextValue = {
    todos: todoState.todos,
    todoCount: todoState.todoCount,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    toogleCompleteStatus: toogleCompleteStatusHandler,
    clearComplete: clearCompleteHandler,
  };

  return (
    <TodoContext.Provider value={todoContextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
