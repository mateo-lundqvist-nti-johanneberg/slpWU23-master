let button = document.querySelector(".menu-button");
let menu = document.querySelector(".menuthing");
let menu2 = document.querySelector(".menuthing2");

function openMenu(){
    menu.classList.toggle("showMenu");
    menu2.classList.toggle("showMenu2");
    console.log(menu.className);
}

function colorWhite(){
    button.classList.toggle("white");
}

button.addEventListener("click", colorWhite)
button.addEventListener("click", openMenu)