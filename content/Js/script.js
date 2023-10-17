
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


$(document).ready(function () {
    $("#news-slider").owlCarousel({
        items: 5,
        itemsDesktop: [1199, 5],
        itemsDesktopSmall: [980, 2],
        itemsMobile: [600, 1],
        navigation: true,
        navigationText: ["", ""],
        pagination: true,
        autoPlay: true
      
    });
});
$(document).ready(function () {
    $("#news-slider1").owlCarousel({
        items: 5,
        itemsDesktop: [1199, 5],
        itemsDesktopSmall: [980, 2],
        itemsMobile: [600, 1],
        navigation: true,
        navigationText: ["", ""],
        pagination: true,
        autoPlay: true

    });
});
$(document).ready(function () {
    $("#news-slider2").owlCarousel({
        items: 5,
        itemsDesktop: [1199, 5],
        itemsDesktopSmall: [980, 2],
        itemsMobile: [600, 1],
        navigation: true,
        navigationText: ["", ""],
        pagination: true,
        autoPlay: true

    });
});
$(document).ready(function () {
    $("#news-slider3").owlCarousel({
        items: 5,
        itemsDesktop: [1199, 5],
        itemsDesktopSmall: [980, 2],
        itemsMobile: [600, 1],
        navigation: true,
        navigationText: ["", ""],
        pagination: true,
        autoPlay: true

    });
});