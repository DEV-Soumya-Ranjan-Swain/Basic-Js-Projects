var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomdiceimg1 = "dice" + randomNumber1 + ".png";
var randomdicesource1 = "images/" + randomdiceimg1;
document.querySelector(".img1").setAttribute("src", randomdicesource1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomdiceimg2 = "dice" + randomNumber2 + ".png";
var randomdicesource2 = "images/" + randomdiceimg2;
document.querySelector(".img2").setAttribute("src", randomdicesource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins🚩";
}
else {
    document.querySelector("h1").innerHTML = "it's a tie";
}