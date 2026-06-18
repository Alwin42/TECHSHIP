const employee = {
    id: 101,
    name: "John",
    basicSalary: 50000
};

function calculateGrossSalary(basicSalary) {
    let hra = basicSalary * 0.20;
    let da = basicSalary * 0.10;

    return basicSalary + hra + da;
}

function calculateDeductions(grossSalary) {
    let pf = grossSalary * 0.12;
    let tax = grossSalary * 0.05;

    return pf + tax;
}

function calculateNetSalary(grossSalary, deductions) {
    return grossSalary - deductions;
}

let grossSalary = calculateGrossSalary(employee.basicSalary);
let deductions = calculateDeductions(grossSalary);
let netSalary = calculateNetSalary(grossSalary, deductions);

console.log("Employee ID:", employee.id);
console.log("Employee Name:", employee.name);
console.log("Basic Salary:", employee.basicSalary);
console.log("Gross Salary:", grossSalary);
console.log("Deductions:", deductions);
console.log("Net Salary:", netSalary);