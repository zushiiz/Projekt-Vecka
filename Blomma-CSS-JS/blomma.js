const bladScale1 = 1;
const bladScale2 = 1.3;

function changeScaleAndOpacit2(element, newScale, element2, op1, element3, op2, ZIndex) {
  if (element) {
    element.style.transition = "0.3s ease"; // Add a smooth transition effect
    element.style.scale = newScale;
    element.style.zIndex = ZIndex;
    element2.style.transition = "0.3s ease";
    element3.style.transition = "0.3s ease";
    element2.style.opacity = op1;
    element3.style.opacity = op2;
  } else {
    console.error("Element with id '" + element + "' not found.");
  }
}

let bladn1 = document.getElementById("bladn1");
let bladn2 = document.getElementById("bladn2");
let bladn3 = document.getElementById("bladn3");
let bladn4 = document.getElementById("bladn4");
let bladn5 = document.getElementById("bladn5");

let blad = document.getElementsByClassName("blad");

let blommTextn2 = document.getElementById("blommTextn2");
let blommTextn3 = document.getElementById("blommTextn3");
let blommTextn4 = document.getElementById("blommTextn4");
let blommTextn5 = document.getElementById("blommTextn5");

let blommbildn1 = document.getElementById("blommbildn1");
let blommbildn1n2 = document.getElementById("blommbildn1n2");
let blommbildn2 = document.getElementById("blommbildn2");
let blommbildn2n2 = document.getElementById("blommbildn2n2");
let blommbildn3 = document.getElementById("blommbildn3");
let blommbildn3n2 = document.getElementById("blommbildn3n2");
let blommbildn4 = document.getElementById("blommbildn4");
let blommbildn4n2 = document.getElementById("blommbildn4n2");
let blommbildn5 = document.getElementById("blommbildn5");
let blommbildn5n2 = document.getElementById("blommbildn5n2");

let blommasmitt = document.getElementById("blommasmitt");

let blommbilder1 = document.getElementsByClassName("blommbilder1");
let blommbilder2 = document.getElementsByClassName("blommbilder2");

blommasmitt.addEventListener("mouseover", function(e) {  
  for (var i = 0; i < blommbilder1.length; i++) {
    blommbilder1[i].style.transition = "0.5s";
    blommbilder1[i].style.opacity = 0;
  }

  for (var i = 0; i < blommbilder2.length; i++) {
    blommbilder2[i].style.transition = "0.5s";
    blommbilder2[i].style.opacity = 1;
  }
});

blommasmitt.addEventListener("mouseout", function(e) {  
  for (var i = 0; i < blommbilder1.length; i++) {
    blommbilder1[i].style.transition = "0.5s";
    blommbilder1[i].style.opacity = 1;
  }

  for (var i = 0; i < blommbilder2.length; i++) {
    blommbilder2[i].style.transition = "0.5s";
    blommbilder2[i].style.opacity = 0;
  }
});

bladn1.addEventListener("mouseover", function(e) { changeScaleAndOpacit2(bladn1, bladScale2, blommbildn1, 0, blommbildn1n2, 1, 3); });
bladn2.addEventListener("mouseover", function(e) { changeScaleAndOpacit2(bladn2, bladScale2, blommbildn2, 0, blommbildn2n2, 1, 3); });
bladn3.addEventListener("mouseover", function(e) { changeScaleAndOpacit2(bladn3, bladScale2, blommbildn3, 0, blommbildn3n2, 1, 3); });
bladn4.addEventListener("mouseover", function(e) { changeScaleAndOpacit2(bladn4, bladScale2, blommbildn4, 0, blommbildn4n2, 1, 3); });
bladn5.addEventListener("mouseover", function(e) { changeScaleAndOpacit2(bladn5, bladScale2, blommbildn5, 0, blommbildn5n2, 1, 3); });

bladn1.addEventListener("mouseout", function(e) { changeScaleAndOpacit2(bladn1, bladScale1, blommbildn1, 1, blommbildn1n2, 0, 1); });
bladn2.addEventListener("mouseout", function(e) { changeScaleAndOpacit2(bladn2, bladScale1, blommbildn2, 1, blommbildn2n2, 0, 1); });
bladn3.addEventListener("mouseout", function(e) { changeScaleAndOpacit2(bladn3, bladScale1, blommbildn3, 1, blommbildn3n2, 0, 1); });
bladn4.addEventListener("mouseout", function(e) { changeScaleAndOpacit2(bladn4, bladScale1, blommbildn4, 1, blommbildn4n2, 0, 1); });
bladn5.addEventListener("mouseout", function(e) { changeScaleAndOpacit2(bladn5, bladScale1, blommbildn5, 1, blommbildn5n2, 0, 1); });
