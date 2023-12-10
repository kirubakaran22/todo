import { useContext } from "react";
import "./TodoControls.css";
import TodoContext from "../../context/todo-context";
import { FilterContext } from "../../context/FilterProvider";

const TodoControls = () => {
  const todoCtx = useContext(TodoContext);
  const filterCtx = useContext(FilterContext);

  const clearCompleteHandler = () => {
    todoCtx.clearComplete();
  };
  const setAllActive = () => {
    filterCtx.setAllActive();
  };
  const setActive = () => {
    filterCtx.setActive();
  };
  const setCompleteActive = () => {
    filterCtx.setCompletedActive();
  };
  const countStatus = `${todoCtx.todoCount} ${
    todoCtx.todoCount > 1 ? "items" : "item"
  } left`;
  const allClass = filterCtx.filterBy === "ALL" ? "active" : "";
  const activeClass = filterCtx.filterBy === "ACTIVE" ? "active" : "";
  const completedClass = filterCtx.filterBy === "COMPLETED" ? "active" : "";

  return (
    <div className="todo-controls">
      <p className="item-count">{countStatus}</p>
      <div className="todo-filter">
        <p onClick={setAllActive} className={allClass}>
          All
        </p>
        <p onClick={setActive} className={activeClass}>
          Active
        </p>
        <p onClick={setCompleteActive} className={completedClass}>
          Completed
        </p>
      </div>
      <div className="clear-completed" onClick={clearCompleteHandler}>
        Clear Completed
      </div>
    </div>
  );
};

export default TodoControls;
