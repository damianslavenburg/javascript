let aantal = prompt("Welk cijfer wil je voor je cijferruit?");
let numberstr = "";
let numberstr2 = "";
for (let i = 1; i <= aantal; i++) {
  let number = i;
  numberstr += number;
  document.getElementById("antwoord").innerText += numberstr + "\n";
  if (i == aantal) {
    numberstr += "";
  } else {
    numberstr += "-";
  }
}
numberstr2 = numberstr;
for (let i = aantal; i >= 1; i--) {
  numberstr2 = numberstr2.replace(i, "");
  numberstr3 = reverseString(numberstr2);
  numberstr2 = numberstr3.replace("-", "");
  numberstr2 = reverseString(numberstr2);
  document.getElementById("antwoord").innerText += numberstr2 + "\n";
}

function reverseString(str) {
  return str.split("").reverse().join("");
}