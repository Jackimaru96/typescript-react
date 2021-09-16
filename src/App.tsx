import React from "react";
import "./App.css";
import UseReducerCounter from "./components/UseReducerCounter";
import UseState from "./components/UseState";
import { Box } from "./context/Box";
import { ThemeContextProvider } from "./context/ThemeContext";

function App() {
  return (
    <>
      <div>
        <UseState />
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
