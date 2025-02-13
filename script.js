document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Basic form validation (you can add more complex validation)
  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  // In a real application, you would send this data to a server
  // For this example, we'll just display an alert
  alert(`Thank you, ${name}! Your message has been sent.`);

  // Clear the form
  document.getElementById('contact-form').reset();
};