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
alert(cmpChoice);