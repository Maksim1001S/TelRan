const menu_icon = document.querySelector(".menu_icon");
const nav_menu = document.querySelector(".nav_menu");

menu_icon.addEventListener("click", () => {
    nav_menu.classList.toggle("active");
});

const account_form_btn = document.querySelectorAll(".nav_menu li");
const popup = document.querySelector(".popup");
const popup_close_btn = document.querySelector(".cross_icon");

account_form_btn[3].addEventListener("click", () => {
    popup.classList.add("open");
});
popup_close_btn.addEventListener("click", () => {
    popup.classList.remove("open");
});
