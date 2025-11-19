// blockingRead.js
const fs = require("fs");

// Blocking read
const data = fs.readFileSync("example.txt", "utf8");

console.log("Blocking Read Output:");
console.log(data);

console.log("This line prints after file is read.");
