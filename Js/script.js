
let mobileMenu = document.getElementById("mobile-menu");
let responsiveNav = document.getElementById("responsive-nav");
responsiveNav.style.display == "none";
mobileMenu.addEventListener("click", () => {
    if (responsiveNav.style.display === "none") {
        responsiveNav.style.display = "block";
    }
    else {
        responsiveNav.style.display = "none";
    }
})
