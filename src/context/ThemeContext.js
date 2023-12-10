import React, { useState } from "react";

export const ThemeContext = React.createContext({
  theme: null,
  toogleTheme: () => {},
});

const ThemeProvider = (props) => {
  const [darkTheme, setTheme] = useState(true);
  const toogleTheme = () => {
    console.log('changing')
    setTheme((prev) => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{ theme: darkTheme, toogleTheme: toogleTheme }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
