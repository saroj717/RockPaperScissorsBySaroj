var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var userWin = document.getElementById('userWin');
var computerWin = document.getElementById('computerWin');
var tie = document.getElementById('tie');
var message = document.getElementById('message');
var winnerMessage = document.getElementById('winnerMessage');
var finalWinner = document.getElementById('finalWinner');

var options = ['rock', 'paper', 'scissors'];
var computerChoice = '';
var userChoice = '';
var computerScore = 0;
var userScore = 0;
var tieScore = 0;

// save options when we click button in userChoice and display using innerHTML
rock.addEventListener('click', function() {
  userChoice = "rock";
  play();
  message.innerHTML = `You chose Rock. Computer chose ${computerChoice}.`; 
})
paper.addEventListener('click', function() {
  userChoice = "paper";
  play();
  message.innerHTML = `You chose Paper. Computer chose ${computerChoice}.`; 
})
scissors.addEventListener('click', function() {
  userChoice = "scissors"
  play();
  message.innerHTML = `You chose scissors. Computer chose ${computerChoice}.`; 
})

//  Figure out computerChoice
// Game result and display it using innerHTML
function play() {
  if(computerScore === 0 && userScore === 0 && tieScore === 0) {
    finalWinner.innerHTML = "";
    winnerMessage.innerHTML = "";
    message.innerHTML = "";
    userWin.innerHTML = "User Win: ";
    computerWin.innerHTML ="Computer Win: ";
    tie.innerHTML = "Tie: ";
  }
  computerChoice = options[Math.floor(Math.random() * 3)];

  if (computerChoice === userChoice) {
    winnerMessage.innerHTML = "It's tie.";
    tieScore += 1;
    tie.innerHTML = `Tie: ${tieScore}`
  } else if (computerChoice === "rock" && userChoice === "paper") {
    winnerMessage.innerHTML = "User win.";
    userScore += 1;
    userWin.innerHTML = `User Win: ${userScore}`
  } else if (computerChoice === "paper" && userChoice === "scissors") {
    winnerMessage.innerHTML = "User win";
    userScore += 1;
    userWin.innerHTML = `User Win: ${userScore}`
  } else if (computerChoice === "scissors" && userChoice === "rock") {
    winnerMessage.innerHTML = "User win";
    userScore += 1;
    userWin.innerHTML = `User Win: ${userScore}`
  } else if (userChoice === "rock" && computerChoice === "paper") {
    winnerMessage.innerHTML = "Computer win";
    computerScore += 1;
    computerWin.innerHTML = `Computer Win: ${computerScore}`
  } else if (userChoice === "paper" && computerChoice === "scissors"){
    winnerMessage.innerHTML = "Computer win";
    computerScore += 1;
    computerWin.innerHTML = `Computer Win: ${computerScore}`
  } else if(userChoice === "scissors" && computerChoice === "rock") {
    winnerMessage.innerHTML = "Computer win";
    computerScore += 1;
    computerWin.innerHTML = `Computer Win: ${computerScore}`
  } else {
    winnerMessage.innerHTML = "Oops something went wrong!"
  }

  if (computerScore === 2) {
    finalWinner.innerHTML = "Computer is the FINAL WINNER!";
    userScore = 0;
    computerScore = 0;
    tieScore = 0;
  } else if ( userScore === 2){
    finalWinner.innerHTML = "User is the FINAL WINNER!";
    userScore = 0;
    computerScore = 0;
    tieScore = 0;
  }
  
}
