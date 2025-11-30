import React from "react";
import "./App.css";
import SimpleForm from "./SimpleForm";
import StudentCard from "./StudentCard";

function App() {
  return (
    <div className="App">
      <h1>Student Information</h1>

      <StudentCard
        name="Rahul Sharma"
        course="React Basics"
        score="85"
      />

      <StudentCard
        name="Aditi Verma"
        course="JavaScript"
        score="92"
      />

      <StudentCard
        name="Rohan Mehta"
        course="Node.js"
        score="78"
      />

      <SimpleForm />
    </div>
  );
}

export default App;
