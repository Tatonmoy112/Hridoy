// Global: Header Scroll Effect
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "#111";
        header.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.3)";
    } else {
        header.style.background = "#333";
        header.style.boxShadow = "none";
    }
});

// Home Page: Hero Animation
if (document.title.includes("Home")) {
    const heroContent = document.querySelector(".hero-content");
    window.addEventListener("load", () => {
        heroContent.style.opacity = 1;
        heroContent.style.transform = "translateY(0)";
    });
}

// Products Page: Search Functionality
if (document.title.includes("Products")) {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const productCards = document.querySelectorAll(".product-card");

    searchButton.addEventListener("click", () => {
        const query = searchInput.value.toLowerCase();
        productCards.forEach((card) => {
            const productName = card.querySelector("h4").textContent.toLowerCase();
            card.style.display = productName.includes(query) ? "block" : "none";
        });
    });
}

// Contact Page: Form Validation
if (document.title.includes("Contact")) {
    const contactForm = document.querySelector("form");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
        } else if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
        } else {
            alert("Thank you for contacting us!");
            contactForm.reset();
        }
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
}
