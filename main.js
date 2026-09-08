// ================================
// MOBILE MENU
// ================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});


// ================================
// NAVIGATION
// ================================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });

});


// ================================
// PLAY BUTTONS
// ================================

const playButtons = document.querySelectorAll(".play-btn");

playButtons.forEach(button => {

    button.addEventListener("click", () => {

        const gameName =
            button
                .closest(".game-card")
                .querySelector("h3")
                .textContent;

        alert(`${gameName} ishga tushirilmoqda! 🎮`);

    });

});


// ================================
// LOGIN BUTTON
// ================================

const loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("click", () => {

    alert("Login tizimi tez orada ishga tushadi!");

});


// ================================
// JOIN BUTTON
// ================================

const joinBtn = document.querySelector(".join-btn");

joinBtn.addEventListener("click", () => {

    alert("GameZone community'ga xush kelibsiz! 🎮🔥");

});


// ================================
// SCROLL ANIMATION
// ================================

const cards = document.querySelectorAll(
    ".game-card, .news-card, .stat"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity .6s ease, transform .6s ease";

    observer.observe(card);

});
