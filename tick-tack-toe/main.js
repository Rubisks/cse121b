
let playerTurn = document.querySelector("#playerTurn");
let playAgain = document.querySelector('#playAgain')
let playerToken = ''
// current board values stored startig at top left as index 0 
// indexes are assighed left to right row by row
let curentBoard = [];
curentBoard.length = 9;
let win = false;

// list of buttons for easy use later
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
const box6 = document.querySelector(".box6");
const box7 = document.querySelector(".box7");
const box8 = document.querySelector(".box8");
const box9 = document.querySelector(".box9");
const boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

// list of the possible win conditions each number is a square each array of squares need 
// to be filled with the same user token to be a win
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

function checkWin(){
    console.log(curentBoard);  
    winConditions.forEach(winCondition =>{
            if (curentBoard[winCondition[0] - 1] == "X" && curentBoard[winCondition[1] - 1] == "X" && curentBoard[winCondition[2] - 1] == "X" ){
            playerTurn.textContent = "Player 1 Win";
            return true;
            }
            else if (curentBoard[winCondition[0] - 1] == "O" && curentBoard[winCondition[1] - 1] == "O" && curentBoard[winCondition[2] - 1] == "O" ){
            playerTurn.textContent = "Player 2 Win";
            return true;
            }
            else{
                return false;
            }
    })
}

// alternate the players turn as needed
function changePlayerTurn(box, playerTurn){
    // if the current box has already been used this does not place a token there
    if (checkWin()){
        return;
    }
    else if (box.innerText === "X" || box.innerText === "O"){
        return;
    }
    // this changes the player turn and sets the play token to the corect one
    else{
        if( playerTurn.textContent == "Player 2 Turn (O's)"){
            playerTurn.textContent = "Player 1 Turn (X's)";
            playerToken = "O";
        }
        else{
            playerTurn.textContent = "Player 2 Turn (O's)";
            playerToken = "X";
        }
    }   
};

//update the game board with proper token place token in current board array in proper place
function updateBoard(boxText, index){
    // sets the player token ( X or O) to the proper place in current board to be checked for win conditions.
    curentBoard[index] = playerToken;
    // sets the text of the proper box to the users play token
    boxText.innerText = curentBoard[index];
    console.log(boxText)
    console.log(index)
}

// event listeners for each playable space each event listener changes player turn at beginning
// then updates the board with the new players selected space with proper toden


box1.addEventListener("click", function(){
    //incraments the players turn
    changePlayerTurn(box1,playerTurn);
    // updates game board with the players action
    updateBoard(box1, 0);
    checkWin();

})

box2.addEventListener("click", function(){
    //incraments the players turn
    changePlayerTurn(box2,playerTurn);
    // updates game board with the players action
    updateBoard(box2, 1);
    checkWin();

})

box3.addEventListener("click", function(){
    //incraments the players turn
    changePlayerTurn(box3,playerTurn);
    // updates game board with the players action
    updateBoard(box3, 2);
    checkWin();

})

box4.addEventListener("click", function(){
    //incraments the players turn
    changePlayerTurn(box4,playerTurn);
    // updates game board with the players action
    updateBoard(box4, 3);
    checkWin();

})

box5.addEventListener("click", function(){
    //incraments the players turn
    changePlayerTurn(box5,playerTurn);
    // updates game board with the players action
    updateBoard(box5, 4);
    checkWin();

})
box6.addEventListener("click", function(){
    //incraments the players turn
    changePlayerTurn(box6,playerTurn);
    // updates game board with the players action
    updateBoard(box6, 5);
    checkWin();

})

box7.addEventListener("click", function(){
    //incraments the players turn
    changePlayerTurn(box7,playerTurn);
    // updates game board with the players action
    updateBoard(box7, 6);
    checkWin();

})

box8.addEventListener("click", function(){
    //incraments the players turn
    changePlayerTurn(box8,playerTurn);
    // updates game board with the players action
    updateBoard(box8, 7);
    checkWin();

})

box9.addEventListener("click", function(){
    //incraments the players turn
    changePlayerTurn(box9,playerTurn);
    // updates game board with the players action
    updateBoard(box9, 8);
    checkWin();

})

// resets the board and current win conditions
playAgain.addEventListener("click", function(){
    //resets current board list to all blanks
    curentBoard = [""];
    curentBoard.length = 9;
    playerTurn.textContent = "Player 1 Turn (X's)";
    playerToken = "X";
    // sets player token to blank and then updates the board with blank token
    playerToken = ""
    boxes.forEach(box => {
        // only sends index 0 because all spaces need to be blank
        updateBoard(box, 0);
    });
    console.log(curentBoard);
})


