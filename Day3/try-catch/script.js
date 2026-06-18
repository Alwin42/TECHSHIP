console.log("Script started...");

try {
    
    let result = FakeVariable + 10; 
    console.log(result);
} catch (error) {
    console.log("Caught a global error: " + error.name);
}

console.log("Script continues to run normally!");