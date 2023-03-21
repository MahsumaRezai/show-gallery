
let image = new Array("./imag/image_one.jpg", "./imag/image_two.jpg", "./imag/image_four.jpg", "./imag/three.jpeg", "./imag/image_four.jpg");
let i = 0;
let time;
function show() {
    if (i > 4) {
        i = 0;
    }
    document.getElementById("slider").innerHTML = "<img src = '" + image[i] + "'>";
    i++;
    time = window.setTimeout(show, 2000)

}
function puse() {
    window.clearTimeout(time)
}
function start() {
    show();
}


