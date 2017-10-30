var weapons = ['rock', 'paper', 'scissors'];

var player1Weapon, player2Weapon;
var player1Wins = 0, player2Wins = 0;

while (player1Wins < 3 && player2Wins < 3) {

  player1Weapon = weapons[parseInt(Math.random()*weapons.length)%3];
  //player2Weapon = prompt("Player 2?");
  player2Weapon = weapons[parseInt(Math.random()*weapons.length)%3];

  console.log(player1Weapon);
  console.log(player2Weapon);

  if (player1Weapon == 'rock' && player2Weapon == 'paper') {
    player2Wins++;
  } else if (player1Weapon == 'rock' && player2Weapon == 'scissors') {
    player1Wins++;
  } else if (player1Weapon == 'paper' && player2Weapon == 'rock') {
    player1Wins++;
  } else if (player1Weapon == 'paper' && player2Weapon == 'scissors') {
    player2Wins++;
  } else if (player1Weapon == 'scissors' && player2Weapon == 'rock') {
    player2Wins++;
  } else if (player1Weapon == 'scissors' && player2Weapon == 'paper') {
    player1Wins++;
  }
}


console.log((player1Wins >= 3 ? 'Player 1' : 'Player 2') + ' wins!')
