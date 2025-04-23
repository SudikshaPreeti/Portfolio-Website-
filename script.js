document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Simulate successful submission
    document.getElementById('formMessage').textContent = "Thank you for reaching out! I'll get back to you soon.";
    this.reset();
  });
  