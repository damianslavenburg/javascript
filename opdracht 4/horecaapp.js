//Variabelen
let bestellijst = ["fris", "bier", "wijn", "snack"];
let repeat = true;
let bestellingsdict = {};
let bestellingdict = {};
let aantalbestellingvar = 0;
let snackofgeensnack = false;
const BITTERBALPRIJS = 6.0;
const BIERPRIJS = 2.5;
const FRISPRIJS = 1.5;
const WIJNPRIJS = 5.0;
//Flow
welkom();
while (repeat == true) {
  let bestellingvar = bestelling();
  let bestellingcontrolevar = bestellingscontrole(bestellingvar);
  if (bestellingcontrolevar.includes(true) == true) {
    repeat = false;
    if (bestellingcontrolevar.includes("snack") == true) {
      snackofgeensnack = true;
    }
    aantalbestellingvar = aantalbestelling(bestellingvar, snackofgeensnack);
    bestellingsdict = bestellingen(
      bestellingvar,
      aantalbestellingvar,
      snackofgeensnack
    );
  } else {
    alert("U kunt alleen fris, bier, snack of wijn bestellen.");
    repeat = true;
  }
  if (meerbestellen() == true) {
    repeat = true;
    snackofgeensnack = false;
  } else {
    repeat = false;
  }
}
bonnetje(bestellingsdict, snackofgeensnack);

//Functions
function welkom() {
  alert("Welkom bij de Horeca App");
}
function bestelling() {
  let bestelling = prompt("Wat wilt u bestellen?" + bestellijst).toLowerCase();
  return bestelling;
}
function bestellingscontrole(bestelling) {
  controlelist = [];
  if (bestellijst.includes(bestelling) == true) {
    controlelist.push(true);
    if (bestelling == "snack") {
      controlelist.push("snack");
    }
    return controlelist;
  } else {
    controlelist.push(false);
    return controlelist;
  }
}

function aantalbestelling(bestelling, snackofgeensnack) {
  let aantalmandjes = 0;
  let aantallist = [];
  let repeat = true;
  let aantal = 0;
  while (repeat == true) {
    if (snackofgeensnack == false) {
      aantal = prompt("Hoeveel " + bestelling + " wilt u bestellen?");
      if (aantal >= 1) {
        repeat = false;
        return aantal;
      } else {
        alert("U moet minimaal 1 bestellen");
        repeat = true;
      }
    } else {
      aantal = prompt("Wilt u 8 of 16 bitterballen?");
      if (aantal == 8) {
        repeat = false;
        aantallist.push(aantal);
        aantalmandjes = prompt(
          "Hoeveel mandjes van " + aantal + " Bitterballen wilt u?"
        );
        aantallist.push(aantalmandjes);
        return aantallist;
      } else if (aantal == 16) {
        repeat = false;
        aantallist.push(aantal);
        aantalmandjes = prompt(
          "Hoeveel mandjes van " + aantal + " Bitterballen wilt u?"
        );
        aantallist.push(aantalmandjes);
        return aantallist;
      } else {
        alert(
          "U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling."
        );
        repeat = true;
      }
    }
  }
}

function bestellingen(bestelling, aantal, snackofgeensnack) {
  if (snackofgeensnack == false) {
    if (bestelling in bestellingdict) {
      let aantalbegin = bestellingdict[bestelling];
      let aantaltotaal = +aantalbegin + +aantal;
      bestellingdict[bestelling] = aantaltotaal;
    } else {
      bestellingdict[bestelling] = aantal;
    }
    return bestellingdict;
  } else {
    if ("bitterballen" + aantal[1] in bestellingdict) {
      let aantalbegin = bestellingdict["bitterballen"];
      let aantaltotaal = +aantalbegin + +aantal[1];
      bestellingdict["bitterballen" + aantal[0]] = aantaltotaal;
    } else {
      bestellingdict["bitterballen" + aantal[0]] = aantal[1];
    }
    return bestellingdict;
  }
}

function meerbestellen() {
  let repeat = true;
  while (repeat == true) {
    let meerbestellen = prompt("Wilt u nog meer bestellen?").toLowerCase();
    if (meerbestellen == "ja") {
      repeat = false;
      return true;
    } else if (meerbestellen == "nee") {
      repeat = false;
      return false;
    } else {
      alert("U kunt alleen ja of nee invullen.");
      repeat = true;
    }
  }
}

function bonnetje(bestellingdict) {
  let totaalprijs = 0;
  bonnetjetext = "-=-=-=-=-=-=-=-=-=-=-=-Bonnetje-=-=-=-=-=-=-=-=-=-=-=-";
  document.getElementById("antwoord").innerText += bonnetjetext + "\n";
  for (let bestelling in bestellingdict) {
    let bonnetje = "";
    let aantal = bestellingdict[bestelling];
    let prijs = 0;
    if (bestelling == "fris") {
      prijstotaal = FRISPRIJS * aantal;
      prijs = FRISPRIJS;
    } else if (bestelling == "bier") {
      prijstotaal = BIERPRIJS * aantal;
      prijs = BIERPRIJS;
    } else if (bestelling == "wijn") {
      prijstotaal = WIJNPRIJS * aantal;
      prijs = WIJNPRIJS;
    } else if (bestelling == "bitterballen8") {
      prijstotaal = BITTERBALPRIJS * aantal;
      prijs = BITTERBALPRIJS;
    } else if (bestelling == "bitterballen16") {
      prijstotaal = BITTERBALPRIJS * aantal * 2;
      prijs = BITTERBALPRIJS * 2;
    }
    totaalprijs += prijstotaal;
    bonnetje +=
      bestelling + " " + aantal + " x " + prijs + " = €" + prijstotaal;
    document.getElementById("antwoord").innerText += bonnetje + "\n";
  }
  document.getElementById("antwoord").innerText +=
    "Totaalprijs: €" + totaalprijs + "\n";
  document.getElementById("antwoord").innerText += bonnetjetext + "\n";
}