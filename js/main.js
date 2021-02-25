alert("Welcome to you new favorit break in the day\n it's time for\n             ROCK PAPER SCISSORS\n                                         enjoy");
var userName = prompt("Enter your best gamer Alias :");
var userChoice = prompt("So " + userName + ",\n Please chose between :\n rock or paper or scissors and write it down here.");
alert("You choosed : " + userChoice);

var pfcTab = [
    "rock",
    "paper",
    "scissors"
];

// Create a random value between index of the array between 0-3 here
var cmpChoice = Math.floor(Math.random() * pfcTab.length);
cmpChoice = pfcTab[cmpChoice];
alert("Take notice :\nYour nemesis (thit computer) choosed :\n" + cmpChoice);

// Time to confront both player

// first test equality
if (userChoice === cmpChoice) {
    alert("Oh no !!!!\nIt's a draw game.\nUnsatisfying ending")
}else if(userChoice === "rock" && cmpChoice === "scissors" || userChoice === "paper" && cmpChoice === "rock" || userChoice === "scissors" && cmpChoice === "paper") { // test every win solutions
    alert("All right " + userName + " !!!\nYou won !");
}else {alert("Outch " + userName + ", you loose.\nBad luck this time.");} // rest the lost solutions

alert("End of the game.");