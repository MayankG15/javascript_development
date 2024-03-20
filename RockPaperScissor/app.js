let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    let options = ["rock", "paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const drawGame = () => {
    msg.innerText= "Game draw. Play Again.";
    msg.style.backgroundColor = "blue";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText= `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText= `You lose.${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userChoice) => {
    console.log("user choice = ", userChoice);
    // generate computer choice -> modular
    const compChoice = genCompChoice();
    console.log("computer choice = ", compChoice);
    

    if(userChoice===compChoice){
        // draw Game
        drawGame();
    }
    else{
        let userWin =true;
        if(userChoice==="rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice==="paper"){
            userWin = compChoice === "scissors" ? false : true;
        } else if(userChoice==="scissors"){
            userWin = compChoice==="rock"? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
}



choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () =>{
        // console.log("choice was clicked")
        const userChoice = choice.getAttribute("id")
        // console.log("choice was clicked", userChoice);
        playgame(userChoice);
    });
});