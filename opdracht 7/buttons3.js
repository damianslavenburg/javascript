let buttonclickdict = {};
let buttonkleurendict = {"1": "red", "2": "purple", "3": "blue", "4": "black",};
let hoeveelkleuren = Object.keys(buttonkleurendict).length;
function hoeveel() {
  repeat = true;
  while (repeat == true) {
    let hoeveel = prompt("Hoeveel buttons wil je?");
    hoeveel = +hoeveel + +1;
    if (hoeveel >= 1 && hoeveel <= 31) {
      repeat = false;
      return hoeveel;
    } else {
      alert("Je moet minimaal 1 en maximaal 30 buttons maken");
      repeat = true;
    }
  }
}
hoeveelbuttons = hoeveel();
function buttonClick(buttonId) {
  buttonclickdict[buttonId] = buttonclickdict[buttonId] + 1 || 1;
  for (buttonId in buttonclickdict) {
    document.getElementById("button" + buttonId).style.backgroundColor = buttonkleurendict[buttonclickdict[buttonId]];
    if (buttonclickdict[buttonId] == hoeveelkleuren+1){
      document.getElementById("button" + buttonId).remove();
      delete(buttonclickdict[buttonId])
    }
  }
}

for (let i = 1; i < hoeveelbuttons; i++) {
  document.write('<button id="button' + i + '" onclick="buttonClick(' + i + ')">Button ' + i + "</button>");
}