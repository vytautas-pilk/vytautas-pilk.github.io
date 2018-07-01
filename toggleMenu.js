function toggleMenu() {
  const nav = document.querySelector(".header-nav");
  nav.classList.toggle("responsive-nav");
}

const button = document.querySelector(".toggle-btn");

button.addEventListener("click", toggleMenu);
