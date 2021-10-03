const hamburgerMenu = document.querySelector(".nav-menu");
const mobileNav = document.querySelector(".mobile-nav");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  mobileNav.classList.toggle("open");
});
