// For demonstration purposes only
function simulateLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Store the credentials (for demonstration)
    localStorage.setItem('userEmail', email);
    
    // Redirect to a static home page
    window.location.href = 'home.html';
}