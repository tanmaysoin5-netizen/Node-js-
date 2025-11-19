 Node.js -  Project

This repository contains my first steps in **Node.js** – from installation to writing simple programs.

---

## Step 1: Download & Install Node.js

1. Go to [Node.js official website](https://nodejs.org/).  
2. Download the **LTS version** (recommended for beginners).  
3. Install it on your system by following the setup wizard.  
4. Verify installation:  
   ```bash
   node -v
   npm -v
5. ##  About the Code

- The code uses **Node.js `http` module** to create a simple server.  
- The **`fs` (File System) module** is used to:
  - Write a message (`Hello, I am learning Node.js!`) into a file called `demo.txt`.  
  - Read the file content and display it in the browser.  
- When you open [http://localhost:4000](http://localhost:4000), the server responds with the text from the file.  
