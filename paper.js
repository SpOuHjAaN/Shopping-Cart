let chs = document.querySelectorAll(".choice");
let userscores = document.querySelector("#user");
let compscores = document.querySelector("#other");
let msg = document.querySelector("#msg");

let userScore=0;
let compScore=0;

const compChoice = () => {
    const option = ["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
};

const drawGame = () => {
    console.log("Game was Draw");
    msg.innerText = "Match is Draw!";
    msg.style.backgroundColor = "Yellow";
    msg.style.color = "black";
    
};

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userscores.innerText = userScore;
        console.log("You Win");
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "Green";
    }else{
        compScore++;
        compscores.innerText=compScore;
        console.log("You lose");
        msg.innerText = "You Lose!";
        msg.style.backgroundColor = "Red";
        
    }
};

const playGames = (userChoice) => {
    console.log("user choice = ", userChoice);
    const coChoice = compChoice();
    console.log("comp choice = ", coChoice);

    if(userChoice === coChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = coChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = coChoice === "scissor" ? false : true;
        }else {
            userWin = coChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }

};

chs.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("yaa i am clicked",userChoice);
        playGames(userChoice);
    });
});

