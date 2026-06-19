
// 1. THEME MANAGEMENT
const themeToggle = document.getElementById("themeToggle");
let savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.setAttribute("name", "sunny-outline");
}

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

// 2. PROFILE MANAGEMENT

function loadProfile() {
    let savedProfileString = localStorage.getItem("userProfile");
    if (savedProfileString !== null) {
        let savedProfile = JSON.parse(savedProfileString);
        document.getElementById("displayName").innerText = savedProfile.name;
        document.getElementById("displayEmail").innerText = savedProfile.email;
        document.getElementById("displayRole").innerText = savedProfile.role;
        document.getElementById("editProfileBtn").innerText = "Edit Profile";
    }
}

document.getElementById("editProfileBtn").addEventListener("click", function() {
    document.getElementById("profileModal").style.display = "flex";
    if (document.getElementById("displayName").innerText !== "Not set") {
        document.getElementById("inputName").value = document.getElementById("displayName").innerText;
        document.getElementById("inputEmail").value = document.getElementById("displayEmail").innerText;
        document.getElementById("inputRole").value = document.getElementById("displayRole").innerText;
    }
});

document.getElementById("closeModalBtn").addEventListener("click", function() {
    document.getElementById("profileModal").style.display = "none";
});

document.getElementById("saveProfileBtn").addEventListener("click", function() {
    let newProfile = {
        name: document.getElementById("inputName").value,
        email: document.getElementById("inputEmail").value,
        role: document.getElementById("inputRole").value
    };
    localStorage.setItem("userProfile", JSON.stringify(newProfile));
    document.getElementById("profileModal").style.display = "none";
    loadProfile();
});

loadProfile();

// 3. TASK MANAGEMENT 

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; 

    let completedCount = 0;

    tasks.forEach((task, index) => {
        if (task.completed) completedCount++;

        
        let li = document.createElement("li");
        li.className = "list-item";
        
        
        li.innerHTML = `
            <span class="${task.completed ? 'completed-text' : ''}">${task.text}</span> 
            <div class="task-actions">
                <input type="checkbox" class="task-check" onchange="toggleTask(${index})" ${task.completed ? "checked" : ""}>
                <button class="icon-btn edit" onclick="editTask(${index})"><ion-icon name="create-outline"></ion-icon></button>
                <button class="icon-btn delete" onclick="deleteTask(${index})"><ion-icon name="trash-outline"></ion-icon></button>
            </div>
        `;
        taskList.appendChild(li);
    });

    // Update Dashboard Stats
    document.getElementById("statTotalTasks").innerText = tasks.length;
    document.getElementById("statCompletedTasks").innerText = completedCount;
    document.getElementById("statPendingTasks").innerText = tasks.length - completedCount;
}

document.getElementById("addTaskBtn").addEventListener("click", function() {
    let taskText = document.getElementById("newTaskInput").value;
    if (taskText.trim() === "") return; 

    
    tasks.push({ text: taskText, completed: false });
    
    
    localStorage.setItem("tasks", JSON.stringify(tasks));
    document.getElementById("newTaskInput").value = ""; 
    renderTasks();
});


window.toggleTask = function(index) {
    tasks[index].completed = !tasks[index].completed; 
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
};

window.deleteTask = function(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
};

window.editTask = function(index) {
    let newText = prompt("Edit your task:", tasks[index].text);
    if (newText !== null && newText.trim() !== "") {
        tasks[index].text = newText;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
    }
};

renderTasks(); 

// 4. NOTES 

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function renderNotes() {
    const noteList = document.getElementById("noteList");
    noteList.innerHTML = ""; 

    notes.forEach((note, index) => {
        let li = document.createElement("li");
        li.className = "list-item";
        
        li.innerHTML = `
            <span><strong>${note.title}</strong></span> 
            <div class="links">
                ${note.link ? `<a href="${note.link}" target="_blank"><ion-icon name="link-outline"></ion-icon> View</a>` : ''}
                <button class="icon-btn delete" onclick="deleteNote(${index})"><ion-icon name="trash-outline"></ion-icon></button>
            </div>
        `;
        noteList.appendChild(li);
    });

    // Update Dashboard Stats
    document.getElementById("statTotalNotes").innerText = notes.length;
}

document.getElementById("addNoteBtn").addEventListener("click", function() {
    let noteTitle = document.getElementById("newNoteTitle").value;
    let noteLink = document.getElementById("newNoteLink").value;
    
    if (noteTitle.trim() === "") return;

    notes.push({ title: noteTitle, link: noteLink });
    
    localStorage.setItem("notes", JSON.stringify(notes));
    document.getElementById("newNoteTitle").value = "";
    document.getElementById("newNoteLink").value = "";
    renderNotes();
});

window.deleteNote = function(index) {
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    renderNotes();
};

renderNotes(); 