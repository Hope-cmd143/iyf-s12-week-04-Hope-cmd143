// Calculator function handling +, -, *, /, %, and **
const calculate = (num1, operator, num2) => {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 === 0) {
                return "Error: Division by zero is not allowed.";
            }
            return num1 / num2;
        case "%":
            if (num2 === 0) {
                return "Error: Modulo by zero is not allowed.";
            }
            return num1 % num2;
        case "**":
            return num1 ** num2;
        default:
            return "Error: Invalid operator. Use +, -, *, /, %, or **";
    }
};

// --- Test lines to verify functionality ---
console.log("--- Calculator Tests ---");
console.log(calculate(10, "+", 5));   // Expected: 15
console.log(calculate(20, "-", 8));   // Expected: 12
console.log(calculate(6, "*", 7));    // Expected: 42
console.log(calculate(20, "/", 4));   // Expected: 5
console.log(calculate(10, "/", 0));   // Expected: Error message (doesn't crash)
console.log(calculate(10, "%", 3));   // Expected: 1
console.log(calculate(2, "**", 3));   // Expected: 8