const students = [
    { name: "John", percentage: 82 },
    { name: "Alice", percentage: 45 },
    { name: "Bob", percentage: 91 },
    { name: "David", percentage: 76 },
    { name: "Emma", percentage: 49 }
];

const above75 = students.filter(student => student.percentage > 75);

const below50 = students.filter(student => student.percentage < 50);

const scholarshipStudents = students.filter(
    student => student.percentage >= 90
);

console.log("Students Above 75%");
console.log(above75);

console.log("Students Below 50%");
console.log(below50);

console.log("Scholarship Eligible Students");
console.log(scholarshipStudents);