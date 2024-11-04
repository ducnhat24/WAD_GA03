function showNav() {
    const navBar = document.querySelector(".header__sidebar");
    navBar.style.transform = "translateX(0)";
    navBar.style.opacity = "1";
    const navBtn = document.querySelector(".header__btn__nav");
    navBtn.style.opacity = "0.3";
}

function hideNav() {
    const navBar = document.querySelector(".header__sidebar");
    navBar.style.transform = "translateX(100%)";
    navBar.style.opacity = "0";
    const navBtn = document.querySelector(".header__btn__nav");
    navBtn.style.opacity = "1";
}