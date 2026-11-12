// Student data collection using const and arrow functions
const students = [
    { name: "Alice", grades: [90, 95, 90] },
    { name: "Bob", grades: [70, 75, 82] },
    { name: "Charlie", grades: [85, 88, 95] }
];

// 1. Calculate an individual student's average grade
const getStudentAverage = (student) => {
    const sum = student.grades.reduce((acc, curr) => acc + curr, 0);
    const average = sum / student.grades.length;
    return Number(average.toFixed(2));
};

// 2. Find a student object by name using strict equality
const findStudentByName = (name) => {
    return students.find((student) => student.name === name);
};

// 3. Filter students scoring above a certain threshold average
const getTopStudents = (threshold) => {
    return students.filter((student) => getStudentAverage(student) >= threshold);
};

// 4. Calculate the overall class average
const getClassAverage = () => {
    const totalClassSum = students.reduce((acc, student) => {
        const studentSum = student.grades.reduce((sAcc, sCurr) => sAcc + sCurr, 0);
        return acc + (studentSum / student.grades.length);
    }, 0);
    const classAvg = totalClassSum / students.length;
    return Number(classAvg.toFixed(2));
};

// --- Required Test Lines ---
console.log("--- Student Grade Tracker Output ---");
console.log(getStudentAverage(students[0])); // Expected: 91.67
console.log(getStudentAverage(students[1])); // Expected: 75.67
console.log(students[0].name);               // Expected: Alice
console.log(students[2].name);               // Expected: Charlie