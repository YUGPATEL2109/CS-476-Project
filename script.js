function showLogin() {
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('signup-form').classList.add('hidden');
}

function showSignup() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-form').classList.remove('hidden');
}

function toggleForms() {
    const forms = document.getElementById('forms');
    forms.classList.toggle('hidden');
}

// Smooth scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

function showSignup() {
    // Redirect to signup page or show signup form
    alert("Redirecting to signup page...");
}

function validateForm() {
    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirm-email').value;

    if (email !== confirmEmail) {
        alert("Email addresses do not match.");
        return false;
    }

    return true;
}
