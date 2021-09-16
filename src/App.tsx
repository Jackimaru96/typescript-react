import React from "react";
import "./App.css";
import UseReducerCounter from "./components/UseReducerCounter";
import UseStateCounter from "./components/UseStateCounter";
import { Box } from "./context/Box";
import { ThemeContextProvider } from "./context/ThemeContext";

function App() {
  return (
    <>
      <div>
        <UseStateCounter />
      </div>
      <div>
        <UseReducerCounter />
      </div>
      <div>
        <ThemeContextProvider>
          <Box />
        </ThemeContextProvider>
      </div>
    </>
  );
}

export default App;
