const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

let currentCategory = "all";

function filterProducts() {
    const searchText = searchInput ? searchInput.value.toLowerCase() : "";

    productCards.forEach(card => {
        const productName = card.querySelector("h2").textContent.toLowerCase();
        const productText = card.textContent.toLowerCase();
        const productCategory = card.dataset.category;

        const matchesSearch =
            productName.includes(searchText) || productText.includes(searchText);

        const matchesCategory =
            currentCategory === "all" || productCategory === currentCategory;

        if (matchesSearch && matchesCategory) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

if (searchInput) {
    searchInput.addEventListener("input", filterProducts);
}

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentCategory = button.dataset.category;
        filterProducts();
    });
});

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "Please complete all fields before submitting.";
            formMessage.style.color = "#b00020";
        } else {
            formMessage.textContent = "Thank you! Your message has been received.";
            formMessage.style.color = "#2e7d32";
            contactForm.reset();
        }
    });
}

const readMoreButtons = document.querySelectorAll(".read-more-btn");

readMoreButtons.forEach(button => {
    button.addEventListener("click", () => {
        const extraContent = button.nextElementSibling;

        if (extraContent.style.display === "block") {
            extraContent.style.display = "none";
            button.textContent = "Read More";
        } else {
            extraContent.style.display = "block";
            button.textContent = "Show Less";
        }
    });
});