#  Hoisting in Variables (Node.js)

This project demonstrates **variable hoisting**  variables  using `var`, `let`, and `const`.  
It shows what happens when you try to print a variable **before it is declared**.

---

## 📂 Code Example

```js
// Hoisting with var
console.log(a); // undefined (var is hoisted)
var a = 10;

// Hoisting with let
try {
  console.log(b); // ReferenceError
  let b = 20;
} catch (err) {
  console.log("Error with let:", err.message);
}

// Hoisting with const
try {
  console.log(c); // ReferenceError
  const c = 30;
} catch (err) {
  console.log("Error with const:", err.message);
}

```
# Function Declarations vs Expressions in Node.js 

This project demonstrates the difference between **function declarations** and **function expressions** in Node.js.

---

##  Code Example

```js
// Function Declaration
function add(a, b) {
  return a + b;
}

// Function Expression
const multiply = function (a, b) {
  return a * b;
};

// Calling before definition
console.log("add before:", add(2, 3));      
console.log("multiply before:", multiply(2, 3)); // 

// Calling after definition
console.log("add after:", add(4, 5));        
console.log("multiply after:", multiply(4, 5));
```
#  Arrow Functions vs Normal Functions in JavaScript

This mini project shows the difference between **Arrow Functions** and **Normal Functions** in handling `this`.

##  Code Example
```js
const demo = {
  name: "GitHub Example",

  normalFunc: function () {
    console.log("Normal Function:", this.name);
  },

  arrowFunc: () => {
    console.log("Arrow Function:", this.name);
  }
};

demo.normalFunc(); 
demo.arrowFunc();  
```
# Higher Order Functions in Node.js

A simple Node.js project demonstrating **higher-order functions**.  
You can pass functions as arguments to other functions to perform different operations dynamically.

---

##  Features

- Uses a `calculate(operation, a, b)` function  
- Supports operations like **add, subtract, multiply, divide**  
- Easy to extend with new operations  

---

##  Example Usage

```js
// Define operations
const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

// Calculate
console.log(calculate(add, 4, 5));      // 9
console.log(calculate(multiply, 4, 5)); // 20
```

