const Student = {
    personalDetails: {
        name: "Alwin Emmanuel",
        age: 21,
        gender: "male", 
    },
    academicDetails: {
        college: "AISAT",
        course: "Computer Science",
        place: "Kalamassery",
        CGPA: 6.66,
    },
    address: {
        country: "india",
        state: "kerala",
        district: "ernakulam",
        city: "kalamassery",
        street: "souhridha nagar"
    }
};

console.log("=== Student Details ===");

console.log("Personal Details:");
console.log(Student.personalDetails);


console.log("Name:", Student.personalDetails.name);
console.log("Course:", Student.academicDetails.course);
console.log("City:", Student.address.city);