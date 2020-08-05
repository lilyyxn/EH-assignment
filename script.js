
const box = document.querySelector("#box");
const color = document.querySelector("#color");
const size = document.querySelector("#size");

color.addEventListener("input", changeColor);
size.addEventListener("input", changeSize);

function changeColor() {
    box.style.backgroundColor = color.value;
}

function changeSize() {
    // note that the size is responsive/relative to the screen size & mobile friendly :)
    box.style.height = size.value + "vw"; //e.g. 10vw
    box.style.width = size.value + "vw";
}


