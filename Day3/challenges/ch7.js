const employee = {
    attendance: 90,
    taskCompletion: 85,
    project: 95
};

function calculateWeightedScore(emp) {
    return (
        emp.attendance * 0.2 +
        emp.taskCompletion * 0.3 +
        emp.project * 0.5
    );
}

function getPerformance(score) {
    if (score >= 90) {
        return "Outstanding";
    } else if (score >= 80) {
        return "Excellent";
    } else if (score >= 70) {
        return "Good";
    } else {
        return "Needs Improvement";
    }
}

let weightedScore = calculateWeightedScore(employee);

console.log("Weighted Score:", weightedScore);
console.log("Performance:", getPerformance(weightedScore));