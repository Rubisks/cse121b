const player_x = 'X';
const player_O = 'O';
let playerTurn = 'X';
let curentBoard = [];
 
const winConditions = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,6],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
const box6 = document.querySelector(".box6");
const box7 = document.querySelector(".box7");
const box8 = document.querySelector(".box8");
const box9 = document.querySelector(".box9");

function checkWin(){
    
}

function changePlayerTurn(playerTurn){
    if( playerTurn === 'X'){
        checkWin();
        playerTurn = 'O';
        document.querySelector("#playerTurn").textContent = "player 1 Turn";
    }
    else{
        checkWin();
        playerTurn = "X";
        document.querySelector("#playerTurn").textContent = "player 2 Turn";
    }
    return playerTurn;
};


    
box1.addEventListener("click", function(){
    box1.innerText = playerTurn;
    playerTurn = changePlayerTurn(playerTurn);
    console.log(playerTurn);
})
box2.addEventListener("click", function(){
    box2.innerText = playerTurn;
    playerTurn = changePlayerTurn(playerTurn);
    console.log(playerTurn);
})
box3.addEventListener("click", function(){
    box3.innerText = playerTurn;
    playerTurn = changePlayerTurn(playerTurn);
    console.log(playerTurn);
})
box4.addEventListener("click", function(){
    box4.innerText = playerTurn;
    playerTurn = changePlayerTurn(playerTurn);
    console.log(playerTurn);
})
box5.addEventListener("click", function(){
    box5.innerText = playerTurn;
    playerTurn = changePlayerTurn(playerTurn);
    console.log(playerTurn);
})
box6.addEventListener("click", function(){
    box6.innerText = playerTurn;
    playerTurn = changePlayerTurn(playerTurn);
    console.log(playerTurn);
})
box7.addEventListener("click", function(){
    box7.innerText = playerTurn;
    playerTurn = changePlayerTurn(playerTurn);
    console.log(playerTurn);
})
box8.addEventListener("click", function(){
    box8.innerText = playerTurn;
    playerTurn = changePlayerTurn(playerTurn);
    console.log(playerTurn);
})
box9.addEventListener("click", function(){
    box9.innerText = playerTurn;
    playerTurn = changePlayerTurn(playerTurn);
    console.log(playerTurn);
})


