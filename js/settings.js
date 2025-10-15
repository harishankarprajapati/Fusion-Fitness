// ===== Site Data =====
const siteData = {
    siteName: "Fusion Fitness",
    phonesit: "+91 7439303433",
    phonesit2: "+91 9903747818",
    email: "fusionfitness1025@gmail.com",
    address: "Pancham Tower, G4-250/2, New Gangarampur Road, Gharami Para. Kolkata - 700141",
    aboutText: "Welcome to Fusion Fitness! We provide amazing services to our clients with love and passion."
};

// ===== Function to apply site data =====
function applySiteData() {
    document.querySelectorAll("[data-site]").forEach(el => {
        const key = el.getAttribute("data-site");
        const value = siteData[key];
        if (!value) return;

        if (key === "phonesit" || key === "phonesit2") {
            el.innerHTML = `<a href="tel:${value}" >${value}</a>`;
        } else if (key === "email") {
            el.innerHTML = `<a href="mailto:${value}" >${value}</a>`;
        } else {
            el.textContent = value;
        }
    });
}

// ===== Include HTML function (like include-html.js) =====
function includeHTML(callback) {
    document.querySelectorAll("*[include-html]").forEach(el => {
        const file = el.getAttribute("include-html");
        if (!file) return;

        fetch(file)
            .then(response => {
                if (!response.ok) throw new Error(response.status + ": " + response.statusText);
                return response.text();
            })
            .then(data => {
                el.innerHTML = data;
                // Apply siteData to newly loaded content
                applySiteData();
                // Optional callback
                if (callback) callback(el);
            })
            .catch(err => {
                el.innerHTML = file + " - " + err;
            });
    });
}

// ===== Run on page load =====
document.addEventListener("DOMContentLoaded", () => {
    // First, apply site data to static elements
    applySiteData();
    // Then include HTML and apply site data to dynamic content
    includeHTML();
});
