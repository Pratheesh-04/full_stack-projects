//for dice 1
var random = Math.random();
random = random * 6;
random = Math.floor(random) + 1;

var randomDice1 = "./images/" + "dice" + random + ".png";
document.querySelector(".img1").setAttribute("src", randomDice1);

//for dice 2
var random2 = Math.random();
random2 = random2 * 6;
random2 = Math.floor(random2) + 1;

var randomDice2 = "./images/" + "dice" + random2 + ".png";
document.querySelector(".img2").setAttribute("src", randomDice2);

//winning condition
if (random > random2) {
    document.querySelector("h1").textContent = "Player1 Wins!";
}
else if (random2 > random){
    document.querySelector("h1").textContent = "Player2 Wins!";
}
else {
    document.querySelector("h1").textContent = "Draw!"
}