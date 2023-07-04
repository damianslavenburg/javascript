let image = document.getElementById("image");

document.onkeydown = checkKey;
image.style.transform = "rotate(90deg)"
let toRight = 10;
let backgroundposvar = 164;
let toDown = 10;

function checkKey(e) {
    console.log("key nr = " + e.keyCode);
    e = e || window.event;
    if (e.keyCode == 32) {
        console.log("spacebar");
    } else if (e.keyCode == '38') {  // up arrow
        console.log("Up arrow");
        image.style.transform = "rotate(0deg)"
        image.style.marginTop = '' + toDown + "px";
        toDown -= 10;
        image.style.backgroundPosition = backgroundposvar + "px 0px"; // check goed de rupsband
        backgroundposvar -= 168;
    } else if (e.keyCode == '40') { // down arrow
        console.log("down arrow");
        image.style.transform = "rotate(180deg)"
        image.style.marginTop = '' + toDown + "px";
        toDown += 10;
        image.style.backgroundPosition = backgroundposvar + "px 0px"; // check goed de rupsband
        backgroundposvar += 168;
    } else if (e.keyCode == '37') { // left arrow
        console.log("left arrow");
        image.style.transform = "rotate(-90deg)"
        image.style.marginLeft = '' + toRight + "px";
        toRight -= 10;
        image.style.backgroundPosition = backgroundposvar + "px 0px"; // check goed de rupsband
        backgroundposvar -= 168;

    } else if (e.keyCode == '39') {   // right arrow
        console.log("right arrow");
        image.style.transform = "rotate(90deg)"
        image.style.marginLeft = '' + toRight + "px";
        toRight += 10;
        image.style.backgroundPosition = backgroundposvar + "px 0px"; // check goed de rupsband
        backgroundposvar += 168;
    }
}