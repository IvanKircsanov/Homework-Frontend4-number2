const input = document.querySelector(".slider__input");
const image = document.querySelector(".slider__image");
const box = document.querySelector("#box");

input.addEventListener("input", _.debounce(() => {
    image.style.width = input.value + "%";
}, 100));

document.addEventListener("mousemove", _.debounce((event) => {
    box.style.left = event.clientX + "px";
    box.style.top = event.clientY + "px";
}, 100));