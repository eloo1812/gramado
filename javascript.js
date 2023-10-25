document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu");
    const nav = document.querySelector("nav");

    menuIcon.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    });
});
