//Challenge:1 Yor age in days

function ageInDays() {
  let birthYear = prompt("What year were you born?");
  let ageDays = (2022 - birthYear) * 365;
  let h1 = document.createElement("h1");
  let answer = document.createTextNode("Your are " + ageDays + "days old.");
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(answer);
  document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
  document.getElementById("ageInDays").remove();
}

//Challenge:2 Cat generator
function generateCat() {
  let image = document.createElement("img"); // creating image element
  let div = document.getElementById("flex-box-cat");
  image.src = "https://bezkota.net/img/kot50.gif";
  div.appendChild(image);
}

//Challenge:3 Rock, Paper, Scissors

function rockPaperScissors(yourChoice) {
  let humanChoice = yourChoice.id;
  let botChoice = convertRandomNumbertoWord(randomChoiceOfBotInNumber());
  result = chooseWinner(humanChoice, botChoice); //[0,1] human lost, bot win
  message = finalMessage(result); // you lost, you won
  rpsFrontend(humanChoice, botChoice, message);
}

function randomChoiceOfBotInNumber() {
  return Math.floor(Math.random() * 3); //picks random number b/w 0 to 2 in decimal and round abouts to the upper value
}

function convertRandomNumbertoWord(number) {
  return ["rock", "paper", "scissors"][number]; // converts [0] to rock, [1] to paper, [2] to scissors
}

function chooseWinner(yourChoice, computerChoice) {
  //taking your choice and deciding the win/lose/tie depending on bot choice
  let rpsDatabase = {
    rock: { paper: 0, scissors: 1, rock: 0.5 },
    paper: { paper: 0.5, scissors: 0, rock: 1 },
    scissors: { paper: 1, scissors: 0.5, rock: 0 },
  };
  let yourScore = rpsDatabase[yourChoice][computerChoice];
  let computerScore = rpsDatabase[computerChoice][yourChoice];

  return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return { message: "You lost!", color: "red" };
  } else if (yourScore === 0.5) {
    return { message: "You tied!", color: "yellow" };
  } else {
    return { message: "You won!", color: "green" };
  }
}

function rpsFrontend(humanImageChoice, botImageChoice, finalMessage) {
  imageDatabase = {
    //getting the source of the images of rock, paper, scissors
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };
  //Remove images
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  //creating div
  let humanDiv = document.createElement("div");
  let botDiv = document.createElement("div");
  let messageDiv = document.createElement("div");

  //inserting value in the divs according to the innerHTML
  humanDiv.innerHTML =
    "<img src= '" +
    imageDatabase[humanImageChoice] +
    "' height =150 width=150 style = 'box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);' >";
  document.getElementById("flex-box-container-rps").appendChild(humanDiv); //appending whatever is in the div to the flex box container

  messageDiv.innerHTML =
    "<h1 style='color: " +
    finalMessage["color"] +
    "; font-size: 60px; padding: 10px; '>" +
    finalMessage["message"] +
    "</h1>";
  document.getElementById("flex-box-container-rps").appendChild(messageDiv);

  botDiv.innerHTML =
    "<img src= '" +
    imageDatabase[botImageChoice] +
    "' height =150 width=150 style = 'box-shadow: 0px 10px 50px rgba(243, 2, 2, 1);'>";
  document.getElementById("flex-box-container-rps").appendChild(botDiv);
}

//Challenge: 4 Change color of buttons

let allButtons = document.getElementsByTagName("button");
let copyAllButtons = [];
for (let i = 0; i < allButtons.length; i++) {
  copyAllButtons.push(allButtons[i].classList[1]);
}

function changeButtonColor(buttonColor) {
  if (buttonColor.value === "red") {
    buttonColorRed();
  } else if (buttonColor.value === "yellow") {
    buttonColorYellow();
  } else if (buttonColor.value === "green") {
    buttonColorGreen();
  } else if (buttonColor.value === "random") {
    buttonColorRandom();
  } else if (buttonColor.value === "reset") {
    buttonColorReset();
  }
}

function buttonColorRed() {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add("btn-danger");
  }
}

function buttonColorYellow() {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add("btn-warning");
  }
}

function buttonColorGreen() {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add("btn-success");
  }
}

function buttonColorRandom() {
  let buttonChoices = [
    "btn-warning",
    "btn-primary",
    "btn-danger",
    "btn-success",
  ];
  for (let i = 0; i < allButtons.length; i++) {
    randomNumber = Math.floor(Math.random() * 4);
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add(buttonChoices[randomNumber]);
  }
}

function buttonColorReset() {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add(copyAllButtons[i]);
  }
}
// Challenge: 5 Blackjack

let blackJackGame = {
  'you' : { scoreSpan: "#your-black-jack-result", div: "#your-box", score: 0 },
  'dealer' : { scoreSpan: "#dealer-black-jack-result", div: "#dealer-box", score: 0},
  'cards' : ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'Q', 'K', 'J'],
  'cardsMap' : {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'A': [1, 11], 'Q': 10, 'K': 10, 'J': 10}
};

const YOU = blackJackGame["you"];
const DEALER = blackJackGame["dealer"];

const hitSound = new Audio("static/sounds/swish.mp3");

document.querySelector("#black-jack-hit-btn").addEventListener("click", blackJackHit);

document.querySelector("#black-jack-deal-btn").addEventListener("click", blackJackDeal);

function blackJackHit() {
  let card = randomCard();
  showCard(card, YOU);
  updateScore(YOU, card);
  showScore(YOU);
}

function randomCard(){
let randomIndex = Math.floor(Math.random() * 13);
return blackJackGame['cards'][randomIndex];

}

function showCard(card, activePlayer) {
  let cardImage = document.createElement("img");
  cardImage.src = `static/images/${card}.png`;
  document.querySelector(activePlayer["div"]).appendChild(cardImage);
  hitSound.play();
}

function blackJackDeal() {
  let yourImages = document.querySelector("#your-box").querySelectorAll("img");
  let dealerImages = document.querySelector("#dealer-box").querySelectorAll("img");

  for (let i = 0; i < yourImages.length; i++) {
    yourImages[i].remove();
  }

  for (let i = 0; i < dealerImages.length; i++) {
    dealerImages[i].remove();
  }
}

function updateScore(activePlayer, card){
activePlayer['score'] += blackJackGame['cardsMap'][card];

}

function showScore(activePlayer){
  document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
}
