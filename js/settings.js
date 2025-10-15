// settings.js

const siteData = {
    siteName: "Fusion Fitness",
    phonesit: "+91 7439303433",
    phonesit2: "+91 9903747818",
    email: "fusionfitness1025@gmail.com",
    address: "Pancham Tower, G4-250/2,New Gangarampur Road, Gharami Para. Kolkata - 700141",
    aboutText: "Welcome to Fusion Fitness! We provide amazing services to our clients with love and passion."
};

// Function to apply data to HTML
function applySiteData() {
    document.querySelectorAll("[data-site]").forEach(el => {
        const key = el.getAttribute("data-site");
        const value = siteData[key];

        if (value) {
            // For phone → clickable tel: link
            if (key === "phonesit") {
                el.innerHTML = `<a href="tel:${value}" class="text-decoration-none text-dark">${value}</a>`;
            }
               // For phone → clickable tel: link
            if (key === "phonesit2") {
                el.innerHTML = `<a href="tel:${value}" class="text-decoration-none text-dark">${value}</a>`;
            }
            // For email → clickable mailto: link
            else if (key === "email") {
                el.innerHTML = `<a href="mailto:${value}" class="text-decoration-none text-dark">${value}</a>`;
            }
            // For normal text
            else {
                el.textContent = value;
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", applySiteData);
