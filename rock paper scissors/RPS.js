const choices = ["🗿", "🧾", "✂️"];

const myText = document.getElementById("displayPlayer");
const oppText = document.getElementById("displayComputer");
const winText = document.getElementById("displayWinner");
const myCounter = document.getElementById("myWinCounter");
const oppCounter = document.getElementById("computerWinCounter");
const winnerBox = document.getElementById("displayWinner");

let myWins = 0;
let oppWins = 0;

function playGame(choice){
    let myChoice = choice;
    let oppChoice = Math.floor(Math.random() * 3);

    myText.textContent = `Your Choice: ${choices[myChoice]}`;
    oppText.textContent = `Computer's Choice: ${choices[oppChoice]}`;

    if (myChoice == oppChoice){
        winText.textContent = "You Tied!";
        winnerBox.style.backgroundColor = "lightgray";
    }
    else if (myChoice > oppChoice || (myChoice == 0 && oppChoice == 2)){
        winText.textContent = "You Won!";
        myWins++;
        myCounter.textContent = myWins;
        winnerBox.style.backgroundColor = "lightgreen";
    }
    else {
        winText.textContent = "You Lost!";
        oppWins++;
        oppCounter.textContent = oppWins;
        winnerBox.style.backgroundColor = "tomato";
    }
}