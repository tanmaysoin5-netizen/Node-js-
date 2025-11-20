const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON body
app.use(express.json());

// Fake "database" in memory
let todos = [];

// ✅ POST /todos → add a todo
app.post("/todos", (req, res) => {
  const { task } = req.body;

  if (!task) {
    return res.status(400).json({ error: "Task is required" });
  }

  const newTodo = {
    id: todos.length + 1,
    task,
    completed: false,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// ✅ GET /todos → list all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ To-Do API running at http://localhost:${PORT}`);
});
