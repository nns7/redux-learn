import React from "react";
import "./App.css";
import Count from "./components/Count";
import { useSelector } from "react-redux";

function App() {
  const count = useSelector((state: any) => state.countReducer.count);
  return (
    <div>
      <h1>Redux Learn</h1>
      <p>Count: {count}</p>
      <Count />
    </div>
  );
}

export default App;
