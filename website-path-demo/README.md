# website-path-demo
Practical 11 

## Goal
Create a website that serves HTML, CSS, JavaScript, and image files using a Node.js HTTP server.

The project also tracks file path patterns, detects redundancy, and resolves them using the path module.

If no redundancy exists, it executes a clean path.resolve() to serve the files efficiently.

## Modules Used
1. http
Used to create a simple web server.
Listens to incoming requests and sends HTML/CSS/JS/image responses.

2. fs (File System)
Reads files (like index.html, style.css, images) from the local public/ directory.

3. path
Handles and normalizes file paths.
Prevents redundant or insecure paths like ../../etc/passwd.
Ensures cross-platform compatibility (Windows, macOS, Linux).

## Why path Module?
The path module ensures all file paths are handled safely and correctly.
It helps avoid redundancy, broken links, and incorrect file access.
👉 My Opinion:
If redundancy exists, use:

path.join(__dirname, "public", req.url);
path.normalize(filePath);

# If no redundancy exists, use:
path.resolve(__dirname, "public", "index.html");

Because path.resolve() directly gives an absolute and clean path — it’s faster and simpler when paths are already correct.
''' 