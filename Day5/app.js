let users = JSON.parse(localStorage.getItem('users')) || [];
let books = JSON.parse(localStorage.getItem('books')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

checkAuthState();

function checkAuthState() {
    
    const isLoginPage = window.location.href.includes('sign.html');
    
    if (currentUser) {
        
        if (isLoginPage) {
            window.location.href = "index.html";
            return;
        }
        
        
        safeRemoveClass('app-container', 'hidden');
        
        const welcomeMessage = document.getElementById('welcome-message');
        if (welcomeMessage) {
            welcomeMessage.innerText = `Welcome, ${currentUser.name}!`;
        }
        
        renderBooks();

    } else {
        
        if (!isLoginPage) {
            window.location.href = "sign.html";
            return;
        }

        
        safeRemoveClass('auth-container', 'hidden');
        toggleAuthView('login');
    }
}


function toggleAuthView(view) {
    const loginSection = document.getElementById('login-section');
    const signupSection = document.getElementById('signup-section');
    
    if (!loginSection || !signupSection) return; 

    if (view === 'signup') {
        loginSection.classList.add('hidden');
        signupSection.classList.remove('hidden');
    } else {
        signupSection.classList.add('hidden');
        loginSection.classList.remove('hidden');
    }
}

safeAddListener('show-signup', 'click', () => toggleAuthView('signup'));
safeAddListener('show-login', 'click', () => toggleAuthView('login'));


safeAddListener('signup-form', 'submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;
    const confirm = document.getElementById('signup-confirm').value;
    const errorDiv = document.getElementById('signup-error');

    if (password !== confirm) {
        errorDiv.innerText = "Passwords do not match.";
        return;
    }
    
    if (users.find(u => u.email === email)) {
        errorDiv.innerText = "Email already registered.";
        return;
    }

    
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    
    alert('Registration successful! Please login.');
    toggleAuthView('login');
    e.target.reset();
    errorDiv.innerText = "";
});


safeAddListener('login-form', 'submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    const errorDiv = document.getElementById('login-error');

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        errorDiv.innerText = "";
        e.target.reset();
        
        
        window.location.href = "index.html";
    } else {
        errorDiv.innerText = "Invalid email or password.";
    }
});


safeAddListener('logout-btn', 'click', () => {
    currentUser = null;
    localStorage.removeItem('currentUser');
    window.location.href = "sign.html"; 
});

safeAddListener('book-form', 'submit', (e) => {
    e.preventDefault();
    const idInput = document.getElementById('book-id').value;
    const title = document.getElementById('book-title').value.trim();
    const author = document.getElementById('book-author').value.trim();
    const category = document.getElementById('book-category').value.trim();
    const year = document.getElementById('book-year').value.trim();

    if (idInput) {
        
        const index = books.findIndex(b => b.id === idInput);
        if (index !== -1) {
            books[index] = { id: idInput, title, author, category, year };
        }
    } else {
        
        const newBook = {
            id: Date.now().toString(),
            title, author, category, year
        };
        books.push(newBook);
    }

    
    localStorage.setItem('books', JSON.stringify(books));
    e.target.reset();
    resetBookFormUI();
    renderBooks();
});


function renderBooks() {
    const tbody = document.getElementById('book-table-body');
    if (!tbody) return; 

    tbody.innerHTML = "";

    books.forEach(book => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.category}</td>
            <td>${book.year}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editBook('${book.id}')">Edit</button>
                <button class="action-btn delete-btn" onclick="deleteBook('${book.id}')">Delete</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}


window.editBook = function(id) {
    const book = books.find(b => b.id === id);
    if (book) {
        document.getElementById('book-id').value = book.id;
        document.getElementById('book-title').value = book.title;
        document.getElementById('book-author').value = book.author;
        document.getElementById('book-category').value = book.category;
        document.getElementById('book-year').value = book.year;
        document.getElementById('book-submit-btn').innerText = "Update Book";
        document.getElementById('form-title').innerText = "Edit Book";
    }
};


window.deleteBook = function(id) {
    if (confirm("Are you sure you want to delete this book?")) {
        books = books.filter(b => b.id !== id);
        localStorage.setItem('books', JSON.stringify(books));
        renderBooks();
    }
};

function resetBookFormUI() {
    document.getElementById('book-id').value = "";
    document.getElementById('book-submit-btn').innerText = "Add Book";
    
    const formTitle = document.getElementById('form-title');
    if (formTitle) formTitle.innerText = "Add a New Book";
}

function safeAddListener(id, eventType, callback) {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener(eventType, callback);
    }
}


function safeRemoveClass(id, className) {
    const element = document.getElementById(id);
    if (element) {
        element.classList.remove(className);
    }
}