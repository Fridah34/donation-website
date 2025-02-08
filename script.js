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

   // Donation Chart Script
   document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    const canvas = document.getElementById('donationChart');
    if (!canvas) {
        console.error('Canvas element not found');
        return;
    }
    console.log('Canvas element found');

    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error('Unable to get 2D context from canvas');
        return;
    }
    console.log('2D context obtained');

    try {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['M-Pesa (KES)', 'PayPal (USD & KES)', 'Credit/Debit Cards (USD & KES)'],
                datasets: [{
                    label: 'Donation Totals',
                    data: [600000, 400000, 585000],
                    backgroundColor: [
                        '#ffbd00', // Yellow for M-Pesa
                        '#ff0054', // Pink for PayPal
                        '#9e0059'  // Purple for Credit/Debit Cards
                    ],
                    borderWidth: 0,
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.y !== null) {
                                    label += 'KES ' + context.parsed.y.toLocaleString();
                                }
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return 'KES ' + value.toLocaleString();
                            }
                        },
                        grid: {
                            color: '#e0e0e0'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
        console.log('Chart created successfully');
    } catch (error) {
        console.error('Error creating chart:', error);
    }
});
   
       
   
   // Accept Volunteer Script
   document.querySelectorAll('.accept-btn').forEach(button => {
       button.addEventListener('click', function() {
           const row = button.closest('tr');
           const statusCell = row.querySelector('td:nth-child(3)');
           statusCell.textContent = 'Accepted'; // Update the status to 'Accepted'
           button.disabled = true; // Disable the Accept button after action
           button.textContent = 'Accepted'; // Change button text
           button.classList.remove('btn-success');
           button.classList.add('btn-secondary'); // Change button color to gray
       });
   });

   ScrollReveal({
    reset: true,
    distance: '50px',
    duration: 1200,
    delay: 300,
});

ScrollReveal().reveal('.tagline', { origin: 'top', delay: 200 });
ScrollReveal().reveal('.card', { delay: 400, origin: 'bottom' });
ScrollReveal().reveal('.footer', { origin: 'bottom', delay: 600 });

