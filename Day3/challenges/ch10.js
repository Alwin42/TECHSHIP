let students = [];

function addStudent(id, name, course) {
    students.push({ id, name, course });
}

function searchStudent(id) {
    return students.find(student => student.id === id);
}

function updateStudent(id, newCourse) {
    let student = students.find(student => student.id === id);

    if (student) {
        student.course = newCourse;
    }
}

function displayStudents() {
    students.forEach(student => {
        console.log(student);
    });
}

// Create
addStudent(101, "John", "CSE");
addStudent(102, "Alice", "ECE");

// Read
console.log(searchStudent(101));

// Update
updateStudent(101, "AI & DS");

// Display
displayStudents();