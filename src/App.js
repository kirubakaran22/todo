import { useContext } from "react";
import Header from "./Components/Layout/Header";
import Input from "./Components/Input/Input";
import Todos from "./Components/Todos/Todos";
import TodoProvider from "./context/TodoProvider";
import FilterProvider from "./context/FilterProvider";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const themeCtx = useContext(ThemeContext);
  return (
    <TodoProvider>
      <div className={themeCtx.theme ? "" : "light"}>
        <Header />
        <FilterProvider>
          <Input />
          <Todos />
        </FilterProvider>
      </div>
    </TodoProvider>
  );
};

export default App;
