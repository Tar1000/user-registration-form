document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let termsChecked = document.getElementById("terms").checked;

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let confirmPasswordError = document.getElementById("confirmPasswordError");
    let message = document.getElementById("message");

    nameError.textContent = emailError.textContent = passwordError.textContent = confirmPasswordError.textContent = "";
    message.textContent = "";

    let valid = true;

    if (name.length < 3) {
        nameError.textContent = "Name must be at least 3 characters.";
        valid = false;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = "Invalid email format.";
        valid = false;
    }

    let passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
        passwordError.textContent = "Password must be at least 8 characters, contain a number & an uppercase letter.";
        valid = false;
    }

    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match!";
        valid = false;
    }

    if (!termsChecked) {
        message.textContent = "You must agree to the terms and conditions.";
        message.style.color = "red";
        valid = false;
    }

    if (valid) {
        message.style.color = "green";
        message.textContent = "Registration successful!";
    }
});

// Toggle Password Visibility
document.getElementById("togglePassword").addEventListener("click", function () {
    let passwordField = document.getElementById("password");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
});
