import { useContext } from "react";
import "./Todos.css";
import TodoItem from "./TodoItem";
import TodoControls from "./TodoControls";
import TodoContext from "../../context/todo-context";
import { FilterContext } from "../../context/FilterProvider";

const Todos = () => {
  const todoCtx = useContext(TodoContext);
  const filterCtx = useContext(FilterContext);
  let emptyContent = "No Todos? Add some . . .";
  let todoList;
  if (filterCtx.filterBy === "ALL") {
    todoList = todoCtx.todos;
  }
  if (filterCtx.filterBy === "ACTIVE") {
    todoList = todoCtx.todos.filter((items) => !items.completed);
    emptyContent = "No Active Todos!";
  }
  if (filterCtx.filterBy === "COMPLETED") {
    todoList = todoCtx.todos.filter((items) => items.completed);
    emptyContent = "No Completed Todos!";
  }
  return (
    <section className="todo-container">
      <aside className="todo-list">
        {todoList.length === 0 && <p className="no-item">{emptyContent}</p>}
        {todoList.length !== 0 &&
          todoList.map((todo) => (
            <TodoItem
              key={todo.id}
              content={todo.todo}
              id={todo.id}
              completed={todo.completed}
            />
          ))}
      </aside>
      <TodoControls />
    </section>
  );
};

export default Todos;
