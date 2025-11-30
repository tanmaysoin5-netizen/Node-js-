// src/App.js
import React from "react";
import "./App.css";
import Counter from "./Counter";
import WelcomeMessage from "./WelcomeMessage";

function App() {
  return (
    <div className="App">
      <WelcomeMessage />
      <Counter />
    </div>
  );
}

export default App;
