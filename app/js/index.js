// Elements

const headMenuBtn = document.querySelector(".head__menu");
const slideMenu = document.querySelector(".slide-menu");
const closeMenuBtn = document.querySelector(".slide-menu__close-btn")

// Event Listeners

headMenuBtn.addEventListener("click", showMenu)

closeMenuBtn.addEventListener("click", closeMenu)


// Functions

function showMenu() {
    slideMenu.style.width = "100%";
}

function closeMenu() {
    slideMenu.style.width = "0";
}