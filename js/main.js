function welcome() {
    alert("Welcome to you new favorit break in the day\n it's time for\n             ROCK PAPER SCISSORS\n                                         enjoy");
}

function userInformations(){
    do {userChoice = prompt("So " + userName + ",\n Please chose between :\n rock or paper or scissors and write it down here.");
        userChoice = userChoice.toLowerCase();
        if (userChoice !== pfcTab[0] && userChoice !== pfcTab[1] && userChoice !== pfcTab[2]) {
            alert("Bad entry " + userName + " !!!\nPlease be sure to type :\n                   rock or paper or scissors");
        }
} while (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors");
    return "You choosed :\n" + userChoice;
}

function cmpTurn(){
    // Create a random value between index of the array between 0-3 here
    cmpChoice = Math.floor(Math.random() * pfcTab.length);
    cmpChoice = pfcTab[cmpChoice];
    return "Take notice :\nYour nemesis (thit computer) choosed :\n" + cmpChoice;
}

function result(userR, cmpR) {
    // first test equality
    if (userR === cmpR) {
        userScore +=1;
        cmpScore +=1;
    }else if(userR === "rock" && cmpR === "scissors" || userR === "paper" && cmpR === "rock" || userR === "scissors" && cmpR === "paper") { // test every win solutions
        return userScore += 1;
    }else {return cmpScore += 1;} // rest the lost solutions
}

function scoreFinal(userS, cmpS) {
    
    if (userS === nbTurn && cmpS === nbTurn) {
        return "No way !\nIt's a dredfull draw game !!!";
    }else if (userS === nbTurn) {
        return "All right " + userName + " !!!\nYou won da game !";
    }else if (cmpS === nbTurn) {
        return "Outch " + userName + ", you lost the game.\nBad luck this time.";
    }else {return false;}
}

var userName = "";
var userChoice = "";
var cmpChoice;
var nbTurn = 3;
var userScore = 0;
var cmpScore = 0;
var pfcTab = [
    "rock",
    "paper",
    "scissors"
];
var verif = false;
var restart = true;

welcome();
    
// ask player name till doesnt fit betwin 2 and 20 char
do {userName = prompt("Enter your best gamer Alias :\n-between 2 and 20 character max-");
    if (userName.length < 2 || userName.length > 20) {alert("No way !!!\nPlease be kind, only loosers try to cheat :\nEnter your true WINNER Alias :\n-between 2 and 20 character max-");}
} while (userName.length < 2 || userName.length > 20);

// Restart the game loop

while (restart !== "false") {
    // New game, reset parameters
    userScore = 0;
    cmpScore = 0;
    verif = false;

    // loop till nbTurn not reached

    while (verif === false) {
        alert(userInformations());
        alert(cmpTurn());
        // Time to confront both player
        result(userChoice, cmpChoice);
        alert("Score is :\n" + userName + " = " + userScore + "\nNemesis = " + cmpScore);
        verif = scoreFinal(userScore, cmpScore);
    }

    alert(scoreFinal(userScore, cmpScore))
    alert("End of the game.");
    restart = prompt("Again ?\nAm I right to say you want to play again ?\nType : true or false"); // not working
}
alert("Goodby !!!");