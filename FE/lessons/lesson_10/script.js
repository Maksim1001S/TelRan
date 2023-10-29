// 1
// const change_btn = document.querySelector(".change_btn");
// let varEl = 50;
// change_btn.style.width = varEl +"px";
// change_btn.style.width = varEl +"px";
// change_btn.addEventListener("click", () => {
//     varEl += 5;
//     change_btn.style.width = `${varEl + 5}px`;
//     change_btn.style.height = `${varEl + 5}px`;
// })

//2
const create_par_btn = document.querySelector(".create_par_btn");
const container = document.querySelector(".container");
const text_input = document.querySelector(".text_input");
create_par_btn.addEventListener("click", () => {
    const par = document.createElement("p");
    par.innerText = `Hello, ${text_input.value}`
    container.append(par);
    text_input.value = "";
})