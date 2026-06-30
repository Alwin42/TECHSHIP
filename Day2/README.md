# 📘 Day 2 – JavaScript Foundations, Logic Building & Problem Solving

## TECHSHIP Internship Program



## 📌 Introduction

Welcome to **Day 2** of the TECHSHIP Internship Program.

Programming is not about memorizing syntax. It is about **understanding problems**, **breaking them into smaller parts**, and **creating logical solutions**. JavaScript is simply the tool we use to achieve that.

Today's module focuses on building **strong programming fundamentals** and **problem-solving abilities**. The concepts covered here form the foundation for everything that follows — including **Functions, Arrays, Objects, React, Next.js, and Full Stack Development**.

> ⚠️ Students are expected to study the concepts thoroughly, complete all exercises, and attempt the challenges independently before referring to external solutions.

---

## 🎯 Learning Objectives

By the end of Day 2, students should be able to:

- ✅ Understand how programs store and manipulate data
- ✅ Work confidently with variables and data types
- ✅ Perform calculations using operators
- ✅ Make decisions using conditional statements
- ✅ Automate repetitive tasks using loops
- ✅ Solve real-world logical problems
- ✅ Analyze requirements and develop solutions
- ✅ Debug and improve their own programs

---

## 📚 Topics to Learn

### 1. Variables and Constants

**Study:**
- What are Variables?
- Variable Declaration
  - `let`
  - `const`
- Naming Conventions
- Scope Basics
- Best Practices

**Resources:**
- 📖 [javascript.info – Variables](https://javascript.info/variables)
- 📖 [MDN – Variables](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)

---

### 2. Data Types

**Study:**

**Primitive Data Types:**
| Type | Description |
|------|-------------|
| `String` | Text values enclosed in quotes |
| `Number` | Integer and floating-point numbers |
| `Boolean` | `true` or `false` |
| `Null` | Intentional absence of value |
| `Undefined` | Variable declared but not assigned |

**Additional Concepts:**
- `typeof` operator
- Dynamic Typing

**Resources:**
- 📖 [javascript.info – Data Types](https://javascript.info/types)

---

### 3. Type Conversion

**Study:**

**Explicit Conversion:**
```javascript
Number("123")    // 123
String(123)      // "123"
Boolean(1)       // true
```

**Implicit Conversion:**
- Understand how JavaScript converts values automatically during operations

**Resources:**
- 📖 [javascript.info – Type Conversions](https://javascript.info/type-conversions)

---

### 4. Operators

**Arithmetic Operators:**
| Operator | Description |
|----------|-------------|
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `%` | Modulus (Remainder) |
| `**` | Exponentiation |

**Assignment Operators:**
| Operator | Example | Equivalent |
|----------|---------|------------|
| `=` | `x = 5` | `x = 5` |
| `+=` | `x += 3` | `x = x + 3` |
| `-=` | `x -= 3` | `x = x - 3` |
| `*=` | `x *= 3` | `x = x * 3` |
| `/=` | `x /= 3` | `x = x / 3` |

**Comparison Operators:**
| Operator | Description |
|----------|-------------|
| `==` | Equal to (loose) |
| `===` | Equal to (strict) |
| `!=` | Not equal (loose) |
| `!==` | Not equal (strict) |
| `<` | Less than |
| `>` | Greater than |
| `>=` | Greater than or equal to |
| `<=` | Less than or equal to |

**Logical Operators:**
| Operator | Description |
|----------|-------------|
| `&&` | Logical AND |
| `\|\|` | Logical OR |
| `!` | Logical NOT |

**Resources:**
- 📖 [javascript.info – Operators](https://javascript.info/operators)

---

### 5. String Operations

**Study:**
```javascript
let str = "  Hello, World!  ";

str.length;            // 17
str.toUpperCase();     // "  HELLO, WORLD!  "
str.toLowerCase();     // "  hello, world!  "
str.trim();            // "Hello, World!"
str.includes("World"); // true
str.replace("World", "JS"); // "  Hello, JS!  "
```

---

### 6. Math Object

**Study:**
```javascript
Math.round(4.5);       // 5
Math.floor(4.9);       // 4
Math.ceil(4.1);        // 5
Math.random();         // Random number between 0 and 1
Math.max(1, 5, 3);     // 5
Math.min(1, 5, 3);     // 1
```

---

### 7. Conditional Statements

**Study:**
- `if`
- `if...else`
- `else if`
- Nested Conditions
- `switch`

```javascript
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
```

**Resources:**
- 📖 [javascript.info – Conditional Branching](https://javascript.info/ifelse)

---

### 8. Loops

**Study:**
- `for` loop
- `while` loop
- Nested loops

```javascript
// for loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// while loop
let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}

// Nested loop
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}
```

**Resources:**
- 📖 [javascript.info – Loops](https://javascript.info/while-for)

---

## 🗂️ Folder Structure

```
Day2/
├── Academic-Report
├── Age
├── ATM-Simulator
├── Attendance-calculator
├── BMI
├── Cricket-Statics-Analyzer
├── Employee-Performance-Evaluation
├── Largest-Number
└── Monthly-budget
├── Multiplication-Table-Generator
├── Number-Analyzer
├── Number-Star-Pyramids
├── Parking-Fee-Calculator
├── password-checker
├── Pattern
├── Restraunt-Billing-System


```

---

## 🛠️ How to Run

1. Make sure [Node.js](https://nodejs.org/) is installed on your system
2. Clone or download this repository
3. Navigate to the project folder
4. Run any JavaScript file:

```bash
node 01-variables.js
```

---

## 📝 Key Reminders

> 💡 **Practice over theory** – Type every example yourself. Don't just read.

> 💡 **Break problems down** – Solve one small step at a time.

> 💡 **Debug actively** – Use `console.log()` to trace your logic.

> 💡 **Attempt independently** – Try solving challenges before looking up solutions.

---

## 📎 All Resources at a Glance

| Topic | Link |
|-------|------|
| Variables | [javascript.info/variables](https://javascript.info/variables) |
| Variables (MDN) | [MDN – Variables](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables) |
| Data Types | [javascript.info/types](https://javascript.info/types) |
| Type Conversions | [javascript.info/type-conversions](https://javascript.info/type-conversions) |
| Operators | [javascript.info/operators](https://javascript.info/operators) |
| Conditionals | [javascript.info/ifelse](https://javascript.info/ifelse) |
| Loops | [javascript.info/while-for](https://javascript.info/while-for) |

---

## 🏷️ Tags

`JavaScript` `Fundamentals` `Variables` `Data Types` `Operators` `Conditionals` `Loops` `Problem Solving` `TECHSHIP`

---

