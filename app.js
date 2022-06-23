const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const displayResult = document.getElementById("result");

const possibleChoices = document.querySelectorAll("button")

let userChoice
let computerChoice
//let getResult

//ADDING THE CLICK EVENT TO ALL THE BUTTONS USING FOREACH
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) =>{

    //TARGETING THE SPANNED ID FROM THE HTML
    userChoice = e.target.id

    //DISPLAYING USERCHOICE IN THE WEBPAGE
    userChoiceDisplay.innerHTML = userChoice;

    //CALLING THE CREATED FUNCTIONS
    generateComputerChoice ()
    getResult()
} ));

//FUNCTION TO GENERATE COMPUTER CHOICE
function generateComputerChoice(){

    //USED MATH.FLOOR TO ROUND OFF ANY DECIMALS
    //USED MATH.RANDOM TO GENERATE RANDOM NUMBERS
    //POSSIBLECHOICES.LENGTH GIVES THE LENGTH OF THE POSSIBLE CHOICES
    const randomNumber = Math.floor (Math.random () * possibleChoices.length);

  // console.log(randomNumber)

  //LOGIC TO GENERATE COMPUTER CHOICE STARTING FROM INDEX 0
   if (randomNumber === 0){
    computerChoice = "rock"
   }

   if (randomNumber === 1){
    computerChoice = "paper"
   }
   
   if (randomNumber === 2){
    computerChoice = "scissors"
   }
   //DISPLAY CHOICE IN THE WEBPAGE
  computerChoiceDisplay.innerHTML = computerChoice; 
};

//FUNCTION TO ACCESS RESULTS
function getResult (){
    //LOGIC USING SIMPLE IF STATEMENTS
    if(computerChoice === userChoice){
        result = "its a draw"
    }

    if (computerChoice==="rock" && userChoice ==="paper"){
        result = "you win!!"
    }

    if( computerChoice==="rock" && userChoice === "scissors"){
        result = "you lose!!"
    }

    if (computerChoice=== "paper" && userChoice === "rock"){
        result ="you lose!!"
    }

    if (computerChoice=== "paper" && userChoice === "scissors"){
        result ="you win!!"
    }

    if (computerChoice=== "scissors" && userChoice === "rock"){
        result ="you win!!"
    }

    if (computerChoice=== "scissors" && userChoice === "paper"){
        result ="you lose!!"
    }
    //DISPLAYING RESULTS IN WEBPAGE
    displayResult.innerHTML = result;
};