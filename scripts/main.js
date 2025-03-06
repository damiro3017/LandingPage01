const navbar = document.querySelector(".navbar__header");
const openMenu = document.querySelector(".open__menu");
const closeMenu = document.querySelector(".close__menu");

openMenu.addEventListener("click", () => {
  navbar.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  navbar.classList.remove("active");
});
