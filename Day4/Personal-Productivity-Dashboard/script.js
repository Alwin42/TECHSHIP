// 1. Grab the icon element
const themeToggle = document.getElementById("themeToggle");

// 2. Check if the user already saved a preference in the past
let savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    
    document.body.classList.add("dark-mode");
    themeToggle.setAttribute("name", "sunny-outline");
}

// 3. Listen for the user clicking the icon
themeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        
        themeToggle.setAttribute("name", "sunny-outline");
        localStorage.setItem("theme", "dark");
    } else {
        
        themeToggle.setAttribute("name", "moon-outline");
        localStorage.setItem("theme", "light");
    }
});

const editProfileBtn = document.getElementById("editProfileBtn");
const profileModal = document.getElementById("profileModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const saveProfileBtn = document.getElementById("saveProfileBtn");
const displayName = document.getElementById("displayName");
const displayEmail = document.getElementById("displayEmail");
const displayRole = document.getElementById("displayRole");
const inputName = document.getElementById("inputName");
const inputEmail = document.getElementById("inputEmail");
const inputRole = document.getElementById("inputRole");

function loadProfile() {
    let savedProfileString = localStorage.getItem("userProfile");

    if (savedProfileString !== null) {
        let savedProfile = JSON.parse(savedProfileString);
        // Update the screen
        displayName.innerText = savedProfile.name;
        displayEmail.innerText = savedProfile.email;
        displayRole.innerText = savedProfile.role;

        // Change the button text
        editProfileBtn.innerText = "Edit Profile";
    } else {
        // No data found. Ensure button says "Add Details"
        editProfileBtn.innerText = "Add Details";
    }
}

editProfileBtn.addEventListener("click", function() {
    // Show the modal
    profileModal.style.display = "flex";

   
    if (displayName.innerText !== "Not set") {
        inputName.value = displayName.innerText;
        inputEmail.value = displayEmail.innerText;
        inputRole.value = displayRole.innerText;
    }
});

closeModalBtn.addEventListener("click", function() {
    profileModal.style.display = "none";
});

saveProfileBtn.addEventListener("click", function() {
    
    // Create an object with the new data from the inputs
    let newProfile = {
        name: inputName.value,
        email: inputEmail.value,
        role: inputRole.value
    };

    // Save to Local Storage (Convert object to a string first!)
    localStorage.setItem("userProfile", JSON.stringify(newProfile));

    // Hide the modal
    profileModal.style.display = "none";

    // Reload the profile to show the new data instantly
    loadProfile();
});

// Call the load function immediately when the page starts!
loadProfile();