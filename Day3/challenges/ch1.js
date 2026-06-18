
const fs = require('fs'); 
const FILE_NAME = 'transactions.json';

// 1. Read data from the file safely
const loadTransactions = () => {
  try {
    // Read the file as plain text string
    const fileData = fs.readFileSync(FILE_NAME, 'utf8'); 
    // Convert the plain text string back into a real JavaScript array
    return JSON.parse(fileData); 
  } catch (error) {
    // If the file doesn't exist yet, return an empty array to start fresh
    return []; 
  }
};

// 2. Save data back into the file permanently
const saveTransactions = (dataArray) => {
  // Convert the JavaScript array into a structured text string
  const textData = JSON.stringify(dataArray, null, 2); 
  // Write the text string directly onto your hard drive
  fs.writeFileSync(FILE_NAME, textData, 'utf8'); 
};

// 3. Reusable Math Functions (Arrow Functions)
const getTotalDeposits = (list) => list.filter(x => x > 0).reduce((sum, x) => sum + x, 0);
const getTotalWithdrawals = (list) => list.filter(x => x < 0).reduce((sum, x) => sum + x, 0) * -1;
const getCurrentBalance = (list) => list.reduce((sum, x) => sum + x, 0);

// --- MAIN PROGRAM EXECUTION ---

// Step A: Load the current history from the file
const accountHistory = loadTransactions();
console.log("📂 Current History Loaded from File:", accountHistory);

// Step B: Calculate and display current dashboard metrics
console.log(`Total Deposits:    +$${getTotalDeposits(accountHistory)}`);
console.log(`Total Withdrawals: -$${getTotalWithdrawals(accountHistory)}`);
console.log(`Current Balance:    $${getCurrentBalance(accountHistory)}\n`);

// Step C: Simulate a user action (e.g., adding a new withdrawal)
const newTransaction = -40; 
console.log(`✍️ Processing new transaction: $${newTransaction}`);

// Step D: Update the array in the computer's memory using Spread operator
const updatedHistory = [...accountHistory, newTransaction];

// Step E: Save the updated array back to the physical file
saveTransactions(updatedHistory);
console.log("💾 File updated successfully! Check your transactions.json file.");
