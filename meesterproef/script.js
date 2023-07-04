var lijst = ["CDA", "VVD", "PVV", "PvDA","BBB"];
var container = document.getElementById("container");
var header = document.createElement("header");
var submit = document.createElement("button");
submit.id = "submit";
submit.textContent = "Submit";
submit.addEventListener("click", function() {
    var totaal = 0;
    for (var i = 0; i < count.length; i++) {
        totaal += count[i];
    }
    if (totaal === 0) {
        var error = document.createElement("h1");
        error.textContent = "U moet minimaal op 1 partij stemmen!";
        error.id = 'error';
        header.appendChild(error);
        document.getElementById('error').style.animation = 'shaketext 3s both';
        setTimeout(function() {
            document.getElementById('error').style.animation = 'none';
            error.remove();
        }, 3000);
        return;
    }
    else
    {
        document.getElementById("container").style = "flex-direction: column;"
    }
    var max = 0;
    var maxIndex = 0;
    for (var i = 0; i < count.length; i++) {
        if (count[i] > max) {
            max = count[i];
            maxIndex = i;
        }
    }

    var result = document.createElement("p");
    for (var i = 0; i < lijst.length; i++) {
        result.textContent += lijst[i] + ": " + count[i] + " ";
    }
    container.appendChild(result);

    if (count.filter(function(c) { return c === max; }).length > 1) {
        var winners = [];
        for (var i = 0; i < count.length; i++) {
            if (count[i] === max) {
                winners.push(lijst[i]);
            }
        }
        var winnerMessage = document.createElement("p");
        if (max === 1) {
            winnerMessage.textContent = "Gelijkspel tussen " + winners.join(", ") + " met " + max + " stem.";
        } else {
            winnerMessage.textContent = "Gelijkspel tussen " + winners.join(", ") + " met " + max + " stemmen.";
        }
        container.appendChild(winnerMessage);
    } else {
        var winnerMessage = document.createElement("p");
        if (max === 1) {
            winnerMessage.textContent = lijst[maxIndex] + " heeft gewonnen met " + max + " stem.";
        } else {
            winnerMessage.textContent = lijst[maxIndex] + " heeft gewonnen met " + max + " stemmen.";
        }
        container.appendChild(winnerMessage);
    }

    // Remove buttons
    var buttons = container.querySelectorAll("button");
    buttons.forEach(function(button) {
        button.remove();
    });
});

header.appendChild(container);
document.body.appendChild(header);

var count = [];
for (var i = 0; i < lijst.length; i++) {
  count.push(0);
}

for (var i = 0; i < lijst.length; i++) {
  var button = document.createElement("button");
  button.addEventListener("click", (function(i) {
    return function() {
      count[i]++;
    };
  })(i));
  var partij = document.createElement("p");
  partij.textContent = lijst[i] + " ";
  button.appendChild(partij);
  container.appendChild(button);
}

container.appendChild(submit)