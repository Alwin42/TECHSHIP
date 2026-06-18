let students = [
    { id: 101, name: "John" },
    { id: 102, name: "Alice" }
];

let choice = 3;

switch (choice) {
    case 1:
        students.push({ id: 103, name: "Bob" });
        console.log("Student Added");
        break;

    case 2:
        console.log(students.find(s => s.id === 101));
        break;

    case 3:
        students.forEach(s =>
            console.log(`${s.id} - ${s.name}`)
        );
        break;

    case 4:
        console.log("Exit");
        break;

    default:
        console.log("Invalid Choice");
}