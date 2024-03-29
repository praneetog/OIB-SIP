// Function to handle user registration
function registerUser(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    users[username] = password;
    localStorage.setItem('users', JSON.stringify(users));
}

// Function to handle user login
function loginUser(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[username] === password) {
        localStorage.setItem('loggedInUser', username);
        return true;
    }
    return false;
}

// Function to check if user is logged in
function isLoggedIn() {
    return localStorage.getItem('loggedInUser') !== null;
}

// Function to handle form submissions
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const regUsername = document.getElementById('regUsername').value;
    const regPassword = document.getElementById('regPassword').value;
    registerUser(regUsername, regPassword);
    alert('User registered successfully!');
    this.reset();
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;
    if (loginUser(loginUsername, loginPassword)) {
        alert('Login successful!');
        window.location.href = 'secured.html';
    } else {
        alert('Invalid username or password!');
    }
    this.reset();
});

// Check if user is logged in on page load
if (isLoggedIn()) {
    // Redirect to secured page if logged in
    window.location.href = 'secured.html';
}
