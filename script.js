// Toogle class active pada navbar saat di scroll
const navbarMenu =document.querySelector(".navbar-menu");
//Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
    navbarMenu.classList.toggle("active");
};

//Klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navbarMenu.contains(e.target)) {
        navbarMenu.classList.remove("active");
    }
});