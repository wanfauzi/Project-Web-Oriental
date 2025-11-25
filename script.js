feather.replace();

// Hamburger Menu
const hamburger = document.getElementById("hamburger-menu");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", function (e) {
  e.preventDefault();
  navMenu.classList.toggle("active");
});

// Close menu when clicking outside
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove("active");
  }
});

// Close menu when clicking a link
const navLinks = document.querySelectorAll(".navbar-menu a");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navMenu.classList.remove("active");
  });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
