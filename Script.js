// Dark Mode Toggle
const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleButton.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Contact Form Handling (Simulates submission - in real use, integrate with a backend like EmailJS)
const form = document.getElementById('contact-form');
const response = document.getElementById('form-response');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name && email && message) {
        response.textContent = 'Thank you for your message! I\'ll get back to you soon.';
        response.style.color = 'green';
        form.reset();
    } else {
        response.textContent = 'Please fill in all fields.';
        response.style.color = 'red';
    }
});

// Smooth Scrolling for Nav Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
