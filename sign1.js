document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signup-form");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const emailError = document.getElementById("email-error");
    const passwordStrength = document.getElementById("password-strength");

    email.addEventListener("input", () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            emailError.textContent = "Invalid email format!";
            emailError.style.color = "red";
        } else {
            emailError.textContent = "";
        }
    });

    password.addEventListener("input", () => {
        if (password.value.length < 6) {
            passwordStrength.textContent = "Weak";
            passwordStrength.style.color = "red";
        } else {
            passwordStrength.textContent = "Strong";
            passwordStrength.style.color = "green";
        }
    });

    signupForm.addEventListener("submit", (event) => {
        event.preventDefault();
        if (password.value !== confirmPassword.value) {
            alert("Passwords do not match!");
        } else {
            alert("Signup successful!");
        }
    });
});
