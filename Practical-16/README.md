# Practical-16

# React Practical – StudentCard & SimpleForm

✨ Practical based on React Components, Props, and useState Hook
This practical demonstrates fundamental React concepts:

- Creating functional components
- Using props to pass data
- Rendering multiple components
- Managing form input using useState
- Displaying user-entered data after form submission

# The project contains two tasks:
🟦 Task 1: StudentCard Component with Props
🟩 Task 2: SimpleForm Component using useState

# This command is used
npx create-react-app react-basics-app because it helps to

-create-react-app (CRA) is a tool made by the React team.
-It helps you create a complete React project automatically.
-If you don’t use it, then you would have to set up everything manually:

# npx
Runs a package without installing it globally. So you don’t have to install CRA manually.

# create-react-app
This is the tool that creates a ready-made React project.

# student-practical 
This is the name of your project folder. After running the command, this folder gets created automatically.

# Project Structure
src/
│── App.js
│── App.css
│── StudentCard.js
│── SimpleForm.js
│── index.js

# TASK 1 – StudentCard Component (Using Props)
✔ Requirement
Create a React component named StudentCard that accepts these props:
name
course
score
Then render three StudentCard components in App.js with different values.

# Rendering Three Student Cards
📁 App.js (Task 1 part) done 
<StudentCard name="Rahul Sharma" course="React Basics" score="85" />
<StudentCard name="Aditi Verma" course="JavaScript" score="92" />
<StudentCard name="Rohan Mehta" course="Node.js" score="78" />

# TASK 2 – SimpleForm Component (Using useState)
✔ Requirement
Create a React component containing:
A text input
A submit button
A message that displays:
"You typed: …"
after the form is submitted
You must use useState to store the entered text.

# useState("")
Creates state variables:
inputValue → current text typed in the box
submittedText → text shown after clicking submit

# onChange event
Updates state while typing.

# handleSubmit
Prevents page reload (event.preventDefault())
Moves the typed value into submittedText
Displays the final message

# Conditional Rendering
{submittedText && ...} ensures message is shown only after form submission.