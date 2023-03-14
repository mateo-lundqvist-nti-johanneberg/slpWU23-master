let button = document.querySelector(".menu-button");
let menu = document.querySelector(".menuthing");

function openMenu(){
    menu.classList.toggle("showMenu");
    console.log(menu.className);
}

function colorWhite(){
    button.classList.toggle("white");
}

button.addEventListener("click", colorWhite)
button.addEventListener("click", openMenu)