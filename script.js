let dice1 = Math.floor((Math.random() * 6) + 1);
let dice2 = Math.floor((Math.random() * 6) + 1);

if (dice1 === 1) {
    document.querySelector("#player1").setAttribute("src", "./images/dice1.png");
}
if (dice2 === 1) {
    document.querySelector("#player2").setAttribute("src", "./images/dice1.png");
}
if (dice1 === 2) {
    document.querySelector("#player1").setAttribute("src", "./images/dice2.png");
}
if (dice2 === 2) {
    document.querySelector("#player2").setAttribute("src", "./images/dice2.png");
}
if (dice1 === 3) {
    document.querySelector("#player1").setAttribute("src", "./images/dice3.png");
}
if (dice2 === 3) {
    document.querySelector("#player2").setAttribute("src", "./images/dice3.png");
}
if (dice1 === 4) {
    document.querySelector("#player1").setAttribute("src", "./images/dice4.png");
}
if (dice2 === 4) {
    document.querySelector("#player2").setAttribute("src", "./images/dice4.png");
}
if (dice1 === 5) {
    document.querySelector("#player1").setAttribute("src", "./images/dice5.png");
}
if (dice2 === 5) {
    document.querySelector("#player2").setAttribute("src", "./images/dice5.png");
}
if (dice1 === 6) {
    document.querySelector("#player1").setAttribute("src", "./images/dice6.png");
}
if (dice2 === 6) {
    document.querySelector("#player2").setAttribute("src", "./images/dice6.png");
}