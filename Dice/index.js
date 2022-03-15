var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Generating a random number 1-6
var randomImageSource = "images/dice" + randomNumber1 + ".png"; //Creating a string to change the attribute
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource); //Changing the attribute to randomly select an image 1-6


var randomNumber2 = Math.floor(Math.random()*6+1); //Generating a random number 1-6
var randomImageSorce2 = "images/dice" + randomNumber2 + ".png"; //Creating a string to change the attribute
document.querySelectorAll("img")[1].setAttribute("src", randomImageSorce2); //Changing the attribute to randomly select an image 1-6

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = " 🚩 Player 1. Wins!" // Match P1 wins
} else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2. Wins!  🚩" // Match P2 wins
} else {
  document.querySelector("h1").innerHTML = "Draw!" // Match P1 DRAW
}
