
console.log("Using var:");
console.log(myVar); // Output: undefined 
var myVar = 10;
console.log(myVar); // Output: 10

console.log("\nUsing let:");
try {
    console.log(myLet); // Error: Cannot access 'myLet' before initialization
} catch (error) {
    console.log("Error:", error.message);
}
let myLet = 20;
console.log(myLet); // Output: 20


console.log("\nUsing const:");
try {
    console.log(myConst); // Error: Cannot access 'myConst' before initialization
} catch (error) {
    console.log("Error:", error.message);
}
const myConst = 30;
console.log(myConst); // Output: 30
