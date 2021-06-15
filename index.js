var player1 = Math.floor(Math.random() * 6) + 1;
var player2 = Math.floor(Math.random() * 6) + 1;

if (player1 === 1) {
  document.querySelector(".dice .img1").setAttribute("src", "dice1.png");
}

else if (player1 === 2) {
  document.querySelector(".dice .img1").setAttribute("src", "dice2.png");
}


else if (player1 === 3) {
  document.querySelector(".dice .img1").setAttribute("src", "dice3.png");
}


else if (player1 === 4) {
  document.querySelector(".dice .img1").setAttribute("src", "dice4.png");
}


else if (player1 === 5) {
  document.querySelector(".dice .img1").setAttribute("src", "dice5.png");
}


else if (player1 === 6) {
  document.querySelector(".dice .img1").setAttribute("src", "dice6.png");
}

if (player2 === 1) {
  document.querySelector(".dice .img2").setAttribute("src", "dice1.png");
}

else if (player2 === 2) {
  document.querySelector(".dice .img2").setAttribute("src", "dice2.png");
}


else if (player2 === 3) {
  document.querySelector(".dice .img2").setAttribute("src", "dice3.png");
}


else if (player2 === 4) {
  document.querySelector(".dice .img2").setAttribute("src", "dice4.png");
}


else if (player2 === 5) {
  document.querySelector(".dice .img2").setAttribute("src", "dice5.png");
}


else if (player2 === 6) {
  document.querySelector(".dice .img2").setAttribute("src", "dice6.png");
}


if (player1 > player2) {
  document.querySelector(".container h1").innerHTML = "Player 1 Wins!";
}

else if (player2 > player1) {
  document.querySelector(".container h1").innerHTML = "Player 2 Wins!";
}

else if (player1 === player2) {
  document.querySelector(".container h1").innerHTML = "Its a draw!";
}
