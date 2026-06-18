let students = [];

function addStudent(id, name, course, attendance, marks) {
    students.push({
        id,
        name,
        course,
        attendance,
        marks
    });
}

const searchStudent = (id) => {
    return students.find(student => student.id === id);
};

const calculateTotalMarks = (student) => {
    return student.marks.reduce((sum, mark) => sum + mark, 0);
};

const calculatePercentage = (student) => {
    return calculateTotalMarks(student) / student.marks.length;
};

const generateGrade = (percentage) => {
    if (percentage >= 90) return "A+";
    if (percentage >= 80) return "A";
    if (percentage >= 70) return "B";
    if (percentage >= 60) return "C";
    return "F";
};

const calculateAttendancePercentage = (student) => {
    return student.attendance;
};

const isEligibleForExam = (student) => {
    return student.attendance >= 75 ? "Eligible" : "Not Eligible";
};

function displayStudent(student) {
    if (!student) {
        console.log("Student not found");
        return;
    }

    let percentage = calculatePercentage(student);

    console.log(`
ID: ${student.id}
Name: ${student.name}
Course: ${student.course}
Attendance: ${student.attendance}%
Total Marks: ${calculateTotalMarks(student)}
Percentage: ${percentage.toFixed(2)}%
Grade: ${generateGrade(percentage)}
Eligibility: ${isEligibleForExam(student)}
`);
}

function generateReports() {
    students.map(student => displayStudent(student));
}


addStudent(
    103,
    "Bob",
    "AI & DS",
    92,
    [95, 96, 94, 98, 97]
);

console.log(searchStudent(102));

const eligibleStudents = students.filter(
    student => student.attendance >= 75
);

console.log("Eligible Students:");
console.log(eligibleStudents);

generateReports();