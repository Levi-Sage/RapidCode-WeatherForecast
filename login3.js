document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const submitBtn = document.getElementById("submit-btn");
    const btnText = submitBtn.querySelector(".btn-text");
    const loading = submitBtn.querySelector(".loading");

    function validateLogin(event) {
        event.preventDefault();
        btnText.style.display = "none";
        loading.style.display = "inline-block";
        submitBtn.style.background = "#00c851";
        submitBtn.style.color = "white";

        setTimeout(() => {
            if (username.value !== "" && password.value === "password123") {
                window.location.href = "/today.html";
            } else {
                submitBtn.style.background = "#ff4444";
                btnText.innerHTML = "Invalid Credentials!";
                btnText.style.display = "inline-block";
                loading.style.display = "none";

                setTimeout(() => {
                    btnText.innerHTML = "Login";
                    submitBtn.style.background = "#ffcc00";
                }, 1500);
            }
        }, 2000);
    }

    submitBtn.addEventListener("click", validateLogin);
});
