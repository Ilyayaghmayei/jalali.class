/* =========================
   JALALIA 1.0
   MAIN JAVASCRIPT
========================= */

document.addEventListener("DOMContentLoaded", () => {

    // THEME SYSTEM

    const themeToggle = document.getElementById("themeToggle");

    const savedTheme = localStorage.getItem("jalalia-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    updateThemeIcon();

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {

            document.body.classList.toggle("dark-mode");

            const isDark = document.body.classList.contains("dark-mode");

            localStorage.setItem(
                "jalalia-theme",
                isDark ? "dark" : "light"
            );

            updateThemeIcon();
        });
    }

    function updateThemeIcon() {
        if (!themeToggle) return;

        const isDark = document.body.classList.contains("dark-mode");

        themeToggle.textContent = isDark ? "☀️" : "🌙";
    }


    // MOBILE MENU

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("show");

            menuToggle.textContent =
                navLinks.classList.contains("show") ? "✕" : "☰";

        });

        document.addEventListener("click", (event) => {

            if (
                !navLinks.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {
                navLinks.classList.remove("show");
                menuToggle.textContent = "☰";
            }

        });

    }


    // CURRENT YEAR

    const yearElements = document.querySelectorAll(".current-year");

    yearElements.forEach(element => {
        element.textContent = new Date().getFullYear();
    });


    // PAGE LOADED

    console.log("JALALIA WEBSITE LOADED SUCCESSFULLY 🚀");

});