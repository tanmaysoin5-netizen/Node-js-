
Practical 3

# Simple Math Module Project

A small Node.js project demonstrating **modules**.

## Features
- `math.js` contains two functions:
  - `add(a, b)` → returns the sum
  - `subtract(a, b)` → returns the difference
- `app.js` imports these functions and uses them.

## How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/username/repo-name.git
```
```
# File System: Blocking vs Non-Blocking

This project demonstrates the difference between **blocking** and **non-blocking** file operations in Node.js.

---

## 📌 Tasks

1. **Blocking File Read**  
   - Reads a file **synchronously**.
   - Node.js waits until the file is read before moving to the next operation.

2. **Non-Blocking File Read**  
   - Reads a file **asynchronously**.
   - Node.js continues executing other code while reading the file.

---

## 💻 How to Run

```bash
# Run blocking file read
node blocking.js

# Run non-blocking file read
node non-blocking.js
```

# Asynchronous Programming Task 

A simple Node.js example demonstrating **asynchronous programming** using `setTimeout`.  

## Task
Simulate fetching user data asynchronously and log a message when data is received.

### Example Output

## How It Works
- `fetchUserData()` simulates a delay with `setTimeout`.
- Logs `"Data received"` after the simulated fetch is complete.

---

