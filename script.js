const myBtn = document.querySelector("#myBtn");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const scoreText = document.querySelector("#scoreText");

myBtn.addEventListener("click", rollDice);

function rollDice() {

let dice1 = Math.floor((Math.random() * 6) + 1);
let dice2 = Math.floor((Math.random() * 6) + 1);

if (dice1 === 1) {
    player1.setAttribute("src", "./images/dice1.png");
}
if (dice2 === 1) {
    player2.setAttribute("src", "./images/dice1.png");
}
if (dice1 === 2) {
    player1.setAttribute("src", "./images/dice2.png");
}
if (dice2 === 2) {
    player2.setAttribute("src", "./images/dice2.png");
}
if (dice1 === 3) {
    player1.setAttribute("src", "./images/dice3.png");
}
if (dice2 === 3) {
    player2.setAttribute("src", "./images/dice3.png");
}
if (dice1 === 4) {
    player1.setAttribute("src", "./images/dice4.png");
}
if (dice2 === 4) {
    player2.setAttribute("src", "./images/dice4.png");
}
if (dice1 === 5) {
    player1.setAttribute("src", "./images/dice5.png");
}
if (dice2 === 5) {
    player2.setAttribute("src", "./images/dice5.png");
}
if (dice1 === 6) {
    player1.setAttribute("src", "./images/dice6.png");
}
if (dice2 === 6) {
    player2.setAttribute("src", "./images/dice6.png");
}
if (dice1 > dice2) {
    scoreText.innerText = "Player 1 wins!";
} else if (dice2 > dice1) {
    scoreText.innerText = "Player 2 wins!";
} else if (dice1 === dice2) {
    scoreText.innerText = "Draw!";
}
}