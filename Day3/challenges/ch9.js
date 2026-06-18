const sales = [45000, 52000, 48000, 60000, 70000, 65000];

function getHighestSale(data) {
    return Math.max(...data);
}

function getLowestSale(data) {
    return Math.min(...data);
}

function getAverageSale(data) {
    let total = data.reduce((sum, sale) => sum + sale, 0);
    return total / data.length;
}

function getGrowthAnalysis(data) {
    let firstMonth = data[0];
    let lastMonth = data[data.length - 1];

    if (lastMonth > firstMonth) {
        return "Positive Growth";
    } else if (lastMonth < firstMonth) {
        return "Negative Growth";
    } else {
        return "No Growth";
    }
}

console.log("Highest Sale:", getHighestSale(sales));
console.log("Lowest Sale:", getLowestSale(sales));
console.log("Average Sale:", getAverageSale(sales));
console.log("Growth Analysis:", getGrowthAnalysis(sales));