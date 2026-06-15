
function analyzeString() {
    let string = document.getElementById("inputString").value;
    let StringLength = string.length;
    document.getElementById("length").textContent = "Length: " + StringLength;
    let Uppercase = string.toUpperCase();
    let Lowercase = string.toLowerCase();
    let CharacterCount = string.replace(/\d/g, '').length;
    document.getElementById("Uppercase").textContent = "Uppercase: " + Uppercase;
    document.getElementById("Lowercase").textContent = "Lowercase: " + Lowercase;
    document.getElementById("CharacterCount").textContent = "Character Count: " + CharacterCount;

}