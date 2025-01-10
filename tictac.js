let boxes = document.querySelectorAll(".Box");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX , playerO
let count = 0;
const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
    boxes.forEach((Box) => {
        Box.style.backgroundColor="rgb(163, 138, 76)";
    })
};

boxes.forEach((Box) => {
    Box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO){  //player O
            Box.innerHTML = "O";
            Box.style.backgroundColor="red";
            turnO = false;
        }else{  //player X
            Box.innerHTML = "X";
            Box.style.backgroundColor="green";
            turnO = true;
        }
        Box.disabled=true;
        count++;

        let isWinner=checkwinner();
        if (count === 9 && !isWinner){
            drawMatch();
        }
    });
});

const disableboxes = () => {
    for(let box of boxes){
        box.disabled=true;
    }

};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }

};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
};

const drawMatch = () => {
        msg.innerText = `Match is Draw`;
        msgContainer.classList.remove("hide");
        disableboxes();
};
    
const checkwinner = () =>{
    for(let pattern of winpattern){
        // console.log(pattern);
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos1val != "" && pos1val != "" ){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("Winner",pos1val);
                showWinner(pos1val);
            }
        }

    }
};



newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
