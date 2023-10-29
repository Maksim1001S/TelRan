const menu_icon = document.querySelector(".header_menu_nav_show_Btn");
const nav_menu = document.querySelector(".header_menu_nav");

menu_icon.addEventListener("click", () => {
    nav_menu.classList.toggle("active");
});
