// 🌗 Light/Dark Mode Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("darkmode");
});

// 🎮 Counter Game
let count = 0;
const counterDisplay = document.getElementById("counter");

document.getElementById("increase").addEventListener("click", () => {
    count++;
    counterDisplay.textContent = count;
});

document.getElementById("decrease").addEventListener("click", () => {
    count--;
    counterDisplay.textContent = count;
});

// ❓ FAQ Toggle
document.getElementById("faqToggle").addEventListener("click", () => {
    const answer = document.getElementById("faqAnswer");
    answer.style.display = answer.style.display === "none" ? "block" : "none";
});

// 📋 Form Validation
document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const message = document.getElementById("formMessage");

    // Basic validation
    if (name === "" || email === "" || password === "") {
        message.textContent = "All fields are required.";
        message.style.color = "red";
        return;
    }

    // Email format check
    const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
    if (!emailRegex.test(email)) {
        message.textContent = "Please enter a valid email.";
        message.style.color = "red";
        return;
    }

    // Password strength check
    if (password.length < 6) {
        message.textContent = "Password must be at least 6 characters.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Form submitted successfully! ✅";
    message.style.color = "green";
});
