// SALE TIME
let saleTame = new Date(`April 01 2023 00:00:00`);

const countDown = document.querySelectorAll(
    ".top_header_preview_time_element h2"
);
console.log(countDown);
const preloader = document.querySelectorAll(".lds-ripple");

function updateCounter() {
    let nowDate = new Date();
    const diff = saleTame - nowDate;
        
    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
    const secondsLeft = Math.floor(diff / 1000) % 60;

    const days = document.querySelector("#days");
    const hours = document.querySelector("#hours");
    const minutes = document.querySelector("#minutes");
    const seconds = document.querySelector("#seconds");

    if (secondsLeft > 0) {
        days.innerText = daysLeft;
        hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
        minutes.innerText = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
        seconds.innerText = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
    }
}
setInterval(updateCounter, 1000);

setTimeout(() => {
    preloader.forEach((el) => el.remove());
    countDown.forEach((el) => (el.style.visibility = "visible"));
}, 1000);
// SALE TIME

// menu_button
const menu_btn = document.querySelector(".header_menu_btn_container_button");
const menu_btn_cont = document.querySelector(".header_menu_btn_container");
const nav_menu = document.querySelector(".top_header_menu_nav");
const link_menu_btn = document.querySelector(".top_header_goToProfile_btn");

menu_btn.addEventListener("click", () => {
    menu_btn_cont.classList.toggle("active_btn");
    nav_menu.classList.toggle("active");
    link_menu_btn.classList.toggle("active");
})
