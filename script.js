const oneTimeBtn = document.getElementById("oneTimeBtn");
const monthlyBtn = document.getElementById("monthlyBtn");

oneTimeBtn.addEventListener("click", () => {
  oneTimeBtn.classList.add("active");
  monthlyBtn.classList.remove("active");
});

monthlyBtn.addEventListener("click", () => {
  monthlyBtn.classList.add("active");
  oneTimeBtn.classList.remove("active");
});


document.addEventListener("DOMContentLoaded", function () {
    // Ensure Navbar Toggler Works
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#navbarNav");

    navbarToggler.addEventListener("click", function () {
        navbarCollapse.classList.toggle("show");
    });

    // Ensure Hero Video Loads Correctly
    const heroVideo = document.getElementById("hero-video");
    if (heroVideo) {
        heroVideo.play().catch(err => console.warn("Video autoplay prevented:", err));
    }
});

  // Function to validate the form
  function validateForm() {
    // Retrieve form elements
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessages = document.getElementById('errorMessages');

    // Clear previous error messages
    errorMessages.innerHTML = '';

    // Validate Name
    if (name === '') {
        displayError('Name is required.');
        return false;
    }

    // Validate Email
    if (email === '') {
        displayError('Email is required.');
        return false;
    } else if (!isValidEmail(email)) {
        displayError('Please enter a valid email address.');
        return false;
    }

    // Validate Password
    if (password === '') {
        displayError('Password is required.');
        return false;
    } else if (!isStrongPassword(password)) {
        displayError('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.');
        return false;
    }

    // If all validations pass
    return true;
}

// Function to display error messages
function displayError(message) {
    const errorMessages = document.getElementById('errorMessages');
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('error');
    errorDiv.textContent = message;
    errorMessages.appendChild(errorDiv);
}

// Function to validate email format
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Function to validate password strength
function isStrongPassword(password) {
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return passwordPattern.test(password);
}

// Attach the validateForm function to the form's submit event
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
  });