const bladScale1 = 1;
const bladScale2 = 1.3;


function changeOpacity(elementId, newOpacity) {
  var element = document.getElementById(elementId);
  if (element) {
    element.style.transition = "opacity 0.5s ease"; // Add a smooth transition effect
    element.style.opacity = newOpacity;
  } else {
    console.error("Element with id '" + elementId + "' not found.");
  }
}

function changeScale(element, newScale) {
  if (element) {
    element.style.transition = "0.3s ease"; // Add a smooth transition effect
    element.style.scale = newScale;
  } else {
    console.error("Element with id '" + elementId + "' not found.");
  }
}

function changeScaleAndOpacit(element, newScale, element2, newOpacity) {
  if (element && element2) {
    element.style.transition = "0.3s ease"; // Add a smooth transition effect
    element.style.scale = newScale;
    element2.style.transition = "0.3s ease"; // Add a smooth transition effect
    element2.style.opacity = newOpacity;
  } else {
    console.error("Element with id '" + elementId + "' not found.");
  }
}

let bladn1 = document.getElementById("bladn1");
let bladn2 = document.getElementById("bladn2");
let bladn3 = document.getElementById("bladn3");
let bladn4 = document.getElementById("bladn4");
let bladn5 = document.getElementById("bladn5");

let blad = document.getElementsByClassName("blad");

let blommTextn1 = document.getElementById("blommTextn1");
let blommTextn2 = document.getElementById("blommTextn2");
let blommTextn3 = document.getElementById("blommTextn3");
let blommTextn4 = document.getElementById("blommTextn4");
let blommTextn5 = document.getElementById("blommTextn5");

let blommText = document.getElementsByClassName("blommText");

bladn1.addEventListener("mouseover", function(e) { changeScaleAndOpacit(bladn1, bladScale2, blommTextn1 , 1); });
bladn2.addEventListener("mouseover", function(e) { changeScaleAndOpacit(bladn2, bladScale2, blommTextn2 , 1); });
bladn3.addEventListener("mouseover", function(e) { changeScaleAndOpacit(bladn3, bladScale2, blommTextn3 , 1); });
bladn4.addEventListener("mouseover", function(e) { changeScaleAndOpacit(bladn4, bladScale2, blommTextn4 , 1); });
bladn5.addEventListener("mouseover", function(e) { changeScaleAndOpacit(bladn5, bladScale2, blommTextn5 , 1); });

bladn1.addEventListener("mouseout", function(e) { changeScaleAndOpacit(bladn1, bladScale1, blommTextn1 , 0); });
bladn2.addEventListener("mouseout", function(e) { changeScaleAndOpacit(bladn2, bladScale1, blommTextn2 , 0); });
bladn3.addEventListener("mouseout", function(e) { changeScaleAndOpacit(bladn3, bladScale1, blommTextn3 , 0); });
bladn4.addEventListener("mouseout", function(e) { changeScaleAndOpacit(bladn4, bladScale1, blommTextn4 , 0); });
bladn5.addEventListener("mouseout", function(e) { changeScaleAndOpacit(bladn5, bladScale1, blommTextn5 , 0); });

function updateChildFontSize() {
  let parentHeight = document.getElementById('bladn1').offsetHeight;
  let childFontSize = parentHeight * 0.12; /* 20% of the parent's height */
  document.getElementById('blommTextn1').style.fontSize = childFontSize + 'px';
  document.getElementById('blommTextn2').style.fontSize = childFontSize + 'px';
  document.getElementById('blommTextn3').style.fontSize = childFontSize + 'px';
  document.getElementById('blommTextn4').style.fontSize = childFontSize + 'px';
  document.getElementById('blommTextn5').style.fontSize = childFontSize + 'px';
}

// Update the font size initially and on window resize
window.addEventListener('resize', updateChildFontSize);
document.addEventListener('load', updateChildFontSize);

bladn1.addEventListener("mouseover", updateChildFontSize);
bladn2.addEventListener("mouseover", updateChildFontSize);
bladn3.addEventListener("mouseover", updateChildFontSize);
bladn4.addEventListener("mouseover", updateChildFontSize);
bladn5.addEventListener("mouseover", updateChildFontSize);

bladn1.addEventListener("mouseout", updateChildFontSize);
bladn2.addEventListener("mouseout", updateChildFontSize);
bladn3.addEventListener("mouseout", updateChildFontSize);
bladn4.addEventListener("mouseout", updateChildFontSize);
bladn5.addEventListener("mouseout", updateChildFontSize);