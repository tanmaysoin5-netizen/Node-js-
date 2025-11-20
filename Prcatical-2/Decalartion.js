console.log("Function Declaration:");
try {
    console.log(add(2, 3)); 
} catch (error) {
    console.log("Error:", error.message);
}

function add(a, b) {
    return a + b;
}
console.log(add(5, 7)); 

// Function Expression
console.log("\nFunction Expression:");
try {
    console.log(multiply(2, 3)); // Error: Cannot access 'multiply' before initialization
} catch (error) {
    console.log("Error:", error.message);
}

const multiply = function (a, b) {
    return a * b;
};

console.log(multiply(4, 6));
