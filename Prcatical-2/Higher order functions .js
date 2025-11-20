function calculate(operation, a, b) {
    return operation(a, b);
}
function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    return y !== 0 ? x / y : "Cannot divide by zero";
}
// Testing with different operations
console.log("Add:", calculate(add, 10, 5));         // 15
console.log("Subtract:", calculate(subtract, 10, 5)); // 5
console.log("Multiply:", calculate(multiply, 4, 5));  // 20
console.log("Divide:", calculate(divide, 20, 4));     // 5
