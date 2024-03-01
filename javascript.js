document.addEventListener('DOMContentLoaded', function() {
    // Form validation for the contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
            } else {
                alert('Thank you for your message!');
                // Here you would typically add an AJAX request to send the form data to your server
                this.reset(); // Reset the form fields
            }
        });
    }

    // Example of toggling elements: Toggle biography visibility
    const bio = document.querySelector('.bio');
    if (bio) {
        const toggleBioButton = document.createElement('button');
        toggleBioButton.textContent = 'Toggle Biography';
        bio.parentNode.insertBefore(toggleBioButton, bio);
        toggleBioButton.addEventListener('click', function() {
            bio.style.display = bio.style.display === 'none' ? 'block' : 'none';
        });
    }
});