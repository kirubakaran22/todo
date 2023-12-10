import { useState, useContext } from "react";
import "./Input.css";
import Check from "../../assets/icons/CheckIcon";
import TodoContext from "../../context/todo-context";

const Input = () => {
  const [isComplete, setIsComplete] = useState(false);
  const [enteredTodo, setEnteredTodo] = useState("");
  const todoCtx = useContext(TodoContext);

  const inputHandler = (event) => {
    setEnteredTodo(event.target.value);
  };
  const isCompleteHandler = () => {
    setIsComplete((prev) => !prev);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredTodo.trim().length === 0) {
      return;
    }
    const newItem = {
      id: Math.random(),
      todo: enteredTodo.trim(),
      completed: isComplete,
    };
    todoCtx.addTodo(newItem);
    setEnteredTodo("");
    setIsComplete(false);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div
        className={`circle ${isComplete ? "complete" : ""}`}
        onClick={isCompleteHandler}
      >
        {isComplete && <Check />}
      </div>
      <input
        id="user-todo"
        type="text"
        placeholder="Create a new todo..."
        onChange={inputHandler}
        value={enteredTodo}
      ></input>
    </form>
  );
};

export default Input;
