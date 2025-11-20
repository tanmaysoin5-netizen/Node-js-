const obj = {
    name: "Ishan ",

    // Normal Function
    normalFunc: function () {
        console.log("Normal Function this.name:", this.name);
        console.log("Normal Function this:", this);
    },

    // Arrow Function
    arrowFunc: () => {
        console.log("Arrow Function this.name:", this.name);
        console.log("Arrow Function this:", this);
    }
};

console.log("Calling normal function:");
obj.normalFunc();

console.log("\nCalling arrow function:");
obj.arrowFunc();
