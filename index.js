let selectedColor = "blue";
const painting = document.querySelector(".painting");
const palette = document.querySelector(".palette");
const clear = document.querySelector(".clear-color");

//Apply color to pixels when clicked
painting.addEventListener("click", function(e) {
    console.log(e.target);
    e.target.style.backgroundColor = selectedColor;
});

//Turn Pixel White on Double Click
painting.addEventListener("dblclick", function(e) {
    e.target.style.backgroundColor = "white";
});

//Select a color
palette.addEventListener("click", function(e) {
    selectedColor = e.target.id;
});

//Clear all pixels/return to a white color
clear.addEventListener("click", function() {
    let pixels = document.querySelectorAll(".pixel");
    for(x=0; x<pixels.length; x++){
        pixels[x].style.backgroundColor = "white";
    }
});