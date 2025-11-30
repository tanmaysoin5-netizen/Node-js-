// src/StudentCard.js
import React from "react";

function StudentCard(props) {
  return (
    <div className="student-card">
      <h3>Student Name: {props.name}</h3>
      <p>Course: {props.course}</p>
      <p>Score: {props.score}</p>
    </div>
  );
}

export default StudentCard;
