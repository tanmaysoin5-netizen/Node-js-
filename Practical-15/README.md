# Practical-15

## React Basics App
This project is a simple React application built as a part of learning React fundamentals.
It contains two tasks:
WelcomeMessage Component
Counter Component (Increment / Decrement)

# This command is used 
npx create-react-app react-basics-app because it helps to 

- create-react-app (CRA) is a tool made by the React team.

- It helps you create a complete React project automatically.

- If you don’t use it, then you would have to set up everything 
  manually:
  
# npx
Runs a package without installing it globally.
So you don’t have to install CRA manually.
# create-react-app
This is the tool that creates a ready-made React project.
# react-basics-app
This is the name of your project folder.
After running the command, this folder gets created automatically.


# Features
✅ Task 1 — WelcomeMessage Component
Shows a message: "Welcome to React Basics!"
Created in its own file (WelcomeMessage.js)
Imported and rendered inside App.js
✅ Task 2 — Counter App
Displays a number on the screen
Has Increment and Decrement buttons
Updates the number using React’s useState hook



## Project Structure
react-basics-app/
│
├── src/
│   ├── App.js                 → Main file that displays our components
│   ├── App.css                → Styles for the app
│   ├── WelcomeMessage.js      → Task 1 component
│   ├── Counter.js             → Task 2 component (uses state)
│   ├── index.js               → Entry point, renders <App />
│
├── public/
│   └── index.html             → Root HTML file
│
├── package.json               → Project scripts & dependencies
└── README.md

## Tech Used
React
JavaScript (ES6+)
Create React App
VS Code