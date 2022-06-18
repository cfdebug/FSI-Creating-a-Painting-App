let selectedColor = "blue";
const painting = document.querySelector(".painting");
const palette = document.querySelector(".palette");

painting.addEventListener("click", function(e) {
    e.target.style.backgroundColor = selectedColor;
});

painting.addEventListener("dblclick", function(e) {
    e.target.style.backgroundColor = "white";
});

palette.addEventListener("click", function(e) {
    selectedColor = e.target.id;
});