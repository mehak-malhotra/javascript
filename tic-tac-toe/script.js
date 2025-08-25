let boxes= document.querySelectorAll(".btn");
let resetBtn= document.querySelector("#reset");
let winner= document.querySelector("#winner-text");
let newgame= document.querySelector("#new-game");
let resetgame= document.querySelector("#reset-game");

let turn0= true;

const winningPat= [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const newGame = () => {
    turn0= true;
    for(let box of boxes){
        box.innerText= "";
        box.disabled= false;
    }
    winner.style.display = "none";
}

const disableBoxes= (boxes) => {
    for(let box of boxes){
        box.disabled = true;
    }
}

boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        if(turn0){
            box.innerText= "X";
            turn0= false;
        }else{
            box.innerText= "O";
            turn0= true;
        }
        box.disabled= true;

        checkWinner();
    })
})

const checkWinner = () => {
    for(let pattern of winningPat){
        let valFirst = boxes[pattern[0]].innerText;
        let valSecond= boxes[pattern[1]].innerText;
        let valThird = boxes[pattern[2]].innerText;

        if(valFirst != "" && valSecond != "" && valThird != ""){
            if(valFirst === valSecond && valSecond === valThird){
                // found a winner
                console.log("winner");
                winner.style.display = "block";
                winner.innerText= `Winner: ${valFirst}`;
                disableBoxes(boxes);
            }
        }
    }
}

newgame.addEventListener("click", newGame);
resetgame.addEventListener("click", newGame);