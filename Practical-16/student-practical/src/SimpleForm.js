// src/SimpleForm.js
import React, { useState } from "react";

function SimpleForm() {
  const [inputValue, setInputValue] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // stop page from reloading
    setSubmittedText(inputValue);
  };

  return (
    <div className="simple-form">
      <h2>Simple Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type something..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      {/* Show message only after submission */}
      {submittedText && <p>You typed: {submittedText}</p>}
    </div>
  );
}

export default SimpleForm;
