document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');
    
    
    if (email === "" || password === "") {
        errorMessage.style.display = 'block'; 
        return;
    } else {
        errorMessage.style.display = 'none'; 
    }

    
    window.location.href = 'dashboard.html'; 
});