document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Here you can perform validation and authentication checks
    // For demonstration purposes, let's just check if both fields are filled
    if (username.trim() === '' || password.trim() === '') {
      document.getElementById('error-message').innerText = 'Please fill in all fields.';
    } else {
      // Redirect or perform any other actions upon successful login
      // For now, just log the credentials to console
      console.log('Username: ' + username + ', Password: ' + password);
    }
  });
  