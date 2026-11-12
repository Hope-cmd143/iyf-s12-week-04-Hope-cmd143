// ==========================================
// TASK 7.1 & 7.2: Variables, Operators & Template Literals
// ==========================================
const firstName = "Alex";
const lastName = "Johnson";
let age = 22;
const isEnrolled = true;

// Template literals (avoiding 'var')
const greeting = `Hello, my name is ${firstName} ${lastName}, and I am ${age} years old.`;
console.log(greeting);

// ==========================================
// TASK 7.3: Control Flow (if/else and switch)
// ==========================================
const checkAgeCategory = (userAge) => {
    if (userAge < 18) {
        return "Minor";
    } else if (userAge >= 18 && userAge <= 65) {
        return "Adult";
    } else {
        return "Senior";
    }
};

console.log("Age Category Check:", checkAgeCategory(age));

// ==========================================
// TASK 7.4: Functions (Declarations vs Arrow Functions)
// ==========================================
// 1. Function Declaration
function multiplyNumbers(a, b) {
    return a * b;
}

// 2. Arrow Function
const addNumbers = (a, b) => {
    return a + b;
};

console.log("Multiplication Result:", multiplyNumbers(4, 5)); // Expected: 20
console.log("Addition Result:", addNumbers(10, 15));          // Expected: 25

// ==========================================
// TASK 8.1 & 8.2: Arrays and Array Methods (map, filter, reduce, find)
// ==========================================
const numbers = [1, 2, 3, 4, 5, 6];

// .map() - transform each element
const squaredNumbers = numbers.map((num) => num ** 2);
console.log("Squared Numbers:", squaredNumbers); // [1, 4, 9, 16, 25, 36]

// .filter() - filter even numbers using strict equality (===)
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Even Numbers:", evenNumbers); // [2, 4, 6]

// .reduce() - sum up all numbers
const sumOfNumbers = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of Numbers:", sumOfNumbers); // 21

// ==========================================
// TASK 8.3: Objects and Arrays of Objects
// ==========================================
const library = [
    { id: 1, title: "JavaScript Fundamentals", author: "Jane Doe", available: true },
    { id: 2, title: "Advanced CSS & UI", author: "John Smith", available: false },
    { id: 3, title: "Node.js Backend Design", author: "Alice Brown", available: true }
];

// .find() - locate a specific object using strict equality (===)
const targetBook = library.find((book) => book.id === 3);
console.log("Found Book:", targetBook.title); // Expected: Node.js Backend Design

// ==========================================
// TASK 8.4: JSON Simulation (Parsing & Stringifying)
// ==========================================
// Convert object array to a JSON string
const libraryJSON = JSON.stringify(library);
console.log("JSON String Representation:", libraryJSON);

// Parse JSON string back into a JavaScript object structure
const parsedLibrary = JSON.parse(libraryJSON);
console.log("Parsed JSON First Book Title:", parsedLibrary[0].title);