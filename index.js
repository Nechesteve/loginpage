// JavaScript for login page functionality

// Get form elements
const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

// Add event listener to form
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get values from form inputs
  const userValue = username.value;
  const passValue = password.value;

  // Validate form inputs
  if (userValue === '' || passValue === '') {
    alert('Please fill in all fields');
  } else {
    // Send data to server for authentication
    login(userValue, passValue);
  }
});

function login(user, pass) {
  // Use Fetch API or XMLHttpRequest to send data to server
  // and handle the response
  // Example using Fetch API:
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username: user, password: pass })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      // Redirect to dashboard or display success message
      window.location.href = '/dashboard';
    } else {
      // Display error message
      alert(data.message);
    }
  })
  .catch(err => console.log(err));
}
