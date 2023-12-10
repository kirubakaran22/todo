import { useContext } from "react";
import "./TodoItem.css";
import Cross from "../../assets/icons/CrossIcon";
import Check from "../../assets/icons/CheckIcon";
import TodoContext from "../../context/todo-context";

const TodoItem = (props) => {
  const todoCtx = useContext(TodoContext);

  const crossHandler = () => {
    todoCtx.removeTodo(props.id);
  };
  const toogleCompleteStatusHandler = () => {
    todoCtx.toogleCompleteStatus(props.id);
  };

  return (
    <div className="todo-item" >
      <div className={`circle ${props.completed ? "complete" : ""}`} onClick={toogleCompleteStatusHandler}>{props.completed && <Check/>}</div>
      <div className={`todo-content ${props.completed ? "complete" : ""}`}>
        {props.content}
      </div>
      <div className="cross">
        <Cross onClick={crossHandler} />
      </div>
    </div>
  );
};

export default TodoItem;
